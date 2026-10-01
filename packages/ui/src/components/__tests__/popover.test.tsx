import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Button } from "../button";
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "../popover";

describe("Popover", () => {
  it("opens extras without covering the page", async () => {
    const user = userEvent.setup();
    render(
      <Popover>
        <PopoverTrigger asChild>
          <Button>Demo</Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverClose asChild>
            <Button>Simular carga</Button>
          </PopoverClose>
        </PopoverContent>
      </Popover>,
    );

    expect(screen.queryByText("Simular carga")).not.toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Demo" }));
    expect(screen.getByText("Simular carga")).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Simular carga" }));
    expect(screen.queryByText("Simular carga")).not.toBeInTheDocument();
  });
});
