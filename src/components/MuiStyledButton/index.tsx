import { Button } from "@mui/material";
import { styled } from "@mui/system";
import theme from "../../theme";

const StyledButton = styled(Button)({
  backgroundColor: theme.palette.gray[200],
  color: "black",
  "&:hover": {
    backgroundColor: "blue",
  },
  "&:active": {
    backgroundColor: "red",
  },
  "&:disabled": {
    backgroundColor: "gray",
  },
});

export default StyledButton;
