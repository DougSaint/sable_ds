"use client";

import { useState } from "react";
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  Combobox,
  DatePicker,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Field,
  Input,
  RadioGroup,
  RadioGroupItem,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Textarea,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  toast,
} from "@sable/ui";
import { Example } from "@/components/example";

export function ButtonDemo() {
  return (
    <Example>
      <Button>Salvar</Button>
      <Button variant="secondary">Cancelar</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Excluir</Button>
      <Button disabled>Disabled</Button>
    </Example>
  );
}

export function InputDemo() {
  return (
    <Example>
      <Input placeholder="Buscar pedidos…" className="max-w-xs" />
      <Input placeholder="Disabled" disabled className="max-w-xs" />
    </Example>
  );
}

export function TextareaDemo() {
  return (
    <Example>
      <Textarea placeholder="Observação interna" className="max-w-md" />
    </Example>
  );
}

export function SelectDemo() {
  return (
    <Example>
      <Select>
        <SelectTrigger className="w-56" aria-label="Status">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="open">Aberto</SelectItem>
          <SelectItem value="done">Concluído</SelectItem>
          <SelectItem value="blocked" disabled>
            Bloqueado
          </SelectItem>
        </SelectContent>
      </Select>
    </Example>
  );
}

export function DialogDemo() {
  return (
    <Example>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Abrir Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Arquivar pedido</DialogTitle>
            <DialogDescription>
              O pedido sai da lista. O histórico permanece.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="secondary">Cancelar</Button>
            <Button>Confirmar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Example>
  );
}

export function TableDemo() {
  return (
    <Example>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Pedido</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Valor</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>PED-1042</TableCell>
            <TableCell>Aberto</TableCell>
            <TableCell>R$ 1.240</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>PED-1043</TableCell>
            <TableCell>Pago</TableCell>
            <TableCell>R$ 380</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Example>
  );
}

export function ToastDemo() {
  return (
    <Example>
      <Button onClick={() => toast("Pedido atualizado")}>Sucesso</Button>
      <Button variant="secondary" onClick={() => toast.error("Falha ao salvar")}>
        Erro
      </Button>
    </Example>
  );
}

export function TabsDemo() {
  return (
    <Example>
      <Tabs defaultValue="geral">
        <TabsList>
          <TabsTrigger value="geral">Geral</TabsTrigger>
          <TabsTrigger value="equipe">Equipe</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
        </TabsList>
        <TabsContent value="geral">Perfil da organização.</TabsContent>
        <TabsContent value="equipe">Membros e papéis.</TabsContent>
        <TabsContent value="billing">Plano e fatura.</TabsContent>
      </Tabs>
    </Example>
  );
}

export function CardDemo() {
  return (
    <Example>
      <Card className="w-72">
        <CardHeader>
          <CardTitle>Ambiente</CardTitle>
          <CardDescription>Produção · us-east</CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-muted">12 serviços ativos</CardContent>
        <CardFooter>
          <Button size="sm">Abrir</Button>
        </CardFooter>
      </Card>
    </Example>
  );
}

export function BadgeDemo() {
  return (
    <Example>
      <Badge>Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="danger">Danger</Badge>
      <Badge variant="info">Info</Badge>
    </Example>
  );
}

export function SwitchDemo() {
  return (
    <Example>
      <label className="flex items-center gap-2 text-sm">
        <Switch defaultChecked />
        Notificações
      </label>
      <Switch disabled />
    </Example>
  );
}

export function DropdownDemo() {
  return (
    <Example>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary">Ações</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Editar</DropdownMenuItem>
          <DropdownMenuItem>Duplicar</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Excluir</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </Example>
  );
}

export function TooltipDemo() {
  return (
    <Example>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover ou foco</Button>
        </TooltipTrigger>
        <TooltipContent>Atalho: ⌘S</TooltipContent>
      </Tooltip>
    </Example>
  );
}

export function FieldDemo() {
  return (
    <Example>
      <div className="w-full max-w-sm space-y-4">
        <Field label="E-mail" htmlFor="f-email" hint="Use o corporativo">
          <Input id="f-email" type="email" />
        </Field>
        <Field label="E-mail" htmlFor="f-email-err" error="E-mail inválido">
          <Input id="f-email-err" type="email" defaultValue="x" aria-invalid />
        </Field>
      </div>
    </Example>
  );
}

export function CheckboxDemo() {
  return (
    <Example>
      <label className="flex items-center gap-2 text-sm">
        <Checkbox id="terms" />
        Aceito os termos
      </label>
      <Checkbox checked disabled />
    </Example>
  );
}

export function RadioDemo() {
  return (
    <Example>
      <RadioGroup defaultValue="email" className="text-sm">
        <label className="flex items-center gap-2">
          <RadioGroupItem value="email" id="r-email" />
          E-mail
        </label>
        <label className="flex items-center gap-2">
          <RadioGroupItem value="sms" id="r-sms" />
          SMS
        </label>
      </RadioGroup>
    </Example>
  );
}

export function DatePickerDemo() {
  const [date, setDate] = useState<Date | undefined>();
  return (
    <Example>
      <DatePicker value={date} onChange={setDate} className="max-w-xs" />
    </Example>
  );
}

const orgs = [
  { value: "acme", label: "Acme Ltda" },
  { value: "norte", label: "Norte Log" },
  { value: "delta", label: "Delta Saúde" },
];

export function ComboboxDemo() {
  const [value, setValue] = useState("");
  return (
    <Example>
      <Combobox
        options={orgs}
        value={value}
        onChange={setValue}
        placeholder="Organização"
        className="max-w-xs"
      />
    </Example>
  );
}
