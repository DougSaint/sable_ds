"use client";

import { Button, Field, Input } from "@sable/ui";

export function DensityForm() {
  return (
    <form
      className="flex flex-col gap-[var(--control-gap)] rounded-[var(--radius-card)] border border-border bg-surface p-4"
      onSubmit={(e) => e.preventDefault()}
    >
      <Field label="Cliente" hint="Nome da org">
        <Input defaultValue="Norte Log" />
      </Field>
      <Button type="submit">Salvar</Button>
    </form>
  );
}

export function MotionButton() {
  return (
    <Button className="transition-[transform,background-color] duration-[var(--duration-fast)] ease-[var(--ease-out)] hover:-translate-y-px active:translate-y-0">
      Hover / press
    </Button>
  );
}
