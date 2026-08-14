import { Button, Card, CardContent, CardHeader, CardTitle } from "@sable/ui";

export function EmptyState({
  onAction,
  actionLabel = "Criar pedido",
}: {
  onAction?: () => void;
  actionLabel?: string;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Nenhum pedido</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <p className="text-sm text-muted">
          Nenhum pedido com esses filtros. Limpe a busca ou crie um novo.
        </p>
        <div>
          <Button onClick={onAction}>{actionLabel}</Button>
        </div>
      </CardContent>
    </Card>
  );
}

export function ErrorState({ onRetry }: { onRetry?: () => void }) {
  return (
    <Card className="border-danger/40">
      <CardHeader>
        <CardTitle>Não foi possível carregar</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <p className="text-sm text-muted">
          Não foi possível buscar os pedidos. Tente de novo em alguns segundos.
        </p>
        <div>
          <Button variant="secondary" onClick={onRetry}>
            Tentar de novo
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
