import { getPost } from "@/api/posts";
import { PostForm } from "@/components/PostForm";
import { UserSelectOptions } from "@/components/UserSelectOptions";
import { notFound } from "next/navigation";

export default async function EditPostPage({
  params: { postId },
}: {
  params: { postId: string };
}) {
  const post = await getPost(postId);

  if (post == null) return notFound();

  return (
    <>
      <div className="my-4 flex items-center justify-between text-2xl">
        <h1>Edit Post</h1>
      </div>
      <PostForm post={post} userSelectOptions={<UserSelectOptions />} />
    </>
  );
}
