import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../command";

describe("CommandDialog", () => {
  it("lists commands and filters them", async () => {
    const user = userEvent.setup();
    render(
      <CommandDialog open>
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
      </CommandDialog>,
    );

    expect(screen.getByPlaceholderText("Ir para…")).toBeInTheDocument();
    expect(screen.getByText("Pedidos")).toBeInTheDocument();
    await user.type(screen.getByPlaceholderText("Ir para…"), "set");
    expect(screen.getByText("Settings")).toBeInTheDocument();
    expect(screen.queryByText("Pedidos")).not.toBeInTheDocument();
  });
});
