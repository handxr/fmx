import { useState, useEffect } from "react";
import { createRequire } from "node:module";
import { Box, Text, Newline, useApp } from "ink";
import { StepList, type Step } from "./ui/StepList.js";
import { Summary, type SummaryData } from "./ui/Summary.js";
import { extract } from "./pipeline/extract.js";
import { analyze } from "./pipeline/analyze.js";
import { resolveDeps } from "./pipeline/resolve-deps.js";
import { transform } from "./pipeline/transform.js";
import { writeOutput } from "./pipeline/write.js";
import type { ValidatedInput } from "./pipeline/validate.js";

const require = createRequire(import.meta.url);
const { version } = require("../package.json");

interface AppProps {
  input: ValidatedInput;
}

export function App({ input }: AppProps) {
  const { exit } = useApp();
  const [steps, setSteps] = useState<Step[]>([
    { label: "Extracting files", status: "pending" },
    { label: "Analyzing dependencies", status: "pending" },
    { label: "Resolving dependencies", status: "pending" },
    { label: "Transforming imports", status: "pending" },
    { label: "Writing output", status: "pending" },
  ]);
  const [summary, setSummary] = useState<SummaryData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const updateStep = (index: number, update: Partial<Step>) => {
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

        // Phase 3: Resolve deps
        updateStep(2, { status: "running" });
        const resolveResult = await resolveDeps(
          extractResult.codeDir,
          analysisResult.reachableFiles
        );
        updateStep(2, {
          status: "done",
          detail: resolveResult.importsFixed > 0 || resolveResult.depsAdded > 0
            ? `${resolveResult.importsFixed} imports fixed, ${resolveResult.depsAdded} deps added`
            : undefined,
        });

        // Phase 4: Transform
        updateStep(3, { status: "running" });
        const transformResult = await transform(
          extractResult.codeDir,
          extractResult.assetsDir,
          analysisResult
        );
        updateStep(3, {
          status: "done",
          detail: `${transformResult.assetMappings.length} assets, ${transformResult.styleFixCount} style fixes`,
        });

        // Phase 5: Write
        updateStep(4, { status: "running" });
        const writeResult = await writeOutput(
          extractResult.codeDir,
          input.outputDir,
          analysisResult,
          transformResult
        );
        updateStep(4, { status: "done" });

        // Compute summary stats
        const keptDeps = Object.keys(
          (transformResult.cleanedPackageJson as any).dependencies || {}
        ).length;

        setSummary({
          outputDir: input.outputDir,
          filesCopied: writeResult.filesCopied,
          filesRemoved: analysisResult.unreachableFiles.size,
          assetsCopied: writeResult.assetsWritten,
          assetsDiscarded: extractResult.totalImages - writeResult.assetsWritten,
          depsKept: keptDeps,
          depsRemoved: transformResult.depsRemoved,
          styleFixCount: transformResult.styleFixCount,
          importsFixed: resolveResult.importsFixed,
          depsAdded: resolveResult.depsAdded,
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
        <Text bold>figmx</Text>
        <Text dimColor> v{version}</Text>
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
