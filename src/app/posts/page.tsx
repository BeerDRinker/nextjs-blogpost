import { getPosts } from "@/api/posts";
import { PostCard } from "@/components/PostCard";
import { Post } from "@/types/main";
import { notFound } from "next/navigation";

export default async function PostsPage() {
  const posts = await getPosts();

  if (posts == null) return notFound();

  return (
    <>
      <div className="my-4 text-2xl">
        <h1>Posts</h1>
      </div>
      <div className="grid lg:grid-cols-3 gap-4 md:grid-cols-2">
        {posts.map((post: Post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}
