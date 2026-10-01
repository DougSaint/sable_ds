import type { Meta, StoryObj } from "@storybook/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@sable/ui";

const meta: Meta = { title: "Core/Accordion" };
export default meta;

export const Default: StoryObj = {
  render: () => (
    <Accordion type="multiple" defaultValue={["notif"]} className="w-80">
      <AccordionItem value="notif">
        <AccordionTrigger>Notificações</AccordionTrigger>
        <AccordionContent>Relatórios semanais por e-mail.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="acesso">
        <AccordionTrigger>Acesso</AccordionTrigger>
        <AccordionContent>SSO obrigatório nesta org.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
