# figmamake CLI - Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a Bun + Ink CLI tool that merges Figma Make `.zip` (code) and `.make` (assets) exports into a clean, self-contained React + Vite + Tailwind app.

**Architecture:** Sequential pipeline (extract -> analyze -> transform -> write) orchestrated by an Ink React app. Each pipeline phase is a pure async function that takes input and returns results. The Ink UI renders progress as each phase completes.

**Tech Stack:** Bun runtime, Ink 5 (React CLI), @inkjs/ui (Spinner/StatusMessage), node:fs/promises for filesystem ops, `unzipper` for zip extraction, `file-type` for magic byte detection.

---

### Task 1: Project Scaffold

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `src/cli.tsx`

**Step 1: Create package.json**

```json
{
  "name": "figmamake",
  "version": "1.0.0",
  "type": "module",
  "bin": {
    "figmamake": "./src/cli.tsx"
  },
  "dependencies": {
    "ink": "^5.2.0",
    "@inkjs/ui": "^2.0.0",
    "react": "^18.3.1",
    "meow": "^13.2.0",
    "unzipper": "^0.12.3"
  },
  "devDependencies": {
    "@types/react": "^18.3.0",
    "bun-types": "latest",
    "typescript": "^5.7.0"
  }
}
```

**Step 2: Create tsconfig.json**

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "jsx": "react-jsx",
    "strict": true,
    "skipLibCheck": true,
    "outDir": "dist",
    "rootDir": "src",
    "types": ["bun-types"]
  },
  "include": ["src"]
}
```

**Step 3: Create minimal src/cli.tsx entry point**

```tsx
#!/usr/bin/env bun
import { render, Text } from "ink";
import meow from "meow";

const cli = meow(
  `
  Usage
    $ figmamake <dir>

  Options
    -o, --output  Output directory name

  Examples
    $ figmamake ./my-export
    $ figmamake ./my-export -o my-app
`,
  {
    importMeta: import.meta,
    flags: {
      output: {
        type: "string",
        shortFlag: "o",
      },
    },
  }
);

if (cli.input.length === 0) {
  cli.showHelp();
  process.exit(1);
}

render(<Text>figmamake v1.0.0 - input: {cli.input[0]}</Text>);
```

**Step 4: Install dependencies and verify it runs**

Run: `cd /home/jimbrescu/figmamake && bun install`
Then: `chmod +x src/cli.tsx && bun src/cli.tsx --help`
Expected: Help text displays correctly

**Step 5: Verify it renders Ink output**

Run: `bun src/cli.tsx .`
Expected: Shows "figmamake v1.0.0 - input: ."

**Step 6: Commit**

```bash
git init
git add package.json tsconfig.json src/cli.tsx bun.lock
git commit -m "feat: scaffold figmamake CLI with Bun + Ink + meow"
```

---

### Task 2: Input Validation

**Files:**
- Create: `src/pipeline/validate.ts`
- Modify: `src/cli.tsx`

**Step 1: Write validate.ts**

This module validates the input directory contains a matching `.zip` and `.make` pair and the output directory doesn't already exist.

```typescript
import { readdir, stat } from "node:fs/promises";
import { join, basename, extname } from "node:path";

export interface ValidatedInput {
  zipPath: string;
  makePath: string;
  baseName: string;
  outputDir: string;
}

export async function validateInput(
  dir: string,
  outputOverride?: string
): Promise<ValidatedInput> {
  // Check dir exists and is a directory
  let dirStat;
  try {
    dirStat = await stat(dir);
  } catch {
    throw new Error(`Directory not found: ${dir}`);
  }
  if (!dirStat.isDirectory()) {
    throw new Error(`Not a directory: ${dir}`);
  }

  // Find .zip and .make files
  const files = await readdir(dir);
  const zipFiles = files.filter((f) => f.endsWith(".zip"));
  const makeFiles = files.filter((f) => f.endsWith(".make"));

  if (zipFiles.length === 0 && makeFiles.length === 0) {
    throw new Error(
      `No .zip or .make files found in ${dir}. Expected a Figma Make export pair.`
    );
  }
  if (zipFiles.length === 0) {
    throw new Error(
      `No .zip file found in ${dir}. Found .make: ${makeFiles.join(", ")}`
    );
  }
  if (makeFiles.length === 0) {
    throw new Error(
      `No .make file found in ${dir}. Found .zip: ${zipFiles.join(", ")}`
    );
  }

  // Find matching pair (same base name)
  const zipBase = (name: string) =>
    basename(name, extname(name));

  let matchedZip: string | undefined;
  let matchedMake: string | undefined;

  for (const z of zipFiles) {
    const zBase = zipBase(z);
    const match = makeFiles.find((m) => zipBase(m) === zBase);
    if (match) {
      matchedZip = z;
      matchedMake = match;
      break;
    }
  }

  if (!matchedZip || !matchedMake) {
    throw new Error(
      `No matching .zip/.make pair found. .zip files: ${zipFiles.join(", ")}. .make files: ${makeFiles.join(", ")}`
    );
  }

  const baseName = zipBase(matchedZip);
  const outputDir = join(dir, outputOverride ?? baseName);

  // Check output doesn't exist
  try {
    await stat(outputDir);
    throw new Error(
      `Output directory already exists: ${outputDir}\nUse -o to specify a different name, or remove the existing directory.`
    );
  } catch (e: any) {
    if (e.code !== "ENOENT") throw e;
  }

  return {
    zipPath: join(dir, matchedZip),
    makePath: join(dir, matchedMake),
    baseName,
    outputDir,
  };
}
```

**Step 2: Wire validate into cli.tsx**

Update `src/cli.tsx` to import and call `validateInput`, then pass the result to the Ink app (we'll build the full app component in a later task). For now, just validate and print:

```tsx
#!/usr/bin/env bun
import { render, Text, Box } from "ink";
import meow from "meow";
import { resolve } from "node:path";
import { validateInput, type ValidatedInput } from "./pipeline/validate.js";

const cli = meow(
  `
  Usage
    $ figmamake <dir>

  Options
    -o, --output  Output directory name

  Examples
    $ figmamake ./my-export
    $ figmamake ./my-export -o my-app
`,
  {
    importMeta: import.meta,
    flags: {
      output: {
        type: "string",
        shortFlag: "o",
      },
    },
  }
);

if (cli.input.length === 0) {
  cli.showHelp();
  process.exit(1);
}

const dir = resolve(cli.input[0]);

try {
  const input = await validateInput(dir, cli.flags.output);
  render(
    <Box flexDirection="column">
      <Text bold>figmamake v1.0.0</Text>
      <Text>Processing: {input.baseName}</Text>
      <Text dimColor>zip: {input.zipPath}</Text>
      <Text dimColor>make: {input.makePath}</Text>
      <Text dimColor>output: {input.outputDir}</Text>
    </Box>
  );
} catch (e: any) {
  render(<Text color="red">Error: {e.message}</Text>);
  process.exit(1);
}
```

**Step 3: Test with the real Figma Make files**

Run: `bun src/cli.tsx /home/jimbrescu/figmamake`
Expected: Shows "Processing: Disponibilidad rápida (Mobile)" with file paths

Run: `bun src/cli.tsx /tmp/nonexistent`
Expected: Red error "Directory not found: /tmp/nonexistent"

**Step 4: Commit**

```bash
git add src/pipeline/validate.ts src/cli.tsx
git commit -m "feat: add input validation for .zip/.make file pair"
```

---

### Task 3: Extraction Phase

**Files:**
- Create: `src/pipeline/extract.ts`

**Step 1: Write extract.ts**

This module extracts the `.zip` and `.make` files to temporary directories and returns paths.

```typescript
import { mkdir } from "node:fs/promises";
import { join } from "node:path";
import { createReadStream } from "node:fs";
import { pipeline } from "node:stream/promises";
import unzipper from "unzipper";

export interface ExtractResult {
  codeDir: string;
  assetsDir: string;
  tempDir: string;
}

export async function extract(
  zipPath: string,
  makePath: string
): Promise<ExtractResult> {
  const tempDir = join(
    "/tmp",
    `figmamake-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
  );
  const codeDir = join(tempDir, "code");
  const assetsDir = join(tempDir, "assets");

  await mkdir(codeDir, { recursive: true });
  await mkdir(assetsDir, { recursive: true });

  // Extract .zip (code)
  await pipeline(
    createReadStream(zipPath),
    unzipper.Extract({ path: codeDir })
  );

  // Extract .make (also a zip - only images/ folder matters)
  await pipeline(
    createReadStream(makePath),
    unzipper.Extract({ path: assetsDir })
  );

  return { codeDir, assetsDir, tempDir };
}
```

**Step 2: Quick manual test**

Add a temporary test at the bottom of `extract.ts`:

```typescript
// Temporary test - remove after verification
if (import.meta.main) {
  const result = await extract(
    "/home/jimbrescu/figmamake/Disponibilidad rápida (Mobile).zip",
    "/home/jimbrescu/figmamake/Disponibilidad rápida (Mobile).make"
  );
  console.log("Extracted to:", result);
  const { readdir } = await import("node:fs/promises");
  console.log("Code files:", await readdir(result.codeDir));
  console.log("Asset images:", await readdir(join(result.assetsDir, "images")));
}
```

Run: `bun src/pipeline/extract.ts`
Expected: Prints extracted directories with file listings

**Step 3: Remove temporary test code, commit**

Remove the `if (import.meta.main)` block from extract.ts.

```bash
git add src/pipeline/extract.ts
git commit -m "feat: add zip/make extraction to temp directories"
```

---

### Task 4: Dependency Analysis

**Files:**
- Create: `src/pipeline/analyze.ts`

**Step 1: Write analyze.ts**

This module recursively walks imports starting from `src/main.tsx` to build the full dependency tree. It resolves `@/` aliases, detects `figma:asset/` imports, and identifies which files are reachable.

```typescript
import { readdir, stat } from "node:fs/promises";
import { join, dirname, resolve, extname } from "node:path";

export interface AnalysisResult {
  reachableFiles: Set<string>;      // Relative paths from codeDir
  unreachableFiles: Set<string>;    // Relative paths from codeDir
  figmaAssets: Map<string, string>; // hash -> extension from import
  totalFiles: number;
}

const IMPORT_REGEX =
  /(?:import\s+(?:[\w{},\s*]+\s+from\s+)?|export\s+(?:[\w{},\s*]+\s+from\s+)?|import\s*\()["']([^"']+)["']/g;

const FIGMA_ASSET_REGEX = /^figma:asset\/([a-f0-9]+)\.(\w+)$/;

const EXTENSIONS = [".tsx", ".ts", ".jsx", ".js"];

async function resolveModulePath(
  importPath: string,
  fromFile: string,
  codeDir: string
): Promise<string | null> {
  // Handle figma:asset/ - these aren't real files
  if (importPath.startsWith("figma:asset/")) return null;

  // Skip node_modules / bare specifiers
  if (
    !importPath.startsWith(".") &&
    !importPath.startsWith("@/")
  )
    return null;

  // Resolve @/ alias
  let resolved: string;
  if (importPath.startsWith("@/")) {
    resolved = join(codeDir, "src", importPath.slice(2));
  } else {
    resolved = resolve(dirname(fromFile), importPath);
  }

  // Try exact path first, then with extensions
  const candidates = [resolved];
  if (!extname(resolved)) {
    for (const ext of EXTENSIONS) {
      candidates.push(resolved + ext);
    }
    // Also try /index.tsx etc.
    for (const ext of EXTENSIONS) {
      candidates.push(join(resolved, `index${ext}`));
    }
  }

  for (const candidate of candidates) {
    try {
      const s = await stat(candidate);
      if (s.isFile()) return candidate;
    } catch {
      // not found, try next
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

  async function walk(current: string) {
    const entries = await readdir(current, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = join(current, entry.name);
      if (entry.isDirectory()) {
        // Skip node_modules, .git, etc.
        if (entry.name.startsWith(".") || entry.name === "node_modules") continue;
        await walk(fullPath);
      } else if (EXTENSIONS.some((ext) => entry.name.endsWith(ext))) {
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

    // Check file exists
    try {
      await stat(filePath);
    } catch {
      continue;
    }

    reachableAbsolute.add(filePath);

    const content = await Bun.file(filePath).text();
    const { modulePaths, figmaAssets: assets } = extractImports(content);

    // Collect figma assets
    for (const asset of assets) {
      figmaAssets.set(asset.hash, asset.ext);
    }

    // Resolve and queue module imports
    for (const modulePath of modulePaths) {
      const resolved = await resolveModulePath(modulePath, filePath, codeDir);
      if (resolved && !visited.has(resolved)) {
        queue.push(resolved);
      }
    }
  }

  // Convert absolute paths to relative paths from codeDir
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
```

**Step 2: Quick manual test**

Add temporary main block to `analyze.ts`:

```typescript
if (import.meta.main) {
  const { extract } = await import("./extract.js");
  const result = await extract(
    "/home/jimbrescu/figmamake/Disponibilidad rápida (Mobile).zip",
    "/home/jimbrescu/figmamake/Disponibilidad rápida (Mobile).make"
  );
  const analysis = await analyze(result.codeDir);
  console.log("Reachable:", [...analysis.reachableFiles]);
  console.log("Unreachable:", [...analysis.unreachableFiles]);
  console.log("Figma assets:", [...analysis.figmaAssets.entries()]);
  console.log(
    `Total: ${analysis.totalFiles}, Reachable: ${analysis.reachableFiles.size}, Unreachable: ${analysis.unreachableFiles.size}`
  );
}
```

Run: `bun src/pipeline/analyze.ts`
Expected: Lists ~12 reachable files (main.tsx, App.tsx, 3 imports + their svg deps, Alert, NovemberCalendar, CalendarDay, BackgroundSticky, ImageWithFallback), ~50+ unreachable (shadcn/ui components), and 4 figma assets.

**Step 3: Remove temporary test code, commit**

```bash
git add src/pipeline/analyze.ts
git commit -m "feat: add recursive dependency analysis with figma:asset detection"
```

---

### Task 5: Transformation Phase

**Files:**
- Create: `src/pipeline/transform.ts`

**Step 1: Write transform.ts**

This module handles:
1. Rewriting `figma:asset/` imports to absolute `/assets/` URLs
2. Detecting real file types from magic bytes
3. Cleaning up `package.json` (move react to deps, remove unused deps)

```typescript
import { join } from "node:path";
import { readdir } from "node:fs/promises";
import type { AnalysisResult } from "./analyze.js";

const FIGMA_IMPORT_REGEX =
  /import\s+(\w+)\s+from\s+["']figma:asset\/([a-f0-9]+)\.(\w+)["']\s*;?/g;

interface FileTypeInfo {
  ext: string;
  mime: string;
}

function detectFileType(bytes: Uint8Array): FileTypeInfo {
  // PNG: 89 50 4E 47
  if (bytes[0] === 0x89 && bytes[1] === 0x50 && bytes[2] === 0x4e && bytes[3] === 0x47) {
    return { ext: "png", mime: "image/png" };
  }
  // GIF: 47 49 46 38
  if (bytes[0] === 0x47 && bytes[1] === 0x49 && bytes[2] === 0x46 && bytes[3] === 0x38) {
    return { ext: "gif", mime: "image/gif" };
  }
  // JPEG: FF D8 FF
  if (bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff) {
    return { ext: "jpg", mime: "image/jpeg" };
  }
  // SVG: starts with < (after optional whitespace/BOM)
  const start = new TextDecoder().decode(bytes.slice(0, 100)).trimStart();
  if (start.startsWith("<svg") || start.startsWith("<?xml")) {
    return { ext: "svg", mime: "image/svg+xml" };
  }
  // WebP: 52 49 46 46 ... 57 45 42 50
  if (
    bytes[0] === 0x52 && bytes[1] === 0x49 && bytes[2] === 0x46 && bytes[3] === 0x46 &&
    bytes[8] === 0x57 && bytes[9] === 0x45 && bytes[10] === 0x42 && bytes[11] === 0x50
  ) {
    return { ext: "webp", mime: "image/webp" };
  }
  // Default to png
  return { ext: "png", mime: "image/png" };
}

export interface AssetMapping {
  hash: string;
  sourcePath: string;   // Path in extracted .make images/
  targetPath: string;    // Relative path in output (public/assets/...)
  realExt: string;
  varName: string;       // Variable name used in the import
}

export interface TransformResult {
  transformedFiles: Map<string, string>; // relative path -> new content
  assetMappings: AssetMapping[];
  cleanedPackageJson: object;
  warnings: string[];
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

  // Process each reachable file
  for (const relPath of analysis.reachableFiles) {
    const absPath = join(codeDir, relPath);
    let content = await Bun.file(absPath).text();

    // Check for figma:asset imports
    let hasChanges = false;
    const replacements: Array<{ original: string; replacement: string }> = [];

    let match;
    FIGMA_IMPORT_REGEX.lastIndex = 0;
    const contentCopy = content; // regex needs stable string
    while ((match = FIGMA_IMPORT_REGEX.exec(contentCopy)) !== null) {
      const varName = match[1];
      const hash = match[2];
      const originalImport = match[0];

      // Look up asset in .make images/
      const assetPath = join(assetsDir, "images", hash);
      const assetExists = await Bun.file(assetPath).exists();

      if (!assetExists) {
        warnings.push(
          `Asset not found: ${hash} (referenced as ${varName} in ${relPath}). Keeping original import.`
        );
        continue;
      }

      // Detect real file type
      const bytes = new Uint8Array(
        await Bun.file(assetPath).arrayBuffer()
      ).slice(0, 100);
      const fileType = detectFileType(bytes);

      const targetRelPath = `assets/${hash}.${fileType.ext}`;

      // Only add to mappings once per hash
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

  // Clean package.json
  const pkgPath = join(codeDir, "package.json");
  const pkg = await Bun.file(pkgPath).json();
  const cleanedPackageJson = cleanPackageJson(pkg, analysis);

  return {
    transformedFiles,
    assetMappings,
    cleanedPackageJson,
    warnings,
  };
}

function cleanPackageJson(
  pkg: any,
  analysis: AnalysisResult
): object {
  const cleaned = { ...pkg };

  // Move react and react-dom to dependencies
  if (cleaned.peerDependencies) {
    const reactVersion = cleaned.peerDependencies.react || "18.3.1";
    const reactDomVersion = cleaned.peerDependencies["react-dom"] || "18.3.1";

    cleaned.dependencies = cleaned.dependencies || {};
    cleaned.dependencies.react = reactVersion;
    cleaned.dependencies["react-dom"] = reactDomVersion;

    delete cleaned.peerDependencies.react;
    delete cleaned.peerDependencies["react-dom"];

    // Remove peerDependencies if empty
    if (Object.keys(cleaned.peerDependencies).length === 0) {
      delete cleaned.peerDependencies;
    }
  }

  // Remove peerDependenciesMeta
  delete cleaned.peerDependenciesMeta;

  // Remove pnpm.overrides
  delete cleaned.pnpm;

  // Collect all imports from reachable files to determine used packages
  // For now, keep all deps from the original - a more thorough analysis
  // would parse each reachable file's imports to filter bare specifiers.
  // The key cleanup is removing shadcn/ui related deps when those components
  // are tree-shaken.

  // Sort dependencies alphabetically
  if (cleaned.dependencies) {
    cleaned.dependencies = Object.fromEntries(
      Object.entries(cleaned.dependencies).sort(([a], [b]) => a.localeCompare(b))
    );
  }

  return cleaned;
}
```

**Step 2: Quick manual test**

Add temporary main block:

```typescript
if (import.meta.main) {
  const { extract } = await import("./extract.js");
  const { analyze } = await import("./analyze.js");
  const result = await extract(
    "/home/jimbrescu/figmamake/Disponibilidad rápida (Mobile).zip",
    "/home/jimbrescu/figmamake/Disponibilidad rápida (Mobile).make"
  );
  const analysis = await analyze(result.codeDir);
  const transformed = await transform(result.codeDir, result.assetsDir, analysis);
  console.log("Transformed files:", [...transformed.transformedFiles.keys()]);
  console.log("Asset mappings:", transformed.assetMappings);
  console.log("Warnings:", transformed.warnings);
}
```

Run: `bun src/pipeline/transform.ts`
Expected: Shows 2 transformed files (360WDefault.tsx and PdpPrimerDiaConDisponibilidad.tsx), 4 asset mappings with real extensions detected, no warnings.

**Step 3: Remove temporary test code, commit**

```bash
git add src/pipeline/transform.ts
git commit -m "feat: add import transformation and package.json cleanup"
```

---

### Task 6: Enhanced Dependency Cleanup for package.json

**Files:**
- Modify: `src/pipeline/transform.ts` (the `cleanPackageJson` function)
- Create: `src/pipeline/deps.ts`

**Step 1: Write deps.ts**

This module analyzes which npm packages are actually imported by reachable files vs unreachable files, then removes packages only used by unreachable files.

```typescript
import { join } from "node:path";

// Regex to find bare specifier imports (npm packages)
const BARE_IMPORT_REGEX =
  /(?:import\s+(?:[\w{},\s*]+\s+from\s+)?|export\s+(?:[\w{},\s*]+\s+from\s+)?|import\s*\()["']([^"'./][^"']*)["']/g;

function getPackageName(specifier: string): string {
  // Handle scoped packages: @scope/name/path -> @scope/name
  if (specifier.startsWith("@")) {
    const parts = specifier.split("/");
    return parts.slice(0, 2).join("/");
  }
  // Regular package: name/path -> name
  return specifier.split("/")[0];
}

export async function findUsedPackages(
  codeDir: string,
  reachableFiles: Set<string>
): Promise<Set<string>> {
  const usedPackages = new Set<string>();

  for (const relPath of reachableFiles) {
    const content = await Bun.file(join(codeDir, relPath)).text();
    let match;
    BARE_IMPORT_REGEX.lastIndex = 0;
    while ((match = BARE_IMPORT_REGEX.exec(content)) !== null) {
      const specifier = match[1];
      if (specifier && !specifier.startsWith("figma:")) {
        usedPackages.add(getPackageName(specifier));
      }
    }
  }

  // Always keep these even if not directly imported (used by config/build)
  usedPackages.add("react");
  usedPackages.add("react-dom");

  return usedPackages;
}

export function filterDependencies(
  deps: Record<string, string>,
  usedPackages: Set<string>
): { kept: Record<string, string>; removed: string[] } {
  const kept: Record<string, string> = {};
  const removed: string[] = [];

  for (const [pkg, version] of Object.entries(deps)) {
    if (usedPackages.has(pkg)) {
      kept[pkg] = version;
    } else {
      removed.push(pkg);
    }
  }

  return { kept, removed };
}
```

**Step 2: Integrate into transform.ts cleanPackageJson**

Update `cleanPackageJson` to accept `usedPackages` and call `filterDependencies`:

```typescript
// In transform() function, before calling cleanPackageJson:
const usedPackages = await findUsedPackages(codeDir, analysis.reachableFiles);
const cleanedPackageJson = cleanPackageJson(pkg, usedPackages);

// Updated cleanPackageJson signature:
function cleanPackageJson(pkg: any, usedPackages: Set<string>): object {
  // ... same as before but replace the deps section with:
  if (cleaned.dependencies) {
    const { kept, removed } = filterDependencies(cleaned.dependencies, usedPackages);
    cleaned.dependencies = Object.fromEntries(
      Object.entries(kept).sort(([a], [b]) => a.localeCompare(b))
    );
  }
  // ...
}
```

**Step 3: Test with real data**

Run: `bun src/pipeline/transform.ts` (with temporary main block)
Expected: The cleaned package.json has fewer dependencies (only the ones actually imported by reachable files).

**Step 4: Remove test code, commit**

```bash
git add src/pipeline/deps.ts src/pipeline/transform.ts
git commit -m "feat: add npm dependency analysis and cleanup"
```

---

### Task 7: Write Output Phase

**Files:**
- Create: `src/pipeline/write.ts`

**Step 1: Write write.ts**

This module writes the final output directory with only reachable files, transformed content, and resolved assets.

```typescript
import { mkdir, copyFile, readdir, stat } from "node:fs/promises";
import { join, dirname } from "node:path";
import type { TransformResult } from "./transform.js";
import type { AnalysisResult } from "./analyze.js";

// Files that should always be copied regardless of reachability analysis
const ROOT_FILES = [
  "index.html",
  "vite.config.ts",
  "postcss.config.mjs",
  "tsconfig.json",
];

// Directories whose contents should be fully copied if any file is reachable
const STYLE_DIR = "src/styles";

export interface WriteResult {
  filesCopied: number;
  assetsWritten: number;
}

export async function writeOutput(
  codeDir: string,
  outputDir: string,
  analysis: AnalysisResult,
  transform: TransformResult
): Promise<WriteResult> {
  let filesCopied = 0;
  let assetsWritten = 0;

  // Create output directory
  await mkdir(outputDir, { recursive: true });

  // 1. Copy root config files
  for (const file of ROOT_FILES) {
    const src = join(codeDir, file);
    try {
      await stat(src);
      const dest = join(outputDir, file);
      await mkdir(dirname(dest), { recursive: true });
      await copyFile(src, dest);
      filesCopied++;
    } catch {
      // File doesn't exist in source, skip
    }
  }

  // 2. Copy all style files
  const stylesDir = join(codeDir, STYLE_DIR);
  try {
    const styleFiles = await readdir(stylesDir);
    for (const file of styleFiles) {
      const src = join(stylesDir, file);
      const dest = join(outputDir, STYLE_DIR, file);
      await mkdir(dirname(dest), { recursive: true });
      await copyFile(src, dest);
      filesCopied++;
    }
  } catch {
    // No styles dir
  }

  // 3. Copy reachable source files (with transformations applied)
  for (const relPath of analysis.reachableFiles) {
    const dest = join(outputDir, relPath);
    await mkdir(dirname(dest), { recursive: true });

    if (transform.transformedFiles.has(relPath)) {
      // Write transformed content
      await Bun.write(dest, transform.transformedFiles.get(relPath)!);
    } else {
      // Copy original
      await copyFile(join(codeDir, relPath), dest);
    }
    filesCopied++;
  }

  // 4. Copy assets to public/assets/
  const assetsOutDir = join(outputDir, "public", "assets");
  await mkdir(assetsOutDir, { recursive: true });

  for (const mapping of transform.assetMappings) {
    const dest = join(outputDir, "public", mapping.targetPath);
    await mkdir(dirname(dest), { recursive: true });
    await copyFile(mapping.sourcePath, dest);
    assetsWritten++;
  }

  // 5. Write cleaned package.json
  await Bun.write(
    join(outputDir, "package.json"),
    JSON.stringify(transform.cleanedPackageJson, null, 2) + "\n"
  );
  filesCopied++;

  return { filesCopied, assetsWritten };
}
```

**Step 2: Quick integration test**

Add temporary main block:

```typescript
if (import.meta.main) {
  const { extract } = await import("./extract.js");
  const { analyze } = await import("./analyze.js");
  const { transform } = await import("./transform.js");
  const exResult = await extract(
    "/home/jimbrescu/figmamake/Disponibilidad rápida (Mobile).zip",
    "/home/jimbrescu/figmamake/Disponibilidad rápida (Mobile).make"
  );
  const analysis = await analyze(exResult.codeDir);
  const txResult = await transform(exResult.codeDir, exResult.assetsDir, analysis);
  const writeResult = await writeOutput(
    exResult.codeDir,
    "/tmp/figmamake-test-output",
    analysis,
    txResult,
  );
  console.log("Write result:", writeResult);
}
```

Run: `rm -rf /tmp/figmamake-test-output && bun src/pipeline/write.ts`
Expected: Creates `/tmp/figmamake-test-output/` with the app structure. Verify:
- `ls /tmp/figmamake-test-output/src/app/components/ui/` should NOT exist or be nearly empty (shadcn components removed)
- `ls /tmp/figmamake-test-output/public/assets/` should have 4 files with proper extensions
- `cat /tmp/figmamake-test-output/package.json` should show react in dependencies, fewer deps overall

**Step 3: Remove test code, commit**

```bash
git add src/pipeline/write.ts
git commit -m "feat: add output writer with tree-shaking and asset resolution"
```

---

### Task 8: Ink UI Components

**Files:**
- Create: `src/ui/StepList.tsx`
- Create: `src/ui/Summary.tsx`

**Step 1: Write StepList.tsx**

```tsx
import React from "react";
import { Box, Text } from "ink";
import { Spinner } from "@inkjs/ui";

export type StepStatus = "pending" | "running" | "done" | "error";

export interface Step {
  label: string;
  status: StepStatus;
  detail?: string;
}

function StepIcon({ status }: { status: StepStatus }) {
  switch (status) {
    case "done":
      return <Text color="green">✓</Text>;
    case "running":
      return <Spinner label="" />;
    case "error":
      return <Text color="red">✗</Text>;
    case "pending":
      return <Text dimColor>○</Text>;
  }
}

export function StepList({ steps }: { steps: Step[] }) {
  return (
    <Box flexDirection="column" marginLeft={2}>
      {steps.map((step, i) => (
        <Box key={i} gap={1}>
          <StepIcon status={step.status} />
          <Text
            color={step.status === "error" ? "red" : undefined}
            dimColor={step.status === "pending"}
          >
            {step.label}
          </Text>
          {step.detail && (
            <Text dimColor>({step.detail})</Text>
          )}
        </Box>
      ))}
    </Box>
  );
}
```

**Step 2: Write Summary.tsx**

```tsx
import React from "react";
import { Box, Text, Newline } from "ink";

export interface SummaryData {
  outputDir: string;
  filesCopied: number;
  filesRemoved: number;
  assetsCopied: number;
  assetsDiscarded: number;
  depsKept: number;
  depsRemoved: number;
  warnings: string[];
}

export function Summary({ data }: { data: SummaryData }) {
  return (
    <Box flexDirection="column" marginTop={1} marginLeft={2}>
      <Box gap={1}>
        <Text color="green">✓</Text>
        <Text bold>App generated at {data.outputDir}</Text>
      </Box>
      <Newline />
      <Box flexDirection="column" marginLeft={2}>
        <Text>
          Files:{"   "}
          <Text color="green">{data.filesCopied} copied</Text>
          {", "}
          <Text dimColor>{data.filesRemoved} removed</Text>
        </Text>
        <Text>
          Assets:{"  "}
          <Text color="green">{data.assetsCopied} copied</Text>
          {", "}
          <Text dimColor>{data.assetsDiscarded} discarded</Text>
        </Text>
        <Text>
          Deps:{"    "}
          <Text color="green">{data.depsKept} kept</Text>
          {", "}
          <Text dimColor>{data.depsRemoved} removed</Text>
        </Text>
      </Box>

      {data.warnings.length > 0 && (
        <Box flexDirection="column" marginTop={1}>
          <Text color="yellow" bold>Warnings:</Text>
          {data.warnings.map((w, i) => (
            <Text key={i} color="yellow">  {w}</Text>
          ))}
        </Box>
      )}

      <Newline />
      <Text dimColor>
        Next: cd "{data.outputDir}" && bun install && bun dev
      </Text>
    </Box>
  );
}
```

**Step 3: Commit**

```bash
git add src/ui/StepList.tsx src/ui/Summary.tsx
git commit -m "feat: add Ink UI components for progress and summary display"
```

---

### Task 9: Main App Component - Wire Everything Together

**Files:**
- Create: `src/app.tsx`
- Modify: `src/cli.tsx`

**Step 1: Write src/app.tsx**

This is the main Ink component that orchestrates the pipeline and renders progress.

```tsx
import React, { useState, useEffect } from "react";
import { Box, Text, Newline, useApp } from "ink";
import { StepList, type Step } from "./ui/StepList.js";
import { Summary, type SummaryData } from "./ui/Summary.js";
import { extract, type ExtractResult } from "./pipeline/extract.js";
import { analyze, type AnalysisResult } from "./pipeline/analyze.js";
import {
  transform,
  type TransformResult,
} from "./pipeline/transform.js";
import { writeOutput, type WriteResult } from "./pipeline/write.js";
import type { ValidatedInput } from "./pipeline/validate.js";

interface AppProps {
  input: ValidatedInput;
}

export function App({ input }: AppProps) {
  const { exit } = useApp();
  const [steps, setSteps] = useState<Step[]>([
    { label: "Extracting files", status: "pending" },
    { label: "Analyzing dependencies", status: "pending" },
    { label: "Transforming imports", status: "pending" },
    { label: "Writing output", status: "pending" },
  ]);
  const [summary, setSummary] = useState<SummaryData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const updateStep = (
    index: number,
    update: Partial<Step>
  ) => {
    setSteps((prev) =>
      prev.map((s, i) => (i === index ? { ...s, ...update } : s))
    );
  };

  useEffect(() => {
    async function run() {
      try {
        // Phase 1: Extract
        updateStep(0, { status: "running" });
        const extractResult = await extract(input.zipPath, input.makePath);
        updateStep(0, { status: "done" });

        // Phase 2: Analyze
        updateStep(1, { status: "running" });
        const analysisResult = await analyze(extractResult.codeDir);
        updateStep(1, {
          status: "done",
          detail: `${analysisResult.reachableFiles.size} files used, ${analysisResult.unreachableFiles.size} removed`,
        });

        // Phase 3: Transform
        updateStep(2, { status: "running" });
        const transformResult = await transform(
          extractResult.codeDir,
          extractResult.assetsDir,
          analysisResult
        );
        updateStep(2, {
          status: "done",
          detail: `${transformResult.assetMappings.length} assets resolved`,
        });

        // Phase 4: Write
        updateStep(3, { status: "running" });
        const writeResult = await writeOutput(
          extractResult.codeDir,
          input.outputDir,
          analysisResult,
          transformResult
        );
        updateStep(3, { status: "done" });

        // Compute summary stats
        const originalDeps = Object.keys(
          (await Bun.file(
            `${extractResult.codeDir}/package.json`
          ).json()).dependencies || {}
        ).length;
        const keptDeps = Object.keys(
          (transformResult.cleanedPackageJson as any).dependencies || {}
        ).length;

        setSummary({
          outputDir: input.outputDir,
          filesCopied: writeResult.filesCopied,
          filesRemoved: analysisResult.unreachableFiles.size,
          assetsCopied: writeResult.assetsWritten,
          assetsDiscarded:
            analysisResult.figmaAssets.size > 0
              ? 0  // We'll compute this from .make image count
              : 0,
          depsKept: keptDeps,
          depsRemoved: originalDeps - keptDeps,
          warnings: transformResult.warnings,
        });

        // Clean up temp dir
        const { rm } = await import("node:fs/promises");
        await rm(extractResult.tempDir, { recursive: true, force: true });

        exit();
      } catch (e: any) {
        setError(e.message);
        exit(e);
      }
    }

    run();
  }, []);

  if (error) {
    return (
      <Box flexDirection="column" marginLeft={2}>
        <Text color="red" bold>Error: {error}</Text>
      </Box>
    );
  }

  return (
    <Box flexDirection="column">
      <Newline />
      <Box marginLeft={2}>
        <Text bold>figmamake</Text>
        <Text dimColor> v1.0.0</Text>
      </Box>
      <Newline />
      <Box marginLeft={2}>
        <Text>Processing: </Text>
        <Text bold>{input.baseName}</Text>
      </Box>
      <Newline />
      <StepList steps={steps} />
      {summary && (
        <>
          <Newline />
          <Summary data={summary} />
        </>
      )}
    </Box>
  );
}
```

**Step 2: Update src/cli.tsx to use App component**

```tsx
#!/usr/bin/env bun
import { render, Text } from "ink";
import meow from "meow";
import { resolve } from "node:path";
import { validateInput } from "./pipeline/validate.js";
import { App } from "./app.js";

const cli = meow(
  `
  Usage
    $ figmamake <dir>

  Options
    -o, --output  Output directory name

  Examples
    $ figmamake ./my-export
    $ figmamake ./my-export -o my-app
`,
  {
    importMeta: import.meta,
    flags: {
      output: {
        type: "string",
        shortFlag: "o",
      },
    },
  }
);

if (cli.input.length === 0) {
  cli.showHelp();
  process.exit(1);
}

const dir = resolve(cli.input[0]);

try {
  const input = await validateInput(dir, cli.flags.output);
  const { waitUntilExit } = render(<App input={input} />);
  await waitUntilExit();
} catch (e: any) {
  render(<Text color="red">Error: {e.message}</Text>);
  process.exit(1);
}
```

**Step 3: End-to-end test**

Run: `bun src/cli.tsx /home/jimbrescu/figmamake`
Expected: Shows full pipeline progress with spinners, then summary with file counts.

**Step 4: Verify the output app works**

Run: `cd "/home/jimbrescu/figmamake/Disponibilidad rápida (Mobile)" && bun install && bun dev`
Expected: Vite dev server starts, app loads in browser with images displaying correctly.

**Step 5: Commit**

```bash
git add src/app.tsx src/cli.tsx
git commit -m "feat: wire Ink app with full pipeline orchestration"
```

---

### Task 10: Compute Asset Discarded Count from .make

**Files:**
- Modify: `src/pipeline/extract.ts`
- Modify: `src/app.tsx`

**Step 1: Update extract.ts to count total images**

Add a `totalImages` field to `ExtractResult`:

```typescript
export interface ExtractResult {
  codeDir: string;
  assetsDir: string;
  tempDir: string;
  totalImages: number;
}
```

After extraction, count images:

```typescript
const imagesDir = join(assetsDir, "images");
let totalImages = 0;
try {
  const imageFiles = await readdir(imagesDir);
  totalImages = imageFiles.length;
} catch {
  // No images dir
}

return { codeDir, assetsDir, tempDir, totalImages };
```

**Step 2: Update app.tsx to use totalImages for discarded count**

In the summary computation:

```typescript
assetsDiscarded: extractResult.totalImages - writeResult.assetsWritten,
```

**Step 3: Test**

Run: `rm -rf "/home/jimbrescu/figmamake/Disponibilidad rápida (Mobile)" && bun src/cli.tsx /home/jimbrescu/figmamake`
Expected: Summary shows "4 copied, 19 discarded" for assets.

**Step 4: Commit**

```bash
git add src/pipeline/extract.ts src/app.tsx
git commit -m "fix: compute correct asset discard count from .make images"
```

---

### Task 11: Polish and Edge Cases

**Files:**
- Modify: `src/pipeline/analyze.ts`
- Modify: `src/pipeline/write.ts`
- Modify: `src/app.tsx`

**Step 1: Handle CSS imports in dependency analysis**

The current analyzer only follows `.ts/.tsx/.js/.jsx` imports. CSS files imported via `import "./styles/index.css"` should be tracked but don't need recursive analysis. Update `analyze.ts` to not skip CSS imports but also not try to recurse into them.

In `resolveModulePath`, add CSS extension support:

```typescript
const EXTENSIONS = [".tsx", ".ts", ".jsx", ".js", ".css"];
```

And in the main `analyze` loop, skip recursing into CSS files:

```typescript
if (filePath.endsWith(".css")) {
  reachableAbsolute.add(filePath);
  continue; // Don't parse CSS for JS imports
}
```

**Step 2: Copy ATTRIBUTIONS.md and README.md if present**

In `write.ts`, add to ROOT_FILES:

```typescript
const ROOT_FILES = [
  "index.html",
  "vite.config.ts",
  "postcss.config.mjs",
  "tsconfig.json",
  "ATTRIBUTIONS.md",
  "README.md",
];
```

**Step 3: Handle output directory name with -o flag relative to input dir**

In `validate.ts`, if `outputOverride` is provided, make sure it's resolved relative to the input directory:

```typescript
const outputDir = join(dir, outputOverride ?? baseName);
```

This is already the case. Verify it works: `bun src/cli.tsx /home/jimbrescu/figmamake -o test-app`

**Step 4: Test the full flow end-to-end**

```bash
rm -rf "/home/jimbrescu/figmamake/Disponibilidad rápida (Mobile)"
bun src/cli.tsx /home/jimbrescu/figmamake
```

Then verify the generated app runs:

```bash
cd "/home/jimbrescu/figmamake/Disponibilidad rápida (Mobile)"
bun install
bun dev
```

Expected: App runs, all images load, no console errors.

**Step 5: Commit**

```bash
git add src/pipeline/analyze.ts src/pipeline/write.ts
git commit -m "fix: handle CSS imports and copy attribution files"
```

---

### Task 12: Make CLI Globally Installable

**Files:**
- Modify: `package.json`

**Step 1: Verify the shebang line in cli.tsx**

Ensure `src/cli.tsx` starts with `#!/usr/bin/env bun`

**Step 2: Test global link**

Run:
```bash
cd /home/jimbrescu/figmamake
bun link
```

Then from anywhere:
```bash
figmamake /home/jimbrescu/figmamake
```

Expected: Runs the full pipeline successfully.

**Step 3: Commit**

```bash
git add package.json src/cli.tsx
git commit -m "feat: enable global installation via bun link"
```

---

## Summary

| Task | Description | Key Files |
|------|-------------|-----------|
| 1 | Project scaffold | package.json, tsconfig.json, cli.tsx |
| 2 | Input validation | pipeline/validate.ts |
| 3 | Extraction phase | pipeline/extract.ts |
| 4 | Dependency analysis | pipeline/analyze.ts |
| 5 | Transformation phase | pipeline/transform.ts |
| 6 | Dependency cleanup | pipeline/deps.ts |
| 7 | Output writer | pipeline/write.ts |
| 8 | Ink UI components | ui/StepList.tsx, ui/Summary.tsx |
| 9 | Wire everything together | app.tsx, cli.tsx |
| 10 | Asset discard count | extract.ts, app.tsx |
| 11 | Polish and edge cases | analyze.ts, write.ts |
| 12 | Global installability | package.json |
