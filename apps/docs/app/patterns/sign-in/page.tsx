import type { Metadata } from "next";
import { Prose } from "@/components/example";
import { SignInPattern } from "@/components/patterns/sign-in";

export const metadata: Metadata = { title: "Sign-in" };

export default function Page() {
  return (
    <div className="max-w-3xl">
      <Prose>
        <h1>Sign-in</h1>
        <p>
          E-mail e senha, com erro no próprio campo. Envie vazio para ver a
          validação.
        </p>
      </Prose>
      <div className="mt-8 rounded-[var(--radius-card)] border border-border bg-background p-8">
        <SignInPattern />
      </div>
    </div>
  );
}
