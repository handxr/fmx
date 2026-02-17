import { mkdir, copyFile, readdir, stat } from "node:fs/promises";
import { join, dirname } from "node:path";
import type { TransformResult } from "./transform.js";
import type { AnalysisResult } from "./analyze.js";

const ROOT_FILES = [
  "index.html",
  "vite.config.ts",
  "postcss.config.mjs",
  "tsconfig.json",
  "ATTRIBUTIONS.md",
  "README.md",
];

const STYLE_DIR = "src/styles";

export interface WriteResult {
  filesCopied: number;
  assetsWritten: number;
}

export async function writeOutput(
  codeDir: string,
  outputDir: string,
  analysis: AnalysisResult,
  transformResult: TransformResult
): Promise<WriteResult> {
  let filesCopied = 0;
  let assetsWritten = 0;

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

    if (transformResult.transformedFiles.has(relPath)) {
      await Bun.write(dest, transformResult.transformedFiles.get(relPath)!);
    } else {
      await copyFile(join(codeDir, relPath), dest);
    }
    filesCopied++;
  }

  // 4. Copy assets to public/assets/
  const assetsOutDir = join(outputDir, "public", "assets");
  await mkdir(assetsOutDir, { recursive: true });

  for (const mapping of transformResult.assetMappings) {
    const dest = join(outputDir, "public", mapping.targetPath);
    await mkdir(dirname(dest), { recursive: true });
    await copyFile(mapping.sourcePath, dest);
    assetsWritten++;
  }

  // 5. Write cleaned package.json
  await Bun.write(
    join(outputDir, "package.json"),
    JSON.stringify(transformResult.cleanedPackageJson, null, 2) + "\n"
  );
  filesCopied++;

  return { filesCopied, assetsWritten };
}
