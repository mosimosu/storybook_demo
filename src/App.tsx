import { ThemeProvider } from "@mui/system";
import theme from "./theme";
import { useState } from "react";
import Button from "./components/Button";
import IconButton from "./components/IconButton";

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
          size="medium"
          onClick={handleDisabled}
        >
          {isDisabled ? "無效" : "有效"}
        </Button>
        <Button
          variant="outlined"
          color="primary"
          isSelected={isSelected}
          size="medium"
          onClick={handleSelected}
        >
          {isSelected ? "選取" : "未選取"}
        </Button>
        <IconButton
          color="Success"
          disabled={isDisabled}
          onClick={handleDisabled}
          text="export"
        />
        <IconButton
          color="Primary"
          table="A"
          disabled={isDisabled}
          onClick={handleDisabled}
          text="view"
        />
        <IconButton
          color="Primary"
          table="B"
          disabled={isDisabled}
          onClick={handleDisabled}
          text="copy"
        />
        <IconButton
          color="Primary"
          table="B"
          disabled={isDisabled}
          onClick={handleDisabled}
          text="loading"
        />
      </ThemeProvider>
    </>
  );
}
export default App;
