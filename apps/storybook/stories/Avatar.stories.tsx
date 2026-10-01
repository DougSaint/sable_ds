import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "@sable/ui";

const meta: Meta = { title: "Core/Avatar" };
export default meta;

export const Initials: StoryObj = {
  render: () => (
    <div className="flex items-center gap-3">
      <Avatar fallback="NL" aria-label="Norte Log" size="sm" />
      <Avatar fallback="AC" aria-label="Ana Costa" />
      <Avatar fallback="DS" aria-label="Doug Saint" size="lg" />
    </div>
  ),
};
