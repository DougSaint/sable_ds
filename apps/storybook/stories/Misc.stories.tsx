import type { Meta, StoryObj } from "@storybook/react";
import { Badge, Card, CardContent, CardHeader, CardTitle, Switch, Tabs, TabsContent, TabsList, TabsTrigger, Tooltip, TooltipContent, TooltipTrigger, Button, toast } from "@sable/ui";

const meta: Meta = { title: "Core/Misc" };
export default meta;

export const BadgeStory: StoryObj = {
  name: "Badge",
  render: () => (
    <div className="flex gap-2">
      <Badge>Primary</Badge>
      <Badge variant="success">Ok</Badge>
      <Badge variant="danger">Erro</Badge>
    </div>
  ),
};

export const CardStory: StoryObj = {
  name: "Card",
  render: () => (
    <Card className="w-64">
      <CardHeader>
        <CardTitle>Ambiente</CardTitle>
      </CardHeader>
      <CardContent>Produção</CardContent>
    </Card>
  ),
};

export const SwitchStory: StoryObj = {
  name: "Switch",
  render: () => <Switch defaultChecked aria-label="Ativo" />,
};

export const TabsStory: StoryObj = {
  name: "Tabs",
  render: () => (
    <Tabs defaultValue="a">
      <TabsList>
        <TabsTrigger value="a">A</TabsTrigger>
        <TabsTrigger value="b">B</TabsTrigger>
      </TabsList>
      <TabsContent value="a">Painel A</TabsContent>
      <TabsContent value="b">Painel B</TabsContent>
    </Tabs>
  ),
};

export const TooltipStory: StoryObj = {
  name: "Tooltip",
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Foco</Button>
      </TooltipTrigger>
      <TooltipContent>⌘S</TooltipContent>
    </Tooltip>
  ),
};

export const ToastStory: StoryObj = {
  name: "Toast",
  render: () => <Button onClick={() => toast("Atualizado")}>Toast</Button>,
};
