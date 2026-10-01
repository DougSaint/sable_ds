import type { Metadata } from "next";
import { Prose } from "@/components/example";
import { TableFilterPattern } from "@/components/patterns/table-filter";

export const metadata: Metadata = { title: "Tabela + filtros" };

export default function Page() {
  return (
    <div className="max-w-4xl">
      <Prose>
        <h1>Tabela + filtros</h1>
        <p>
          Busca e status ficam acima da grade. A tabela só lista. Paginação
          embaixo, 8 por página. Se o filtro não devolver nada, mostre o empty
          — não uma tabela oca.
        </p>
      </Prose>
      <div className="mt-8">
        <TableFilterPattern />
      </div>
    </div>
  );
}
