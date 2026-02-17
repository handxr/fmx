import { Box, Text } from "ink";
import { Spinner } from "@inkjs/ui";

export type StepStatus = "pending" | "running" | "done" | "error";

export interface Step {
  label: string;
  status: StepStatus;
  detail?: string;
}

function StepIcon({ status }: { status: StepStatus }) {
  switch (status) {
    case "done":
      return <Text color="green">✓</Text>;
    case "running":
      return <Spinner label="" />;
    case "error":
      return <Text color="red">✗</Text>;
    case "pending":
      return <Text dimColor>○</Text>;
  }
}

export function StepList({ steps }: { steps: Step[] }) {
  return (
    <Box flexDirection="column" marginLeft={2}>
      {steps.map((step, i) => (
        <Box key={i} gap={1}>
          <StepIcon status={step.status} />
          <Text
            color={step.status === "error" ? "red" : undefined}
            dimColor={step.status === "pending"}
          >
            {step.label}
          </Text>
          {step.detail && (
            <Text dimColor> ({step.detail})</Text>
          )}
        </Box>
      ))}
    </Box>
  );
}
