"use client";

import { useEffect, useState } from "react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  toast,
} from "@sable/ui";

const ITEMS = [
  { group: "Operação", items: ["Pedidos", "Clientes", "Relatórios", "Settings"] },
  { group: "Conta", items: ["Perfil", "Sair"] },
] as const;

export function AppCommand({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  return (
    <CommandDialog open={open} onOpenChange={onOpenChange} title="Ir para">
      <Command>
        <CommandInput placeholder="Ir para…" />
        <CommandList>
          <CommandEmpty>Nada encontrado</CommandEmpty>
          {ITEMS.map((g) => (
            <CommandGroup key={g.group} heading={g.group}>
              {g.items.map((item) => (
                <CommandItem
                  key={item}
                  onSelect={() => {
                    toast(item);
                    onOpenChange(false);
                  }}
                >
                  {item}
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </Command>
    </CommandDialog>
  );
}

export function useAppCommand() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return { open, setOpen };
}
