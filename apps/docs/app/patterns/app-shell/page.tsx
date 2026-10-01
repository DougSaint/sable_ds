import type { Metadata } from "next";
import { Prose } from "@/components/example";
import { AppShellPattern } from "@/components/patterns/app-shell";

export const metadata: Metadata = { title: "App Shell" };

export default function Page() {
  return (
    <div className="max-w-4xl">
      <Prose>
        <h1>App Shell</h1>
        <p>
          Cabeçalho, navegação e a página. O breadcrumb diz o nível; a
          lateral separa Operação e Conta. ⌘K abre a paleta.
        </p>
      </Prose>
      <div className="mt-8">
        <AppShellPattern />
      </div>
    </div>
  );
}
