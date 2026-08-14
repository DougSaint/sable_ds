import type { Meta, StoryObj } from "@storybook/react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@sable/ui";

const meta: Meta = { title: "Core/Select" };
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-56" aria-label="Status">
        <SelectValue placeholder="Status" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="open">Aberto</SelectItem>
        <SelectItem value="done">Concluído</SelectItem>
        <SelectItem value="blocked" disabled>
          Bloqueado
        </SelectItem>
      </SelectContent>
    </Select>
  ),
};
