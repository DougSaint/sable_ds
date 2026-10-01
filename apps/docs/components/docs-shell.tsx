import type { ReactNode } from "react";
import Link from "next/link";
import { Wordmark } from "@sable/ui";
import { MobileNav } from "./mobile-nav";
import { Sidebar } from "./sidebar";
import { ThemeControls } from "./theme-controls";

export function DocsShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded-[var(--radius-control)] focus:bg-surface focus:px-3 focus:py-2"
      >
        Pular para o conteúdo
      </a>
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-[1400px] items-center justify-between gap-4 px-4">
          <div className="flex items-center gap-2">
            <MobileNav />
            <Link href="/" className="text-lg">
              <Wordmark />
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <ThemeControls />
            <Link
              href="/storybook/"
              className="text-sm text-muted hover:text-foreground"
            >
              Storybook
            </Link>
            <Link
              href="https://github.com/DougSaint/sable_ds"
              className="text-sm text-muted hover:text-foreground"
            >
              GitHub
            </Link>
          </div>
        </div>
      </header>
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 md:grid-cols-[220px_1fr]">
        <aside className="sticky top-14 hidden h-[calc(100vh-3.5rem)] overflow-hidden border-r border-border px-4 py-6 md:block">
          <Sidebar />
        </aside>
        <main id="conteudo" className="min-w-0 px-4 py-8 md:px-10 md:py-10">
          {children}
        </main>
      </div>
    </div>
  );
}
