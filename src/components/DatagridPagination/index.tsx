import React from "react";
import { ThemeProvider, createTheme, Theme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { ThemeMode } from "../../enums/DataGride/DataGridEnum";
import { theme2 } from "../../theme";
import Pagination from "../Pagination";

import {
    DataGrid,
    GridColDef,
    GridRowsProp,
    DataGridProps,
} from "@mui/x-data-grid";

/**
 * AdvancedDataGridProps 介面定義了 AdvancedDataGrid 組件的屬性
 *
 * @interface AdvancedDataGridProps
 * @extends {Omit<DataGridProps, 'rows' | 'columns'>}
 */
interface AdvancedDataGridProps
    extends Omit<DataGridProps, "rows" | "columns"> {
    /** 數據行 */
    rows: GridRowsProp;
    /** 列定義 */
    columns: GridColDef[];
    /** 主題模式 */
    themeMode?: ThemeMode;
}

// 主題
const createDataGridTheme = (mode: "light" | "dark"): Theme => {
    const { palette, typography } = theme2;
    return createTheme({
        typography,
        palette: {
            mode,
            ...(mode === "light"
                ? {
                      background: {
                          default: palette.grey[50],
                          paper: palette.common.white,
                      },
                      text: {
                          primary: palette.grey[900],
                          secondary: palette.grey[600],
                      },
                  }
                : {
                      background: {
                          default: palette.grey[900],
                          paper: palette.grey[800],
                      },
                      text: {
                          primary: palette.grey[100],
                          secondary: palette.grey[400],
                      },
                  }),
        },
        components: {
            MuiDataGrid: {
                styleOverrides: {
                    root: {
                        backgroundColor:
                            mode === "light"
                                ? palette.common.white
                                : palette.grey[800],
                        color:
                            mode === "light"
                                ? palette.grey[900]
                                : palette.grey[100],
                        fontFamily: typography.fontFamily,
                        fontSize: typography.body2.fontSize,
                        border: `1px solid ${mode === "light" ? palette.grey[200] : palette.grey[700]}`,
                        "& .MuiDataGrid-cell": {
                            borderBottom: `1px solid ${mode === "light" ? palette.grey[200] : palette.grey[700]}`,
                        },
                        "& .MuiDataGrid-columnHeaders": {
                            backgroundColor:
                                mode === "light"
                                    ? palette.grey[100]
                                    : palette.grey[900],
                            color:
                                mode === "light"
                                    ? palette.grey[900]
                                    : palette.grey[100],
                            fontSize: typography.body1.fontSize,
                        },
                        "& .MuiDataGrid-toolbarContainer": {
                            backgroundColor:
                                mode === "light"
                                    ? palette.grey[50]
                                    : palette.grey[900],
                        },
                    },
                },
            },
        },
    });
}; /** * AdvancedDataGrid 組件提供了一個功能豐富的數據網格 * @param rows {GridRowsProp} - 數據行
 * @param columns {GridColDef[]} - 列定義
 * @param themeMode {ThemeMode} = 主題模式
 * @returns {JSX.Element} 渲染的 AdvancedDataGrid 組件
 */
export const AdvancedDataGrid: React.FC<AdvancedDataGridProps> = ({
    rows,
    columns,
    themeMode = ThemeMode.LIGHT,

    ...props
}) => {
    // 切換主題
    const theme = createDataGridTheme(
        themeMode === ThemeMode.DARK ? "dark" : "light"
    );

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <DataGrid
                rows={rows}
                columns={columns}
                slotProps={{
                    toolbar: {
                        showQuickFilter: true,
                        quickFilterProps: { debounceMs: 500 },
                    },
                }}
                {...props}
            />
        </ThemeProvider>
    );
};
