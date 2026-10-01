"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Alert,
  AlertDescription,
  AlertTitle,
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  Badge,
  Button,
  Checkbox,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Input,
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
  Pagination,
  Progress,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectionBar,
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
import { PedidoDetailSheet } from "./pedido-detail";

type StatusFilter = "all" | Pedido["status"];

const PAGE_SIZE = 8;

function PedidosTableSkeleton() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-10" />
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
              <Skeleton className="h-4 w-4" />
            </TableCell>
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
  const [detailId, setDetailId] = useState<string | null>(null);
  const [selected, setSelected] = useState<string[]>([]);
  const [exportPct, setExportPct] = useState<number | null>(null);

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
    setSelected([]);
  }, [q, status]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const current = Math.min(page, pageCount);
  const slice = filtered.slice((current - 1) * PAGE_SIZE, current * PAGE_SIZE);
  const from = filtered.length === 0 ? 0 : (current - 1) * PAGE_SIZE + 1;
  const to = Math.min(current * PAGE_SIZE, filtered.length);
  const late = rows.filter((r) => r.status === "Atrasado").length;
  const pending = rows.find((r) => r.id === archiveId);
  const detail = rows.find((r) => r.id === detailId) ?? null;
  const pageIds = slice.map((r) => r.id);
  const selectedOnPage = pageIds.filter((id) => selected.includes(id));
  const pageChecked =
    pageIds.length > 0 && selectedOnPage.length === pageIds.length
      ? true
      : selectedOnPage.length > 0
        ? "indeterminate"
        : false;

  function resetFilters() {
    setQ("");
    setStatus("all");
  }

  function simulateLoad() {
    setLoading(true);
    window.setTimeout(() => setLoading(false), 800);
  }

  function toggleOne(id: string, on: boolean) {
    setSelected((prev) =>
      on ? [...new Set([...prev, id])] : prev.filter((x) => x !== id),
    );
  }

  function togglePage(on: boolean) {
    setSelected((prev) => {
      if (on) return [...new Set([...prev, ...pageIds])];
      return prev.filter((id) => !pageIds.includes(id));
    });
  }

  function archiveSelected() {
    const n = selected.length;
    if (n === 0) return;
    setRows((prev) => prev.filter((r) => !selected.includes(r.id)));
    toast(n === 1 ? "Arquivado 1 pedido" : `Arquivados ${n} pedidos`);
    setSelected([]);
  }

  function exportSelected() {
    const n = selected.length;
    if (n === 0 || exportPct != null) return;
    setExportPct(25);
    window.setTimeout(() => setExportPct(50), 160);
    window.setTimeout(() => setExportPct(75), 320);
    window.setTimeout(() => {
      setExportPct(null);
      toast(n === 1 ? "CSV de 1 pedido" : `CSV de ${n} pedidos`);
    }, 480);
  }

  function confirmArchive() {
    if (!archiveId) return;
    setRows((prev) => prev.filter((r) => r.id !== archiveId));
    setSelected((prev) => prev.filter((id) => id !== archiveId));
    toast(`Arquivado ${archiveId}`);
    setArchiveId(null);
  }

  if (failed) {
    return <ErrorState onRetry={() => setFailed(false)} />;
  }

  const selectionLabel =
    selected.length === 1
      ? "1 pedido selecionado"
      : `${selected.length} pedidos selecionados`;

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
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="sm" className="ml-auto">
              Demo
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-48 p-2">
            <PopoverClose asChild>
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start"
                onClick={simulateLoad}
              >
                Simular carga
              </Button>
            </PopoverClose>
            <PopoverClose asChild>
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start"
                onClick={() => setFailed(true)}
              >
                Simular erro
              </Button>
            </PopoverClose>
          </PopoverContent>
        </Popover>
      </div>

      <SelectionBar count={selected.length} label={selectionLabel}>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button size="sm">Arquivar</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                {selected.length === 1
                  ? "Arquivar 1 pedido?"
                  : `Arquivar ${selected.length} pedidos?`}
              </AlertDialogTitle>
              <AlertDialogDescription>
                O histórico permanece.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction onClick={archiveSelected}>
                Arquivar
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <Button
          size="sm"
          variant="secondary"
          disabled={exportPct != null}
          onClick={exportSelected}
        >
          Exportar
        </Button>
      </SelectionBar>

      {exportPct != null ? (
        <div className="flex items-center gap-3">
          <Progress
            value={exportPct}
            aria-label="Exportar CSV"
            className="flex-1"
          />
          <span className="font-mono text-xs text-muted">{exportPct}%</span>
        </div>
      ) : null}

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
                <TableHead className="w-10">
                  <Checkbox
                    checked={pageChecked}
                    onCheckedChange={(v) => togglePage(v === true)}
                    aria-label="Selecionar página"
                  />
                </TableHead>
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
                  <TableCell>
                    <Checkbox
                      checked={selected.includes(r.id)}
                      onCheckedChange={(v) => toggleOne(r.id, v === true)}
                      aria-label={`Selecionar ${r.id}`}
                    />
                  </TableCell>
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
                        <DropdownMenuItem onSelect={() => setDetailId(r.id)}>
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

      <PedidoDetailSheet
        pedido={detail}
        onClose={() => setDetailId(null)}
      />

      <AlertDialog
        open={Boolean(pending)}
        onOpenChange={(o) => !o && setArchiveId(null)}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Arquivar pedido</AlertDialogTitle>
            <AlertDialogDescription>
              {pending
                ? `${pending.id} · ${pending.customer}. O histórico permanece.`
                : null}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={confirmArchive}>
              Arquivar
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
