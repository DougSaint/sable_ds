import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "@sable/ui";

const meta: Meta = { title: "Core/Slider" };
export default meta;

export const DigestHour: StoryObj = {
  render: () => (
    <Slider
      className="w-64"
      defaultValue={[8]}
      min={6}
      max={20}
      step={1}
      aria-label="Horário do digest"
    />
  ),
};
