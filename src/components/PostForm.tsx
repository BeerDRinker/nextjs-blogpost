"use client";
import { createPostAction } from "@/actions/post";
import Link from "next/link";
import { ReactNode } from "react";
import { useFormState } from "react-dom";

export function PostForm({
  userSelectOptions,
}: {
  userSelectOptions: ReactNode;
}) {
  const [error, formAction] = useFormState(createPostAction, {});

  console.log("error: ", error);

  return (
    <div className="text-lg">
      <form action={formAction} className="mx-auto max-w-lg">
        <div className="mb-5">
          <div className="flex flex-col justify-between gap-4 sm:flex-row">
            <div className="relative mb-2 w-full sm:w-1/2">
              <label
                htmlFor="title"
                className={`
                  ${
                    error.title
                      ? "text-red-700 dark:text-red-500"
                      : "text-gray-900 dark:text-white"
                  } mb-2 block font-medium
                `}
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className={`dark:shadow-sm-light block w-full rounded-lg border p-2.5 shadow-sm dark:bg-gray-700 ${error.title ? " border-red-500 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-500 dark:text-red-500 dark:placeholder-red-500 " : " text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600  dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 "}`}
                placeholder="Post title..."
                required
              />
              <p className="absolute mt-1 text-sm text-red-600 dark:text-red-500">
                {error.title}
              </p>
            </div>
            <div className="w-full sm:w-1/2">
              <label
                htmlFor="userId"
                className="mb-2 block font-medium text-gray-900 dark:text-white"
              >
                Author
              </label>
              <select
                id="userId"
                name="userId"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              >
                {userSelectOptions}
              </select>
            </div>
          </div>
        </div>
        <div className="relative mb-2">
          <label
            htmlFor="body"
            className={`
                    ${
                      error.body
                        ? "text-red-700 dark:text-red-500"
                        : "text-gray-900 dark:text-white"
                    } mb-2 block font-medium
                  `}
          >
            Body
          </label>
          <textarea
            required
            name="body"
            id="body"
            rows={8}
            className={`dark:shadow-sm-light block w-full resize-none rounded-lg border p-2.5 shadow-sm dark:bg-gray-700 ${error.body ? " border-red-500 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-500 dark:text-red-500 dark:placeholder-red-500 " : " text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600  dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 "}`}
            placeholder="Post body..."
          ></textarea>
          <p className="absolute mt-1 text-sm text-red-600 dark:text-red-500">
            {error.body}
          </p>
        </div>
        <div className="mt-4 flex justify-end gap-4">
          <Link className="rounded-lg bg-gray-500 px-4 py-2" href="/posts">
            Cancel
          </Link>
          <button className="rounded-lg bg-teal-700 px-4 py-2" type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
