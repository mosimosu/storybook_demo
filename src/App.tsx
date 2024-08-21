import { ThemeProvider } from "@mui/system";
import theme from "./theme";
import { useState } from "react";
import Button from "@mui/material/Button";
import { IconButtonIconEnum } from "./enums/IconButton/IconButtonIconEnum";

// import { SelectChangeEvent } from "@mui/material/Select";
// import { ThemeProvider as StyledThemeProvider } from "styled-components";
// import Button from "./components/Button";
// import { ButtonSizeEnum } from "./enums/Button/ButtonSizeEnum";
// import { ButtonTypeEnum } from "./enums/Button/ButtonTypeEnum";
// import IconButton from "./components/IconButton";
// import { IconButtonTextEnum } from "./enums/IconButton/IconButtonTextEnum";
// import { StyledPagination, Text } from "./components/Pagination";
// import { Pagination } from "@mui/material";

// interface ButtonState {
//   isDisabled: boolean;
// }
function App() {
  // const [age, setAge] = useState("");

  // const handleChange = (event: SelectChangeEvent) => {
  //   setAge(event.target.value as string);
  // };
  // const buttonNames = ["primary", "secondary", "warning", "alarm"];
  // const [buttonStates, setButtonStates] = useState<Record<string, ButtonState>>(
  //   buttonNames.reduce(
  //     (acc, name) => {
  //       acc[name] = { isDisabled: false };
  //       return acc;
  //     },
  //     {} as Record<string, ButtonState>
  //   )
  // );
  // const handleDisable = (name: string) => {
  //   setButtonStates((prevState) => ({
  //     ...prevState,
  //     [name]: { isDisabled: !prevState[name].isDisabled },
  //   }));
  // };

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
      {/* <div style={{ textAlign: "center" }}>
        <h1>Hello, World!</h1>
      </div>
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
      /> */}

      {/* <div>
        <IconButton
          name={IconButtonTextEnum.delete}
          icon={"delete"}
          tableType="a"
          disabled={isDisabled}
        />
      </div> */}
      <ThemeProvider theme={theme}>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            handleDisabled();
          }}
        >
          刪除
        </Button>
      </ThemeProvider>
    </>
  );
}
export default App;
