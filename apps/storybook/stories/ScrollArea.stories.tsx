import type { Meta, StoryObj } from "@storybook/react";
import { ScrollArea } from "@sable/ui";

const items = [
  "Pedidos",
  "Clientes",
  "Relatórios",
  "Estoque",
  "Financeiro",
  "Integrações",
  "Auditoria",
  "Filiais",
];

const meta: Meta = { title: "Core/ScrollArea" };
export default meta;

export const Nav: StoryObj = {
  render: () => (
    <ScrollArea className="h-40 w-44 rounded-[var(--radius-control)] border border-border" aria-label="Módulos">
      <ul className="p-2">
        {items.map((item) => (
          <li key={item} className="px-2 py-1.5 text-sm">
            {item}
          </li>
        ))}
      </ul>
    </ScrollArea>
  ),
};
