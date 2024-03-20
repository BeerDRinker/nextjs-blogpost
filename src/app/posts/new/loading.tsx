import Link from "next/link";

export default function NewPostPageLoading() {
  return (
    <>
      <div className="my-4 flex items-center justify-between text-2xl">
        <h1>New Post</h1>
      </div>
      <div className="text-lg">
        <form className="mx-auto max-w-lg">
          <div className="mb-5">
            <div className="flex flex-col justify-between gap-4 sm:flex-row">
              <div className="w-full sm:w-1/2">
                <label
                  htmlFor="title"
                  className="mb-2 block font-medium text-gray-900 dark:text-white"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  className="skeleton skeleton-input dark:shadow-sm-light block w-full rounded-lg border border-red-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="Post title..."
                  required
                />
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
                  className="skeleton skeleton-input block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                >
                  <option value="null">Loading... </option>
                </select>
              </div>
            </div>
          </div>
          <label
            htmlFor="body"
            className="mb-2 block font-medium text-gray-900 dark:text-white"
          >
            Body
          </label>
          <textarea
            required
            name="body"
            id="body"
            rows={8}
            className="skeleton skeleton-input block w-full resize-none rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Post body..."
          ></textarea>
          <div className="mt-4 flex justify-end gap-4">
            <Link
              className="skeleton skeleton-btn rounded-lg bg-gray-500 px-4 py-2"
              href="/posts"
            >
              Cancel
            </Link>
            <button
              className="skeleton skeleton-btn rounded-lg bg-teal-700 px-4 py-2"
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
