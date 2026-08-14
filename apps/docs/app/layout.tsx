import type { Metadata } from "next";
import type { ReactNode } from "react";
import { DocsShell } from "@/components/docs-shell";
import { Toaster, TooltipProvider } from "@sable/ui";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Sable",
    template: "%s · Sable",
  },
  description:
    "Design system para produtos operacionais — formulários densos, tabelas, settings.",
  icons: { icon: "/favicon.svg" },
};

const themeBoot = `(function(){try{var t=localStorage.getItem("sable-theme")||"dark";var d=localStorage.getItem("sable-density")||"comfortable";var r=document.documentElement;r.dataset.theme=t;r.dataset.density=d;}catch(e){}})();`;

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="pt-BR" data-theme="dark" data-density="comfortable" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBoot }} />
      </head>
      <body className="font-sans antialiased">
        <TooltipProvider>
          <DocsShell>{children}</DocsShell>
          <Toaster />
        </TooltipProvider>
      </body>
    </html>
  );
}
