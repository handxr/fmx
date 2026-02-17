# fmx - Open Source Launch Design

**Date:** 2026-02-17
**Status:** Approved
**Approach:** A - Pulir y publicar

## Overview

Prepare the existing `figmamake` CLI tool for open source release as `fmx`. The tool takes Figma Make `.zip` + `.make` exports and merges them into a clean React+Vite+Tailwind app.

**Key decisions:**
- Name: `fmx`
- CLI only (no programmatic API)
- License: MIT
- Runtime: Node compatible (also works with Bun/Deno)
- Publish: local preparation first, user will push to GitHub manually

## 1. Rename to `fmx`

- Update `package.json`: `name` → `"fmx"`, `bin` → `{ "fmx": "./dist/cli.js" }`
- Update help text in `src/cli.tsx` (usage examples, command name)
- Project directory stays as `figmamake/` on disk

## 2. Node Compatibility

- Replace shebang `#!/usr/bin/env bun` with `#!/usr/bin/env node` in build output
- Add build step with `tsup` to compile TSX → JS
  - Entry: `src/cli.tsx`
  - Output: `dist/cli.js` (ESM format)
  - Bundle dependencies: no (keep external)
  - Target: `node18`
- Audit source for Bun-only APIs (`Bun.file()`, `Bun.write()`, `bun:*` imports) and replace with Node equivalents
- Keep `bun-types` in devDependencies for local development

## 3. Tests with Vitest

Test the core pipeline functions:

- **validate.ts** - correctly detects .zip/.make pairs, rejects invalid input
- **extract.ts** - extracts zip archives to temp directories
- **transform.ts** - rewrites `figma:asset/` imports to correct paths
- **analyze.ts** - detects dependencies in JS imports and CSS `@import` statements
- **fix-styles.ts** - applies CSS fix rules

Requires test fixtures:
- Minimal .zip with a React component that imports `figma:asset/hash.png`
- Matching .make with an `images/` folder containing a hash-named file
- CSS file with `@import 'tw-animate-css'` style imports

## 4. README.md

Structure:
1. One-liner description + badges (license, npm version, CI)
2. What it does (with before/after visual: Figma Make export → clean app)
3. Installation: `npm install -g fmx` / `npx fmx`
4. Usage with example
5. Pipeline overview (validate → extract → analyze → transform → write)
6. Supported format (Figma Make .zip + .make)
7. Contributing link
8. License

## 5. OSS Project Files

- `LICENSE` - MIT with author name
- `CONTRIBUTING.md` - local setup, how to run tests, PR guidelines
- `.github/ISSUE_TEMPLATE/bug_report.md` - reproduction steps template
- `.github/ISSUE_TEMPLATE/feature_request.md` - use case template
- `CHANGELOG.md` - starting at v1.0.0

## 6. GitHub Actions CI

Workflow `.github/workflows/ci.yml`:
- Triggers: push to main, pull requests
- Steps:
  1. `bun install`
  2. `bun run build` (tsup)
  3. `bun run test` (vitest)
  4. `tsc --noEmit` (type check)

## 7. package.json for npm

```json
{
  "name": "fmx",
  "version": "1.0.0",
  "description": "Turn Figma Make exports into clean React + Vite + Tailwind apps",
  "bin": { "fmx": "./dist/cli.js" },
  "type": "module",
  "engines": { "node": ">=18" },
  "files": ["dist"],
  "scripts": {
    "build": "tsup",
    "test": "vitest run",
    "typecheck": "tsc --noEmit",
    "prepublishOnly": "bun run build"
  },
  "keywords": ["figma", "figma-make", "react", "vite", "tailwind", "code-generation"],
  "license": "MIT",
  "repository": { "type": "git", "url": "TBD" }
}
```
