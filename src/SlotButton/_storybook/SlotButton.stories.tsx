import type { Meta, StoryObj } from "@storybook/react";

import SlotButton from "../SlotButton";

const meta: Meta<typeof SlotButton> = {
  title: "SlotButton",
  component: SlotButton,
  argTypes: {
    onClick: { action: "clicked" },
    color: {
      control: { type: "color" },
    },
    variant: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SlotButton>;

export const Primary: Story = {
  args: {
    label: "BUTTON",
    variant: "primary",
    rounded: false,
    size: "medium",
    width: "150px",
  },
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    variant: "secondary",
  },
};
