import { join } from "node:path";

export interface StyleRule {
  name: string;
  description: string;
  appliesTo: (filePath: string) => boolean;
  fix: (content: string, filePath: string) => string;
}

export interface StyleFixResult {
  totalFixes: number;
  applied: Array<{ rule: string; file: string }>;
}

// --- Rules ---
// Extensible rule system: add new StyleRule objects to this array.
// Each rule must be idempotent and only modify content it's certain about.

const ensureRootHeight: StyleRule = {
  name: "ensure-root-height",
  description: "Ensures html, body, #root have full height for layouts using size-full",
  appliesTo: (filePath) => filePath === "src/styles/theme.css",
  fix: (content) => {
    if (content.includes("#root") && content.includes("height")) return content;

    const block = [
      "",
      "html, body, #root {",
      "  height: 100%;",
      "  min-height: 100svh;",
      "}",
      "",
      "body {",
      "  margin: 0;",
      "  overflow-x: hidden;",
      "}",
      "",
    ].join("\n");

    return content + block;
  },
};

const rules: StyleRule[] = [ensureRootHeight];

// --- Main ---

export async function fixStyles(
  transformedFiles: Map<string, string>,
  reachableFiles: Set<string>,
  codeDir: string
): Promise<StyleFixResult> {
  const applied: Array<{ rule: string; file: string }> = [];

  // Collect all files to process: reachable files + well-known CSS targets
  // (style files are always copied to output but may not be in reachableFiles)
  const filesToProcess = new Set(reachableFiles);
  const cssTargets = ["src/styles/theme.css"];
  for (const target of cssTargets) {
    if (!filesToProcess.has(target) && await Bun.file(join(codeDir, target)).exists()) {
      filesToProcess.add(target);
    }
  }

  // Apply rules to every file
  for (const relPath of filesToProcess) {
    let content = transformedFiles.get(relPath) ??
      await Bun.file(join(codeDir, relPath)).text();

    for (const rule of rules) {
      if (!rule.appliesTo(relPath)) continue;

      const fixed = rule.fix(content, relPath);
      if (fixed !== content) {
        content = fixed;
        transformedFiles.set(relPath, content);
        applied.push({ rule: rule.name, file: relPath });
      }
    }
  }

  return { totalFixes: applied.length, applied };
}
