import { Meta, StoryObj } from "@storybook/react";
import IconButton from "../components/IconButton";

import { IconButtonTextEnum } from "../enums/IconButton/IconButtonTextEnum";
import { IconButtonColorEnum } from "../enums/IconButton/IconButtonColorEnum";
import { IconButtonTableTypeEnum } from "../enums/IconButton/IconButtonTableTypeEnum";

const meta: Meta<typeof IconButton> = {
  title: "Component/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "radio",
      options: Object.keys(IconButtonColorEnum),
    },

    disabled: {
      control: "boolean",
    },
    text: {
      control: "select",
      options: Object.keys(IconButtonTextEnum),
    },
    variant: {
      control: { disable: true },
      description: "按鈕樣式",
    },
    table: {
      control: "radio",
      options: Object.keys(IconButtonTableTypeEnum),
    },
  },
  args: {
    variant: "icon",
    text: "delete",
    disabled: false,
    color: "Primary",
    table: "A",
  },
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Primary: Story = {
  args: {
    color: "Primary",
    variant: "icon",
    text: "delete",
  },
};
