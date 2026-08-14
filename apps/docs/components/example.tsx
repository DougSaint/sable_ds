import type { ReactNode } from "react";

export function Example({
  children,
  title,
}: {
  children: ReactNode;
  title?: string;
}) {
  return (
    <div className="my-6 overflow-hidden rounded-[var(--radius-card)] border border-border bg-surface">
      {title ? (
        <div className="border-b border-border px-4 py-2 font-mono text-xs text-muted">
          {title}
        </div>
      ) : null}
      <div className="flex flex-wrap items-center gap-3 p-6">{children}</div>
    </div>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-3xl [&_a]:text-foreground [&_a]:underline [&_a]:underline-offset-4 [&_code]:rounded-[3px] [&_code]:bg-surface-2 [&_code]:px-1 [&_code]:font-mono [&_code]:text-[0.85em] [&_h1]:mb-4 [&_h1]:text-3xl [&_h1]:font-semibold [&_h1]:tracking-tight [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-semibold [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:text-base [&_h3]:font-semibold [&_li]:my-1 [&_p]:mb-4 [&_p]:text-[0.95rem] [&_p]:leading-7 [&_p]:text-muted [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-5">
      {children}
    </div>
  );
}
