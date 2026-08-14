import type { Meta, StoryObj } from "@storybook/react";
import { Field, Input, Textarea } from "@sable/ui";

const meta: Meta<typeof Input> = {
  title: "Core/Input",
  component: Input,
};
export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = { args: { placeholder: "Buscar…" } };
export const Disabled: Story = { args: { placeholder: "Off", disabled: true } };
export const WithField: Story = {
  render: () => (
    <Field label="E-mail" htmlFor="email" hint="Corporativo">
      <Input id="email" />
    </Field>
  ),
};
export const TextareaDefault: Story = {
  render: () => <Textarea placeholder="Observação" />,
};
