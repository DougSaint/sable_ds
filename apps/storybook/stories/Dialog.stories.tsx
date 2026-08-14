import type { Meta, StoryObj } from "@storybook/react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@sable/ui";

const meta: Meta = { title: "Core/Dialog" };
export default meta;

export const Default: StoryObj = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Abrir</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Arquivar</DialogTitle>
          <DialogDescription>O pedido sai da lista. O histórico permanece.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="secondary">Cancelar</Button>
          <Button>Confirmar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};
