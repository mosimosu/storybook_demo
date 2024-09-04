import { GridColDef } from "@mui/x-data-grid";
// 列定義
export const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "firstName", headerName: "First name", width: 150 },
    { field: "lastName", headerName: "Last name", width: 150 },
    { field: "age", headerName: "Age", type: "number", width: 110 },
    { field: "status", headerName: "Status", width: 120 },
];
