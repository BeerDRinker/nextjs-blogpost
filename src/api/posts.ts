import { baseURL, wait } from "./main";

export async function getPosts() {
  await wait();

  const response = await fetch(`${baseURL}/posts`);

  const posts = await response.json();

  return posts;
}

export async function getPost(postId: string) {
  await wait(1500);

  const response = await fetch(`${baseURL}/posts/${postId}`);

  const post = await response.json();

  return post;
}
