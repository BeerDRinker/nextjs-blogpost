"use server";

import { createPost, editPost } from "@/api/posts";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createPostAction(prevState: unknown, formData: FormData) {
  const [data, errors] = validatePost(formData);
  if (data == null) return errors;

  const post = await createPost(data);

  revalidatePath("/posts");
  revalidatePath(`/users/${post.userId}`);
  redirect(`/posts/${post.id}`);
}

export async function editPostAction(
  postId: string | number,
  prevState: unknown,
  formData: FormData,
) {
  const [data, errors] = validatePost(formData);
  if (data == null) return errors;

  const post = await editPost(postId, data);

  revalidatePath("/posts");
  revalidatePath(`/posts/${post.id}`);
  revalidatePath(`/users/${post.userId}`);
  redirect(`/posts/${post.id}`);
}

function validatePost(formData: FormData) {
  const errors: { title?: string; body?: string; userId?: string } = {};
  const title = formData.get("title") as string;
  const body = formData.get("body") as string;
  const userId = Number(formData.get("userId"));
  let isValid = true;

  if (title.length < 3) {
    errors.title = "Minimum title length 3 characters";
    isValid = false;
  }

  if (body.length < 3) {
    errors.body = "Minimum body length 3 characters";
    isValid = false;
  }

  if (isNaN(userId)) {
    errors.userId = "User is Required";
    isValid = false;
  }

  return [isValid ? { title, body, userId } : undefined, errors] as const;
}
