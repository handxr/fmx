import { readFile, writeFile, access } from "node:fs/promises";
import { join, basename } from "node:path";

export interface ResolveDepsResult {
  importsFixed: number;
  depsAdded: number;
  wildcardResolved: number;
  viteAliasesCleaned: number;
  packageJsonGenerated: boolean;
}

// Matches bare imports with @version suffix:
//   "sonner@2.0.3" or "@radix-ui/react-slot@1.1.2"
// Captures: prefix, package name (without version), version, closing quote
const VERSIONED_IMPORT_REGEX =
  /(from\s+["'])(@?[^"'@][^"']*?)@(\d+\.\d+\.\d+[^"']*)(["'])/g;

interface VersionMap {
  [packageName: string]: string;
}

async function cleanVersionedImports(
  codeDir: string,
  reachableFiles: Set<string>
): Promise<{ importsFixed: number; versionMap: VersionMap }> {
  const versionMap: VersionMap = {};
  let importsFixed = 0;

  for (const relPath of reachableFiles) {
    if (relPath.endsWith(".css")) continue;

    const absPath = join(codeDir, relPath);
    const content = await readFile(absPath, "utf-8");

    VERSIONED_IMPORT_REGEX.lastIndex = 0;
    if (!VERSIONED_IMPORT_REGEX.test(content)) continue;

    VERSIONED_IMPORT_REGEX.lastIndex = 0;
    const cleaned = content.replace(
      VERSIONED_IMPORT_REGEX,
      (_match, prefix, pkgName, version, quote) => {
        versionMap[pkgName] = version;
        importsFixed++;
        return `${prefix}${pkgName}${quote}`;
      }
    );

    await writeFile(absPath, cleaned);
  }

  return { importsFixed, versionMap };
}

export async function resolveDeps(
  codeDir: string,
  reachableFiles: Set<string>
): Promise<ResolveDepsResult> {
  // Phase 1: Clean versioned imports and collect version map
  const { importsFixed, versionMap } = await cleanVersionedImports(
    codeDir,
    reachableFiles
  );

  return {
    importsFixed,
    depsAdded: 0,
    wildcardResolved: 0,
    viteAliasesCleaned: 0,
    packageJsonGenerated: false,
  };
}
