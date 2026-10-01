import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Separator } from "../separator";

describe("Separator", () => {
  it("marks a horizontal rule by default", () => {
    render(<Separator />);
    const rule = screen.getByRole("separator");
    expect(rule).toHaveAttribute("aria-orientation", "horizontal");
  });

  it("marks a vertical rule", () => {
    render(<Separator orientation="vertical" />);
    expect(screen.getByRole("separator")).toHaveAttribute(
      "aria-orientation",
      "vertical",
    );
  });
});
