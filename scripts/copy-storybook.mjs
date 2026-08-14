import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { execSync } from "node:child_process";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const storybookStatic = resolve(root, "apps/storybook/storybook-static");
const dest = resolve(root, "apps/docs/public/storybook");

if (!existsSync(storybookStatic)) {
  console.log("Storybook ainda não foi gerado. Buildando…");
  execSync("pnpm --filter @sable/storybook build", {
    cwd: root,
    stdio: "inherit",
  });
}

if (!existsSync(storybookStatic)) {
  console.error("Falha ao gerar apps/storybook/storybook-static");
  process.exit(1);
}

rmSync(dest, { recursive: true, force: true });
mkdirSync(dest, { recursive: true });
cpSync(storybookStatic, dest, { recursive: true });
console.log("Storybook → apps/docs/public/storybook");
