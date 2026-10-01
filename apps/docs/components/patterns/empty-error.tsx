import {
  Button,
  EmptyState as EmptyStateUi,
  ErrorState as ErrorStateUi,
} from "@sable/ui";

export function EmptyState({
  onAction,
  actionLabel = "Criar pedido",
}: {
  onAction?: () => void;
  actionLabel?: string;
}) {
  return (
    <EmptyStateUi
      title="Nenhum pedido"
      description="Nenhum pedido com esses filtros. Limpe a busca ou crie um novo."
      action={<Button onClick={onAction}>{actionLabel}</Button>}
    />
  );
}

export function ErrorState({ onRetry }: { onRetry?: () => void }) {
  return (
    <ErrorStateUi
      title="Não foi possível carregar"
      description="Não foi possível buscar os pedidos. Tente de novo em alguns segundos."
      action={
        <Button variant="secondary" onClick={onRetry}>
          Tentar de novo
        </Button>
      }
    />
  );
}
