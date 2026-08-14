import type { Metadata } from "next";
import { Prose } from "@/components/example";
import { EmptyState, ErrorState } from "@/components/patterns/empty-error";

export const metadata: Metadata = { title: "Empty / error" };

export default function Page() {
  return (
    <div className="max-w-3xl">
      <Prose>
        <h1>Empty / error</h1>
        <p>
          Lista vazia e falha de carregamento são telas diferentes. Vazio pede
          o próximo passo. Erro pede para tentar de novo.
        </p>
      </Prose>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <EmptyState />
        <ErrorState />
      </div>
    </div>
  );
}
