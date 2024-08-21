import { ThemeProvider } from "@mui/system";
import theme from "./theme";
import { useState } from "react";
// import Button from "@mui/material/Button";
import Button from "./components/Button";
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
          variant="outlined"
          color="secondary"
          isSelected={isSelected}
          disabled={isDisabled}
          onClick={handleDisabled}
          size="medium"
        >
          閱讀
        </Button>
      </ThemeProvider>
    </>
  );
}
export default App;
