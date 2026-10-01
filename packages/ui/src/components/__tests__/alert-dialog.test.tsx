import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Button } from "../button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../alert-dialog";

describe("AlertDialog", () => {
  it("asks before the destructive action", async () => {
    const user = userEvent.setup();
    const onArchive = vi.fn();
    render(
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button>Arquivar</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Arquivar 3 pedidos?</AlertDialogTitle>
            <AlertDialogDescription>
              O histórico permanece.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={onArchive}>Arquivar</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>,
    );

    expect(screen.queryByRole("alertdialog")).not.toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Arquivar" }));
    expect(screen.getByRole("alertdialog")).toHaveTextContent(
      "Arquivar 3 pedidos?",
    );

    await user.click(screen.getByRole("button", { name: "Cancelar" }));
    expect(screen.queryByRole("alertdialog")).not.toBeInTheDocument();
    expect(onArchive).not.toHaveBeenCalled();

    await user.click(screen.getByRole("button", { name: "Arquivar" }));
    await user.click(
      within(screen.getByRole("alertdialog")).getByRole("button", {
        name: "Arquivar",
      }),
    );
    expect(onArchive).toHaveBeenCalledTimes(1);
  });
});
