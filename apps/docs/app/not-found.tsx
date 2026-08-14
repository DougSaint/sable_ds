import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@sable/ui";

export const metadata: Metadata = { title: "Não encontrado" };

export default function NotFound() {
  return (
    <div className="max-w-md">
      <h1 className="text-2xl font-semibold tracking-tight">Página não encontrada</h1>
      <p className="mt-2 text-sm text-muted">O endereço não existe neste site.</p>
      <Button asChild className="mt-6">
        <Link href="/">Home</Link>
      </Button>
    </div>
  );
}
