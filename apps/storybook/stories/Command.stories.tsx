import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import {
  Button,
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@sable/ui";

const meta: Meta = { title: "Core/Command" };
export default meta;

export const Dialog: StoryObj = {
  render: function R() {
    const [open, setOpen] = useState(true);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Abrir</Button>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <Command>
            <CommandInput placeholder="Ir para…" />
            <CommandList>
              <CommandEmpty>Nada encontrado</CommandEmpty>
              <CommandGroup heading="Operação">
                <CommandItem>Pedidos</CommandItem>
                <CommandItem>Settings</CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </CommandDialog>
      </>
    );
  },
};
