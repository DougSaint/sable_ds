import type { ComponentProps, ReactNode } from "react";
import { cn } from "../lib/utils";

type SelectionBarProps = ComponentProps<"div"> & {
  count: number;
  label?: ReactNode;
  children?: ReactNode;
};

function SelectionBar({
  count,
  label,
  children,
  className,
  ...props
}: SelectionBarProps) {
  if (count <= 0) return null;

  return (
    <div
      data-slot="selection-bar"
      role="status"
      className={cn(
        "flex flex-wrap items-center gap-3 rounded-[var(--radius-control)] border border-border bg-surface-2 px-3 py-2",
        className,
      )}
      {...props}
    >
      <p className="text-sm font-medium tracking-tight text-foreground">
        {label ?? `${count} selecionados`}
      </p>
      {children ? (
        <div className="ml-auto flex items-center gap-2">{children}</div>
      ) : null}
    </div>
  );
}

export { SelectionBar };
export type { SelectionBarProps };
