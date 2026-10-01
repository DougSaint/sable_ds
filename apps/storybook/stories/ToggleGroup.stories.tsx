import type { Meta, StoryObj } from "@storybook/react";
import { ToggleGroup, ToggleGroupItem } from "@sable/ui";

const meta: Meta = { title: "Core/ToggleGroup" };
export default meta;

export const Density: StoryObj = {
  render: () => (
    <ToggleGroup type="single" defaultValue="comfortable" aria-label="Densidade">
      <ToggleGroupItem value="comfortable">Comfortable</ToggleGroupItem>
      <ToggleGroupItem value="compact">Compact</ToggleGroupItem>
    </ToggleGroup>
  ),
};
