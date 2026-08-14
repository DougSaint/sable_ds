import * as React from "react";
import { cn } from "../lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        data-slot="input"
        className={cn(
          "h-[var(--control-h)] w-full rounded-[var(--radius-control)] border border-border bg-surface px-[var(--control-px)] text-[length:var(--control-text)] text-foreground shadow-none transition-[border-color,box-shadow] duration-[var(--duration-fast)] placeholder:text-muted file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 disabled:cursor-not-allowed disabled:opacity-40",
          className,
        )}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
