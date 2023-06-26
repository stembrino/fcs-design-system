import type { Meta, StoryObj } from "@storybook/react";

import SlotProductCard from "../SlotProductCard";

const meta: Meta<typeof SlotProductCard> = {
  title: "SlotProductCard",
  component: SlotProductCard,
  parameters: {
    backgrounds: {
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
    // onClick: { action: "clicked" },
    color: {
      control: { type: "color" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SlotProductCard>;

export const Primary: Story = {
  args: {
    src: "/product-example_preview_rev_1.png",
  },
  parameters: {
    backgrounds: { default: "twitter" },
  },
};

export const WithBlue: Story = {
  args: {
    ...Primary.args,
    color: "#1543a0",
  },
  parameters: {
    backgrounds: { default: "twitter" },
  },
};

export const WithPinkColor: Story = {
  args: {
    ...Primary.args,
    color: "#e02ab1",
  },
  parameters: {
    backgrounds: { default: "black" },
  },
};
