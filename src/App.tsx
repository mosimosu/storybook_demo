import { useState } from "react";
import { ThemeProvider } from "@mui/system";
import theme from "./theme";
import Button from "./components/Button";
import IconButton from "./components/IconButton";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

function App() {
    const [isDisabled, setIsDisabled] = useState(false);

    const handleDisabled = () => {
        // 這裡可以根據你的邏輯來設置 isDisabled 的值
        setIsDisabled(!isDisabled);
    };

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
                    <div>
                        <h6 style={{ fontSize: "18px" }}>Primary</h6>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            onClick={handleDisabled}
                            disabled={isDisabled}
                            text={isDisabled ? "無效" : "有效"}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            size="medium"
                            onClick={handleDisabled}
                            text={isDisabled ? "無效" : "有效"}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            size="small"
                            onClick={handleDisabled}
                            text={isDisabled ? "無效" : "有效"}
                        />
                    </div>
                    <div>
                        <h6 style={{ fontSize: "18px" }}>Secondary</h6>
                        <Button
                            variant="contained"
                            color="secondary"
                            size="large"
                            onClick={handleDisabled}
                            disabled={isDisabled}
                            text={isDisabled ? "無效" : "有效"}
                        />
                        <Button
                            variant="contained"
                            color="secondary"
                            size="medium"
                            onClick={handleDisabled}
                            text={isDisabled ? "無效" : "有效"}
                        />
                        <Button
                            variant="contained"
                            color="secondary"
                            size="small"
                            onClick={handleDisabled}
                            text={isDisabled ? "無效" : "有效"}
                        />
                    </div>
                    <div>
                        <h6
                            style={{
                                fontSize: "18px",
                            }}
                        >
                            Outlined Primary
                        </h6>
                        <Button
                            variant="outlined"
                            color="primary"
                            size="large"
                            onClick={handleDisabled}
                            disabled={isDisabled}
                            text={isDisabled ? "無效" : "有效"}
                        />
                        <Button
                            variant="outlined"
                            color="primary"
                            size="medium"
                            onClick={handleDisabled}
                            text={isDisabled ? "無效" : "有效"}
                        />
                        <Button
                            variant="outlined"
                            color="primary"
                            size="small"
                            onClick={handleDisabled}
                            text={isDisabled ? "無效" : "有效"}
                        />
                    </div>
                    <div>
                        <h6 style={{ fontSize: "18px" }}>Outlined Secondary</h6>
                        <Button
                            variant="outlined"
                            color="secondary"
                            size="large"
                            onClick={handleDisabled}
                            disabled={isDisabled}
                            text={isDisabled ? "無效" : "有效"}
                        />
                        <Button
                            variant="outlined"
                            color="secondary"
                            size="medium"
                            onClick={handleDisabled}
                            text={isDisabled ? "無效" : "有效"}
                        />
                        <Button
                            variant="outlined"
                            color="secondary"
                            size="small"
                            onClick={handleDisabled}
                            text={isDisabled ? "無效" : "有效"}
                        />
                    </div>
                    <div>
                        <h6
                            style={{
                                fontSize: "18px",
                            }}
                        >
                            text Primary
                        </h6>
                        <Button
                            variant="text"
                            color="primary"
                            size="large"
                            onClick={handleDisabled}
                            disabled={isDisabled}
                            text={isDisabled ? "無效" : "有效"}
                        />
                        <Button
                            variant="text"
                            color="primary"
                            size="medium"
                            onClick={handleDisabled}
                            text={isDisabled ? "無效" : "有效"}
                        />
                        <Button
                            variant="text"
                            color="primary"
                            size="small"
                            onClick={handleDisabled}
                            text={isDisabled ? "無效" : "有效"}
                        />
                    </div>
                    <div>
                        <h6 style={{ fontSize: "18px" }}>text Secondary</h6>
                        <Button
                            variant="text"
                            color="secondary"
                            size="large"
                            onClick={handleDisabled}
                            disabled={isDisabled}
                            text={isDisabled ? "無效" : "有效"}
                        />
                        <Button
                            variant="text"
                            color="secondary"
                            size="medium"
                            onClick={handleDisabled}
                            text={isDisabled ? "無效" : "有效"}
                        />
                        <Button
                            variant="text"
                            color="secondary"
                            size="small"
                            onClick={handleDisabled}
                            text={isDisabled ? "無效" : "有效"}
                        />
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

                    <div>
                        <h6>icon button</h6>
                        <Button
                            color="primary"
                            text="按鈕"
                            variant="text"
                            startIcon={<AccessAlarmIcon />}
                        />
                        <Button
                            color="success"
                            text="新增"
                            variant="text"
                            startIcon={<AddCircleOutlineIcon />}
                        />
                    </div>
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
            </ThemeProvider>
        </>
    );
}
export default App;
