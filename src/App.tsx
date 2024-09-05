import { useState } from "react";
import { ThemeProvider } from "@mui/system";
import theme from "./theme";
import Button from "./components/Button";
import IconButton from "./components/IconButton";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

function App() {
    const [isDisabled, setIsDisabled] = useState(false);
    const sizeAry = ["small", "medium", "large"].reverse();

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
                        <h6 style={{ fontSize: "18px" }}>Success</h6>
                        {sizeAry.map((size) => (
                            <Button
                                variant="contained"
                                color="success"
                                size={size as "small" | "medium" | "large"}
                                onClick={handleDisabled}
                                disabled={isDisabled}
                                text={isDisabled ? "無效" : "有效"}
                            />
                        ))}
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
                        <h6 style={{ fontSize: "18px" }}>Outlined Success</h6>
                        {sizeAry.map((size) => (
                            <Button
                                variant="outlined"
                                color="success"
                                size={size as "small" | "medium" | "large"}
                                onClick={handleDisabled}
                                disabled={isDisabled}
                                text={isDisabled ? "無效" : "有效"}
                            />
                        ))}
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
                    <div>
                        <h6 style={{ fontSize: "18px" }}>text Success</h6>
                        {sizeAry.map((size) => (
                            <Button
                                variant="text"
                                color="success"
                                size={size as "small" | "medium" | "large"}
                                onClick={handleDisabled}
                                disabled={isDisabled}
                                text={isDisabled ? "無效" : "有效"}
                            />
                        ))}
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
                        <Button
                            color="primary"
                            text="定時"
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
                </section>
            </ThemeProvider>
        </>
    );
}
export default App;
