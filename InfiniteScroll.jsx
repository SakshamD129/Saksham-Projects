import { useInfiniteQuery } from "@tanstack/react-query";

const fetchPosts = async ({ pageParam = 1 }) => {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${pageParam}&_limit=10`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch data");
    }
    return response.json();
};

const InfiniteScroll = () => {
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
        getNextPageParam: (_lastPage, allPages) => {
            return allPages.length + 1;
        },
    });

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error fetching data!</p>;

    return (
        <div>
            <h2>Infinite Scrolling Posts</h2>
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

            <button onClick={() => fetchNextPage()} disabled={!hasNextPage || isFetchingNextPage}>
                {isFetchingNextPage ? "Loading more..." : hasNextPage ? "Load More" : "No More Posts"}
            </button>
        </div>
    );
};

export default InfiniteScroll;
