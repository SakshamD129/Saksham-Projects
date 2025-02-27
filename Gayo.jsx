import { useEffect, useRef } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";

const fetchPosts = async ({ pageParam = 1 }) => {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${pageParam}&_limit=10`
    );
    if (!response.ok) throw new Error("Failed to fetch");
    return response.json();
};

const InfiniteScrollComponent = () => {
    const {
        data,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        isLoading,
        error,
    } = useInfiniteQuery({
        queryKey: ["posts"],
        queryFn: fetchPosts,
        getNextPageParam: (_lastPage, allPages) => allPages.length + 1,
    });

    const observerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && hasNextPage) {
                    fetchNextPage();
                }
            },
            { threshold: 1.0 }
        );

        if (observerRef.current) observer.observe(observerRef.current);

        return () => observer.disconnect();
    }, [fetchNextPage, hasNextPage]);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error fetching data!</p>;

    return (
        <div>
            {data.pages.map((page, index) => (
                <div key={index}>
                    {page.map((post) => (
                        <div key={post.id} className="post">
                            <h3>{post.title}</h3>
                            <p>Author ID: {post.userId}</p>
                        </div>
                    ))}
                </div>
            ))}

            <div ref={observerRef} style={{ height: "20px", background: "transparent" }}></div>

            {isFetchingNextPage && <p>Loading more...</p>}
        </div>
    );
};

export default InfiniteScrollComponent;
