export type PedidoStatus = "Aberto" | "Pago" | "Atrasado" | "Cancelado";

export type Pedido = {
  id: string;
  customer: string;
  origin: string;
  status: PedidoStatus;
  total: number;
};

export const PEDIDOS: Pedido[] = [
  { id: "PED-1042", customer: "Norte Log", origin: "Caxias do Sul", status: "Aberto", total: 1240 },
  { id: "PED-1043", customer: "Acme Ltda", origin: "São Paulo", status: "Pago", total: 380 },
  { id: "PED-1044", customer: "Delta Saúde", origin: "Campinas", status: "Aberto", total: 2110 },
  { id: "PED-1045", customer: "Acme Ltda", origin: "São Paulo", status: "Cancelado", total: 0 },
  { id: "PED-1046", customer: "Serra Frio", origin: "Caxias do Sul", status: "Atrasado", total: 890 },
  { id: "PED-1047", customer: "Litoral Sul", origin: "Florianópolis", status: "Pago", total: 1560 },
  { id: "PED-1048", customer: "Norte Log", origin: "Passo Fundo", status: "Aberto", total: 430 },
  { id: "PED-1049", customer: "Vale Química", origin: "Canoas", status: "Atrasado", total: 3200 },
  { id: "PED-1050", customer: "Delta Saúde", origin: "Porto Alegre", status: "Pago", total: 710 },
  { id: "PED-1051", customer: "Pampa Agro", origin: "Uruguaiana", status: "Aberto", total: 1840 },
  { id: "PED-1052", customer: "Acme Ltda", origin: "Guarulhos", status: "Pago", total: 95 },
  { id: "PED-1053", customer: "Costa Brava", origin: "Itajaí", status: "Cancelado", total: 0 },
  { id: "PED-1054", customer: "Norte Log", origin: "Bento Gonçalves", status: "Aberto", total: 2675 },
  { id: "PED-1055", customer: "Serra Frio", origin: "Farroupilha", status: "Pago", total: 1120 },
  { id: "PED-1056", customer: "Vale Química", origin: "Esteio", status: "Atrasado", total: 4480 },
  { id: "PED-1057", customer: "Litoral Sul", origin: "Joinville", status: "Aberto", total: 640 },
  { id: "PED-1058", customer: "Pampa Agro", origin: "Bagé", status: "Pago", total: 990 },
  { id: "PED-1059", customer: "Delta Saúde", origin: "Novo Hamburgo", status: "Aberto", total: 305 },
  { id: "PED-1060", customer: "Costa Brava", origin: "Balneário", status: "Atrasado", total: 1780 },
  { id: "PED-1061", customer: "Norte Log", origin: "Gramado", status: "Pago", total: 210 },
];

export function formatBRL(value: number) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function statusBadgeVariant(
  status: PedidoStatus,
): "success" | "warning" | "danger" | "secondary" {
  if (status === "Pago") return "success";
  if (status === "Atrasado") return "warning";
  if (status === "Cancelado") return "danger";
  return "secondary";
}
