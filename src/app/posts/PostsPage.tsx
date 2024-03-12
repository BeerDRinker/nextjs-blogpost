import { getPosts } from "@/api/posts";
import { PostCard } from "@/components/PostCard";
import { Post } from "@/types/main";
import { notFound } from "next/navigation";

export default async function PostsPage() {
  const posts = await getPosts();

  posts.forEach((post: Post) => console.log(post.id));

  if (posts == null) return notFound();

  // console.log("posts: ", posts);
  return (
    <div className="mx-auto px-6 mt-6 max-w-4xl">
      <div className="my-4 text-2xl">
        <h1>Posts</h1>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {posts.map((post: Post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
