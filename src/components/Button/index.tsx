import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";
import { Palette } from "../../enums/Theme/paletteEnum";

/**
 *
 *
 * @interface ButtonProps
 * @extends {MuiButtonProps}
 */
interface ButtonProps extends MuiButtonProps {
  isSelected?: boolean;
}

const Button = ({ isSelected = false, ...props }: ButtonProps): JSX.Element => (
  <MuiButton
    variant="contained"
    color="primary"
    disableRipple={true}
    sx={{
      ...(isSelected && { backgroundColor: Palette.Blue50 }),
      ...props.sx,
    }}
    {...props}
  />
);
export default Button;
