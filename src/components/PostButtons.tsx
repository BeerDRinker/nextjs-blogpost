"use client";

import { deletePostAction } from "@/actions/post";
import Link from "next/link";
import { useTransition } from "react";

export default function PostButtons({ postId }: { postId: string }) {
  const [isPending, starTransition] = useTransition();
  function handleClick() {
    starTransition(async () => await deletePostAction(postId));
  }
  return (
    <div className="mt-3 flex flex-row flex-nowrap gap-2 sm:mt-0">
      <Link
        href={`${postId}/edit`}
        className={`${isPending ? "skeleton skeleton-btn cursor-not-allowed" : ""} rounded-lg bg-teal-700 px-6 py-1 text-xl`}
      >
        Edit
      </Link>
      <button
        disabled={isPending}
        onClick={handleClick}
        className={`${isPending ? "skeleton skeleton-btn cursor-not-allowed" : ""} rounded-lg bg-red-700 px-6 py-1 text-xl`}
      >
        {isPending ? "Deleting" : "Delete"}
      </button>
    </div>
  );
}
