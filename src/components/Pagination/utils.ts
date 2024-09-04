import { useState } from "react";

export const useHandleData = () => {
    const [data, setData] = useState([]);
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

    return { data, fetchData };
};
