import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Button } from "../button";
import { SelectionBar } from "../selection-bar";

describe("SelectionBar", () => {
  it("hides when count is zero and shows actions when selected", () => {
    const { rerender } = render(
      <SelectionBar count={0}>
        <Button>Arquivar</Button>
      </SelectionBar>,
    );
    expect(screen.queryByRole("status")).not.toBeInTheDocument();

    rerender(
      <SelectionBar count={3} label="3 pedidos selecionados">
        <Button>Arquivar</Button>
      </SelectionBar>,
    );
    expect(screen.getByRole("status")).toHaveTextContent("3 pedidos selecionados");
    expect(screen.getByRole("button", { name: "Arquivar" })).toBeInTheDocument();
  });
});
