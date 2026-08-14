"use client";

import { Button, Input, Wordmark } from "@sable/ui";
import { PedidosBoard } from "./pedidos-board";

const NAV = ["Pedidos", "Clientes", "Relatórios", "Settings"] as const;

export function AppShellPattern() {
  return (
    <div className="overflow-hidden rounded-[var(--radius-card)] border border-border bg-background shadow-[var(--shadow-card)]">
      <div className="flex h-[var(--control-h)] items-center justify-between border-b border-border px-4">
        <Wordmark />
        <div className="flex items-center gap-[var(--control-gap)]">
          <Input placeholder="Buscar…" className="hidden w-44 sm:block md:w-56" />
          <Button size="sm" variant="secondary">
            Conta
          </Button>
        </div>
      </div>
      <div className="grid min-h-96 grid-cols-1 md:grid-cols-[180px_1fr]">
        <aside className="border-b border-border bg-surface p-3 md:border-r md:border-b-0">
          <p className="mb-2 px-2 font-mono text-[0.65rem] tracking-widest text-muted uppercase">
            Operação
          </p>
          {NAV.map((item) => (
            <div
              key={item}
              className={
                item === "Pedidos"
                  ? "rounded-[var(--radius-control)] bg-surface-2 px-2 py-1.5 text-sm font-medium"
                  : "rounded-[var(--radius-control)] px-2 py-1.5 text-sm text-muted"
              }
            >
              {item}
            </div>
          ))}
        </aside>
        <div className="p-4 md:p-6">
          <div className="mb-4">
            <h2 className="text-lg font-semibold tracking-tight">Pedidos</h2>
            <p className="mt-1 text-sm text-muted">Últimos 7 dias</p>
          </div>
          <PedidosBoard />
        </div>
      </div>
    </div>
  );
}
