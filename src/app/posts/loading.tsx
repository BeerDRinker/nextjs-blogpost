import { PostCardSkeleton } from "@/components/PostCardSkeleton";

export default function PostsPageLoading() {
  return (
    <>
      <div className="my-4 text-2xl">
        <h1>Loading Posts...</h1>
      </div>
      <div className="grid lg:grid-cols-3 gap-4 md:grid-cols-2">
        {Array.from({ length: 9 }).map((_, i) => (
          <PostCardSkeleton key={i} amount={7} />
        ))}
      </div>
    </>
  );
}
