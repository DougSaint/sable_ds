import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@sable/ui";

const meta: Meta<typeof Button> = {
  title: "Core/Button",
  component: Button,
  args: { children: "Salvar" },
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {};
export const Secondary: Story = { args: { variant: "secondary" } };
export const Outline: Story = { args: { variant: "outline" } };
export const Ghost: Story = { args: { variant: "ghost" } };
export const Destructive: Story = { args: { variant: "destructive", children: "Excluir" } };
export const Disabled: Story = { args: { disabled: true } };
export const Icon: Story = { args: { size: "icon", children: "→", "aria-label": "Próximo" } };
