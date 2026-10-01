"use client";

import {
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Input,
  Kbd,
  ScrollArea,
  Separator,
  Wordmark,
} from "@sable/ui";
import { AppCommand, useAppCommand } from "./app-command";
import { PedidosBoard } from "./pedidos-board";

const OPS = [
  "Pedidos",
  "Clientes",
  "Relatórios",
  "Estoque",
  "Financeiro",
  "Integrações",
  "Auditoria",
] as const;

export function AppShellPattern() {
  const { open, setOpen } = useAppCommand();
  return (
    <div className="overflow-hidden rounded-[var(--radius-card)] border border-border bg-background shadow-[var(--shadow-card)]">
      <AppCommand open={open} onOpenChange={setOpen} />
      <div className="flex h-[var(--control-h)] items-center justify-between border-b border-border px-4">
        <Wordmark />
        <div className="flex items-center gap-[var(--control-gap)]">
          <div className="relative hidden sm:block">
            <Input
              readOnly
              placeholder="Buscar…"
              className="w-44 cursor-pointer pr-12 md:w-56"
              aria-label="Abrir paleta de comando"
              onClick={() => setOpen(true)}
            />
            <Kbd className="pointer-events-none absolute top-1/2 right-2 -translate-y-1/2">
              ⌘K
            </Kbd>
          </div>
          <Separator orientation="vertical" className="hidden h-4 sm:block" />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Conta">
                <Avatar fallback="NL" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Perfil</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Sair</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="grid min-h-96 grid-cols-1 md:h-[28rem] md:grid-cols-[180px_1fr] md:min-h-0">
        <aside className="flex max-h-40 min-h-0 flex-col border-b border-border bg-surface md:max-h-none md:h-full md:border-r md:border-b-0">
          <ScrollArea className="h-full" aria-label="Navegação" type="always">
            <div className="p-3">
              <p className="mb-2 px-2 font-mono text-[0.65rem] tracking-widest text-muted uppercase">
                Operação
              </p>
              {OPS.map((item) => (
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
              <Separator className="my-2" />
              <p className="mb-2 px-2 font-mono text-[0.65rem] tracking-widest text-muted uppercase">
                Conta
              </p>
              <div className="rounded-[var(--radius-control)] px-2 py-1.5 text-sm text-muted">
                Settings
              </div>
            </div>
          </ScrollArea>
        </aside>
        <div className="p-4 md:p-6">
          <div className="mb-4">
            <Breadcrumb className="mb-2">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Operação</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Pedidos</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <h2 className="text-lg font-semibold tracking-tight">Pedidos</h2>
            <p className="mt-1 text-sm text-muted">Últimos 7 dias</p>
          </div>
          <PedidosBoard />
        </div>
      </div>
    </div>
  );
}
