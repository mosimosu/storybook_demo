import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Button } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import theme from "./theme";
import CustomButton from "./components/CustomButton";
import { StyledButton } from "./components/StyledButton";
import { ButtonSize } from "./enums/StyledButton/ButtonSize";
import { ButtonType } from "./enums/StyledButton/ButtonType";
import { Delete } from "@mui/icons-material";
import IconButton from "./components/IconButton";
import { IconButtonIcon } from "./enums/IconButton/IconButtonIcon";
import { IconButtonText } from "./enums/IconButton/IconButtonText";

interface ButtonState {
  isDisabled: boolean;
}
function App() {
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  const buttonNames = ["primary", "secondary", "warning", "alarm"];
  const [buttonStates, setButtonStates] = useState<Record<string, ButtonState>>(
    buttonNames.reduce(
      (acc, name) => {
        acc[name] = { isDisabled: false };
        return acc;
      },
      {} as Record<string, ButtonState>
    )
  );
  const handleDisabledary = (name: string) => {
    setButtonStates((prevState) => ({
      ...prevState,
      [name]: { isDisabled: !prevState[name].isDisabled },
    }));
  };

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
      <div style={{ textAlign: "center" }}>
        <h1>Hello, World!</h1>
      </div>
      <ThemeProvider theme={theme}>
        <Button
          variant="contained"
          startIcon={<Delete />}
          sx={{
            "& .MuiButton-startIcon": {
              marginRight: "0px", // 調整這個值來設置間隔
            },
          }}
        >
          刪除
        </Button>
        <Box>
          <FormControl sx={{ m: 1, minWidth: 120, bgcolor: "base.white" }}>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
              sx={{ color: "base.black" }}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Button
          variant="contained"
          disabled={isDisabled}
          onClick={handleDisabled}
        >
          Submit
        </Button>
        <CustomButton
          label="Primary"
          color="base.white"
          bgColor="blue.700"
          borderColor="blue.600"
          borderWidth="1px"
          borderStyle="solid"
          borderRadius="4px"
          hover="blue.600"
          pressed="blue.800"
          disabled="gray.300"
          isDisabled={isDisabled}
        ></CustomButton>
        <CustomButton label="我是另外一顆按鈕，完全沒有傳入樣式參數"></CustomButton>
      </ThemeProvider>
      <StyledThemeProvider theme={theme}>
        <StyledButton
          $mode={ButtonType.primary}
          disabled={isDisabled}
          onClick={handleDisabled}
        >
          按鈕名稱
        </StyledButton>
        {buttonNames.map((name, index) => (
          <StyledButton
            $mode={name as ButtonType}
            disabled={buttonStates[name].isDisabled}
            onClick={() => handleDisabledary(name)}
            key={index}
          >
            {name}
          </StyledButton>
        ))}
        <StyledButton
          $mode={ButtonType.outlinePrimary}
          onClick={handleSelected}
          $isSelected={isSelected}
          $size={ButtonSize.small}
        >
          按鈕名稱
        </StyledButton>
        <IconButton
          IconButtonTexts={IconButtonText.delete}
          IconButtonIcons={IconButtonIcon.delete}
        />
      </StyledThemeProvider>
    </>
  );
}

export default App;
