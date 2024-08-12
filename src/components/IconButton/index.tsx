import { Button } from "@mui/material";
import styled from "styled-components";
import { IconButtonIcon } from "../../enums/IconButton/IconButtonIcon";
import { IconButtonText } from "../../enums/IconButton/IconButtonText";

export const StyledIconButton = styled(Button)``;

// 定義一個 Wrapper 來封裝 IconButton 匯出到 storybook
const StyledIconButtonWrapper = ({
  $IconButtonText = IconButtonText.read,
  $IconButtonIcon = IconButtonIcon.read,
  ...props
}) => {
  return (
    <StyledIconButton {...props}>
      <img src={$IconButtonIcon} alt={$IconButtonText} />
      {$IconButtonText}
    </StyledIconButton>
  );
};

export default StyledIconButtonWrapper;
