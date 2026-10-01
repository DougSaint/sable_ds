"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  Card,
  CardContent,
  Field,
  Input,
  Switch,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@sable/ui";

export function SettingsPattern() {
  return (
    <div className="max-w-2xl">
      <h2 className="mb-4 text-xl font-semibold tracking-tight">Settings</h2>
      <Tabs defaultValue="geral">
        <TabsList>
          <TabsTrigger value="geral">Geral</TabsTrigger>
          <TabsTrigger value="equipe">Equipe</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
        </TabsList>
        <TabsContent value="geral">
          <Card>
            <CardContent className="flex flex-col gap-4 pt-5">
              <Field label="Nome da org" htmlFor="org" hint="Aparece no App Shell">
                <Input id="org" defaultValue="Norte Log" />
              </Field>
              <Accordion type="multiple" defaultValue={["notif"]}>
                <AccordionItem value="notif">
                  <AccordionTrigger>Notificações</AccordionTrigger>
                  <AccordionContent>
                    <label className="flex items-center justify-between gap-4 text-sm text-foreground">
                      Relatórios semanais
                      <Switch defaultChecked />
                    </label>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="acesso">
                  <AccordionTrigger>Acesso</AccordionTrigger>
                  <AccordionContent>
                    <label className="flex items-center justify-between gap-4 text-sm text-foreground">
                      Exigir SSO
                      <Switch />
                    </label>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <div>
                <Button>Salvar</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="equipe">
          <p className="text-sm text-muted">Convide membros pelo e-mail corporativo.</p>
        </TabsContent>
        <TabsContent value="billing">
          <p className="text-sm text-muted">Plano operacional · faturamento mensal.</p>
        </TabsContent>
      </Tabs>
    </div>
  );
}
