import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

const RcQ = () => {
    const fetching = async ({ queryKey }) => {
        const [, { page, pageSize }] = queryKey;
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${pageSize}`);
        if (!response.ok) {
            throw new Error("Failed to fetch");
        }
        return response.json();
    };

    const addData = async (newData) => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newData),
        });

        if (!response.ok) {
            throw new Error("Failed to add data");
        }

        return response.json();
    };

    const queryClient = useQueryClient();

    // Pagination state
    const [page, setPage] = useState(1);
    const pageSize = 10;

    const { data, isLoading, error, isFetching } = useQuery({
        queryKey: ["posts", { page, pageSize }],
        queryFn: fetching,
        keepPreviousData: true,
    });

    const mutation = useMutation({
        mutationFn: addData,
        onSuccess: () => {
            queryClient.invalidateQueries(["posts"]);
        },
    });

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error fetching data!</p>;

    return (
        <div>
            <button onClick={() => mutation.mutate({ title: "New Post", body: "Content here", userId: 69 })}>
                Add Post
            </button>

            {data.map((item) => (
                <div key={item.id}>
                    <h3>{item.title}</h3>
                    <p>Author ID: {item.userId}</p>
                </div>
            ))}
            <div>
                <button
                    onClick={() => setPage(old => Math.max(old - 1, 1))}
                    disabled={page === 1 || isFetching}
                >
                    Previous
                </button>
                <span> Page {page} </span>
                <button
                    onClick={() => setPage(old => old + 1)}
                    disabled={isFetching}
                >
                    Next
                </button>
            </div>
            {isFetching && <p>Loading more...</p>}
        </div>
    );
};

export default RcQ;
