import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material";
import theme from "../../theme";
import { useState } from "react";

// Your component props
interface Props {
  label?: string;
  color?: string;
  bgColor?: string;
  borderColor?: string;
  borderWidth?: string;
  borderStyle?: string;
  borderRadius?: string;
  hover?: string;
  pressed?: string;
  disabled?: string;
  isDisabled?: boolean;
  [key: string]: any;
  onClick?: () => void;
}

function CustomButton({
  label = "Button",
  color = "base.white",
  bgColor = "blue.700",
  borderColor = "blue.600",
  borderWidth = "1px",
  borderStyle = "solid",
  borderRadius = "4px",
  hover = "blue.600",
  pressed = "blue.800",
  disabled = "gray.300",
  isDisabled = false,
  ...props
}: Props) {
  /** @type {*}
   * @param isDisabled boolean
   */
  const [isDisabledState, setIsDisabled] = useState(isDisabled);

  const handleClick = () => {
    // 控制 isDisabled 的值
    setIsDisabled(!isDisabled);
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <Button
          sx={{
            bgcolor: bgColor,
            color: color,
            borderColor: borderColor,
            borderWidth: borderWidth,
            borderStyle: borderStyle,
            borderRadius: borderRadius,
            "&:hover": {
              bgcolor: hover,
              borderColor: hover,
              borderWidth: borderWidth,
              borderStyle: borderStyle,
            },
            "&:active": {
              bgcolor: pressed,
              borderColor: pressed,
              borderWidth: borderWidth,
              borderStyle: borderStyle,
            },
            "&:disabled": {
              bgcolor: disabled,
              color: "base.white",
              borderColor: disabled,
              borderWidth: borderWidth,
              borderStyle: borderStyle,
            },
          }}
          disabled={isDisabledState}
          onClick={handleClick}
          {...props}
        >
          {label}
        </Button>
      </ThemeProvider>
    </>
  );
}

export default CustomButton;
