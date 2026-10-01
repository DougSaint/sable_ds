import type { Meta, StoryObj } from "@storybook/react";
import { Kbd } from "@sable/ui";

const meta: Meta = { title: "Core/Kbd" };
export default meta;

export const Default: StoryObj = {
  render: () => (
    <div className="flex items-center gap-2">
      <Kbd>⌘K</Kbd>
      <Kbd>Esc</Kbd>
    </div>
  ),
};
