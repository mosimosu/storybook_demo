import {
    Pagination as MuiPagination,
    PaginationProps as MuiPaginationProps,
} from "@mui/material";
import { useEffect, useState } from "react";

interface PaginationProps extends MuiPaginationProps {
    totalPageSize: number; // 總頁數
    totalSize: number; // 總筆數
    onPageOnChange: (pageNum: number, pageSize: number) => void; // 點擊頁碼
    // onPageSizeChange: (pageSize: number) => void; // 點擊每頁筆數
}

const Pagination = ({
    totalPageSize = 0, // 總頁數
    totalSize = 0, // 總筆數
    onPageOnChange = () => {}, // 點擊頁碼
    ...props
}: PaginationProps) => {
    // 目前頁數
    const [currentPage, setCurrentPage] = useState(1);
    // 每頁筆數
    const [pageSize, setPageSize] = useState(10);
    // 每頁筆數可選項
    const defaultPageSizeArray = [10, 20, 30, 40, 50];

    // 更新目前頁數
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        onPageOnChange(page, pageSize);
    };

    // 更新每頁筆數
    const handlePageSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newPageSize = parseInt(e.target.value);
        setPageSize(newPageSize);
        onPageOnChange(currentPage, newPageSize);
    };

    // 外層樣式
    const outerStyle = {
        display: "flex",
        alignItems: "center",
        gap: 16,
    };
    // 內層樣式
    const innerStyle = {
        display: "flex",
        alignItems: "center",
        gap: 8,
    };

    return (
        <div style={outerStyle}>
            <MuiPagination
                variant="outlined"
                color="primary"
                shape="rounded"
                count={totalPageSize}
                boundaryCount={4}
                siblingCount={0}
                defaultPage={1}
                {...props}
                onChange={(_, page) => handlePageChange(page)}
            />
            <div style={outerStyle}>
                <p>共 {totalPageSize} 頁</p>
                <p style={innerStyle}>
                    每頁
                    {
                        <select
                            value={pageSize}
                            onChange={handlePageSizeChange}
                        >
                            {defaultPageSizeArray.map((item) => (
                                <option key={item} value={item}>
                                    {item}
                                </option>
                            ))}
                        </select>
                    }
                    筆
                </p>
                <p>總筆數：{totalSize}</p>
            </div>
        </div>
    );
};

export default Pagination;
