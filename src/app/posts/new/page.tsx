import { PostForm } from "@/components/PostForm";
import { UserSelectOptions } from "@/components/UserSelectOptions";

export default function NewPostPage() {
  return (
    <>
      <div className="my-4 flex items-center justify-between text-2xl">
        <h1>New Post</h1>
      </div>
      <PostForm userSelectOptions={<UserSelectOptions />} />
    </>
  );
}
