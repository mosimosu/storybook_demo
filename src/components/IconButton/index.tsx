import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";

import { IconButtonIconEnum } from "../../enums/IconButton/IconButtonIconEnum";
import { IconButtonTextEnum } from "../../enums/IconButton/IconButtonTextEnum";
import { IconButtonColorEnum } from "../../enums/IconButton/IconButtonColorEnum";
import { IconButtonTableTypeEnum } from "../../enums/IconButton/IconButtonTableTypeEnum";
import { Palette } from "../../enums/Theme/paletteEnum";

type IconButtonColor = keyof typeof IconButtonColorEnum;
type IconButtonTable = keyof typeof IconButtonTableTypeEnum;

interface IconButtonProps extends Omit<MuiButtonProps, "color"> {
  icon: keyof typeof IconButtonIconEnum;
  text: keyof typeof IconButtonTextEnum;
  color: IconButtonColor;
  table?: IconButtonTable;
}

const IconButton = ({
  text,
  color,
  table,
  ...props
}: Omit<IconButtonProps, "icon">): JSX.Element => {
  const name = IconButtonTextEnum[text];
  const colors = IconButtonColorEnum[color];
  const tables = table ? IconButtonTableTypeEnum[table] : undefined;

  // 根據 text 來選擇對應的 icon
  const Icon = IconButtonIconEnum[text];

  return (
    <MuiButton
      color={colors}
      startIcon={<Icon />}
      variant="icon"
      disableRipple={true}
      sx={{
        color:
          color === "Success"
            ? Palette.Green500
            : tables === "a" && color === "Primary"
              ? Palette.Blue500
              : Palette.Black,
        "& span": {
          marginRight: "4px",
        },
      }}
      {...props}
    >
      {name}
    </MuiButton>
  );
};

export default IconButton;
