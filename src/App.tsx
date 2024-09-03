import { ThemeProvider } from "@mui/system";
import theme from "./theme";
import { useEffect, useState } from "react";
import Button from "./components/Button";
import IconButton from "./components/IconButton";
import Pagination from "./components/Pagination";
import ComboText from "./components/ComboText";
import { ComboColorEnum } from "./enums/ComboText/ComboColorEnum";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import { GridColDef } from "@mui/x-data-grid";
import { AdvancedDataGrid } from "./components/DatagridPagination";
import { rows } from "./components/DatagridPagination/rowData";
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

    // 列定義
    const columns: GridColDef[] = [
        { field: "id", headerName: "ID", width: 90 },
        { field: "firstName", headerName: "First name", width: 150 },
        { field: "lastName", headerName: "Last name", width: 150 },
        { field: "age", headerName: "Age", type: "number", width: 110 },
        { field: "status", headerName: "Status", width: 120 },
    ];

    useEffect(() => {
        fetchData({ page: 1, pageSize: 10 });
    }, []);

    return (
        <>
            <ThemeProvider theme={theme}>
                <section
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px",
                        marginBottom: "8px",
                    }}
                >
                    <h3 style={{ fontSize: "24px" }}>一般 Button</h3>
                    <div style={{ display: "flex", gap: "8px" }}>
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
                        <Button
                            variant="outlined"
                            children={isSelected ? "選取" : "未選取"}
                            isSelected={isSelected}
                            sx={{ color: "red" }}
                        ></Button>
                    </div>
                </section>
                <section
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px",
                    }}
                >
                    <h3 style={{ fontSize: "24px" }}>IconButton</h3>
                    <div style={{ display: "flex", gap: "8px" }}>
                        <IconButton
                            color="Success"
                            disabled={isDisabled}
                            onClick={handleDisabled}
                            text="匯出"
                            defaultIcon="export"
                        />
                        <IconButton
                            color="Primary"
                            table="A"
                            disabled={isDisabled}
                            onClick={handleDisabled}
                            text="閱讀"
                            defaultIcon="view"
                        />
                        <IconButton
                            color="Success"
                            table="A"
                            disabled={isDisabled}
                            onClick={handleDisabled}
                            text="複製"
                            defaultIcon="copy"
                        />
                        <IconButton
                            color="Primary"
                            table="B"
                            text="讀取"
                            defaultIcon="loading"
                        />
                        <IconButton
                            color="Primary"
                            table="A"
                            text="提醒"
                            icon={AccessAlarmIcon}
                        />
                    </div>
                </section>
                <section style={{ display: "flex", flexDirection: "column" }}>
                    <h3 style={{ fontSize: "24px" }}>
                        Here is the Pagination section
                    </h3>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 4,
                        }}
                    >
                        {data?.map((item, index) => (
                            <div
                                key={item.id}
                                style={{ display: "flex", gap: 8 }}
                            >
                                <p
                                    style={{
                                        color: "red",
                                        fontWeight: "900",
                                        margin: 0,
                                    }}
                                >
                                    {index + 1}
                                </p>
                                <p style={{ margin: 0 }}>{item.title}</p>
                            </div>
                        ))}
                    </div>

                    <Pagination
                        totalPageSize={10}
                        totalSize={20}
                        onPageOnChange={(page, pageSize) =>
                            fetchData({ page, pageSize })
                        }
                    />
                </section>
                <section
                    style={{ display: "flex", gap: 8, flexDirection: "column" }}
                >
                    <h3 style={{ fontSize: "24px" }}>
                        Here is the ComboText section
                    </h3>
                    <div style={{ display: "flex", gap: 8 }}>
                        <ComboText
                            text="保留"
                            color={ComboColorEnum.Reserved}
                            position="left"
                        />
                        <ComboText
                            text="早診"
                            position="fill"
                            color={ComboColorEnum.Scheduled}
                        />
                        <ComboText
                            text="休息"
                            position="left"
                            color={ComboColorEnum.Break}
                        />
                    </div>
                </section>

                <section>
                    <AdvancedDataGrid
                        rows={rows}
                        columns={columns}
                        pageSizeOptions={[5, 10, 25]}
                        sx={{
                            height: "400px",
                        }}
                        initialState={{
                            pagination: {
                                paginationModel: { pageSize: 5, page: 0 },
                            },
                        }}
                    />
                </section>
            </ThemeProvider>
        </>
    );
}
export default App;
