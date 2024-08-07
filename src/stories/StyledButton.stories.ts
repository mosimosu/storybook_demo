import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import StyledButton from "../components/StyledButton";
import { ButtonSize } from "../enums/StyledButton/ButtonSize";
import { ButtonType } from "../enums/StyledButton/ButtonType";

const meta: Meta<typeof StyledButton> = {
  title: "Example/StyledButton",
  component: StyledButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    $mode: {
      control: "select",
      options: Object.values(ButtonType),
    },
    $size: {
      control: "radio",
      options: Object.values(ButtonSize),
    },
    $isSelected: { control: "boolean" },
    disabled: { control: "boolean" },
    onClick: { action: "clicked" },
  },
  args: {
    $mode: ButtonType.primary,
    disabled: false,
    $isSelected: false,
    $size: ButtonSize.none,
    onClick: fn(),
  },
};

export default meta;

type Story = StoryObj<typeof StyledButton>;

export const Primary: Story = {
  args: {
    $mode: ButtonType.primary,
    disabled: false,
  },
};

export const Secondary: Story = {
  args: {
    $mode: ButtonType.secondary,
    disabled: false,
  },
};

export const Warning: Story = {
  args: {
    $mode: ButtonType.warning,
    disabled: false,
  },
};

export const Alarm: Story = {
  args: {
    $mode: ButtonType.alarm,
    disabled: false,
  },
};

export const OutlinePrimary: Story = {
  args: {
    $mode: ButtonType.outlinePrimary,
    disabled: false,
  },
};

export const OutlineSecondary: Story = {
  args: {
    $mode: ButtonType.outlineSecondary,
    disabled: false,
  },
};
