import { getUsers } from "@/api/users";
import { User } from "@/types/main";
import { notFound } from "next/navigation";

export async function UserSelectOptions() {
  const users = await getUsers();

  if (users == null) return notFound();

  return (
    <>
      {users.map((user: User) => (
        <option key={user.id} value={user.id}>
          {user.name}
        </option>
      ))}
    </>
  );
}
