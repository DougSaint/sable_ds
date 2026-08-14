import type { Metadata } from "next";
import { Prose } from "@/components/example";
import { DensityForm, MotionButton } from "@/components/foundations-demos";

export const metadata: Metadata = { title: "Foundations" };

const colors = [
  ["background", "#0E0C0A", "bg-background"],
  ["surface", "#161310", "bg-surface"],
  ["surface-2", "#1E1A16", "bg-surface-2"],
  ["foreground", "#F4EFE8", "bg-foreground"],
  ["primary", "#E07A3D", "bg-primary"],
  ["success", "semântico", "bg-success"],
  ["warning", "semântico", "bg-warning"],
  ["danger", "semântico", "bg-danger"],
  ["info", "semântico", "bg-info"],
] as const;

export default function FoundationsPage() {
  return (
    <div className="max-w-4xl">
      <Prose>
        <h1>Foundations</h1>
        <p>
          Cor, tipo, espaço e densidade. Terracotta entra em botão e borda —
          não em parágrafo.
        </p>

        <h2>Cor</h2>
      </Prose>

      <div className="my-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {colors.map(([name, hex, cls]) => (
          <div
            key={name}
            className="overflow-hidden rounded-[var(--radius-control)] border border-border"
          >
            <div className={`h-16 ${cls}`} />
            <div className="bg-surface px-2 py-1.5 font-mono text-xs">
              <div>{name}</div>
              <div className="text-muted">{hex}</div>
            </div>
          </div>
        ))}
      </div>
      <p className="mb-8 text-sm text-muted">
        Primary no botão, com texto escuro em cima. Em parágrafo o contraste
        não segura.
      </p>

      <Prose>
        <h2>Tipo</h2>
      </Prose>
      <div className="my-6 space-y-3 rounded-[var(--radius-card)] border border-border bg-surface p-5">
        <p className="font-sans text-3xl font-semibold tracking-tight">
          IBM Plex Sans
        </p>
        <p className="font-sans text-lg">Pedidos do dia · operação</p>
        <p className="text-sm text-muted">
          Corpo 14–16px. O peso faz a hierarquia, não a cor de accent.
        </p>
        <p className="font-mono text-sm">PED-1042 · Norte Log · R$ 1.240,00</p>
      </div>

      <Prose>
        <h2>Espaço</h2>
        <p>
          Escala de 4px: 4, 8, 16, 24, 32, 48, 64. Controles usam{" "}
          <code>--control-h</code> e <code>--control-px</code>.
        </p>
      </Prose>
      <div className="my-6 flex items-end gap-2">
        {[4, 8, 16, 24, 32, 48].map((n) => (
          <div key={n} className="flex flex-col items-center gap-1">
            <div className="bg-primary" style={{ width: n, height: 32 }} />
            <span className="font-mono text-[0.65rem] text-muted">{n}</span>
          </div>
        ))}
      </div>

      <Prose>
        <h2>Densidade</h2>
        <p>
          Comfortable (40px) e compact (32px). O header das docs troca no{" "}
          <code>html</code>; abaixo, os dois lado a lado.
        </p>
      </Prose>
      <div className="my-6 grid gap-4 md:grid-cols-2">
        <div>
          <p className="mb-2 font-mono text-[0.7rem] tracking-widest text-muted uppercase">
            comfortable
          </p>
          <div data-density="comfortable">
            <DensityForm />
          </div>
        </div>
        <div>
          <p className="mb-2 font-mono text-[0.7rem] tracking-widest text-muted uppercase">
            compact
          </p>
          <div data-density="compact">
            <DensityForm />
          </div>
        </div>
      </div>

      <Prose>
        <h2>Motion</h2>
        <p>
          120ms no hover e no press.
        </p>
      </Prose>
      <div className="my-6">
        <MotionButton />
      </div>
    </div>
  );
}
