# fmx Open Source Launch - Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Transform the `figmamake` CLI into `fmx`, a Node-compatible, test-covered, open-source-ready npm package.

**Architecture:** Replace all Bun-only APIs with `node:fs/promises` equivalents, add `tsup` build step to compile TSX→JS, add Vitest test suite for each pipeline module, then add all OSS scaffolding (README, LICENSE, CI, etc.).

**Tech Stack:** TypeScript, tsup (build), Vitest (tests), Node.js ≥18, GitHub Actions (CI)

---

### Task 1: Add build and test tooling

**Files:**
- Modify: `package.json`
- Create: `tsup.config.ts`
- Create: `vitest.config.ts`

**Step 1: Install dev dependencies**

Run:
```bash
bun add -d tsup vitest
```

**Step 2: Create tsup config**

Create `tsup.config.ts`:
```ts
import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/cli.tsx"],
  format: ["esm"],
  target: "node18",
  platform: "node",
  outDir: "dist",
  clean: true,
  banner: {
    js: "#!/usr/bin/env node",
  },
  // Keep deps external - user installs them
  external: [/^[^./]/],
});
```

**Step 3: Create vitest config**

Create `vitest.config.ts`:
```ts
import { defineConfig } from "vitest/config";
import { resolve } from "path";

export default defineConfig({
  test: {
    globals: true,
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});
```

**Step 4: Update package.json scripts**

Add to `package.json`:
```json
{
  "scripts": {
    "build": "tsup",
    "test": "vitest run",
    "test:watch": "vitest",
    "typecheck": "tsc --noEmit",
    "prepublishOnly": "bun run build"
  }
}
```

**Step 5: Verify build works**

Run: `bun run build`
Expected: `dist/cli.js` is created, starts with `#!/usr/bin/env node`

**Step 6: Commit**

```bash
git add package.json tsup.config.ts vitest.config.ts bun.lockb
git commit -m "chore: add tsup build and vitest test tooling"
```

---

### Task 2: Replace Bun-only APIs with Node equivalents

**Files:**
- Modify: `src/pipeline/analyze.ts:126` — `Bun.file().text()` → `readFile()`
- Modify: `src/pipeline/transform.ts:65,79,86,122,157,188` — all `Bun.file()` calls
- Modify: `src/pipeline/write.ts:56,72,91` — `Bun.write()` → `writeFile()`
- Modify: `src/pipeline/fix-styles.ts:60,68` — `Bun.file()` calls

**Step 1: Fix `analyze.ts`**

Replace `Bun.file(filePath).text()` on line 126 with:

```ts
// Add to imports at top:
import { readdir, stat, readFile } from "node:fs/promises";

// Line 126 — replace:
const content = await Bun.file(filePath).text();
// with:
const content = await readFile(filePath, "utf-8");
```

**Step 2: Fix `transform.ts`**

Add `readFile` to the existing `node:fs/promises` import (there isn't one — add it):

```ts
import { readFile, readdir, access } from "node:fs/promises";
```

Replace each Bun API call:

| Line | Old | New |
|------|-----|-----|
| 65 | `Bun.file(absPath).text()` | `readFile(absPath, "utf-8")` |
| 79 | `Bun.file(assetPath).exists()` | `access(assetPath).then(() => true, () => false)` |
| 86 | `new Uint8Array(await Bun.file(assetPath).arrayBuffer()).slice(0, 100)` | `(await readFile(assetPath)).subarray(0, 100)` |
| 122 | `Bun.file(pkgPath).json()` | `JSON.parse(await readFile(pkgPath, "utf-8"))` |
| 157 | `Bun.file(join(codeDir, relPath)).text()` | `readFile(join(codeDir, relPath), "utf-8")` |
| 188 | `Bun.file(join(codeDir, "src", "styles", file)).text()` | `readFile(join(codeDir, "src", "styles", file), "utf-8")` |

Also remove the dynamic `import("node:fs/promises")` on line 183 — use the static import at top instead.

**Step 3: Fix `write.ts`**

Add `writeFile` to the existing imports:

```ts
import { mkdir, copyFile, readdir, stat, writeFile } from "node:fs/promises";
```

Replace each `Bun.write()`:

| Line | Old | New |
|------|-----|-----|
| 56 | `await Bun.write(dest, ...)` | `await writeFile(dest, ...)` |
| 72 | `await Bun.write(dest, ...)` | `await writeFile(dest, ...)` |
| 91-93 | `await Bun.write(...)` | `await writeFile(...)` |

**Step 4: Fix `fix-styles.ts`**

Add imports:
```ts
import { readFile, access } from "node:fs/promises";
```

Replace:
| Line | Old | New |
|------|-----|-----|
| 60 | `await Bun.file(join(codeDir, target)).exists()` | `await access(join(codeDir, target)).then(() => true, () => false)` |
| 68 | `await Bun.file(join(codeDir, relPath)).text()` | `await readFile(join(codeDir, relPath), "utf-8")` |

**Step 5: Verify everything still builds**

Run: `bun run build`
Expected: clean build with no Bun API references in output (except runtime Bun compat)

**Step 6: Manual smoke test**

Run: `bun src/cli.tsx <test-dir>` (against a real Figma Make export if available)
Expected: same output as before

**Step 7: Commit**

```bash
git add src/pipeline/analyze.ts src/pipeline/transform.ts src/pipeline/write.ts src/pipeline/fix-styles.ts
git commit -m "refactor: replace Bun-only APIs with Node fs/promises equivalents"
```

---

### Task 3: Rename to fmx

**Files:**
- Modify: `package.json` — name, bin, description, keywords
- Modify: `src/cli.tsx` — help text
- Modify: `src/app.tsx:113` — UI banner
- Modify: `src/Summary.tsx:61` — "Next" instructions
- Modify: `src/pipeline/extract.ts:18` — temp dir prefix

**Step 1: Update `package.json`**

```json
{
  "name": "fmx",
  "version": "1.0.0",
  "description": "Turn Figma Make exports into clean React + Vite + Tailwind apps",
  "type": "module",
  "bin": {
    "fmx": "./dist/cli.js"
  },
  "engines": {
    "node": ">=18"
  },
  "files": ["dist"],
  "keywords": ["figma", "figma-make", "react", "vite", "tailwind", "code-generation"],
  "license": "MIT"
}
```

**Step 2: Update CLI help text in `src/cli.tsx`**

Change `$ figmamake` → `$ fmx` in all usage examples.

**Step 3: Update UI banner in `src/app.tsx:113`**

Change `<Text bold>figmamake</Text>` → `<Text bold>fmx</Text>`

**Step 4: Update "Next" instructions in `src/ui/Summary.tsx:61`**

Change `bun install && bun dev` → `npm install && npm run dev`

**Step 5: Update temp dir prefix in `src/pipeline/extract.ts:18`**

Change `figmamake-` → `fmx-`

**Step 6: Build and verify**

Run: `bun run build`
Run: `node dist/cli.js --help`
Expected: shows "fmx" in all output

**Step 7: Commit**

```bash
git add package.json src/cli.tsx src/app.tsx src/ui/Summary.tsx src/pipeline/extract.ts
git commit -m "feat: rename to fmx"
```

---

### Task 4: Add tests for validate module

**Files:**
- Create: `src/pipeline/__tests__/validate.test.ts`

**Step 1: Write tests**

```ts
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { mkdir, writeFile, rm } from "node:fs/promises";
import { join } from "node:path";
import { validateInput } from "../validate.js";

const TEST_DIR = join("/tmp", "fmx-test-validate");

beforeEach(async () => {
  await mkdir(TEST_DIR, { recursive: true });
});

afterEach(async () => {
  await rm(TEST_DIR, { recursive: true, force: true });
});

describe("validateInput", () => {
  it("throws if directory does not exist", async () => {
    await expect(validateInput("/tmp/nonexistent-dir-fmx")).rejects.toThrow(
      "Directory not found"
    );
  });

  it("throws if no .zip or .make files found", async () => {
    await writeFile(join(TEST_DIR, "random.txt"), "hello");
    await expect(validateInput(TEST_DIR)).rejects.toThrow(
      "No .zip or .make files found"
    );
  });

  it("throws if .zip exists but no .make", async () => {
    await writeFile(join(TEST_DIR, "project.zip"), "");
    await expect(validateInput(TEST_DIR)).rejects.toThrow(
      "No .make file found"
    );
  });

  it("throws if .make exists but no .zip", async () => {
    await writeFile(join(TEST_DIR, "project.make"), "");
    await expect(validateInput(TEST_DIR)).rejects.toThrow(
      "No .zip file found"
    );
  });

  it("throws if no matching pair", async () => {
    await writeFile(join(TEST_DIR, "foo.zip"), "");
    await writeFile(join(TEST_DIR, "bar.make"), "");
    await expect(validateInput(TEST_DIR)).rejects.toThrow(
      "No matching .zip/.make pair"
    );
  });

  it("returns matched pair and output dir", async () => {
    await writeFile(join(TEST_DIR, "project.zip"), "");
    await writeFile(join(TEST_DIR, "project.make"), "");
    const result = await validateInput(TEST_DIR);
    expect(result.zipPath).toBe(join(TEST_DIR, "project.zip"));
    expect(result.makePath).toBe(join(TEST_DIR, "project.make"));
    expect(result.baseName).toBe("project");
    expect(result.outputDir).toBe(join(TEST_DIR, "project"));
  });

  it("respects output override", async () => {
    await writeFile(join(TEST_DIR, "project.zip"), "");
    await writeFile(join(TEST_DIR, "project.make"), "");
    const result = await validateInput(TEST_DIR, "my-app");
    expect(result.outputDir).toBe(join(TEST_DIR, "my-app"));
  });

  it("throws if output dir already exists", async () => {
    await writeFile(join(TEST_DIR, "project.zip"), "");
    await writeFile(join(TEST_DIR, "project.make"), "");
    await mkdir(join(TEST_DIR, "project"));
    await expect(validateInput(TEST_DIR)).rejects.toThrow(
      "Output directory already exists"
    );
  });
});
```

**Step 2: Run tests**

Run: `bun run test`
Expected: all 7 tests pass

**Step 3: Commit**

```bash
git add src/pipeline/__tests__/validate.test.ts
git commit -m "test: add validate module tests"
```

---

### Task 5: Add tests for analyze module

**Files:**
- Create: `src/pipeline/__tests__/analyze.test.ts`

The analyze module does recursive import tracing from `src/main.tsx`. Tests need a realistic temp directory structure.

**Step 1: Write tests**

```ts
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { mkdir, writeFile, rm } from "node:fs/promises";
import { join } from "node:path";
import { analyze } from "../analyze.js";

const TEST_DIR = join("/tmp", "fmx-test-analyze");
const srcDir = join(TEST_DIR, "src");

beforeEach(async () => {
  await mkdir(srcDir, { recursive: true });
});

afterEach(async () => {
  await rm(TEST_DIR, { recursive: true, force: true });
});

describe("analyze", () => {
  it("traces imports from main.tsx entry point", async () => {
    await writeFile(
      join(srcDir, "main.tsx"),
      `import { App } from "./App";\n`
    );
    await writeFile(
      join(srcDir, "App.tsx"),
      `export function App() { return null; }\n`
    );
    await writeFile(
      join(srcDir, "Unused.tsx"),
      `export function Unused() { return null; }\n`
    );

    const result = await analyze(TEST_DIR);
    expect(result.reachableFiles.has("src/main.tsx")).toBe(true);
    expect(result.reachableFiles.has("src/App.tsx")).toBe(true);
    expect(result.unreachableFiles.has("src/Unused.tsx")).toBe(true);
  });

  it("detects figma:asset imports", async () => {
    await writeFile(
      join(srcDir, "main.tsx"),
      `import hero from "figma:asset/abc123.png";\nexport default hero;\n`
    );

    const result = await analyze(TEST_DIR);
    expect(result.figmaAssets.has("abc123")).toBe(true);
    expect(result.figmaAssets.get("abc123")).toBe("png");
  });

  it("resolves @/ alias imports", async () => {
    await mkdir(join(srcDir, "components"), { recursive: true });
    await writeFile(
      join(srcDir, "main.tsx"),
      `import { Button } from "@/components/Button";\n`
    );
    await writeFile(
      join(srcDir, "components", "Button.tsx"),
      `export function Button() { return null; }\n`
    );

    const result = await analyze(TEST_DIR);
    expect(result.reachableFiles.has("src/components/Button.tsx")).toBe(true);
  });
});
```

**Step 2: Run tests**

Run: `bun run test`
Expected: all pass

**Step 3: Commit**

```bash
git add src/pipeline/__tests__/analyze.test.ts
git commit -m "test: add analyze module tests"
```

---

### Task 6: Add tests for transform module

**Files:**
- Create: `src/pipeline/__tests__/transform.test.ts`

Transform needs a realistic setup with code files containing `figma:asset/` imports and an assets dir with hash-named binary files.

**Step 1: Write tests**

```ts
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { mkdir, writeFile, rm } from "node:fs/promises";
import { join } from "node:path";
import { transform } from "../transform.js";
import type { AnalysisResult } from "../analyze.js";

const TEST_DIR = join("/tmp", "fmx-test-transform");
const codeDir = join(TEST_DIR, "code");
const assetsDir = join(TEST_DIR, "assets");

beforeEach(async () => {
  await mkdir(join(codeDir, "src"), { recursive: true });
  await mkdir(join(assetsDir, "images"), { recursive: true });
});

afterEach(async () => {
  await rm(TEST_DIR, { recursive: true, force: true });
});

// PNG magic bytes
const PNG_HEADER = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

describe("transform", () => {
  it("rewrites figma:asset imports to public asset paths", async () => {
    const hash = "deadbeef01";
    await writeFile(
      join(codeDir, "src", "Hero.tsx"),
      `import heroImg from "figma:asset/${hash}.png";\nexport default heroImg;\n`
    );
    await writeFile(join(assetsDir, "images", hash), PNG_HEADER);
    await writeFile(
      join(codeDir, "package.json"),
      JSON.stringify({ dependencies: { react: "^18" } })
    );

    const analysis: AnalysisResult = {
      reachableFiles: new Set(["src/Hero.tsx"]),
      unreachableFiles: new Set(),
      figmaAssets: new Map([[hash, "png"]]),
      totalFiles: 1,
    };

    const result = await transform(codeDir, assetsDir, analysis);
    const transformed = result.transformedFiles.get("src/Hero.tsx");
    expect(transformed).toContain(`const heroImg = "/assets/${hash}.png"`);
    expect(result.assetMappings).toHaveLength(1);
    expect(result.assetMappings[0].realExt).toBe("png");
  });

  it("warns when asset file not found", async () => {
    await writeFile(
      join(codeDir, "src", "Hero.tsx"),
      `import heroImg from "figma:asset/missing123.png";\nexport default heroImg;\n`
    );
    await writeFile(
      join(codeDir, "package.json"),
      JSON.stringify({ dependencies: { react: "^18" } })
    );

    const analysis: AnalysisResult = {
      reachableFiles: new Set(["src/Hero.tsx"]),
      unreachableFiles: new Set(),
      figmaAssets: new Map([["missing123", "png"]]),
      totalFiles: 1,
    };

    const result = await transform(codeDir, assetsDir, analysis);
    expect(result.warnings.length).toBeGreaterThan(0);
    expect(result.warnings[0]).toContain("missing123");
  });

  it("cleans package.json and moves peerDeps", async () => {
    await writeFile(
      join(codeDir, "src", "App.tsx"),
      `import { useState } from "react";\nexport function App() { return null; }\n`
    );
    await writeFile(
      join(codeDir, "package.json"),
      JSON.stringify({
        dependencies: { "unused-lib": "^1.0" },
        peerDependencies: { react: "^18", "react-dom": "^18" },
      })
    );

    const analysis: AnalysisResult = {
      reachableFiles: new Set(["src/App.tsx"]),
      unreachableFiles: new Set(),
      figmaAssets: new Map(),
      totalFiles: 1,
    };

    const result = await transform(codeDir, assetsDir, analysis);
    expect(result.cleanedPackageJson.dependencies.react).toBeDefined();
    expect(result.cleanedPackageJson.dependencies["react-dom"]).toBeDefined();
    expect(result.cleanedPackageJson.dependencies["unused-lib"]).toBeUndefined();
    expect(result.cleanedPackageJson.peerDependencies).toBeUndefined();
    expect(result.depsRemoved).toBe(1);
  });
});
```

**Step 2: Run tests**

Run: `bun run test`
Expected: all pass

**Step 3: Commit**

```bash
git add src/pipeline/__tests__/transform.test.ts
git commit -m "test: add transform module tests"
```

---

### Task 7: Add tests for fix-styles module

**Files:**
- Create: `src/pipeline/__tests__/fix-styles.test.ts`

**Step 1: Write tests**

```ts
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { mkdir, writeFile, rm } from "node:fs/promises";
import { join } from "node:path";
import { fixStyles } from "../fix-styles.js";

const TEST_DIR = join("/tmp", "fmx-test-fix-styles");

beforeEach(async () => {
  await mkdir(join(TEST_DIR, "src", "styles"), { recursive: true });
});

afterEach(async () => {
  await rm(TEST_DIR, { recursive: true, force: true });
});

describe("fixStyles", () => {
  it("adds root height rules to theme.css", async () => {
    const css = `@tailwind base;\n@tailwind components;\n@tailwind utilities;\n`;
    await writeFile(join(TEST_DIR, "src", "styles", "theme.css"), css);

    const transformedFiles = new Map<string, string>();
    const reachableFiles = new Set<string>();

    const result = await fixStyles(transformedFiles, reachableFiles, TEST_DIR);
    expect(result.totalFixes).toBe(1);
    expect(transformedFiles.get("src/styles/theme.css")).toContain("#root");
    expect(transformedFiles.get("src/styles/theme.css")).toContain("height: 100%");
  });

  it("skips theme.css if root height already present", async () => {
    const css = `#root {\n  height: 100%;\n}\n`;
    await writeFile(join(TEST_DIR, "src", "styles", "theme.css"), css);

    const transformedFiles = new Map<string, string>();
    const reachableFiles = new Set<string>();

    const result = await fixStyles(transformedFiles, reachableFiles, TEST_DIR);
    expect(result.totalFixes).toBe(0);
  });

  it("applies fixes to already-transformed content", async () => {
    const css = `@tailwind base;\n`;
    await writeFile(join(TEST_DIR, "src", "styles", "theme.css"), "original");

    const transformedFiles = new Map<string, string>();
    transformedFiles.set("src/styles/theme.css", css);
    const reachableFiles = new Set<string>();

    const result = await fixStyles(transformedFiles, reachableFiles, TEST_DIR);
    expect(result.totalFixes).toBe(1);
    const output = transformedFiles.get("src/styles/theme.css")!;
    expect(output).toContain("@tailwind base");
    expect(output).toContain("#root");
  });
});
```

**Step 2: Run tests**

Run: `bun run test`
Expected: all pass

**Step 3: Commit**

```bash
git add src/pipeline/__tests__/fix-styles.test.ts
git commit -m "test: add fix-styles module tests"
```

---

### Task 8: Add LICENSE file

**Files:**
- Create: `LICENSE`

**Step 1: Create MIT license**

Create `LICENSE` with MIT text. Replace `[AUTHOR]` with user's name/handle.

> NOTE: Ask the user for their full name or GitHub username for the copyright line.

**Step 2: Commit**

```bash
git add LICENSE
git commit -m "chore: add MIT license"
```

---

### Task 9: Add README.md

**Files:**
- Create: `README.md`

**Step 1: Write README**

Structure:
```markdown
# fmx

Turn [Figma Make](https://www.figma.com/make) exports into clean React + Vite + Tailwind apps.

## What it does

Takes a directory containing a Figma Make `.zip` + `.make` export pair and generates a production-ready React app:

- Extracts and resolves all image assets (auto-detects PNG, JPG, GIF, SVG, WebP)
- Rewrites `figma:asset/` imports to standard asset paths
- Tree-shakes unused components (Figma Make exports all shadcn/ui components)
- Cleans `package.json` — removes unused deps, fixes peer dependencies
- Applies CSS fixes for common Figma Make layout issues

## Install

\`\`\`bash
npm install -g fmx
\`\`\`

## Usage

\`\`\`bash
# Basic — output dir matches export name
fmx ./my-figma-export

# Custom output directory
fmx ./my-figma-export -o my-app
\`\`\`

Then:
\`\`\`bash
cd my-app
npm install
npm run dev
\`\`\`

## How it works

\`\`\`
.zip + .make → validate → extract → analyze → transform → write → clean app
\`\`\`

1. **Validate** — finds matching `.zip`/`.make` file pair
2. **Extract** — unzips both archives to temp directory
3. **Analyze** — traces imports from `main.tsx`, identifies reachable files and assets
4. **Transform** — rewrites asset imports, detects file types via magic bytes, cleans deps
5. **Write** — copies only reachable files, resolved assets, and cleaned config

## Expected input

A directory with two files exported from Figma Make:
- `project-name.zip` — React source code
- `project-name.make` — image assets archive

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

MIT
```

**Step 2: Commit**

```bash
git add README.md
git commit -m "docs: add README"
```

---

### Task 10: Add CONTRIBUTING.md

**Files:**
- Create: `CONTRIBUTING.md`

**Step 1: Write contributing guide**

```markdown
# Contributing to fmx

## Setup

\`\`\`bash
git clone <repo-url>
cd fmx
bun install
\`\`\`

## Development

\`\`\`bash
# Run directly (development)
bun src/cli.tsx ./test-export

# Build
bun run build

# Run built version
node dist/cli.js ./test-export

# Run tests
bun run test

# Type check
bun run typecheck
\`\`\`

## Project structure

\`\`\`
src/
├── cli.tsx              # Entry point, arg parsing
├── app.tsx              # Ink app, orchestrates pipeline
├── pipeline/
│   ├── validate.ts      # Input validation
│   ├── extract.ts       # Zip extraction
│   ├── analyze.ts       # Import tracing, tree-shaking
│   ├── transform.ts     # Asset resolution, dep cleanup
│   ├── fix-styles.ts    # CSS fixes for Figma Make quirks
│   └── write.ts         # Output writer
│   └── __tests__/       # Tests for each module
└── ui/
    ├── StepList.tsx      # Progress display
    └── Summary.tsx       # Final output summary
\`\`\`

## Pull requests

1. Fork and create a branch from `main`
2. Add tests for new functionality
3. Make sure `bun run test` and `bun run typecheck` pass
4. Keep PRs focused — one feature or fix per PR
\`\`\`

**Step 2: Commit**

```bash
git add CONTRIBUTING.md
git commit -m "docs: add contributing guide"
```

---

### Task 11: Add GitHub issue templates

**Files:**
- Create: `.github/ISSUE_TEMPLATE/bug_report.md`
- Create: `.github/ISSUE_TEMPLATE/feature_request.md`

**Step 1: Create bug report template**

```markdown
---
name: Bug report
about: Report something that isn't working
---

**What happened?**

**What did you expect?**

**Steps to reproduce**
1.
2.
3.

**Environment**
- fmx version:
- Node version:
- OS:
```

**Step 2: Create feature request template**

```markdown
---
name: Feature request
about: Suggest an improvement
---

**What problem does this solve?**

**What does the solution look like?**

**Alternatives considered**
```

**Step 3: Commit**

```bash
git add .github/
git commit -m "chore: add GitHub issue templates"
```

---

### Task 12: Add GitHub Actions CI

**Files:**
- Create: `.github/workflows/ci.yml`

**Step 1: Create CI workflow**

```yaml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build-and-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: oven-sh/setup-bun@v2
        with:
          bun-version: latest

      - run: bun install

      - name: Type check
        run: bun run typecheck

      - name: Build
        run: bun run build

      - name: Test
        run: bun run test
```

**Step 2: Commit**

```bash
git add .github/workflows/ci.yml
git commit -m "ci: add GitHub Actions build and test workflow"
```

---

### Task 13: Add .gitignore and .npmignore updates

**Files:**
- Modify: `.gitignore`

**Step 1: Update .gitignore**

```
node_modules/
dist/
*.tgz
.DS_Store
```

**Step 2: Commit**

```bash
git add .gitignore
git commit -m "chore: update gitignore for npm packaging"
```

---

### Task 14: Final package.json polish + verify full build

**Files:**
- Modify: `package.json`
- Modify: `tsconfig.json` (remove `bun-types` from required types if it blocks Node compat)

**Step 1: Final package.json state**

Ensure all fields are set:
- `name`, `version`, `description`, `license`, `type`, `bin`, `files`, `engines`, `keywords`, `scripts`
- `repository` and `author` fields (user will fill in URL later)

**Step 2: Full build + test cycle**

Run:
```bash
bun run typecheck && bun run build && bun run test
```

Expected: all green

**Step 3: Test with Node directly**

Run:
```bash
node dist/cli.js --help
```

Expected: shows fmx help text, no errors

**Step 4: Commit**

```bash
git add package.json tsconfig.json
git commit -m "chore: finalize package.json for npm publishing"
```

---

## Summary

| Task | Description | Est. complexity |
|------|-------------|----------------|
| 1 | Add tsup + vitest tooling | Low |
| 2 | Replace Bun APIs with Node equivalents | Medium |
| 3 | Rename to fmx | Low |
| 4 | Tests: validate module | Low |
| 5 | Tests: analyze module | Medium |
| 6 | Tests: transform module | Medium |
| 7 | Tests: fix-styles module | Low |
| 8 | LICENSE | Trivial |
| 9 | README | Low |
| 10 | CONTRIBUTING.md | Low |
| 11 | Issue templates | Trivial |
| 12 | GitHub Actions CI | Low |
| 13 | Update .gitignore | Trivial |
| 14 | Final polish + verify | Low |
