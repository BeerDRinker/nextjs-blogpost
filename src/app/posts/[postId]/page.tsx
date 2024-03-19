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
      <div className="relative flex w-full flex-shrink-0 flex-col rounded-md border border-gray-300 bg-white px-4 py-8 shadow-md dark:border-gray-700 dark:bg-gray-800">
        <h1 className="mb-4 text-2xl antialiased dark:text-gray-50">
          {post.title}
        </h1>
        <div className="flex flex-col gap-4">
          <p className="leading-1 pt-2 text-slate-500 dark:text-gray-300/90">
            {post.body}
          </p>
        </div>

        <div className="mt-4 flex flex-col">
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
          className="mb-1 font-bold text-indigo-700 underline"
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
      <div className="mb-1 flex w-1/3 items-center  gap-1">
        <p className="">Author: </p>
        <p className="skeleton"></p>
      </div>
    </div>
  );
}

function PostFallback() {
  return (
    <>
      <div className="relative flex w-full flex-shrink-0 flex-col rounded-md border border-gray-300 bg-white px-4 py-8 shadow-md dark:border-gray-700 dark:bg-gray-800">
        <h1 className="skeleton mb-4 text-2xl antialiased dark:text-gray-50"></h1>
        <div className="flex flex-col gap-4">
          <p className="leading-1 skeleton pt-2 text-sm text-slate-500 dark:text-gray-300/90"></p>
        </div>
      </div>
    </>
  );
}

async function CommentsList({ postId }: { postId: string }) {
  const comments = await getPostComments(postId);

  if (comments.length === 0) {
    return <p>There is no comments to this post yet...</p>;
  }

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
    <article className="mb-6 rounded-lg bg-white p-6 text-base dark:bg-gray-900">
      <footer className="mb-4 flex items-center justify-between">
        <div className="flex flex-col items-start">
          <p className="mb-2 text-gray-600 dark:text-gray-300">
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
          className="mb-6 rounded-lg bg-white p-6 text-base dark:bg-gray-900"
        >
          <footer className="mb-4 w-1/2">
            <div className="flex flex-col items-start">
              <p className="skeleton mb-2 text-gray-600 dark:text-gray-300"></p>
              <p className="skeleton text-sm text-gray-600 dark:text-gray-500"></p>
            </div>
          </footer>
          <p className="skeleton text-gray-500 dark:text-gray-400"></p>
        </article>
      ))}
    </>
  );
}
