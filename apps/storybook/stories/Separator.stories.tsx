import type { Meta, StoryObj } from "@storybook/react";
import { Separator } from "@sable/ui";

const meta: Meta = { title: "Core/Separator" };
export default meta;

export const Horizontal: StoryObj = {
  render: () => <Separator className="w-64" />,
};

export const Vertical: StoryObj = {
  render: () => (
    <div className="flex h-8 items-center gap-3">
      <span className="text-sm">Buscar</span>
      <Separator orientation="vertical" />
      <span className="text-sm">Conta</span>
    </div>
  ),
};
