import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Field } from "../field";
import { Input } from "../input";

describe("Field", () => {
  it("renders label and control", () => {
    render(
      <Field label="E-mail" htmlFor="email">
        <Input id="email" />
      </Field>,
    );
    expect(screen.getByLabelText("E-mail")).toBeInTheDocument();
  });

  it("shows hint when there is no error", () => {
    render(
      <Field label="E-mail" hint="Use o corporativo">
        <Input />
      </Field>,
    );
    expect(screen.getByText("Use o corporativo")).toBeInTheDocument();
  });

  it("shows error instead of hint and sets alert", () => {
    render(
      <Field label="E-mail" hint="hint" error="E-mail inválido">
        <Input />
      </Field>,
    );
    expect(screen.queryByText("hint")).not.toBeInTheDocument();
    expect(screen.getByRole("alert")).toHaveTextContent("E-mail inválido");
  });
});
