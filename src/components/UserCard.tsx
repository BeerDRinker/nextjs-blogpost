import { User } from "@/types/main";
import Link from "next/link";

export function UserCard({ user }: { user: User }) {
  return (
    <div className="p-6 text-black dark:text-gray-300/90 shadow-secondary-1 bg-white border border-gray-300 rounded-md shadow-md dark:bg-gray-800 dark:border-gray-700 ">
      <h5 className="flex mb-4 text-xl font-medium leading-tight text-white dark:text-gray-50">
        {user.name}
      </h5>
      <hr className="mb-2" />
      <p className="flex mb-4 text-base">Company: {user.company.name}</p>
      <p className="flex mb-4 text-base">
        Website:
        <a
          className="text-indigo-400"
          target="_blank"
          rel="noopener noreferrer"
          href={`http://${user.website}`}
        >
          &nbsp;{user.website}
        </a>
      </p>
      <p className="flex mb-4 text-base">
        Email:
        <a className="text-indigo-400" href={`mailto:${user.website}`}>
          &nbsp;{user.email}
        </a>
      </p>
      <p className="flex mb-4 text-base">City: {user.address.city}</p>
      <hr className="mb-6" />
      <div className="flex items-end w-full justify-end text-white dark:text-gray-50">
        <Link
          href={`users/${user.id}`}
          type="button"
          className="bg-teal-700 px-6 py-4 rounded-lg"
        >
          View
        </Link>
      </div>
    </div>
  );
}
