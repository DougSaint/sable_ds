import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import {
  Alert,
  AlertDescription,
  AlertTitle,
  Button,
  EmptyState,
  ErrorState,
  Pagination,
  Skeleton,
} from "@sable/ui";

const meta: Meta = { title: "Data" };
export default meta;

export const AlertStory: StoryObj = {
  name: "Alert",
  render: () => (
    <div className="flex max-w-lg flex-col gap-3">
      <Alert variant="warning">
        <AlertTitle>4 pedidos atrasados</AlertTitle>
        <AlertDescription>Priorize a cobrança.</AlertDescription>
      </Alert>
      <Alert variant="danger">
        <AlertTitle>Falha ao sincronizar</AlertTitle>
        <AlertDescription>Tente de novo em alguns segundos.</AlertDescription>
      </Alert>
    </div>
  ),
};

export const SkeletonStory: StoryObj = {
  name: "Skeleton",
  render: () => (
    <div className="flex w-64 flex-col gap-2">
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-1/2" />
    </div>
  ),
};

export const PaginationStory: StoryObj = {
  name: "Pagination",
  render: function R() {
    const [page, setPage] = useState(1);
    return (
      <Pagination
        page={page}
        pageCount={5}
        onPageChange={setPage}
        summary={`${(page - 1) * 8 + 1}–${page * 8} de 40`}
      />
    );
  },
};

export const EmptyStateStory: StoryObj = {
  name: "EmptyState",
  render: () => (
    <div className="grid max-w-3xl gap-4 sm:grid-cols-2">
      <EmptyState
        title="Nenhum pedido"
        description="Nenhum pedido com esses filtros."
        action={<Button>Limpar filtros</Button>}
      />
      <ErrorState
        title="Não foi possível carregar"
        description="Tente de novo em alguns segundos."
        action={<Button variant="secondary">Tentar de novo</Button>}
      />
    </div>
  ),
};
