import { Post } from "@/types/main";
import Link from "next/link";

export function PostCard({ post }: { post: Post }) {
  return (
    <div className="shadow-secondary-1 flex flex-wrap rounded-md border border-gray-300 bg-white p-6 text-black shadow-md dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300/90 ">
      <h5 className="mb-4 flex text-xl font-medium leading-tight text-white dark:text-gray-50">
        {post.title}
      </h5>
      <p className=" mb-4 flex text-base">{post.body}</p>
      <div className="flex w-full items-end justify-end text-white dark:text-gray-50">
        <Link
          href={`/posts/${post.id}`}
          type="button"
          className="rounded-lg bg-teal-700 px-6 py-4"
        >
          View
        </Link>
      </div>
    </div>
  );
}
