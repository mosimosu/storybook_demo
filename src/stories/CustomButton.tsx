import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material";
import theme from "../constants/theme";
import { useState } from "react";

// Your component props
type props = {
  label?: string;
  color?: string;
  bgColor?: string;
  borderColor?: string;
  borderWidth?: string;
  borderStyle?: string;
  hover?: string;
  pressed?: string;
  disabled?: string;
  isDisabled?: boolean;
  onClick?: () => void;
};

function CustomButton({
  label = "Button",
  color = "base.white",
  bgColor = "base.white",
  borderColor = "base.black",
  borderWidth = "1px",
  borderStyle = "solid",
  hover = "blue.600",
  pressed = "blue.900",
  disabled = "gray.300",
  isDisabled = false,
}: props) {
  const [isDisabledState, setIsDisabled] = useState(isDisabled);
  const handleClick = () => {
    // 這裡可以根據你的邏輯來設置 isDisabled 的值
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
        >
          {label}
        </Button>
      </ThemeProvider>
    </>
  );
}

export default CustomButton;
