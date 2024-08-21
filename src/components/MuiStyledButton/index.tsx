import { Button } from "@mui/material";
import { styled } from "@mui/system";
import { ButtonColorEnum } from "../../enums/Button/ButtonColorEnum";
import { ButtonSizeEnum } from "../../enums/Button/ButtonSizeEnum";
import { Palette } from "../../enums/Theme/paletteEnum";

// Button 的 interface
interface StyledButtonProps {
  // 按鈕名稱
  name: string;
  // 按鈕樣式
  mode: keyof typeof ButtonColorEnum;
  // 是否禁用
  disabled: boolean;
  // 大小
  size: keyof typeof ButtonSizeEnum;
  // 是否選取
  isSelected?: boolean;
  // 點擊功能
  onClick?: () => void;
  // 其他 props
  sx?: React.CSSProperties;
}

// 共同設定 props
interface CommonSettingProps {
  mode: keyof typeof ButtonColorEnum; // 按鈕樣式
  size: keyof typeof ButtonSizeEnum; // 大小
}

// 共通設定
const commonSetting = (props: CommonSettingProps) => ({
  height: props.size === "Small" ? "32px" : "40px",
  borderWidth: props.mode?.includes("outline") ? "2px" : "1px",
  padding: props.size === "Small" ? "4px 8px" : "0rem 1rem",
  borderStyle: "solid",
  borderRadius: "6px",
});

// primary 按鈕樣式
const primaryStyle = (theme: any) => ({
  ...commonSetting,
  color: theme.palette?.common.white,
  backgroundColor: theme.palette?.primary.main,
  borderColor: theme.palette?.primary.main,
  "&:hover": {
    backgroundColor: theme.palette?.primary.light,
    borderColor: theme.palette?.primary.light,
  },
  "&:active": {
    backgroundColor: theme.palette?.primary.dark,
    borderColor: theme.palette?.primary.dark,
  },
  "&:disabled": {
    backgroundColor: theme.palette?.grey["300"],
    borderColor: theme.palette?.grey["300"],
  },
});

const secondaryStyle = (theme: any) => ({
  ...commonSetting,
  color: theme.palette?.common.black,
  backgroundColor: theme.palette?.secondary.main,
  borderColor: theme.palette?.secondary.main,
  "&:hover": {
    backgroundColor: theme.palette?.secondary.light,
    borderColor: theme.palette?.secondary.light,
  },
  "&:active": {
    backgroundColor: theme.palette?.secondary.dark,
    borderColor: theme.palette?.secondary.dark,
  },
  "&:disabled": {
    backgroundColor: theme.palette?.grey["300"],
    borderColor: theme.palette?.grey["300"],
  },
});

const warningStyle = (theme: any) => ({
  ...commonSetting,
  color: theme.palette?.common.black,
  backgroundColor: theme.palette?.warning.main,
  borderColor: theme.palette?.warning.main,
  "&:hover": {
    backgroundColor: theme.palette?.warning.light,
    borderColor: theme.palette?.warning.light,
  },
  "&:active": {
    backgroundColor: theme.palette?.warning.dark,
    borderColor: theme.palette?.warning.dark,
    color: theme.palette?.common.white,
  },
  "&:disabled": {
    backgroundColor: theme.palette?.grey["300"],
    borderColor: theme.palette?.grey["300"],
  },
});

const alarmStyle = (theme: any) => ({
  ...commonSetting,
  color: theme.palette?.common.white,
  backgroundColor: theme.palette?.error.main,
  borderColor: theme.palette?.error.main,
  "&:hover": {
    backgroundColor: theme.palette?.error.light,
    borderColor: theme.palette?.error.light,
  },
  "&:active": {
    backgroundColor: theme.palette?.error.dark,
    borderColor: theme.palette?.error.dark,
  },
  "&:disabled": {
    backgroundColor: theme.palette?.grey["300"],
    borderColor: theme.palette?.grey["300"],
  },
});

const outlinePrimaryStyle = (theme: any) => ({
  ...commonSetting,
  color: theme.palette?.primary.main,
  backgroundColor: theme.palette?.common.white,
  borderColor: theme.palette?.primary.main,
  "&:hover": {
    color: theme.palette?.primary.main,
    borderColor: theme.palette?.primary.main,
  },
  "&:active": {
    color: theme.palette?.primary.main,
    borderColor: theme.palette?.primary.main,
  },
  "&:disabled": {
    color: theme.palette?.grey["300"],
    borderColor: theme.palette?.grey["300"],
  },
  "&[data-is-selected=true]": {
    backgroundColor: Palette.Blue50,
    borderColor: Palette.Blue50,
  },
});

const outlineSecondaryStyle = (theme: any) => ({
  ...commonSetting,
  color: theme.palette?.base.black,
  backgroundColor: theme.palette?.common.white,
  borderColor: theme.palette?.grey["300"],
  "&:hover": {
    color: theme.palette?.base.black,
    borderColor: theme.palette?.grey["300"],
  },
  "&:active": {
    color: theme.palette?.base.black,
    borderColor: theme.palette?.grey["300"],
    backgroundColor: theme.palette?.grey["200"],
  },
  "&:disabled": {
    color: theme.palette?.grey["300"],
    borderColor: theme.palette?.grey["300"],
  },
});

// 根據傳入的 props 設定 Button 的樣式
const getButtonStyle = (props: StyledButtonProps, theme: any) => {
  switch (props.mode) {
    case "Primary":
      return primaryStyle(theme);
    case "Secondary":
      return secondaryStyle(theme);
    case "Warning":
      return warningStyle(theme);
    case "Alarm":
      return alarmStyle(theme);
    case "OutlinePrimary":
      return outlinePrimaryStyle(theme);
    case "OutlineSecondary":
      return outlineSecondaryStyle(theme);
    default:
      return primaryStyle(theme);
  }
};

// 使用 MUI 的 styled 覆寫 Button
const StyledButtons = styled(Button)<StyledButtonProps>(
  ({ theme, mode, size, ...props }) => ({
    ...getButtonStyle({ mode, size, ...props }, theme),
    ...commonSetting({ mode, size }), // 加入共通設定
  })
);

const StyledButton = ({
  mode = "Primary", // 預設 mode 來呈現 primary 按鈕
  size = "Medium", // 預設 size 來呈現 medium 按鈕
  isSelected = false, // 預設 isSelected 來呈現未被選中
  name = "按鈕名稱", // 預設 name 來呈現按鈕名稱
  ...props // 其他 props
}: StyledButtonProps): React.ReactElement => (
  <StyledButtons
    name={name}
    mode={mode}
    size={size}
    data-is-selected={isSelected}
    {...props}
  >
    {name}
  </StyledButtons>
);

export default StyledButton;
