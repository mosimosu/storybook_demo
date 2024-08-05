import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Button } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./constants/theme";
function App() {
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = () => {
    // 這裡可以根據你的邏輯來設置 isDisabled 的值
    setIsDisabled(!isDisabled);
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Hello, World!</h1>
      </div>
      <ThemeProvider theme={theme}>
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
          sx={{
            bgcolor: "blue.300",
            alignSelf: "center",
            ":hover": { bgcolor: "yellow.400" },
            ":active": { bgcolor: "purple.500" },
            ":disabled": { bgcolor: "gray.300", color: "base.white" },
          }}
          disabled={isDisabled}
          onClick={handleClick}
        >
          Submit
        </Button>
      </ThemeProvider>
    </>
  );
}

export default App;
