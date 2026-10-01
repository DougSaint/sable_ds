import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ScrollArea } from "../scroll-area";

describe("ScrollArea", () => {
  it("keeps the list inside a named region", () => {
    render(
      <ScrollArea className="h-32" aria-label="Módulos">
        <ul>
          {["Pedidos", "Clientes", "Relatórios", "Estoque"].map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </ScrollArea>,
    );

    const region = screen.getByLabelText("Módulos");
    expect(region).toHaveAttribute("data-slot", "scroll-area");
    expect(screen.getByText("Estoque")).toBeInTheDocument();
  });
});
