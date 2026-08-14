import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Button } from "../button";

describe("Button", () => {
  it("renders default variant", () => {
    render(<Button>Salvar</Button>);
    expect(screen.getByRole("button", { name: "Salvar" })).toBeInTheDocument();
  });

  it("applies destructive variant class", () => {
    render(<Button variant="destructive">Excluir</Button>);
    expect(screen.getByRole("button", { name: "Excluir" }).className).toMatch(
      /bg-danger/,
    );
  });

  it("applies ghost and outline variants", () => {
    const { rerender } = render(<Button variant="ghost">Ghost</Button>);
    expect(screen.getByRole("button").className).toMatch(/hover:bg-surface-2/);
    rerender(<Button variant="outline">Outline</Button>);
    expect(screen.getByRole("button").className).toMatch(/border-border/);
  });

  it("is disabled when disabled", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    render(
      <Button disabled onClick={onClick}>
        Off
      </Button>,
    );
    await user.click(screen.getByRole("button"));
    expect(onClick).not.toHaveBeenCalled();
    expect(screen.getByRole("button")).toBeDisabled();
  });
});
