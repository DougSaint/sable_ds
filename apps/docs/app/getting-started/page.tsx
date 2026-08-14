import type { Metadata } from "next";
import { Prose } from "@/components/example";

export const metadata: Metadata = { title: "Getting started" };

export default function GettingStartedPage() {
  return (
    <Prose>
      <h1>Getting started</h1>
      <p>
        Sable vive neste repositório. Os apps consomem{" "}
        <code>@sable/ui</code> pelo workspace — ainda não publicamos no npm.
      </p>

      <h2>Clone</h2>
      <pre className="my-4 overflow-x-auto rounded-[var(--radius-control)] border border-border bg-surface-2 p-4 font-mono text-sm">
        {`git clone https://github.com/DougSaint/sable.git
cd sable
pnpm install
pnpm dev:docs`}
      </pre>

      <h2>Apps</h2>
      <ul>
        <li>
          <code>pnpm dev:docs</code> — documentação
        </li>
        <li>
          <code>pnpm dev:storybook</code> — estados isolados
        </li>
      </ul>

      <h2>Usar @sable/ui</h2>
      <p>
        No Next, dependência <code>workspace:*</code> e{" "}
        <code>transpilePackages: [&quot;@sable/ui&quot;, &quot;@sable/tokens&quot;]</code>:
      </p>
      <pre className="my-4 overflow-x-auto rounded-[var(--radius-control)] border border-border bg-surface-2 p-4 font-mono text-sm">
        {`@import "tailwindcss";
@source "../../../packages/ui/src/**/*.{ts,tsx}";
@import "@sable/tokens/theme.css";`}
      </pre>
      <pre className="my-4 overflow-x-auto rounded-[var(--radius-control)] border border-border bg-surface-2 p-4 font-mono text-sm">
        {`import { Button } from "@sable/ui";`}
      </pre>
      <p>
        Tema e densidade no <code>html</code>: <code>data-theme</code> e{" "}
        <code>data-density</code>.
      </p>
    </Prose>
  );
}
