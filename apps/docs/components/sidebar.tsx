"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { Input } from "@sable/ui";
import { nav } from "@/lib/nav";

export function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  const [q, setQ] = useState("");

  const groups = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return nav;
    return nav
      .map((g) => ({
        ...g,
        items: g.items.filter((i) => i.label.toLowerCase().includes(query)),
      }))
      .filter((g) => g.items.length > 0);
  }, [q]);

  return (
    <div className="flex h-full flex-col gap-4">
      <Input
        type="search"
        placeholder="Filtrar nav…"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        aria-label="Filtrar navegação"
      />
      <nav className="flex flex-col gap-6 overflow-y-auto pb-8">
        {groups.map((group) => (
          <div key={group.title}>
            <p className="mb-2 text-[0.7rem] font-medium tracking-widest text-muted uppercase">
              {group.title}
            </p>
            <ul className="flex flex-col gap-0.5">
              {group.items.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={onNavigate}
                      className={
                        active
                          ? "block rounded-[var(--radius-control)] bg-surface-2 px-2 py-1.5 text-sm font-medium text-foreground"
                          : "block rounded-[var(--radius-control)] px-2 py-1.5 text-sm text-muted hover:bg-surface-2 hover:text-foreground"
                      }
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  );
}
