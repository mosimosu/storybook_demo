import {
    Button as MuiButton,
    ButtonProps as MuiButtonProps,
} from "@mui/material";

/**
 * Button 元件屬性 extends MUI Button 屬性
 *
 * @interface ButtonProps
 * @extends {MuiButtonProps}
 */
interface ButtonProps extends MuiButtonProps {
    text: string;
}

/**
 * Button 元件
 *
 * @param props {ButtonProps} MUI Button 屬性，用來傳給下一層 MUI Button
 *
 * @param isSelected {boolean} 是否選取，預設為 false
 *
 * @return {JSX.Element}
 */
const Button = ({
    // isSelected = false,
    text = "按鈕",
    ...props
}: ButtonProps): JSX.Element => {
    // // 選取時的樣式
    // const selectedStyle = isSelected && { backgroundColor: Palette.Blue50 };
    // 組合 MUI Button 的 sx 屬性和外部傳入的 sx 屬性
    const totalStyle = {
        // ...selectedStyle,
        ...props.sx,
    };

    return (
        <MuiButton
            variant="contained" // 按鈕樣式，預設為 contained，其他可選擇 text、outlined
            color="primary" // 按鈕顏色，預設為 primary，其他可選擇 success、error、warning、info、secondary、info
            {...props}
            sx={totalStyle}
        >
            {text}
        </MuiButton>
    );
};
export default Button;
