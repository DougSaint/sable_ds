export type NavItem = {
  href: string;
  label: string;
  en?: string;
};

export type NavGroup = {
  title: string;
  items: NavItem[];
};

export const nav: NavGroup[] = [
  {
    title: "Começar",
    items: [
      { href: "/", label: "Home" },
      { href: "/getting-started/", label: "Getting started" },
      { href: "/foundations/", label: "Foundations" },
    ],
  },
  {
    title: "Components",
    items: [
      { href: "/components/button/", label: "Button" },
      { href: "/components/input/", label: "Input" },
      { href: "/components/textarea/", label: "Textarea" },
      { href: "/components/select/", label: "Select" },
      { href: "/components/dialog/", label: "Dialog" },
      { href: "/components/sheet/", label: "Sheet" },
      { href: "/components/table/", label: "Table" },
      { href: "/components/toast/", label: "Toast" },
      { href: "/components/tabs/", label: "Tabs" },
      { href: "/components/accordion/", label: "Accordion" },
      { href: "/components/breadcrumb/", label: "Breadcrumb" },
      { href: "/components/card/", label: "Card" },
      { href: "/components/badge/", label: "Badge" },
      { href: "/components/switch/", label: "Switch" },
      { href: "/components/dropdown-menu/", label: "DropdownMenu" },
      { href: "/components/tooltip/", label: "Tooltip" },
      { href: "/components/field/", label: "Field" },
      { href: "/components/checkbox/", label: "Checkbox" },
      { href: "/components/radio-group/", label: "RadioGroup" },
      { href: "/components/date-picker/", label: "DatePicker" },
      { href: "/components/combobox/", label: "Combobox" },
      { href: "/components/alert/", label: "Alert" },
      { href: "/components/skeleton/", label: "Skeleton" },
      { href: "/components/pagination/", label: "Pagination" },
      { href: "/components/empty-state/", label: "EmptyState" },
    ],
  },
  {
    title: "Patterns",
    items: [
      { href: "/patterns/app-shell/", label: "App Shell" },
      { href: "/patterns/sign-in/", label: "Sign-in" },
      { href: "/patterns/settings/", label: "Settings" },
      { href: "/patterns/table/", label: "Tabela + filtros" },
      { href: "/patterns/empty-error/", label: "Empty / error" },
    ],
  },
];
