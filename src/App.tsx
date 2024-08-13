import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Button as MuiButton } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import CustomButton from "./components/CustomButton";
import { Delete } from "@mui/icons-material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import theme from "./theme";
import Button from "./components/Button";
import { ButtonSizeEnum } from "./enums/Button/ButtonSizeEnum";
import { ButtonTypeEnum } from "./enums/Button/ButtonTypeEnum";
import IconButton from "./components/IconButton";
import { IconButtonIcon } from "./components/IconButton/IconButtonIcon";
import { IconButtonTextEnum } from "./enums/IconButton/IconButtonTextEnum";
import { StyledPagination, Text } from "./components/Pagination";
import { Pagination } from "@mui/material";
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
  const handleDisable = (name: string) => {
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
      {/* {<ThemeProvider theme={theme}>
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
      </ThemeProvider>} */}
      <StyledThemeProvider theme={theme}>
        <Button
          name="按鈕名稱"
          $mode={ButtonTypeEnum.primary}
          $size={ButtonSizeEnum.medium}
          $isSelected={isSelected}
          disabled={isDisabled}
          onClick={handleDisabled}
        />

        {buttonNames.map((name, index) => (
          <Button
            name={name}
            $mode={name as ButtonTypeEnum}
            $size={ButtonSizeEnum.medium}
            $isSelected={false}
            disabled={buttonStates[name].isDisabled}
            onClick={() => handleDisable(name)}
            key={index}
          />
        ))}
        <Button
          name="按鈕名稱"
          $mode={ButtonTypeEnum.primary}
          $size={ButtonSizeEnum.medium}
          $isSelected={isSelected}
          disabled={isDisabled}
          onClick={handleDisabled}
        />

        <IconButton
          IconButtonTexts={IconButtonTextEnum.delete}
          IconButtonIcons={IconButtonIcon.delete}
        />
        <StyledPagination>
          <Pagination
            count={20}
            page={1}
            boundaryCount={5}
            onChange={() => {}}
            shape="rounded"
            color="primary"
          ></Pagination>
          <Text>
            <p>共 {"30"} 頁</p>
            <p>
              每頁
              <select>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
              </select>
              筆
            </p>
            <p>總筆數：{"30"}</p>
          </Text>
        </StyledPagination>
      </StyledThemeProvider>
      <Button
        name="按鈕名稱"
        $mode={ButtonTypeEnum.primary}
        $size={ButtonSizeEnum.medium}
        $isSelected={isSelected}
        disabled={isDisabled}
        onClick={handleDisabled}
      />
    </>
  );
}

export default App;
