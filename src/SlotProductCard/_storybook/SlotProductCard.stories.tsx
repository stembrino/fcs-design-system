import type { Meta, StoryObj } from "@storybook/react";

import SlotProductCard from "../SlotProductCard";

const meta: Meta<typeof SlotProductCard> = {
  title: "SlotProductCard",
  component: SlotProductCard,
  parameters: {
    backgrounds: {
      // default: "black",
      values: [
        {
          name: "black",
          value: "#1E1E1E",
        },
        { name: "twitter", value: "#00aced" },
      ],
    },
  },
  argTypes: {
    onClick: { action: "clicked" },
    variant: {
      options: ["primary"],
      control: { type: "radio" },
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SlotProductCard>;

export const Primary: Story = {
  args: {
    variant: "primary",
  },
  parameters: {
    backgrounds: { default: "black" },
  },
};
