import { cn } from "../lib/utils";

function Wordmark({ className }: { className?: string }) {
  return (
    <span
      data-slot="wordmark"
      className={cn(
        "inline-flex items-center gap-2.5 font-semibold tracking-[-0.03em] text-foreground",
        className,
      )}
    >
      <span aria-hidden className="h-3.5 w-1 rounded-sm bg-primary" />
      Sable
    </span>
  );
}

export { Wordmark };
