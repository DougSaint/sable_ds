import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Alert, AlertDescription, AlertTitle } from "../alert";

describe("Alert", () => {
  it("uses status for default and alert for danger", () => {
    const { rerender } = render(
      <Alert>
        <AlertTitle>Pronto</AlertTitle>
      </Alert>,
    );
    expect(screen.getByRole("status")).toHaveTextContent("Pronto");

    rerender(
      <Alert variant="danger">
        <AlertTitle>Falha</AlertTitle>
        <AlertDescription>Tente de novo</AlertDescription>
      </Alert>,
    );
    expect(screen.getByRole("alert")).toHaveTextContent("Falha");
    expect(screen.getByText("Tente de novo")).toBeInTheDocument();
  });

  it("marks warning as alert", () => {
    render(
      <Alert variant="warning">
        <AlertTitle>Atrasado</AlertTitle>
      </Alert>,
    );
    expect(screen.getByRole("alert")).toHaveTextContent("Atrasado");
  });
});
