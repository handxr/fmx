import { mkdir, readdir } from "node:fs/promises";
import { join } from "node:path";
// @ts-ignore - no type declarations available
import unzipper from "unzipper";

export interface ExtractResult {
  codeDir: string;
  assetsDir: string;
  tempDir: string;
  totalImages: number;
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

  const zipArchive = await unzipper.Open.file(zipPath);
  await zipArchive.extract({ path: codeDir });

  const makeArchive = await unzipper.Open.file(makePath);
  await makeArchive.extract({ path: assetsDir });

  let totalImages = 0;
  try {
    const imageFiles = await readdir(join(assetsDir, "images"));
    totalImages = imageFiles.filter((f) => f !== "." && f !== "..").length;
  } catch {
    // No images dir
  }

  return { codeDir, assetsDir, tempDir, totalImages };
}
