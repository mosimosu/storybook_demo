import { ThemeProvider } from "@mui/system";
import theme from "./theme";
import { useState } from "react";
import Button from "./components/Button";
import { IconButtonIconEnum } from "./enums/IconButton/IconButtonIconEnum";

function App() {
  const [isDisabled, setIsDisabled] = useState(false);
  const handleDisabled = () => {
    // 這裡可以根據你的邏輯來設置 isDisabled 的值
    setIsDisabled(!isDisabled);
  };
  const [isSelected, setIsSelected] = useState(false);
  const handleSelected = () => {
    // 這裡可以根據你的邏輯來設置 isSelected 的值
    setIsSelected(!isSelected);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Button
          variant="contained"
          color="primary"
          isSelected={isSelected}
          disabled={isDisabled}
          size="medium"
          startIcon={<IconButtonIconEnum.delete />}
          onClick={handleDisabled}
        >
          刪除
        </Button>
      </ThemeProvider>
    </>
  );
}
export default App;
