import { getPostComments } from "@/api/comments";
import { getPost } from "@/api/posts";
import { getUser } from "@/api/users";
import { Comment } from "@/types/main";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export default function PostPage({
  params: { postId },
}: {
  params: { postId: string };
}) {
  return (
    <>
      <Suspense fallback={<PostFallback />}>
        <Post postId={postId} />
      </Suspense>
      <div>
        <h2 className="mb-4 mt-6 text-lg">Comments:</h2>
        <Suspense fallback={<CommentsListFallback />}>
          <CommentsList postId={postId} />
        </Suspense>
      </div>
    </>
  );
}

async function Post({ postId }: { postId: string }) {
  const post = await getPost(postId);

  if (post == null) return notFound();

  return (
    <>
      <div className="relative flex flex-col flex-shrink-0 w-full px-4 py-8 bg-white border border-gray-300 rounded-md shadow-md dark:bg-gray-800 dark:border-gray-700">
        <h1 className="antialiased text-2xl dark:text-gray-50 mb-4">
          {post.title}
        </h1>
        <div className="flex flex-col gap-4">
          <p className="pt-2 leading-1 text-slate-500 dark:text-gray-300/90">
            {post.body}
          </p>
        </div>

        <div className="flex flex-col mt-4">
          <Suspense fallback={<UserInfoSuspense />}>
            <UserInfo userId={post.userId} />
          </Suspense>
        </div>
      </div>
    </>
  );
}

async function UserInfo({ userId }: { userId: number }) {
  const user = await getUser(userId);

  if (user == null) return notFound();

  return (
    <div className="text-sm text-gray-500 dark:text-gray-300">
      <p className="mb-1">
        Author:{" "}
        <Link
          href={`/users/${userId}`}
          className="mb-1 underline font-bold text-indigo-700"
        >
          {user.name}
        </Link>
      </p>
    </div>
  );
}

function UserInfoSuspense() {
  return (
    <div className="text-sm text-gray-500 dark:text-gray-300">
      <div className="flex items-center mb-1 w-1/3  gap-1">
        <p className="">Author: </p>
        <p className="skeleton"></p>
      </div>
    </div>
  );
}

function PostFallback() {
  return (
    <>
      <div className="relative flex flex-col flex-shrink-0 w-full px-4 py-8 bg-white border border-gray-300 rounded-md shadow-md dark:bg-gray-800 dark:border-gray-700">
        <h1 className="antialiased text-2xl dark:text-gray-50 mb-4 skeleton"></h1>
        <div className="flex flex-col gap-4">
          <p className="pt-2 text-sm leading-1 text-slate-500 dark:text-gray-300/90 skeleton"></p>
        </div>
      </div>
    </>
  );
}

async function CommentsList({ postId }: { postId: string }) {
  const comments = await getPostComments(postId);

  return (
    <div>
      {comments.map((comment: Comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
}

function Comment({ comment }: { comment: Comment }) {
  return (
    <article className="p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900">
      <footer className="flex justify-between items-center mb-4">
        <div className="flex flex-col items-start">
          <p className="text-gray-600 dark:text-gray-300 mb-2">
            {comment.name}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-500">
            {comment.email}
          </p>
        </div>
      </footer>
      <p className="text-gray-500 dark:text-gray-400">{comment.body}</p>
    </article>
  );
}

function CommentsListFallback() {
  return (
    <>
      {Array.from({ length: 4 }).map((_, i) => (
        <article
          key={i}
          className="p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900"
        >
          <footer className="mb-4 w-1/2">
            <div className="flex flex-col items-start">
              <p className="text-gray-600 dark:text-gray-300 mb-2 skeleton"></p>
              <p className="text-sm text-gray-600 dark:text-gray-500 skeleton"></p>
            </div>
          </footer>
          <p className="text-gray-500 dark:text-gray-400 skeleton"></p>
        </article>
      ))}
    </>
  );
}
