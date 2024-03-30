import { getPosts } from "@/api/posts";
import Pagination from "@/components/Pagination";
import { PostCard } from "@/components/PostCard";
import { Post } from "@/types/main";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function PostsPage({
  searchParams,
}: {
  searchParams: { _page?: string; _per_page?: string };
}) {
  const page = searchParams._page ?? 1;
  const perPage = searchParams._per_page ?? "9";

  const {
    data: posts,
    first,
    prev,
    next,
    last,
  } = await getPosts(page, perPage);

  if (posts == null) return notFound();

  return (
    <>
      <div className="my-4 flex items-center justify-between text-2xl">
        <h1>Posts</h1>
        <Link
          href="posts/new"
          type="button"
          className="rounded-lg bg-teal-700 px-6 py-1 text-xl"
        >
          New
        </Link>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post: Post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      <Pagination
        current={Number(page)}
        first={first}
        prev={prev}
        next={next}
        last={last}
      />
    </>
  );
}
