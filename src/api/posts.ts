import { Post } from "@/types/main";

const baseURL = process.env.API_URL;

export async function getPosts() {
  const response = await fetch(`${baseURL}/posts`);

  const posts = await response.json();

  return posts;
}
