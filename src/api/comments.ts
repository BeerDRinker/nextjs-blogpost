import { baseURL, wait } from "./main";

export async function getPostComments(postId: string) {
  await wait();

  const response = await fetch(`${baseURL}/comments?postId=${postId}`);

  const comments = await response.json();

  return comments;
}
