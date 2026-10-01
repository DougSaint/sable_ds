import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from "@sable/ui";

const meta: Meta = { title: "Core/Progress" };
export default meta;

export const Determinate: StoryObj = {
  render: () => (
    <Progress value={40} aria-label="Exportar CSV" className="w-64" />
  ),
};
