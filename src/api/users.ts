import { baseURL, wait } from "./main";

export async function getUsers() {
  await wait();

  const response = await fetch(`${baseURL}/users`);

  const users = await response.json();

  return users;
}

export async function getUser(userId: number | string) {
  await wait();

  const response = await fetch(`${baseURL}/users?id=${userId}`);

  const [user] = await response.json();

  return user;
}
