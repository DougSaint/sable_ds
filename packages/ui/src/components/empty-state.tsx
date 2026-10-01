import type { ComponentProps, ReactNode } from "react";
import { cn } from "../lib/utils";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./card";

type EmptyStateProps = ComponentProps<typeof Card> & {
  title: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
};

function EmptyState({
  title,
  description,
  action,
  className,
  ...props
}: EmptyStateProps) {
  return (
    <Card
      data-slot="empty-state"
      className={className}
      {...props}
    >
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {description ? (
          <p className="text-sm text-muted">{description}</p>
        ) : null}
        {action ? <div>{action}</div> : null}
      </CardContent>
    </Card>
  );
}

function ErrorState({
  title,
  description,
  action,
  className,
  ...props
}: EmptyStateProps) {
  return (
    <Card
      data-slot="error-state"
      className={cn("border-danger/40", className)}
      {...props}
    >
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {description ? (
          <p className="text-sm text-muted">{description}</p>
        ) : null}
        {action ? <div>{action}</div> : null}
      </CardContent>
    </Card>
  );
}

export { EmptyState, ErrorState };
export type { EmptyStateProps };
