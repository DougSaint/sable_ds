import type { Meta, StoryObj } from "@storybook/react";
import { Button, Popover, PopoverClose, PopoverContent, PopoverTrigger } from "@sable/ui";

const meta: Meta = { title: "Core/Popover" };
export default meta;

export const Demo: StoryObj = {
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button>Demo</Button>
      </PopoverTrigger>
      <PopoverContent className="w-48 p-2">
        <PopoverClose asChild>
          <Button variant="ghost" size="sm" className="w-full justify-start">
            Simular carga
          </Button>
        </PopoverClose>
      </PopoverContent>
    </Popover>
  ),
};
