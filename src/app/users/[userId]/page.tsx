import { getUserPosts } from "@/api/posts";
import { getUser } from "@/api/users";
import PostsPageLoading from "@/app/posts/loading";
import { PostCard } from "@/components/PostCard";
import { Post } from "@/types/main";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export default function UserPage({
  params: { userId },
}: {
  params: { userId: string };
}) {
  return (
    <>
      <Suspense fallback={<UserDetailsSuspense />}>
        <UserDetails userId={userId} />
      </Suspense>
      <Suspense fallback={<PostsPageLoading />}>
        <UserPosts userId={userId} />
      </Suspense>
    </>
  );
}

async function UserDetails({ userId }: { userId: number | string }) {
  const user = await getUser(userId);

  if (user == null) return notFound();

  return (
    <div className="shadow-secondary-1 rounded-md border border-gray-300 bg-white p-6 text-black shadow-md dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300/90 ">
      <h5 className="mb-4 flex text-xl font-medium leading-tight text-white dark:text-gray-50">
        {user.name}
      </h5>
      <p className="mb-4 flex text-base">Company: {user.company.name}</p>
      <p className="mb-4 flex text-base">
        Website:
        <a
          className="text-indigo-400"
          target="_blank"
          rel="noopener noreferrer"
          href={`http://${user.website}`}
        >
          &nbsp;{user.website}
        </a>
      </p>
      <p className="mb-4 flex text-base">
        Email:
        <a className="text-indigo-400" href={`mailto:${user.website}`}>
          &nbsp;{user.email}
        </a>
      </p>
      <p className="mb-4 flex text-base">City: {user.address.city}</p>
    </div>
  );
}

function UserDetailsSuspense() {
  return (
    <div className="shadow-secondary-1 rounded-md border border-gray-300 bg-white p-6 text-black shadow-md dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300/90 ">
      <h5 className="mb-4 flex w-1/2 text-xl font-medium leading-tight text-white dark:text-gray-50">
        <span className="skeleton"></span>
      </h5>
      <p className="mb-4 flex w-1/3 text-base">
        Company: <span className="skeleton ml-1 mt-1"></span>
      </p>
      <p className="mb-4 flex w-1/3 text-base">
        Website:
        <span className="skeleton ml-1 mt-1"></span>
      </p>
      <p className="mb-4 flex w-1/3 text-base">
        Email:
        <span className="skeleton ml-1 mt-1"></span>
      </p>
      <p className="mb-4 flex w-1/3 text-base">
        City: <span className="skeleton ml-1 mt-1"></span>
      </p>
    </div>
  );
}

async function UserPosts({ userId }: { userId: number | string }) {
  const posts = await getUserPosts(userId);

  if (posts.leading === 0) {
    return <p>There is no posts yet...</p>;
  }

  return (
    <>
      <div className="my-4 flex items-center justify-between text-2xl">
        <h1>Posts</h1>
      </div>
      <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post: Post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </>
  );
}
