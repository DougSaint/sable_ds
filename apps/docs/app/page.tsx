import Link from "next/link";
import { Button } from "@sable/ui";
import { AppShellPattern } from "@/components/patterns/app-shell";

export default function HomePage() {
  return (
    <div>
      <p className="mb-3 inline-flex items-center gap-2 font-mono text-xs tracking-widest text-muted uppercase">
        Design system · produtos operacionais
      </p>
      <h1 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
        Interface para quem opera o dia inteiro.
      </h1>
      <p className="mt-3 max-w-xl text-[0.95rem] leading-7 text-muted">
        Pedidos, cadastros, configuração. Dark-first, um accent terracotta,
        duas densidades — compact quando a tela enche.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Button asChild>
          <Link href="/foundations/">Foundations</Link>
        </Button>
        <Button asChild variant="secondary">
          <Link href="/patterns/app-shell/">Patterns</Link>
        </Button>
      </div>
      <div className="mt-10">
        <AppShellPattern />
      </div>
    </div>
  );
}
