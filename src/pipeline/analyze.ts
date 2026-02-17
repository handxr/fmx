import { readdir, stat } from "node:fs/promises";
import { join, dirname, resolve, extname } from "node:path";

export interface AnalysisResult {
  reachableFiles: Set<string>;
  unreachableFiles: Set<string>;
  figmaAssets: Map<string, string>;
  totalFiles: number;
}

const IMPORT_REGEX =
  /(?:import\s+(?:[\w{},\s*]+\s+from\s+)?|export\s+(?:[\w{},\s*]+\s+from\s+)?|import\s*\()["']([^"']+)["']/g;

const FIGMA_ASSET_REGEX = /^figma:asset\/([a-f0-9]+)\.(\w+)$/;

const EXTENSIONS = [".tsx", ".ts", ".jsx", ".js", ".css"];

async function resolveModulePath(
  importPath: string,
  fromFile: string,
  codeDir: string
): Promise<string | null> {
  if (importPath.startsWith("figma:asset/")) return null;

  if (!importPath.startsWith(".") && !importPath.startsWith("@/"))
    return null;

  let resolved: string;
  if (importPath.startsWith("@/")) {
    resolved = join(codeDir, "src", importPath.slice(2));
  } else {
    resolved = resolve(dirname(fromFile), importPath);
  }

  const candidates = [resolved];
  if (!extname(resolved)) {
    for (const ext of EXTENSIONS) {
      candidates.push(resolved + ext);
    }
    for (const ext of EXTENSIONS) {
      candidates.push(join(resolved, `index${ext}`));
    }
  }

  for (const candidate of candidates) {
    try {
      const s = await stat(candidate);
      if (s.isFile()) return candidate;
    } catch {
      // not found
    }
  }

  return null;
}

function extractImports(content: string): {
  modulePaths: string[];
  figmaAssets: Array<{ hash: string; ext: string }>;
} {
  const modulePaths: string[] = [];
  const figmaAssets: Array<{ hash: string; ext: string }> = [];

  let match;
  IMPORT_REGEX.lastIndex = 0;
  while ((match = IMPORT_REGEX.exec(content)) !== null) {
    const importPath = match[1];
    if (!importPath) continue;

    const assetMatch = importPath.match(FIGMA_ASSET_REGEX);
    if (assetMatch) {
      figmaAssets.push({ hash: assetMatch[1], ext: assetMatch[2] });
    } else {
      modulePaths.push(importPath);
    }
  }

  return { modulePaths, figmaAssets };
}

async function getAllSourceFiles(dir: string): Promise<string[]> {
  const results: string[] = [];
  const CODE_EXTENSIONS = [".tsx", ".ts", ".jsx", ".js"];

  async function walk(current: string) {
    const entries = await readdir(current, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = join(current, entry.name);
      if (entry.isDirectory()) {
        if (entry.name.startsWith(".") || entry.name === "node_modules") continue;
        await walk(fullPath);
      } else if (CODE_EXTENSIONS.some((ext) => entry.name.endsWith(ext))) {
        results.push(fullPath);
      }
    }
  }

  await walk(dir);
  return results;
}

export async function analyze(codeDir: string): Promise<AnalysisResult> {
  const entryPoint = join(codeDir, "src", "main.tsx");
  const allSourceFiles = await getAllSourceFiles(join(codeDir, "src"));
  const reachableAbsolute = new Set<string>();
  const figmaAssets = new Map<string, string>();
  const queue: string[] = [entryPoint];
  const visited = new Set<string>();

  while (queue.length > 0) {
    const filePath = queue.pop()!;
    if (visited.has(filePath)) continue;
    visited.add(filePath);

    try {
      await stat(filePath);
    } catch {
      continue;
    }

    reachableAbsolute.add(filePath);

    // Don't parse CSS files for JS imports
    if (filePath.endsWith(".css")) continue;

    const content = await Bun.file(filePath).text();
    const { modulePaths, figmaAssets: assets } = extractImports(content);

    for (const asset of assets) {
      figmaAssets.set(asset.hash, asset.ext);
    }

    for (const modulePath of modulePaths) {
      const resolved = await resolveModulePath(modulePath, filePath, codeDir);
      if (resolved && !visited.has(resolved)) {
        queue.push(resolved);
      }
    }
  }

  const reachableFiles = new Set<string>();
  for (const abs of reachableAbsolute) {
    reachableFiles.add(abs.slice(codeDir.length + 1));
  }

  const allRelative = allSourceFiles.map((f) => f.slice(codeDir.length + 1));
  const unreachableFiles = new Set<string>();
  for (const f of allRelative) {
    if (!reachableFiles.has(f)) {
      unreachableFiles.add(f);
    }
  }

  return {
    reachableFiles,
    unreachableFiles,
    figmaAssets,
    totalFiles: allRelative.length,
  };
}
