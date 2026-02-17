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

// Detects all bare imports (non-relative, non-node:, non-figma:)
const BARE_IMPORT_REGEX =
  /(?:import\s+(?:[\w{},\s*]+\s+from\s+)?|export\s+(?:[\w{},\s*]+\s+from\s+)?|import\s*\()["']([^"'./][^"']*)["']/g;

interface VersionMap {
  [packageName: string]: string;
}

function getPackageName(specifier: string): string {
  if (specifier.startsWith("@")) {
    const parts = specifier.split("/");
    return parts.slice(0, 2).join("/");
  }
  return specifier.split("/")[0];
}

async function findAllImportedPackages(
  codeDir: string,
  reachableFiles: Set<string>
): Promise<Set<string>> {
  const packages = new Set<string>();

  for (const relPath of reachableFiles) {
    if (relPath.endsWith(".css")) continue;
    const content = await readFile(join(codeDir, relPath), "utf-8");

    BARE_IMPORT_REGEX.lastIndex = 0;
    let match;
    while ((match = BARE_IMPORT_REGEX.exec(content)) !== null) {
      const specifier = match[1];
      if (specifier && !specifier.startsWith("figma:") && !specifier.startsWith("node:")) {
        packages.add(getPackageName(specifier));
      }
    }
  }

  return packages;
}

async function completePackageJson(
  codeDir: string,
  versionMap: VersionMap,
  importedPackages: Set<string>
): Promise<{ depsAdded: number; wildcardResolved: number; generated: boolean }> {
  const pkgPath = join(codeDir, "package.json");
  let pkg: any;
  let generated = false;

  try {
    await access(pkgPath);
    pkg = JSON.parse(await readFile(pkgPath, "utf-8"));
  } catch {
    // No package.json -- generate from scratch
    const dirName = basename(codeDir).replace(/[^a-z0-9-]/gi, "-").toLowerCase();
    pkg = {
      name: dirName,
      version: "0.1.0",
      private: true,
      dependencies: { react: "^18.3.1", "react-dom": "^18.3.1" },
      devDependencies: {
        "@types/node": "^20.10.0",
        "@vitejs/plugin-react-swc": "^3.10.2",
        vite: "6.3.5",
      },
      scripts: { dev: "vite", build: "vite build" },
    };
    generated = true;
  }

  if (!pkg.dependencies) pkg.dependencies = {};

  const allDeps = { ...pkg.dependencies, ...pkg.peerDependencies };
  let depsAdded = 0;
  let wildcardResolved = 0;

  const skipPkgs = new Set(["react", "react-dom"]);

  for (const pkgName of importedPackages) {
    if (skipPkgs.has(pkgName)) continue;

    const existingVersion = allDeps[pkgName];
    const importVersion = versionMap[pkgName];

    if (!existingVersion) {
      pkg.dependencies[pkgName] = importVersion ? `^${importVersion}` : "*";
      depsAdded++;
    } else if (existingVersion === "*" && importVersion) {
      pkg.dependencies[pkgName] = `^${importVersion}`;
      wildcardResolved++;
    }
  }

  pkg.dependencies = Object.fromEntries(
    Object.entries(pkg.dependencies).sort(([a], [b]) => a.localeCompare(b))
  );

  await writeFile(pkgPath, JSON.stringify(pkg, null, 2) + "\n");

  return { depsAdded, wildcardResolved, generated };
}

// Matches alias lines like: 'sonner@2.0.3': 'sonner',
const VITE_ALIAS_VERSION_LINE =
  /^\s*['"](@?[^'"@]+)@[\d.]+[^'"]*['"]\s*:\s*['"][^'"]+['"]\s*,?\s*$/;

async function cleanViteConfig(
  codeDir: string
): Promise<{ viteAliasesCleaned: number }> {
  const viteConfigPath = join(codeDir, "vite.config.ts");

  try {
    await access(viteConfigPath);
  } catch {
    // Generate basic vite.config.ts
    const template = [
      "import { defineConfig } from 'vite';",
      "import react from '@vitejs/plugin-react-swc';",
      "import path from 'path';",
      "",
      "export default defineConfig({",
      "  plugins: [react()],",
      "  resolve: {",
      "    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],",
      "    alias: {",
      "      '@': path.resolve(__dirname, './src'),",
      "    },",
      "  },",
      "  build: {",
      "    target: 'esnext',",
      "    outDir: 'build',",
      "  },",
      "  server: {",
      "    port: 3000,",
      "    open: true,",
      "  },",
      "});",
    ].join("\n");
    await writeFile(viteConfigPath, template);
    return { viteAliasesCleaned: 0 };
  }

  const content = await readFile(viteConfigPath, "utf-8");
  const lines = content.split("\n");
  let viteAliasesCleaned = 0;

  const cleaned = lines.filter((line) => {
    if (VITE_ALIAS_VERSION_LINE.test(line)) {
      viteAliasesCleaned++;
      return false;
    }
    return true;
  });

  if (viteAliasesCleaned > 0) {
    await writeFile(viteConfigPath, cleaned.join("\n"));
  }

  return { viteAliasesCleaned };
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
  const { importsFixed, versionMap } = await cleanVersionedImports(codeDir, reachableFiles);

  // Phase 2: Detect all imported packages (after cleaning)
  const importedPackages = await findAllImportedPackages(codeDir, reachableFiles);

  // Phase 3: Complete package.json
  const { depsAdded, wildcardResolved, generated } = await completePackageJson(
    codeDir, versionMap, importedPackages
  );

  // Phase 4: Clean vite.config.ts
  const { viteAliasesCleaned } = await cleanViteConfig(codeDir);

  return {
    importsFixed,
    depsAdded,
    wildcardResolved,
    viteAliasesCleaned,
    packageJsonGenerated: generated,
  };
}
