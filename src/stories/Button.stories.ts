import { Meta, StoryObj } from "@storybook/react";
import Button from "../components/Button";
import { ButtonSizeEnum } from "../enums/Button/ButtonSizeEnum";
import { ButtonColorEnum } from "../enums/Button/ButtonColorEnum";
import { ButtonVariantEnum } from "../enums/Button/ButtonVariantEnum";

const meta: Meta<typeof Button> = {
    // 設定元件名稱及位置
    title: "Component/Button",
    // 引入元件
    component: Button,
    // 把元件置中
    parameters: {
        layout: "centered",
    },
    // 自動生成 index 文件
    tags: ["autodocs"],
    // 設定元件控制項
    argTypes: {
        // 按鈕文字
        children: {
            control: "text",
            description: "按鈕文字",
        },
        // 按鈕種類
        variant: {
            control: "radio",
            options: Object.values(ButtonVariantEnum),
            description: "按鈕種類",
            defaultValue: "contained",
        },
        // 按鈕顏色
        color: {
            control: "select",
            options: Object.values(ButtonColorEnum).filter(
                (item) => item !== "warning" && item !== "error"
            ),
            description: "按鈕顏色",
            defaultValue: "primary",
        },
        // 是否禁用
        disabled: {
            control: "boolean",
            description: "是否禁用",
        },

        // 按鈕大小
        size: {
            control: "select",
            options: Object.values(ButtonSizeEnum),
            description: "按鈕大小",
            defaultValue: "medium",
        },
    },
    // 設定元件預設值
    args: {
        children: "按鈕",
        variant: "contained",
        color: "primary",
        disabled: false,
        size: "medium",
    },
};
// 匯出元件
export default meta;

// 設定元件 type
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        color: "primary",
        disabled: false,
    },
};

export const Secondary: Story = {
    args: {
        color: "secondary",
        disabled: false,
    },
};

export const Success: Story = {
    args: {
        color: "success",
        disabled: false,
    },
};

export const OutlinePrimary: Story = {
    args: {
        color: "primary",
        variant: "outlined",
        disabled: false,
    },
};

export const OutlineSecondary: Story = {
    args: {
        color: "secondary",
        variant: "outlined",
        disabled: false,
    },
};
