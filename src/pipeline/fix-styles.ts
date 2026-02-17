import { join } from "node:path";

export interface StyleRule {
  name: string;
  description: string;
  appliesTo: (filePath: string) => boolean;
  fix: (content: string, filePath: string, context: RuleContext) => string;
}

export interface RuleContext {
  hasContentStretch: boolean;
}

export interface StyleFixResult {
  totalFixes: number;
  applied: Array<{ rule: string; file: string }>;
}

// --- Rules ---

const injectContentStretch: StyleRule = {
  name: "inject-content-stretch",
  description: "Adds .content-stretch utility class when used in JSX but missing from CSS",
  appliesTo: (filePath) => filePath === "src/styles/theme.css",
  fix: (content, _filePath, context) => {
    if (!context.hasContentStretch) return content;
    if (content.includes(".content-stretch")) return content;

    const block = [
      "",
      "@layer utilities {",
      "  .content-stretch {",
      "    width: 100%;",
      "  }",
      "}",
      "",
    ].join("\n");

    return content + block;
  },
};

const rules: StyleRule[] = [injectContentStretch];

// --- Main ---

export async function fixStyles(
  transformedFiles: Map<string, string>,
  reachableFiles: Set<string>,
  codeDir: string
): Promise<StyleFixResult> {
  const applied: Array<{ rule: string; file: string }> = [];

  // Pre-scan: check if any reachable TSX/JSX file uses content-stretch
  let hasContentStretch = false;
  for (const relPath of reachableFiles) {
    if (!relPath.endsWith(".tsx") && !relPath.endsWith(".jsx")) continue;

    const content = transformedFiles.get(relPath) ??
      await Bun.file(join(codeDir, relPath)).text();

    if (content.includes("content-stretch")) {
      hasContentStretch = true;
      break;
    }
  }

  const context: RuleContext = { hasContentStretch };

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

      const fixed = rule.fix(content, relPath, context);
      if (fixed !== content) {
        content = fixed;
        transformedFiles.set(relPath, content);
        applied.push({ rule: rule.name, file: relPath });
      }
    }
  }

  return { totalFixes: applied.length, applied };
}
