import type { Meta, StoryObj } from "@storybook/react";
import { Field } from "@sable/ui";
import { Input } from "@sable/ui";

const meta: Meta<typeof Field> = {
  title: "Forms/Field",
  component: Field,
};
export default meta;
type Story = StoryObj<typeof Field>;

export const Hint: Story = {
  render: () => (
    <Field label="E-mail" htmlFor="h" hint="Use o corporativo">
      <Input id="h" />
    </Field>
  ),
};
export const Error: Story = {
  render: () => (
    <Field label="E-mail" htmlFor="e" error="E-mail inválido">
      <Input id="e" aria-invalid defaultValue="x" />
    </Field>
  ),
};
