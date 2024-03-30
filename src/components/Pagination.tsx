import Link from "next/link";

export default function Pagination({
  current,
  first,
  prev,
  next,
  last,
}: {
  current: number;
  first: number;
  prev: number;
  next: number;
  last: number;
}) {
  return (
    <div className="my-6 flex justify-center ">
      <nav aria-label="Page navigation">
        <ul className="inline-flex -space-x-px text-sm">
          {first !== current && (
            <li>
              <Link
                href={`/posts?_page=${first}`}
                className="ms-0 flex h-8 items-center justify-center rounded-s-lg border border-e-0 border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                {first}
              </Link>
            </li>
          )}
          {prev && (
            <li>
              <Link
                href={`/posts?_page=${prev}`}
                className="flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Prev
              </Link>
            </li>
          )}
          <span className="flex h-8 items-center justify-center border border-gray-300 bg-blue-50 px-3 text-blue-600 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">
            {current}
          </span>
          {next && (
            <li>
              <Link
                href={`/posts?_page=${next}`}
                className="flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Next
              </Link>
            </li>
          )}
          {last !== current && (
            <li>
              <Link
                href={`/posts?_page=${last}`}
                className="flex h-8 items-center justify-center rounded-e-lg border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                {last}
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
}
