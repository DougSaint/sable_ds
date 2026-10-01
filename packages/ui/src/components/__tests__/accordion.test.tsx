import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../accordion";

describe("Accordion", () => {
  it("expands a section and reveals the content", async () => {
    const user = userEvent.setup();
    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="notif">
          <AccordionTrigger>Notificações</AccordionTrigger>
          <AccordionContent>Relatórios semanais</AccordionContent>
        </AccordionItem>
      </Accordion>,
    );

    expect(screen.getByRole("button", { name: "Notificações" })).toHaveAttribute(
      "aria-expanded",
      "false",
    );
    await user.click(screen.getByRole("button", { name: "Notificações" }));
    expect(screen.getByRole("button", { name: "Notificações" })).toHaveAttribute(
      "aria-expanded",
      "true",
    );
    expect(screen.getByText("Relatórios semanais")).toBeVisible();
  });
});
