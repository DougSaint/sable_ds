"use client";

import { useMemo, useState } from "react";
import {
  Badge,
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  toast,
} from "@sable/ui";
import {
  formatBRL,
  PEDIDOS,
  statusBadgeVariant,
  type Pedido,
} from "@/lib/pedidos";
import { EmptyState, ErrorState } from "./empty-error";

type StatusFilter = "all" | Pedido["status"];

export function PedidosBoard() {
  const [rows, setRows] = useState<Pedido[]>(PEDIDOS);
  const [q, setQ] = useState("");
  const [status, setStatus] = useState<StatusFilter>("all");
  const [failed, setFailed] = useState(false);
  const [archiveId, setArchiveId] = useState<string | null>(null);

  const filtered = useMemo(
    () =>
      rows.filter((r) => {
        const hay = `${r.id} ${r.customer} ${r.origin}`.toLowerCase();
        const matchQ = !q || hay.includes(q.toLowerCase());
        const matchS = status === "all" || r.status === status;
        return matchQ && matchS;
      }),
    [rows, q, status],
  );

  const pending = rows.find((r) => r.id === archiveId);

  function resetFilters() {
    setQ("");
    setStatus("all");
  }

  function confirmArchive() {
    if (!archiveId) return;
    setRows((prev) => prev.filter((r) => r.id !== archiveId));
    toast(`Arquivado ${archiveId}`);
    setArchiveId(null);
  }

  if (failed) {
    return <ErrorState onRetry={() => setFailed(false)} />;
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-2">
        <Input
          placeholder="Buscar pedido, cliente ou origem"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="max-w-xs"
          aria-label="Buscar pedidos"
        />
        <Select
          value={status}
          onValueChange={(v) => setStatus(v as StatusFilter)}
        >
          <SelectTrigger className="w-40" aria-label="Filtrar status">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos</SelectItem>
            <SelectItem value="Aberto">Aberto</SelectItem>
            <SelectItem value="Pago">Pago</SelectItem>
            <SelectItem value="Atrasado">Atrasado</SelectItem>
            <SelectItem value="Cancelado">Cancelado</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="secondary" onClick={resetFilters}>
          Limpar
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="ml-auto"
          onClick={() => setFailed(true)}
        >
          Simular erro
        </Button>
      </div>

      {filtered.length === 0 ? (
        <EmptyState onAction={resetFilters} actionLabel="Limpar filtros" />
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Pedido</TableHead>
              <TableHead>Cliente</TableHead>
              <TableHead>Origem</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Total</TableHead>
              <TableHead className="w-12">
                <span className="sr-only">Ações</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((r) => (
              <TableRow key={r.id}>
                <TableCell className="font-mono text-xs">{r.id}</TableCell>
                <TableCell>{r.customer}</TableCell>
                <TableCell className="text-muted">{r.origin}</TableCell>
                <TableCell>
                  <Badge variant={statusBadgeVariant(r.status)}>{r.status}</Badge>
                </TableCell>
                <TableCell>{formatBRL(r.total)}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        aria-label={`Ações ${r.id}`}
                      >
                        ···
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem
                        onSelect={() => toast(`Editar ${r.id}`)}
                      >
                        Editar
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onSelect={() => setArchiveId(r.id)}>
                        Arquivar
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}

      <Dialog open={Boolean(pending)} onOpenChange={(o) => !o && setArchiveId(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Arquivar pedido</DialogTitle>
            <DialogDescription>
              {pending
                ? `${pending.id} · ${pending.customer}. O histórico permanece.`
                : null}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="secondary" onClick={() => setArchiveId(null)}>
              Cancelar
            </Button>
            <Button onClick={confirmArchive}>Arquivar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
