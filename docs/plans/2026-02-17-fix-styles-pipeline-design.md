# Fix Styles Pipeline Step

## Problem

Figma Make exports contain recurring styling issues:
- Undefined CSS classes (e.g. `content-stretch`) used extensively but never defined
- Incorrect alignment in modal/overlay containers (`items-end` instead of `items-center`)
- Missing root height definitions causing layout collapse

These are export-level bugs, not pipeline bugs. The pipeline should auto-correct them.

## Design

### New module: `src/pipeline/fix-styles.ts`

Extensible rule-based system. Each rule is a plain object:

```ts
interface StyleRule {
  name: string;
  description: string;
  appliesTo: (filePath: string) => boolean;
  fix: (content: string, filePath: string) => string;
}
```

Rules are collected in a `STYLE_RULES` array. Adding a new rule = pushing a new object.

### Entry function

```ts
fixStyles(
  transformedFiles: Map<string, string>,
  reachableFiles: Set<string>,
  codeDir: string
): StyleFixResult
```

Called inside `transform()` after asset transforms, before returning. Mutates `transformedFiles` map.

Returns `StyleFixResult` with count of fixes applied and details per rule.

### Initial rules

1. **inject-content-stretch** — Scans TSX files for `content-stretch` class usage. If found, injects `@layer utilities { .content-stretch { width: 100%; } }` into the main CSS file. Acts once on CSS, not per-file.

2. **fix-modal-alignment** — In TSX files, replaces `items-end` with `items-center` inside containers that have modal/overlay patterns (`fixed inset-0`, backdrop classes).

3. **ensure-root-height** — Injects `html, body, #root { height: 100%; }` into base CSS if not already present.

### Pipeline integration

- Runs as sub-step of transform phase
- Fix count shown in CLI summary
- No new UI step needed, just a summary line

## Approach

Approach A: all rules in a single file, functions as pure transforms. No auto-discovery, no config files, no separate directories. Extensible by adding objects to the array.
