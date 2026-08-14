import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import {
  Checkbox,
  Combobox,
  DatePicker,
  RadioGroup,
  RadioGroupItem,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@sable/ui";

const meta: Meta = { title: "Forms" };
export default meta;

export const CheckboxStory: StoryObj = {
  name: "Checkbox",
  render: () => (
    <label className="flex items-center gap-2 text-sm text-foreground">
      <Checkbox /> Aceito
    </label>
  ),
};

export const RadioStory: StoryObj = {
  name: "RadioGroup",
  render: () => (
    <RadioGroup defaultValue="a" className="text-sm text-foreground">
      <label className="flex items-center gap-2">
        <RadioGroupItem value="a" /> A
      </label>
      <label className="flex items-center gap-2">
        <RadioGroupItem value="b" /> B
      </label>
    </RadioGroup>
  ),
};

export const DatePickerStory: StoryObj = {
  name: "DatePicker",
  render: function R() {
    const [d, setD] = useState<Date | undefined>();
    return <DatePicker value={d} onChange={setD} />;
  },
};

export const ComboboxStory: StoryObj = {
  name: "Combobox",
  render: function R() {
    const [v, setV] = useState("");
    return (
      <Combobox
        value={v}
        onChange={setV}
        options={[
          { value: "a", label: "Acme" },
          { value: "n", label: "Norte" },
        ]}
      />
    );
  },
};

export const TableStory: StoryObj = {
  name: "Table",
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>PED-1</TableCell>
          <TableCell>Aberto</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};
