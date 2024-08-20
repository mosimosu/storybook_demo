import { Button } from "@mui/material";
import styled, { ThemeProvider, css } from "styled-components";
import theme from "../../theme";
import { IconButtonTextEnum } from "../../enums/IconButton/IconButtonTextEnum";
import { IconButtonIconEnum } from "../../enums/IconButton/IconButtonIconEnum";

// 定義 IconButton 的 props
interface IconButtonProps {
  // 按鈕名稱
  name?: string;
  // 按鈕圖示
  icon: keyof typeof IconButtonIconEnum;
  // 是否禁用
  disabled: boolean;
  // Table 類型
  tableType: string;
  // 其他屬性
  props?: [key: string];
  // 點擊功能
  onClick?: () => void;
}

interface TextProps {
  tableType: string;
}
const textStyle = css<TextProps>`
  ${(props) => props.theme.typography?.textMedium}
  color: ${(props) => {
    switch (props.tableType) {
      case "a":
        return props.theme.palette.blue[400];
      case "b":
        return props.theme.palette.base.black;
      default:
        return props.theme.palette.blue[400];
    }
  }}
`;

// 定義 IconButton 的樣式
export const StyledIconButton = styled(Button)<TextProps>`
  ${textStyle};
  display: flex;
  align-items: center;
  gap: 4px;
`;

// 定義一個 Wrapper 來封裝 IconButton 匯出到 storybook
const IconButton = ({
  name = IconButtonTextEnum.read,
  icon = "read",
  tableType = "a",
  disabled = false,
}: IconButtonProps): JSX.Element => {
  const IconComponent = IconButtonIconEnum[icon];
  return (
    <ThemeProvider theme={theme}>
      <StyledIconButton disabled={disabled} tableType={tableType}>
        <IconComponent title={name} />
        {name}
      </StyledIconButton>
    </ThemeProvider>
  );
};
export default IconButton;
