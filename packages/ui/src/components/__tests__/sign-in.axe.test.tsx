import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { axe } from "vitest-axe";
import { Button } from "../button";
import { Card, CardContent, CardHeader, CardTitle } from "../card";
import { Field } from "../field";
import { Input } from "../input";

function SignInPattern() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Entrar</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <Field label="E-mail" htmlFor="email">
            <Input id="email" type="email" autoComplete="email" />
          </Field>
          <Field label="Senha" htmlFor="password" className="mt-3">
            <Input id="password" type="password" autoComplete="current-password" />
          </Field>
          <Button type="submit" className="mt-4 w-full">
            Continuar
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

describe("Sign-in pattern a11y", () => {
  it("has no axe violations", async () => {
    const { container } = render(<SignInPattern />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
