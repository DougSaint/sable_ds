import type { Preview } from "@storybook/react";
import { TooltipProvider, Toaster } from "@sable/ui";
import "../src/styles.css";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "sable",
      values: [{ name: "sable", value: "#0E0C0A" }],
    },
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div data-theme="dark" data-density="comfortable" className="font-sans text-foreground">
        <TooltipProvider>
          <Story />
          <Toaster />
        </TooltipProvider>
      </div>
    ),
  ],
};

export default preview;
