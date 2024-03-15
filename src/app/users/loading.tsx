import { UserCardSkeleton } from "@/components/UserCardSkeleton";

export default function UsersPageLoading() {
  return (
    <>
      <div className="my-4 text-2xl">
        <h1>Loading Users...</h1>
      </div>
      <div className="grid lg:grid-cols-2 gap-4 md:grid-cols-1">
        {Array.from({ length: 9 }).map((_, i) => (
          <UserCardSkeleton key={i} />
        ))}
      </div>
    </>
  );
}
