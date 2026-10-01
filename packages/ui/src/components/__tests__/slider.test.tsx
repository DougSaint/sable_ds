import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Slider } from "../slider";

describe("Slider", () => {
  it("steps the digest hour with arrows", async () => {
    const user = userEvent.setup();
    render(
      <Slider
        defaultValue={[8]}
        min={6}
        max={20}
        step={1}
        aria-label="Horário do digest"
      />,
    );

    const thumb = screen.getByRole("slider", { name: "Horário do digest" });
    expect(thumb).toHaveAttribute("aria-valuenow", "8");
    thumb.focus();
    await user.keyboard("{ArrowRight}");
    expect(thumb).toHaveAttribute("aria-valuenow", "9");
  });
});
