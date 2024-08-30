import { Meta, StoryObj } from "@storybook/react";
import ComboText from "../components/ComboText";
import { ComboColorEnum } from "../enums/ComboText/ComboColorEnum";
import { ComboTextEnum } from "../enums/ComboText/ComboTextEnum";

// 從 interface 產生 textAry key 陣列
const textAry = Object.keys(ComboTextEnum);
// 從 interface 產生 colorAry key 陣列
const colorAry = Object.keys(ComboColorEnum);

const meta: Meta<typeof ComboText> = {
    title: "Component/ComboText",
    component: ComboText,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        text: {
            control: "select",
            options: textAry,
            mapping: ComboTextEnum,
        },
        color: {
            control: "select",
            options: colorAry,
            mapping: ComboColorEnum,
        },
        position: {
            control: "radio",
            options: ["left", "fill"],
        },
    },
    args: {
        text: ComboTextEnum.Reserved,
        color: ComboColorEnum.Reserved,
    },
};

export default meta;
type Story = StoryObj<typeof ComboText>;

textAry.map((text) => {
    return () => {
        return {
            args: {
                text: text,
                color: ComboColorEnum.Reserved,
            },
        };
    };
});

export const Primary: Story = {
    args: {
        text: ComboTextEnum.Reserved,
        color: ComboColorEnum.Reserved,
    },
};
