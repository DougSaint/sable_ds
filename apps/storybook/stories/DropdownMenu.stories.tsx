import type { Meta, StoryObj } from "@storybook/react";
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@sable/ui";

const meta: Meta = { title: "Core/DropdownMenu" };
export default meta;

export const Default: StoryObj = {
  render: () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary">Ações</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Editar</DropdownMenuItem>
        <DropdownMenuItem disabled>Desativado</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Excluir</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ),
};
