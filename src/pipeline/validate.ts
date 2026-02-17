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
  let dirStat;
  try {
    dirStat = await stat(dir);
  } catch {
    throw new Error(`Directory not found: ${dir}`);
  }
  if (!dirStat.isDirectory()) {
    throw new Error(`Not a directory: ${dir}`);
  }

  const files = await readdir(dir);
  const zipFiles = files.filter((f) => f.endsWith(".zip"));
  const makeFiles = files.filter((f) => f.endsWith(".make"));

  if (zipFiles.length === 0 && makeFiles.length === 0) {
    throw new Error(`No .zip or .make files found in ${dir}. Expected a Figma Make export pair.`);
  }
  if (zipFiles.length === 0) {
    throw new Error(`No .zip file found in ${dir}. Found .make: ${makeFiles.join(", ")}`);
  }
  if (makeFiles.length === 0) {
    throw new Error(`No .make file found in ${dir}. Found .zip: ${zipFiles.join(", ")}`);
  }

  const getBase = (name: string) => basename(name, extname(name));

  let matchedZip: string | undefined;
  let matchedMake: string | undefined;

  for (const z of zipFiles) {
    const zBase = getBase(z);
    const match = makeFiles.find((m) => getBase(m) === zBase);
    if (match) {
      matchedZip = z;
      matchedMake = match;
      break;
    }
  }

  if (!matchedZip || !matchedMake) {
    throw new Error(`No matching .zip/.make pair found. .zip: ${zipFiles.join(", ")}. .make: ${makeFiles.join(", ")}`);
  }

  const baseName = getBase(matchedZip);
  const outputDir = join(dir, outputOverride ?? baseName);

  try {
    await stat(outputDir);
    throw new Error(`Output directory already exists: ${outputDir}\nUse -o to specify a different name, or remove the existing directory.`);
  } catch (e: any) {
    if (e.code !== "ENOENT") throw e;
  }

  return { zipPath: join(dir, matchedZip), makePath: join(dir, matchedMake), baseName, outputDir };
}
