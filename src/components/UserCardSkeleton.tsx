export function UserCardSkeleton() {
  return (
    <div className="p-6 text-black dark:text-gray-300/90 shadow-secondary-1 bg-white border border-gray-300 rounded-md shadow-md dark:bg-gray-800 dark:border-gray-700 ">
      <h5 className="flex mb-4 text-xl font-medium leading-tight text-white dark:text-gray-50 skeleton" />
      <hr className="mb-4" />
      <p className="flex mb-4 text-base skeleton" />
      <p className="flex mb-4 text-base skeleton" />
      <p className="flex mb-4 text-base skeleton" />
      <p className="flex mb-4 text-base skeleton" />
      <hr className="mb-6" />
      <div className="flex items-end w-full justify-end text-white dark:text-gray-50">
        <div className="w-2/12">
          <p className="bg-teal-700 px-6 py-4 rounded-lg skeleton"></p>
        </div>
      </div>
    </div>
  );
}
