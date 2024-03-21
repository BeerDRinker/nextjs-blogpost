import { Post } from "@/types/main";
import { baseURL, wait } from "./main";

export async function getPosts() {
  await wait();

  const response = await fetch(`${baseURL}/posts`);

  const posts = await response.json();

  return posts;
}

export async function getPost(postId: string) {
  await wait();

  const response = await fetch(`${baseURL}/posts/${postId}`);

  const post = await response.json();

  return post;
}

export async function getUserPosts(userId: number | string) {
  await wait(3000);

  const response = await fetch(`${baseURL}/posts?userId=${userId}`);

  const posts = await response.json();

  return posts;
}

export async function createPost({
  title,
  body,
  userId,
}: {
  title: string;
  body: string;
  userId: number;
}) {
  const response = await fetch(`${baseURL}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, body, userId }),
  });

  const post = await response.json();

  return post as Post;
}
