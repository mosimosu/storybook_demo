import { Button } from "@mui/material";
import styled, { css } from "styled-components";

interface StyledButtonProps {
  $primary?: boolean;
}

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
`;

export const StyledButton = styled(Button)<StyledButtonProps>`
  && {
    ${(props) => props.$primary && primaryStyle}
  }
`;
