import { Button } from "@mui/material";
import styled, { css } from "styled-components";

// Button 的 interface
interface StyledButtonProps {
  $mode?: string;
  disabled?: boolean;
  onClick?: () => void;
}

// primary 按鈕樣式
const primaryStyle = css`
  color: ${(props) => props.theme.palette?.base.white};
  background-color: ${(props) => props.theme.palette?.blue["700"]};
  border-color: ${(props) => props.theme.palette?.blue["700"]};
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  &:hover {
    background-color: ${(props) => props.theme.palette?.blue["600"]};
    border-color: ${(props) => props.theme.palette?.blue["600"]};
  }
  &:active {
    background-color: ${(props) => props.theme.palette?.blue["800"]};
    border-color: ${(props) => props.theme.palette?.blue["800"]};
  }
  &:disabled {
    background-color: ${(props) => props.theme.palette?.gray["300"]};
    border-color: ${(props) => props.theme.palette?.gray["300"]};
  }
`;

// secondary 按鈕樣式
const secondaryStyle = css`
  color: ${(props) => props.theme.palette?.base.white};
  background-color: ${(props) => props.theme.palette?.blue["300"]};
  border-color: ${(props) => props.theme.palette?.blue["300"]};
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  &:hover {
    background-color: ${(props) => props.theme.palette?.blue["400"]};
    border-color: ${(props) => props.theme.palette?.blue["400"]};
  }
  &:active {
    background-color: ${(props) => props.theme.palette?.blue["500"]};
    border-color: ${(props) => props.theme.palette?.blue["500"]};
  }
  &:disabled {
    background-color: ${(props) => props.theme.palette?.gray["200"]};
    border-color: ${(props) => props.theme.palette?.gray["200"]};
  }
`;

// warning 按鈕樣式
const warningStyle = css`
  color: ${(props) => props.theme.palette?.base.black};
  background-color: ${(props) => props.theme.palette?.yellow["500"]};
  border-color: ${(props) => props.theme.palette?.yellow["500"]};
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  &:hover {
    background-color: ${(props) => props.theme.palette?.yellow["400"]};
    border-color: ${(props) => props.theme.palette?.yellow["400"]};
  }
  &:active {
    background-color: ${(props) => props.theme.palette?.yellow["600"]};
    border-color: ${(props) => props.theme.palette?.yellow["600"]};
  }
  &:disabled {
    background-color: ${(props) => props.theme.palette?.gray["200"]};
    border-color: ${(props) => props.theme.palette?.gray["200"]};
  }
`;

// alarm 按鈕樣式
const alarmStyle = css`
  color: ${(props) => props.theme.palette?.base.black};
  background-color: ${(props) => props.theme.palette?.red["500"]};
  border-color: ${(props) => props.theme.palette?.red["500"]};
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  &:hover {
    background-color: ${(props) => props.theme.palette?.red["400"]};
    border-color: ${(props) => props.theme.palette?.red["400"]};
  }
  &:active {
    background-color: ${(props) => props.theme.palette?.red["600"]};
    border-color: ${(props) => props.theme.palette?.red["600"]};
  }
  &:disabled {
    background-color: ${(props) => props.theme.palette?.gray["200"]};
    border-color: ${(props) => props.theme.palette?.gray["200"]};
  }
`;

// 根據傳入的 props 設定 Button 的樣式
const getButtonStyle = (props: StyledButtonProps) => {
  switch (props.$mode) {
    case "primary":
      return primaryStyle;
    case "secondary":
      return secondaryStyle;
    case "warning":
      return warningStyle;
    case "alarm":
      return alarmStyle;
    default:
      return primaryStyle;
  }
};

// 使用 styled-components 覆寫 Button
export const StyledButton = styled(Button)<StyledButtonProps>`
  && {
    ${(props) => getButtonStyle(props)}
  }
`;

// 依據傳入的 $mode 呈現不同的樣式
const StyledButtonWrapper = ({
  $mode = "primary", // 預設 $mode 來呈現 primary 按鈕
  ...props
}: StyledButtonProps) => {
  return (
    <StyledButton $mode={$mode} {...props}>
      按鈕名稱
    </StyledButton>
  );
};

export default StyledButtonWrapper;
