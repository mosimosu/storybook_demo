import { Button } from "@mui/material";
import styled from "styled-components";
import { IconButtonTextEnum } from "../../enums/IconButton/IconButtonTextEnum";
import { IconButtonIcon } from "./IconButtonIcon";
export const StyledIconButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 4px;
`;
interface IconButtonProps {
  tag: string;
  name: React.SVGProps<SVGSVGElement>;
  disabled: boolean;
  props: [key: string];
}

// 定義一個 Wrapper 來封裝 IconButton 匯出到 storybook
const StyledIconButtonWrapper = ({
  tag = IconButtonTextEnum.read,
  name,
  disabled = false,
  ...props
}: IconButtonProps): React.ReactNode => {
  return (
    <StyledIconButton {...props} disabled={disabled}>
      {IconButtonIcon.read(name)}
      {tag}
    </StyledIconButton>
  );
};

export default StyledIconButtonWrapper;
