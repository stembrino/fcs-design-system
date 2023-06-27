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

export const Sample: Story = {
  args: {
    src: "https://github.com/stembrino/fcs-design-system/blob/master/assets/product-example_preview_rev_1.png?raw=true",
    border: true,
  },
};

export const WithBlue: Story = {
  args: {
    ...Sample.args,
    color: "#1543a0",
    border: false,
  },
  parameters: {
    backgrounds: { default: "twitter" },
  },
};

export const WithPink: Story = {
  args: {
    ...WithBlue.args,
    color: "#e02ab1",
  },
  parameters: {
    backgrounds: { default: "black" },
  },
};
