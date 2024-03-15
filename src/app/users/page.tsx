import { getUsers } from "@/api/users";
import { UserCard } from "@/components/UserCard";
import { User } from "@/types/main";
import { notFound } from "next/navigation";

export default async function UsersPage() {
  const users = await getUsers();

  if (users == null) return notFound();

  return (
    <>
      <div className="my-4 text-2xl">
        <h1>Users</h1>
      </div>
      <div className="grid lg:grid-cols-2 gap-4 md:grid-cols-2">
        {users.map((user: User) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </>
  );
}
