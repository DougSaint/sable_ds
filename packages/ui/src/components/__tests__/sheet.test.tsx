import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Button } from "../button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../sheet";

describe("Sheet", () => {
  it("opens from the trigger and closes", async () => {
    const user = userEvent.setup();
    render(
      <Sheet>
        <SheetTrigger asChild>
          <Button>Detalhe</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>PED-1042</SheetTitle>
            <SheetDescription>Norte Log</SheetDescription>
          </SheetHeader>
          <SheetFooter>
            <Button>Salvar</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>,
    );

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Detalhe" }));
    expect(screen.getByRole("dialog")).toHaveTextContent("PED-1042");

    await user.click(screen.getByRole("button", { name: "Fechar" }));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
