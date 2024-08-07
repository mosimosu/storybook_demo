import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import StyledButton from "../components/StyledButton";
import { ButtonSize } from "../enums/StyledButton/ButtonSize";

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
      options: [
        "primary",
        "secondary",
        "warning",
        "alarm",
        "outline-primary",
        "outline-secondary",
      ],
    },
    $size: {
      control: "radio",
      options: ["small", "medium", "large"],
    },
    $isSelected: { control: "boolean" },
    disabled: { control: "boolean" },
    onClick: { action: "clicked" },
  },
  args: {
    $mode: "primary",
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
    $mode: "primary",
    disabled: false,
  },
};

export const Secondary: Story = {
  args: {
    $mode: "secondary",
    disabled: false,
  },
};

export const Warning: Story = {
  args: {
    $mode: "warning",
    disabled: false,
  },
};

export const Alarm: Story = {
  args: {
    $mode: "alarm",
    disabled: false,
  },
};

export const OutlinePrimary: Story = {
  args: {
    $mode: "outline-primary",
    disabled: false,
  },
};

export const OutlineSecondary: Story = {
  args: {
    $mode: "outline-secondary",
    disabled: false,
  },
};
