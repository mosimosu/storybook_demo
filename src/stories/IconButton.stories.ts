import { Meta, StoryObj } from "@storybook/react";
import IconButton from "../components/IconButton";
import { IconButtonIconEnum } from "../enums/IconButton/IconButtonIconEnum";
import { IconButtonTextEnum } from "../enums/IconButton/IconButtonTextEnum";
import { IconButtonColorEnum } from "../enums/IconButton/IconButtonColorEnum";
const meta: Meta<typeof IconButton> = {
  title: "Component/IconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    icon: {
      control: "select",
      options: Object.keys(IconButtonIconEnum),
    },
    color: {
      control: "radio",
      options: Object.values(IconButtonColorEnum),
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
  },
  args: {
    icon: "delete",
    variant: "icon",
    text: "delete",
    disabled: false,
  },
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Primary: Story = {
  args: {
    color: "success",
    variant: "icon",
    icon: "delete",
    text: "delete",
  },
};
