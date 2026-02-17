#!/usr/bin/env bun
import { render, Text, Box } from "ink";
import meow from "meow";
import { resolve } from "node:path";
import { validateInput } from "./pipeline/validate.js";

const cli = meow(
  `
  Usage
    $ figmamake <dir>

  Options
    -o, --output  Output directory name

  Examples
    $ figmamake ./my-export
    $ figmamake ./my-export -o my-app
`,
  {
    importMeta: import.meta,
    flags: {
      output: {
        type: "string",
        shortFlag: "o",
      },
    },
  }
);

if (cli.input.length === 0) {
  cli.showHelp();
  process.exit(1);
}

const dir = resolve(cli.input[0]);

try {
  const input = await validateInput(dir, cli.flags.output);
  render(
    <Box flexDirection="column">
      <Text bold>figmamake v1.0.0</Text>
      <Text>Processing: {input.baseName}</Text>
      <Text dimColor>zip: {input.zipPath}</Text>
      <Text dimColor>make: {input.makePath}</Text>
      <Text dimColor>output: {input.outputDir}</Text>
    </Box>
  );
} catch (e: any) {
  render(<Text color="red">Error: {e.message}</Text>);
  process.exit(1);
}
