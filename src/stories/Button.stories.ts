import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Button from "../components/Button";
import { ButtonSizeEnum } from "../enums/Button/ButtonSizeEnum";
import { ButtonTypeEnum } from "../enums/Button/ButtonTypeEnum";

const meta: Meta<typeof Button> = {
  title: "Component/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    $mode: {
      control: "select",
      options: Object.values(ButtonTypeEnum),
    },
    $size: {
      control: "radio",
      options: Object.values(ButtonSizeEnum),
    },
    $isSelected: { control: "boolean" },
    disabled: { control: "boolean" },
    onClick: { action: "clicked" },
  },
  args: {
    $mode: ButtonTypeEnum.primary,
    disabled: false,
    $isSelected: false,
    $size: ButtonSizeEnum.medium,
    onClick: fn(),
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    $mode: ButtonTypeEnum.primary,
    disabled: false,
  },
};

export const Secondary: Story = {
  args: {
    $mode: ButtonTypeEnum.secondary,
    disabled: false,
  },
};

export const Warning: Story = {
  args: {
    $mode: ButtonTypeEnum.warning,
    disabled: false,
  },
};

export const Alarm: Story = {
  args: {
    $mode: ButtonTypeEnum.alarm,
    disabled: false,
  },
};

export const OutlinePrimary: Story = {
  args: {
    $mode: ButtonTypeEnum.outlinePrimary,
    disabled: false,
  },
};

export const OutlineSecondary: Story = {
  args: {
    $mode: ButtonTypeEnum.outlineSecondary,
    disabled: false,
  },
};
