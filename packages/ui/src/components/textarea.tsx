import * as React from "react";
import { cn } from "../lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      data-slot="textarea"
      className={cn(
        "min-h-24 w-full rounded-[var(--radius-control)] border border-border bg-surface px-[var(--control-px)] py-2 text-[length:var(--control-text)] text-foreground shadow-none transition-[border-color,box-shadow] duration-[var(--duration-fast)] placeholder:text-muted focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 disabled:cursor-not-allowed disabled:opacity-40",
        className,
      )}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
