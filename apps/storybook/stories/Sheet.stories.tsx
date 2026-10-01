import type { Meta, StoryObj } from "@storybook/react";
import {
  Button,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@sable/ui";

const meta: Meta = { title: "Core/Sheet" };
export default meta;

export const Default: StoryObj = {
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Detalhe</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>PED-1042</SheetTitle>
          <SheetDescription>Norte Log · Caxias do Sul</SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <Button variant="secondary">Fechar</Button>
          <Button>Salvar</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
};
