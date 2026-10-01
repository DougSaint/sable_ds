"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Alert,
  AlertDescription,
  AlertTitle,
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
  Pagination,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Skeleton,
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

const PAGE_SIZE = 8;

function PedidosTableSkeleton() {
  return (
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
        {Array.from({ length: PAGE_SIZE }, (_, i) => (
          <TableRow key={i}>
            <TableCell>
              <Skeleton className="h-4 w-16" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-4 w-28" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-4 w-24" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-5 w-16" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-4 w-14" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-8 w-8" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export function PedidosBoard() {
  const [rows, setRows] = useState<Pedido[]>(PEDIDOS);
  const [q, setQ] = useState("");
  const [status, setStatus] = useState<StatusFilter>("all");
  const [page, setPage] = useState(1);
  const [failed, setFailed] = useState(false);
  const [loading, setLoading] = useState(false);
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

  useEffect(() => {
    setPage(1);
  }, [q, status]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const current = Math.min(page, pageCount);
  const slice = filtered.slice((current - 1) * PAGE_SIZE, current * PAGE_SIZE);
  const from = filtered.length === 0 ? 0 : (current - 1) * PAGE_SIZE + 1;
  const to = Math.min(current * PAGE_SIZE, filtered.length);
  const late = rows.filter((r) => r.status === "Atrasado").length;
  const pending = rows.find((r) => r.id === archiveId);

  function resetFilters() {
    setQ("");
    setStatus("all");
  }

  function simulateLoad() {
    setLoading(true);
    window.setTimeout(() => setLoading(false), 800);
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
      {late > 0 && !loading ? (
        <Alert variant="warning">
          <AlertTitle>
            {late === 1
              ? "1 pedido atrasado"
              : `${late} pedidos atrasados`}
          </AlertTitle>
          <AlertDescription>
            Priorize cobrança antes de abrir novos pedidos.
          </AlertDescription>
        </Alert>
      ) : null}

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
          onClick={simulateLoad}
        >
          Simular carga
        </Button>
        <Button variant="ghost" size="sm" onClick={() => setFailed(true)}>
          Simular erro
        </Button>
      </div>

      {loading ? (
        <div aria-busy="true" aria-live="polite">
          <PedidosTableSkeleton />
        </div>
      ) : filtered.length === 0 ? (
        <EmptyState onAction={resetFilters} actionLabel="Limpar filtros" />
      ) : (
        <>
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
              {slice.map((r) => (
                <TableRow key={r.id}>
                  <TableCell className="font-mono text-xs">{r.id}</TableCell>
                  <TableCell>{r.customer}</TableCell>
                  <TableCell className="text-muted">{r.origin}</TableCell>
                  <TableCell>
                    <Badge variant={statusBadgeVariant(r.status)}>
                      {r.status}
                    </Badge>
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
          <Pagination
            page={current}
            pageCount={pageCount}
            onPageChange={setPage}
            summary={`${from}–${to} de ${filtered.length}`}
          />
        </>
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
