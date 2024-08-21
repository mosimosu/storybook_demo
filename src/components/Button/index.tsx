import { Button as MuiButton } from "@mui/material";
import styled, { css } from "styled-components";
import { ButtonSizeEnum } from "../../enums/Button/ButtonSizeEnum";
import { ButtonTypeEnum } from "../../enums/Button/ButtonTypeEnum";
import { ThemeProvider } from "styled-components";
import theme from "../../theme";

// Button 的 interface
interface StyledButtonProps {
  // 按鈕名稱
  name: string;
  // 按鈕樣式
  $mode: ButtonTypeEnum;
  // 是否禁用
  disabled: boolean;
  // 大小
  $size: ButtonSizeEnum;
  // 是否選取
  $isSelected: boolean;
  // 點擊功能
  onClick?: () => void;
}

// 共同設定 props
interface CommonSettingProps {
  // 按鈕樣式
  $mode?: ButtonTypeEnum;
  // 大小
  $size?: ButtonSizeEnum;
}

// 共通設定
const commonSetting = css<CommonSettingProps>`
  ${(props) => {
    switch (props.$size) {
      case ButtonSizeEnum.small:
        return "height: 32px;";
      default:
        return "height: 40px;";
    }
  }}
  ${(props) =>
    (props.$mode?.includes("outline") && "border-width: 2px ") ||
    "border-width: 1px;"};
  border-style: solid;
  border-radius: 6px;
  ${(props) => {
    switch (props.$size) {
      case ButtonSizeEnum.small:
        return "padding: 4px 8px;";
      default:
        return "padding: 0rem 1rem;";
    }
  }}
`;

// font 設定
const fontSetting = css`
  font-size: ${(props) => props.theme.typography?.textTiny.fontSize};
  font-weight: ${(props) => props.theme.typography?.textTiny.fontWeight};
`;

const selected = css`
  background-color: ${(props) => props.theme.palette?.blue["50"]};
  border-color: ${(props) => props.theme.palette?.blue["600"]};
`;

// primary 按鈕樣式
const primaryStyle = css`
  ${commonSetting};
  ${fontSetting};
  color: ${(props) => props.theme.palette?.base.white};
  background-color: ${(props) => props.theme.palette?.blue["600"]};
  border-color: ${(props) => props.theme.palette?.blue["600"]};
  &:hover {
    background-color: ${(props) => props.theme.palette?.blue["500"]};
    border-color: ${(props) => props.theme.palette?.blue["500"]};
  }
  &:active {
    background-color: ${(props) => props.theme.palette?.blue["700"]};
    border-color: ${(props) => props.theme.palette?.blue["700"]};
  }
  &:disabled {
    background-color: ${(props) => props.theme.palette?.gray["300"]};
    border-color: ${(props) => props.theme.palette?.gray["300"]};
  }
`;

// secondary 按鈕樣式
const secondaryStyle = css`
  ${commonSetting};
  ${fontSetting};
  color: ${(props) => props.theme.palette?.base.black};
  background-color: ${(props) => props.theme.palette?.blue["200"]};
  border-color: ${(props) => props.theme.palette?.blue["200"]};

  &:hover {
    background-color: ${(props) => props.theme.palette?.blue["300"]};
    border-color: ${(props) => props.theme.palette?.blue["300"]};
  }
  &:active {
    background-color: ${(props) => props.theme.palette?.blue["400"]};
    border-color: ${(props) => props.theme.palette?.blue["400"]};
  }
  &:disabled {
    background-color: ${(props) => props.theme.palette?.gray["300"]};
    border-color: ${(props) => props.theme.palette?.gray["300"]};
  }
`;

// warning 按鈕樣式
const warningStyle = css`
  ${commonSetting};
  ${fontSetting};
  color: ${(props) => props.theme.palette?.base.black};
  background-color: ${(props) => props.theme.palette?.yellow["500"]};
  border-color: ${(props) => props.theme.palette?.yellow["500"]};

  &:hover {
    background-color: ${(props) => props.theme.palette?.yellow["400"]};
    border-color: ${(props) => props.theme.palette?.yellow["400"]};
  }
  &:active {
    background-color: ${(props) => props.theme.palette?.yellow["600"]};
    border-color: ${(props) => props.theme.palette?.yellow["600"]};
    color: ${(props) => props.theme.palette?.base.white};
  }
  &:disabled {
    background-color: ${(props) => props.theme.palette?.gray["300"]};
    border-color: ${(props) => props.theme.palette?.gray["300"]};
  }
`;

// alarm 按鈕樣式
const alarmStyle = css`
  ${commonSetting};
  ${fontSetting};
  color: ${(props) => props.theme.palette?.base.white};
  background-color: ${(props) => props.theme.palette?.red["600"]};
  border-color: ${(props) => props.theme.palette?.red["600"]};
  &:hover {
    background-color: ${(props) => props.theme.palette?.red["500"]};
    border-color: ${(props) => props.theme.palette?.red["500"]};
  }
  &:active {
    background-color: ${(props) => props.theme.palette?.red["600"]};
    border-color: ${(props) => props.theme.palette?.red["600"]};
  }
  &:disabled {
    background-color: ${(props) => props.theme.palette?.gray["300"]};
    border-color: ${(props) => props.theme.palette?.gray["300"]};
  }
`;

// outline-primary 按鈕樣式
const outlinePrimaryStyle = css<any>`
  ${commonSetting};
  ${fontSetting};
  background-color: transparent;
  color: ${(props) => props.theme.palette?.blue["600"]};
  border-color: ${(props) => props.theme.palette?.blue["600"]};

  &:hover {
    color: ${(props) => props.theme.palette?.blue["500"]};
    border-color: ${(props) => props.theme.palette?.blue["500"]};
  }
  &:active {
    color: ${(props) => props.theme.palette?.blue["700"]};
    border-color: ${(props) => props.theme.palette?.blue["700"]};
  }
  &:disabled {
    color: ${(props) => props.theme.palette?.gray["300"]};
    border-color: ${(props) => props.theme.palette?.gray["300"]};
  }

  ${(props) => props.$isSelected && selected};
`;

const outlineSecondaryStyle = css`
  ${commonSetting};
  ${fontSetting};
  background-color: transparent;
  color: ${(props) => props.theme.palette?.base.black};
  border-color: ${(props) => props.theme.palette?.gray["300"]};

  &:hover {
    color: ${(props) => props.theme.palette?.base.black};
    border-color: ${(props) => props.theme.palette?.gray["300"]};
  }
  &:active {
    color: ${(props) => props.theme.palette?.base.black};
    border-color: ${(props) => props.theme.palette?.gray["300"]};
    background-color: ${(props) => props.theme.palette?.gray["200"]};
  }
  &:disabled {
    color: ${(props) => props.theme.palette?.gray["300"]};
    border-color: ${(props) => props.theme.palette?.gray["300"]};
  }
`;

// 根據傳入的 props 設定 Button 的樣式
const getButtonStyle = (props: StyledButtonProps) => {
  switch (props.$mode) {
    case ButtonTypeEnum.Primary:
      return primaryStyle;
    case ButtonTypeEnum.Secondary:
      return secondaryStyle;
    case ButtonTypeEnum.Warning:
      return warningStyle;
    case ButtonTypeEnum.Alarm:
      return alarmStyle;
    case ButtonTypeEnum.OutlinePrimary:
      return outlinePrimaryStyle;
    case ButtonTypeEnum.OutlineSecondary:
      return outlineSecondaryStyle;
    default:
      return primaryStyle;
  }
};

// 使用 styled-components 覆寫 Button
const StyledButton = styled(MuiButton)<StyledButtonProps>`
  && {
    ${(props) => getButtonStyle(props)}
  }
`;

// 封裝給外部使用的 Button
const Button = ({
  $mode = ButtonTypeEnum.Primary, // 預設 $mode 來呈現 primary 按鈕
  $size = ButtonSizeEnum.Medium, // 預設 $size 來呈現 medium 按鈕
  $isSelected = false, // 預設 $isSelected 來呈現未被選中
  name = "按鈕名稱", // 預設 $name 來呈現按鈕名稱
  ...props // 其他 props
}: StyledButtonProps) => (
  <ThemeProvider theme={theme}>
    <StyledButton
      name={name}
      $mode={$mode}
      $size={$size}
      $isSelected={$isSelected}
      {...props}
    >
      {name}
    </StyledButton>
  </ThemeProvider>
);

export default Button;
