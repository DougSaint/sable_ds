"use client";

import {
  Badge,
  Button,
  Field,
  Input,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  toast,
} from "@sable/ui";
import {
  formatBRL,
  statusBadgeVariant,
  type Pedido,
} from "@/lib/pedidos";

export function PedidoDetailSheet({
  pedido,
  onClose,
}: {
  pedido: Pedido | null;
  onClose: () => void;
}) {
  return (
    <Sheet open={Boolean(pedido)} onOpenChange={(open) => !open && onClose()}>
      <SheetContent>
        {pedido ? (
          <>
            <SheetHeader>
              <SheetTitle className="font-mono">{pedido.id}</SheetTitle>
              <SheetDescription>{pedido.customer}</SheetDescription>
            </SheetHeader>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm text-muted">Status</span>
                <Badge variant={statusBadgeVariant(pedido.status)}>
                  {pedido.status}
                </Badge>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm text-muted">Origem</span>
                <span className="text-sm">{pedido.origin}</span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm text-muted">Total</span>
                <span className="text-sm font-medium">
                  {formatBRL(pedido.total)}
                </span>
              </div>
              <Field label="Nota interna" htmlFor="pedido-nota">
                <Input id="pedido-nota" placeholder="Opcional" />
              </Field>
            </div>
            <SheetFooter>
              <Button variant="secondary" onClick={onClose}>
                Fechar
              </Button>
              <Button
                onClick={() => {
                  toast(`Salvo ${pedido.id}`);
                  onClose();
                }}
              >
                Salvar
              </Button>
            </SheetFooter>
          </>
        ) : null}
      </SheetContent>
    </Sheet>
  );
}
