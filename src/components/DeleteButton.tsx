"use client";

import { deletePostAction } from "@/actions/post";
import { useTransition } from "react";

export default function DeleteButton({ postId }: { postId: string }) {
  const [isPending, starTransition] = useTransition();
  function handleClick() {
    starTransition(async () => await deletePostAction(postId));
  }
  return (
    <>
      <button
        disabled={isPending}
        onClick={handleClick}
        className={`${isPending ? "skeleton skeleton-btn" : ""} rounded-lg bg-red-700 px-6 py-1 text-xl`}
      >
        {isPending ? "Deleting" : "Delete"}
      </button>
    </>
  );
}
