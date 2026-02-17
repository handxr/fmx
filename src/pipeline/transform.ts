import { join } from "node:path";
import type { AnalysisResult } from "./analyze.js";

const FIGMA_IMPORT_REGEX =
  /import\s+(\w+)\s+from\s+["']figma:asset\/([a-f0-9]+)\.(\w+)["']\s*;?/g;

interface FileTypeInfo {
  ext: string;
  mime: string;
}

function detectFileType(bytes: Uint8Array): FileTypeInfo {
  if (bytes[0] === 0x89 && bytes[1] === 0x50 && bytes[2] === 0x4e && bytes[3] === 0x47) {
    return { ext: "png", mime: "image/png" };
  }
  if (bytes[0] === 0x47 && bytes[1] === 0x49 && bytes[2] === 0x46 && bytes[3] === 0x38) {
    return { ext: "gif", mime: "image/gif" };
  }
  if (bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff) {
    return { ext: "jpg", mime: "image/jpeg" };
  }
  const start = new TextDecoder().decode(bytes.slice(0, 100)).trimStart();
  if (start.startsWith("<svg") || start.startsWith("<?xml")) {
    return { ext: "svg", mime: "image/svg+xml" };
  }
  if (
    bytes[0] === 0x52 && bytes[1] === 0x49 && bytes[2] === 0x46 && bytes[3] === 0x46 &&
    bytes[8] === 0x57 && bytes[9] === 0x45 && bytes[10] === 0x42 && bytes[11] === 0x50
  ) {
    return { ext: "webp", mime: "image/webp" };
  }
  return { ext: "png", mime: "image/png" };
}

export interface AssetMapping {
  hash: string;
  sourcePath: string;
  targetPath: string;
  realExt: string;
  varName: string;
}

export interface TransformResult {
  transformedFiles: Map<string, string>;
  assetMappings: AssetMapping[];
  cleanedPackageJson: any;
  warnings: string[];
  depsRemoved: number;
}

export async function transform(
  codeDir: string,
  assetsDir: string,
  analysis: AnalysisResult
): Promise<TransformResult> {
  const transformedFiles = new Map<string, string>();
  const assetMappings: AssetMapping[] = [];
  const warnings: string[] = [];
  const processedHashes = new Set<string>();

  for (const relPath of analysis.reachableFiles) {
    const absPath = join(codeDir, relPath);
    let content = await Bun.file(absPath).text();

    let hasChanges = false;
    const replacements: Array<{ original: string; replacement: string }> = [];

    let match;
    FIGMA_IMPORT_REGEX.lastIndex = 0;
    const contentCopy = content;
    while ((match = FIGMA_IMPORT_REGEX.exec(contentCopy)) !== null) {
      const varName = match[1];
      const hash = match[2];
      const originalImport = match[0];

      const assetPath = join(assetsDir, "images", hash);
      const assetExists = await Bun.file(assetPath).exists();

      if (!assetExists) {
        warnings.push(`Asset not found: ${hash} (referenced as ${varName} in ${relPath}). Keeping original import.`);
        continue;
      }

      const bytes = new Uint8Array(await Bun.file(assetPath).arrayBuffer()).slice(0, 100);
      const fileType = detectFileType(bytes);
      const targetRelPath = `assets/${hash}.${fileType.ext}`;

      if (!processedHashes.has(hash)) {
        processedHashes.add(hash);
        assetMappings.push({
          hash,
          sourcePath: assetPath,
          targetPath: targetRelPath,
          realExt: fileType.ext,
          varName,
        });
      }

      replacements.push({
        original: originalImport,
        replacement: `const ${varName} = "/${targetRelPath}";`,
      });
      hasChanges = true;
    }

    if (hasChanges) {
      for (const { original, replacement } of replacements) {
        content = content.replace(original, replacement);
      }
      transformedFiles.set(relPath, content);
    }
  }

  // Analyze used packages and clean package.json
  const usedPackages = await findUsedPackages(codeDir, analysis.reachableFiles);
  const pkgPath = join(codeDir, "package.json");
  const pkg = await Bun.file(pkgPath).json();
  const { cleaned, depsRemoved } = cleanPackageJson(pkg, usedPackages);

  return {
    transformedFiles,
    assetMappings,
    cleanedPackageJson: cleaned,
    warnings,
    depsRemoved,
  };
}

// --- Dependency analysis ---

const BARE_IMPORT_REGEX =
  /(?:import\s+(?:[\w{},\s*]+\s+from\s+)?|export\s+(?:[\w{},\s*]+\s+from\s+)?|import\s*\()["']([^"'./][^"']*)["']/g;

function getPackageName(specifier: string): string {
  if (specifier.startsWith("@")) {
    const parts = specifier.split("/");
    return parts.slice(0, 2).join("/");
  }
  return specifier.split("/")[0];
}

const CSS_IMPORT_REGEX = /@import\s+['"]([^'"./][^'"]*)['"]/g;

async function findUsedPackages(
  codeDir: string,
  reachableFiles: Set<string>
): Promise<Set<string>> {
  const usedPackages = new Set<string>();

  for (const relPath of reachableFiles) {
    const content = await Bun.file(join(codeDir, relPath)).text();

    if (relPath.endsWith(".css")) {
      // Scan CSS for @import of npm packages
      let cssMatch;
      CSS_IMPORT_REGEX.lastIndex = 0;
      while ((cssMatch = CSS_IMPORT_REGEX.exec(content)) !== null) {
        const specifier = cssMatch[1];
        if (specifier) {
          usedPackages.add(getPackageName(specifier));
        }
      }
      continue;
    }

    let match;
    BARE_IMPORT_REGEX.lastIndex = 0;
    while ((match = BARE_IMPORT_REGEX.exec(content)) !== null) {
      const specifier = match[1];
      if (specifier && !specifier.startsWith("figma:") && !specifier.startsWith("node:")) {
        usedPackages.add(getPackageName(specifier));
      }
    }
  }

  // Also scan all style files (they're always copied to output)
  const { readdir } = await import("node:fs/promises");
  try {
    const styleFiles = await readdir(join(codeDir, "src", "styles"));
    for (const file of styleFiles) {
      if (!file.endsWith(".css")) continue;
      const content = await Bun.file(join(codeDir, "src", "styles", file)).text();
      let cssMatch;
      CSS_IMPORT_REGEX.lastIndex = 0;
      while ((cssMatch = CSS_IMPORT_REGEX.exec(content)) !== null) {
        const specifier = cssMatch[1];
        if (specifier) {
          usedPackages.add(getPackageName(specifier));
        }
      }
    }
  } catch {
    // No styles dir
  }

  // Always keep these
  usedPackages.add("react");
  usedPackages.add("react-dom");

  return usedPackages;
}

function cleanPackageJson(
  pkg: any,
  usedPackages: Set<string>
): { cleaned: any; depsRemoved: number } {
  const cleaned = { ...pkg };
  let depsRemoved = 0;

  // Move react and react-dom to dependencies
  if (cleaned.peerDependencies) {
    const reactVersion = cleaned.peerDependencies.react || "18.3.1";
    const reactDomVersion = cleaned.peerDependencies["react-dom"] || "18.3.1";

    cleaned.dependencies = cleaned.dependencies ? { ...cleaned.dependencies } : {};
    cleaned.dependencies.react = reactVersion;
    cleaned.dependencies["react-dom"] = reactDomVersion;

    delete cleaned.peerDependencies.react;
    delete cleaned.peerDependencies["react-dom"];

    if (Object.keys(cleaned.peerDependencies).length === 0) {
      delete cleaned.peerDependencies;
    }
  }

  delete cleaned.peerDependenciesMeta;
  delete cleaned.pnpm;

  // Filter dependencies to only used packages
  if (cleaned.dependencies) {
    const originalCount = Object.keys(cleaned.dependencies).length;
    const kept: Record<string, string> = {};
    for (const [pkg, version] of Object.entries(cleaned.dependencies)) {
      if (usedPackages.has(pkg)) {
        kept[pkg] = version as string;
      }
    }
    depsRemoved = originalCount - Object.keys(kept).length;
    cleaned.dependencies = Object.fromEntries(
      Object.entries(kept).sort(([a], [b]) => a.localeCompare(b))
    );
  }

  return { cleaned, depsRemoved };
}
