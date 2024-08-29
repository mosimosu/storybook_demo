import { ThemeProvider } from "@mui/system";
import theme from "./theme";
import { useEffect, useState } from "react";
import Button from "./components/Button";
import IconButton from "./components/IconButton";
import Pagination from "./components/Pagination";

type dataType = {
  id: number;
  title: string;
  body: string;
  userId: number;
};
function App() {
  const [data, setData] = useState([] as dataType[]);
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

  const fetchData = ({
    page,
    pageSize,
  }: {
    page: number;
    pageSize: number;
  }) => {
    fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${pageSize}`
    )
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  };

  useEffect(() => {
    fetchData({ page: 1, pageSize: 10 });
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <Button
                    variant="contained"
                    color="primary"
                    size="medium"
                    onClick={handleDisabled}
                >
                    {isDisabled ? "無效" : "有效"}
                </Button> */}
        <Button
          variant="outlined"
          color="primary"
          isSelected={isSelected}
          size="medium"
          onClick={handleSelected}
        >
          {isSelected ? "選取" : "未選取"}
        </Button>
        <Button
          variant="outlined"
          children={isSelected ? "選取" : "未選取"}
          isSelected={isSelected}
          sx={{ color: "red" }}
        ></Button>
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
          text="loading"
          sx={{ color: "red" }}
        />
        <Pagination
          totalPageSize={10}
          totalSize={20}
          onPageOnChange={(page, pageSize) => fetchData({ page, pageSize })}
        />
        {data?.map((item, index) => (
          <div key={item.id} style={{ display: "flex", gap: 8 }}>
            <p style={{ color: "red", fontWeight: "900" }}>{index + 1}</p>
            <p>{item.title}</p>
          </div>
        ))}
      </ThemeProvider>
    </>
  );
}
export default App;
