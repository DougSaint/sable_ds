import type { Meta, StoryObj } from "@storybook/react";
import { Button, SelectionBar } from "@sable/ui";

const meta: Meta = { title: "Data/SelectionBar" };
export default meta;

export const Default: StoryObj = {
  render: () => (
    <SelectionBar count={3} label="3 pedidos selecionados" className="w-96">
      <Button size="sm">Arquivar</Button>
    </SelectionBar>
  ),
};
