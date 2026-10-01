import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Progress } from "../progress";

describe("Progress", () => {
  it("exposes the percent as a progressbar", () => {
    render(<Progress value={40} aria-label="Exportar CSV" />);
    const bar = screen.getByRole("progressbar", { name: "Exportar CSV" });
    expect(bar).toHaveAttribute("aria-valuenow", "40");
    expect(bar).toHaveAttribute("aria-valuemin", "0");
    expect(bar).toHaveAttribute("aria-valuemax", "100");
  });
});
