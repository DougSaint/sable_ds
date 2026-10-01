import type { ComponentProps } from "react";
import { cn } from "../lib/utils";

function Kbd({ className, ...props }: ComponentProps<"kbd">) {
  return (
    <kbd
      data-slot="kbd"
      className={cn(
        "inline-flex min-h-5 min-w-5 items-center justify-center rounded-[3px] border border-border bg-surface-2 px-1 font-mono text-[0.7rem] leading-none font-medium text-muted",
        className,
      )}
      {...props}
    />
  );
}

export { Kbd };
