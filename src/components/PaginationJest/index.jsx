/**
 * 分頁元件
 * @param totalPageSize {Number} 總頁碼
 * @param pageSize {Number} 每頁資料筆數
 * @param totalSize {Number} 總筆數
 * @param currentPage {Number} 當前頁碼
 * @param onPageOnChange {Function} 頁碼變更事件
 * @param onPageSizeChange {Function} 每頁資料筆數變更事件
 * @param onPrevPageOnClick {Function} 上一頁點擊事件
 * @param onNextPageOnClick {Function} 下一頁點擊事件
 */
export const Pagination = ({
                               totalPageSize = 0,
                               pageSize = 0,
                               totalSize = 0,
                               currentPage = 1,
                               onPageOnChange,
                               onPageSizeChange,
                               onPrevPageOnClick,
                               onNextPageOnClick,
                           }) => {
    /**
     * 每頁資料筆數選項
     */
    const defaultPageSizeArray = [10, 20, 30, 40, 50];

    /**
     * 預設顯示的每頁資料筆數
     */
    const defaultShowPageSize = 3;

    /**
     * 動態產生分頁列表
     * @return {Array[JSX.Element]}
     */
    const pagesList = () => {
        const pages = [];

        // 特殊處理 totalPageSize 為 5 的情況
        if (totalPageSize === 5) {
            if (currentPage >= 4) {
                pages.push(
                    <a
                        href="#"
                        className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        onClick={() => onPageOnChange(1)}
                        key={1}
                    >
                        1
                    </a>
                );
                pages.push(
                    <span
                        className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0"
                        key="ellipsis"
                    >
            ...
          </span>
                );
                for (let i = 2; i <= 5; i++) {
                    pages.push(
                        <a
                            className={`${
                                currentPage === i
                                    ? "relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    : "relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                            }`}
                            aria-current={`${currentPage === i ? "page" : ""}`}
                            href="#"
                            onClick={() => onPageOnChange(i)}
                            key={i}
                        >
                            {i}
                        </a>
                    );
                }
                return pages;
            }
        }

        // 當前頁數小於等於預設顯示頁數
        if (currentPage <= defaultShowPageSize) {
            for (
                let i = 1;
                i <= Math.min(totalPageSize, defaultShowPageSize + 1);
                i++
            ) {
                pages.push(
                    <a
                        className={`${
                            currentPage === i
                                ? "relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                : "relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                        }`}
                        aria-current={`${currentPage === i ? "page" : ""}`}
                        href="#"
                        onClick={() => onPageOnChange(i)}
                        key={i}
                    >
                        {i}
                    </a>
                );
            }

            //當顯示頁數大於預設顯示頁數+1
            if (totalPageSize > defaultShowPageSize + 1) {
                // 新增 ...
                pages.push(
                    <span
                        className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0"
                        key="ellipsis1"
                    >
            ...
          </span>
                );
                pages.push(
                    <a
                        href="#"
                        className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        onClick={() => onPageOnChange(totalPageSize)}
                        key={totalPageSize}
                    >
                        {totalPageSize}
                    </a>
                );
            }
        } else if (
            currentPage > defaultShowPageSize &&
            currentPage < totalPageSize - defaultShowPageSize
        ) {
            // 當前頁數大於預設顯示頁數且小於總頁數減去3
            pages.push(
                <a
                    href="#"
                    className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    onClick={() => onPageOnChange(1)}
                    key={1}
                >
                    1
                </a>
            );
            // 新增 ...
            pages.push(
                <span
                    className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0"
                    key="ellipsis2"
                >
          ...
        </span>
            );
            // 1 ... 4 5 6 ... 10
            for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                pages.push(
                    <a
                        className={`${
                            currentPage === i
                                ? "relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                : "relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                        }`}
                        href="#"
                        aria-current={`${currentPage === i ? "page" : ""}`}
                        onClick={() => onPageOnChange(i)}
                        key={i}
                    >
                        {i}
                    </a>
                );
            }

            // 新增 ...
            pages.push(
                <span
                    className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0"
                    key="ellipsis3"
                >
          ...
        </span>
            );
            pages.push(
                <a
                    href="#"
                    className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    onClick={() => onPageOnChange(totalPageSize)}
                    key={totalPageSize}
                >
                    {totalPageSize}
                </a>
            );
        } else {
            // 當前頁數大於等於總頁數減去預設顯示頁數
            pages.push(
                <a
                    href="#"
                    className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    onClick={() => onPageOnChange(1)}
                    key={1}
                >
                    1
                </a>
            );
            // 新增 ...
            pages.push(
                <span
                    className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0"
                    key="ellipsis4"
                >
          ...
        </span>
            );
            // 1 ... 4 5 6
            for (
                let i = totalPageSize - defaultShowPageSize - 1;
                i <= totalPageSize;
                i++
            ) {
                pages.push(
                    <a
                        href="#"
                        className={`${
                            currentPage === i
                                ? "relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                : "relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                        }`}
                        aria-current={`${currentPage === i ? "page" : ""}`}
                        onClick={() => onPageOnChange(i)}
                        key={i}
                    >
                        {i}
                    </a>
                );
            }
        }
        return pages;
    };

    return (
        <div className="flex items-center">
            <nav
                className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                aria-label="Pagination"
            >
                {totalPageSize > 1 && (
                    <a
                        href="#"
                        className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        onClick={onPrevPageOnClick}
                    >
                        {/*上一頁*/}
                        <svg
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                            />
                        </svg>
                    </a>
                )}
                {
                    // 動態產生分頁列表
                    pagesList()
                }
                {totalPageSize > 1 && (
                    <a
                        href="#"
                        className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        onClick={onNextPageOnClick}
                    >
                        {/*下一頁*/}
                        <svg
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                            />
                        </svg>
                    </a>
                )}
            </nav>
            <span className="ml-[15px] text-[14px]">
        {/*{t("components.Pagination.totalPageSize", {*/}
        {/*    totalPageSize: totalPageSize,*/}
        {/*})}*/}
                {`總頁數${totalPageSize}`}
      </span>
            <div className="flex ml-[15px] justify-end items-center text-[14px]">
                <div>{'每頁筆數'}</div>
                {/*當前選擇分頁數量*/}
                <select
                    className="border rounded-[8px] w-[60px] h-[42px] mx-[5px] px-[10px]"
                    value={pageSize}
                    onChange={(e) => onPageSizeChange(e)}
                >
                    {
                        // 動態產生當前分頁數量
                        defaultPageSizeArray.map((value, index) => (
                            <option key={index} value={value}>
                                {value}
                            </option>
                        ))
                    }
                </select>
                <div>{'筆'}</div>
            </div>
            <div className="ml-[15px] text-[14px]">
                {/*{t("components.Pagination.totalSize", { totalSize: totalSize })}*/}
                {`總筆數${ totalSize }`}
            </div>
        </div>
    );
};