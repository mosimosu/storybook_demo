import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Pagination from "../components/Pagination";

const meta: Meta<typeof Pagination> = {
    title: "Component/Pagination",
    component: Pagination,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        totalSize: {
            control: "number",
            description: "總筆數",
        },
        totalPageSize: {
            control: "number",
            description: "總頁數",
        },
        onPageOnChange: {
            control: fn(),
            description: "點擊頁碼",
        },
    },
    args: {
        totalSize: 100,
        totalPageSize: 15,
        onPageOnChange: () => {},
    },
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
    args: {
        totalSize: 100,
        totalPageSize: 15,
        onPageOnChange: () => {},
    },
};
