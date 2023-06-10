import type { Meta, StoryObj } from "@storybook/react";

import SlotButton from "..";

const meta: Meta<typeof SlotButton> = {
  title: "SlotButton",
  component: SlotButton,
  parameters: {
    actions: {
      handles: ["onClick"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof SlotButton>;

export const Primary: Story = {
  args: { label: "BUTTON", theme: "primary", rounded: false, size: "medium", width: "150px" },
};

export const Secondary: Story = {
  args: { label: "BUTTON", theme: "secondary", rounded: false, size: "medium", width: "150px" },
};
