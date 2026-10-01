import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { ToggleGroup, ToggleGroupItem } from "../toggle-group";

describe("ToggleGroup", () => {
  it("keeps one density selected", async () => {
    const user = userEvent.setup();
    render(
      <ToggleGroup type="single" defaultValue="comfortable" aria-label="Densidade">
        <ToggleGroupItem value="comfortable">Comfortable</ToggleGroupItem>
        <ToggleGroupItem value="compact">Compact</ToggleGroupItem>
      </ToggleGroup>,
    );

    expect(screen.getByRole("radio", { name: "Comfortable" })).toHaveAttribute(
      "data-state",
      "on",
    );
    await user.click(screen.getByRole("radio", { name: "Compact" }));
    expect(screen.getByRole("radio", { name: "Compact" })).toHaveAttribute(
      "data-state",
      "on",
    );
    expect(screen.getByRole("radio", { name: "Comfortable" })).toHaveAttribute(
      "data-state",
      "off",
    );
  });
});
