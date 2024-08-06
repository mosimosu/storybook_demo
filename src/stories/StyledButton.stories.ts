import { Meta, StoryObj } from "@storybook/react";
import StyledButton from "../stories/StyledButton"; // 請替換為你的 StyledButton 檔案路徑

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
      options: ["primary", "secondary", "warning", "alarm"],
    },
    disabled: { control: "boolean" },
    onClick: { action: "clicked" },
  },
};

export default meta;

type Story = StoryObj<typeof StyledButton>;

export const Primary: Story = {
  args: {
    $mode: "warning",
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
