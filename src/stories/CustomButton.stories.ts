import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import CustomButton from "./CustomButton";

const meta = {
  title: "Example/CustomButton",
  component: CustomButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof CustomButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Primary",
    color: "base.white",
    bgColor: "blue.700",
    borderColor: "blue.600",
    borderWidth: "1px",
    borderStyle: "solid",
    borderRadius: "4px",
    hover: "blue.600",
    pressed: "blue.800",
    disabled: "gray.300",
    isDisabled: false,
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary",
    color: "base.white",
    bgColor: "blue.300",
    borderColor: "blue.300",
    borderWidth: "1px",
    borderStyle: "solid",
    borderRadius: "4px",
    hover: "blue.400",
    pressed: "blue.500",
    disabled: "gray.200",
    isDisabled: false,
  },
};

export const OutlinePrimary: Story = {
  args: {
    label: "inline primary",
  },
};

export const OutlineSecondary: Story = {
  args: {
    label: "inline secondary",
  },
};

export const Warning: Story = {
  args: {
    label: "Warning",
    color: "base.black",
    bgColor: "yellow.500",
    borderColor: "yellow.500",
    borderWidth: "1px",
    borderStyle: "solid",
    borderRadius: "4px",
    hover: "yellow.400",
    pressed: "yellow.600",
    disabled: "gray.200",
    isDisabled: false,
  },
};

export const Alarm: Story = {
  args: {
    label: "alarm",
    color: "base.white",
    bgColor: "red.700",
    borderColor: "red.700",
    borderWidth: "1px",
    borderStyle: "solid",
    borderRadius: "4px",
    hover: "red.500",
    pressed: "red.600",
    disabled: "gray.200",
    isDisabled: false,
  },
};
