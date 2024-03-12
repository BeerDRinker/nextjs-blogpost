import { Post } from "@/types/main";
import Link from "next/link";

export function PostCard({ post }: { post: Post }) {
  return (
    <div className="flex flex-wrap rounded-lg bg-white p-6 text-black shadow-secondary-1 dark:bg-slate-200 dark:text-gray-900 ">
      <h5 className="flex mb-2 text-xl font-medium leading-tight">
        {post.title}
      </h5>
      <p className=" flex mb-4 text-base">{post.body}</p>
      <div className="flex items-end w-full justify-end text-white">
        <Link
          href={`/posts/${post.id}`}
          type="button"
          className="bg-teal-700 px-6 py-4 rounded-lg"
        >
          View
        </Link>
      </div>
    </div>
  );
}
