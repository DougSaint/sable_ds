import type { ComponentProps } from "react";
import { cn } from "../lib/utils";

function Skeleton({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      aria-hidden
      className={cn(
        "animate-pulse rounded-[var(--radius-control)] bg-surface-2",
        className,
      )}
      {...props}
    />
  );
}

export { Skeleton };
