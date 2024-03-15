import { Post } from "@/types/main";
import Link from "next/link";

export function PostCard({ post }: { post: Post }) {
  return (
    <div className="flex flex-wrap p-6 text-black dark:text-gray-300/90 shadow-secondary-1 bg-white border border-gray-300 rounded-md shadow-md dark:bg-gray-800 dark:border-gray-700 ">
      <h5 className="flex mb-4 text-xl font-medium leading-tight text-white dark:text-gray-50">
        {post.title}
      </h5>
      <p className=" flex mb-4 text-base">{post.body}</p>
      <div className="flex items-end w-full justify-end text-white dark:text-gray-50">
        <Link
          href={`posts/${post.id}`}
          type="button"
          className="bg-teal-700 px-6 py-4 rounded-lg"
        >
          View
        </Link>
      </div>
    </div>
  );
}
