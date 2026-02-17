import { Box, Text, Newline } from "ink";

export interface SummaryData {
  outputDir: string;
  filesCopied: number;
  filesRemoved: number;
  assetsCopied: number;
  assetsDiscarded: number;
  depsKept: number;
  depsRemoved: number;
  styleFixCount: number;
  importsFixed: number;
  depsAdded: number;
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
          {"Files:   "}
          <Text color="green">{data.filesCopied} copied</Text>
          {", "}
          <Text dimColor>{data.filesRemoved} removed</Text>
        </Text>
        <Text>
          {"Assets:  "}
          <Text color="green">{data.assetsCopied} copied</Text>
          {", "}
          <Text dimColor>{data.assetsDiscarded} discarded</Text>
        </Text>
        <Text>
          {"Deps:    "}
          <Text color="green">{data.depsKept} kept</Text>
          {", "}
          <Text dimColor>{data.depsRemoved} removed</Text>
        </Text>
        {(data.importsFixed > 0 || data.depsAdded > 0) && (
          <Text>
            {"Resolve: "}
            {data.importsFixed > 0 && (
              <Text color="green">{data.importsFixed} imports fixed</Text>
            )}
            {data.importsFixed > 0 && data.depsAdded > 0 && ", "}
            {data.depsAdded > 0 && (
              <Text color="green">{data.depsAdded} deps added</Text>
            )}
          </Text>
        )}
        {data.styleFixCount > 0 && (
          <Text>
            {"Styles:  "}
            <Text color="green">{data.styleFixCount} fixed</Text>
          </Text>
        )}
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
        Next: cd "{data.outputDir}" && npm install && npm run dev
      </Text>
    </Box>
  );
}
