import type { ReactNode } from "react";

export function DoDont({
  do: doText,
  dont,
}: {
  do: string;
  dont: string;
}) {
  return (
    <div className="my-6 grid gap-3 sm:grid-cols-2">
      <div className="rounded-[var(--radius-control)] border border-border bg-surface p-4">
        <p className="mb-1 font-mono text-[0.7rem] tracking-widest text-success uppercase">
          Do
        </p>
        <p className="text-sm leading-6">{doText}</p>
      </div>
      <div className="rounded-[var(--radius-control)] border border-border bg-surface p-4">
        <p className="mb-1 font-mono text-[0.7rem] tracking-widest text-danger uppercase">
          Don’t
        </p>
        <p className="text-sm leading-6">{dont}</p>
      </div>
    </div>
  );
}

export function Keyboard({
  rows,
}: {
  rows: { key: string; action: string }[];
}) {
  return (
    <div className="my-6 overflow-x-auto rounded-[var(--radius-control)] border border-border">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border text-left">
            <th className="px-3 py-2 font-mono text-xs font-medium text-muted">
              Tecla
            </th>
            <th className="px-3 py-2 font-mono text-xs font-medium text-muted">
              Ação
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.key} className="border-b border-border last:border-0">
              <td className="px-3 py-2 font-mono text-xs">{r.key}</td>
              <td className="px-3 py-2 text-muted">{r.action}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Snippet({ children }: { children: ReactNode }) {
  return (
    <pre className="my-6 overflow-x-auto rounded-[var(--radius-control)] border border-border bg-surface-2 p-4 font-mono text-sm leading-6">
      {children}
    </pre>
  );
}
