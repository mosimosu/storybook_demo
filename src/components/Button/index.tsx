import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";
import { Palette } from "../../enums/Theme/paletteEnum";

/**
 * Button 元件屬性 extends MUI Button 屬性
 *
 * @interface ButtonProps
 * @extends {MuiButtonProps}
 */
interface ButtonProps extends MuiButtonProps {
  isSelected?: boolean;
}

/**
 * Button 元件
 *
 * @param props {ButtonProps} MUI Button 屬性，用來傳給下一層 MUI Button
 * @param isSelected {boolean} 是否選取，預設為 false
 * @return {JSX.Element}
 */
const Button = ({ isSelected = false, ...props }: ButtonProps): JSX.Element => (
  <MuiButton
    variant="contained" // 按鈕樣式，預設為 contained，其他可選擇 text、outlined
    color="primary" // 按鈕顏色，預設為 primary，其他可選擇 success、error、warning、info、secondary、info
    disableRipple={true} // 停用按鈕點擊效果，預設為 true
    sx={{
      ...(isSelected && { backgroundColor: Palette.Blue50 }), // 如果按鈕選取，背景顏色為 Palette.Blue50
      ...props.sx, // 其他 MUI Button 屬性
    }}
    {...props}
  />
);
export default Button;
