"use client";

import type { ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../lib/utils";
import { Button } from "./button";

export function getPaginationItems(
  page: number,
  pageCount: number,
): Array<number | "ellipsis"> {
  if (pageCount <= 0) return [];
  if (pageCount <= 7) {
    return Array.from({ length: pageCount }, (_, i) => i + 1);
  }
  const current = Math.min(Math.max(1, page), pageCount);
  const set = new Set([
    1,
    pageCount,
    current,
    current - 1,
    current + 1,
    current - 2,
    current + 2,
  ]);
  const nums = [...set]
    .filter((n) => n >= 1 && n <= pageCount)
    .sort((a, b) => a - b);
  const items: Array<number | "ellipsis"> = [];
  let prev = 0;
  for (const n of nums) {
    if (prev && n - prev > 1) items.push("ellipsis");
    items.push(n);
    prev = n;
  }
  return items;
}

type PaginationProps = {
  page: number;
  pageCount: number;
  onPageChange: (page: number) => void;
  summary?: ReactNode;
  className?: string;
};

function Pagination({
  page,
  pageCount,
  onPageChange,
  summary,
  className,
}: PaginationProps) {
  const count = Math.max(0, pageCount);
  const current = count === 0 ? 1 : Math.min(Math.max(1, page), count);
  const items = getPaginationItems(current, count);

  if (count <= 1 && !summary) return null;

  return (
    <nav
      data-slot="pagination"
      aria-label="Paginação"
      className={cn(
        "flex flex-wrap items-center justify-between gap-3",
        className,
      )}
    >
      {summary ? (
        <p className="text-sm text-muted">{summary}</p>
      ) : (
        <span />
      )}
      {count > 1 ? (
        <div className="flex items-center gap-1">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            aria-label="Página anterior"
            disabled={current <= 1}
            onClick={() => onPageChange(current - 1)}
          >
            <ChevronLeft />
            Anterior
          </Button>
          {items.map((item, i) =>
            item === "ellipsis" ? (
              <span
                key={`e-${i}`}
                aria-hidden
                className="px-1.5 text-sm text-muted"
              >
                …
              </span>
            ) : (
              <Button
                key={item}
                type="button"
                variant={item === current ? "secondary" : "ghost"}
                size="sm"
                aria-label={`Página ${item}`}
                aria-current={item === current ? "page" : undefined}
                onClick={() => onPageChange(item)}
              >
                {item}
              </Button>
            ),
          )}
          <Button
            type="button"
            variant="ghost"
            size="sm"
            aria-label="Próxima página"
            disabled={current >= count}
            onClick={() => onPageChange(current + 1)}
          >
            Próxima
            <ChevronRight />
          </Button>
        </div>
      ) : null}
    </nav>
  );
}

export { Pagination };
export type { PaginationProps };
