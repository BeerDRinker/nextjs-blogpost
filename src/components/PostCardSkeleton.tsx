export function PostCardSkeleton({ amount }: { amount: number }) {
  return (
    <div className="flex flex-wrap rounded-lg bg-white p-6 text-black shadow-secondary-1 dark:bg-gray-800 dark:text-gray-900 ">
      <h5 className="flex mb-2 text-xl font-medium leading-tight skeleton"></h5>

      {Array.from({ length: amount }).map((_, i) => (
        <p key={i} className="flex mb-4 text-base skeleton"></p>
      ))}
    </div>
  );
}
