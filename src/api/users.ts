import { baseURL, wait } from "./main";

export async function getUser(userId: number) {
  await wait();

  const response = await fetch(`${baseURL}/users?id=${userId}`);

  const [user] = await response.json();

  return user;
}
