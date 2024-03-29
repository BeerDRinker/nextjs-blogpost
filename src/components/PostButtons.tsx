"use client";

import { deletePostAction } from "@/actions/post";
import Link from "next/link";
import { useTransition } from "react";
import useModal from "./useModel";
import Modal from "./Modal";

export default function PostButtons({ postId }: { postId: string }) {
  const { ref, onClose, onOpen } = useModal();
  const [isPending, starTransition] = useTransition();

  function handleClick() {
    starTransition(async () => {
      await deletePostAction(postId);
      onClose();
    });
  }
  return (
    <div className="mt-3 flex flex-row flex-nowrap gap-2 sm:mt-0">
      <Link
        href={`${postId}/edit`}
        className="rounded-lg bg-teal-700 px-6 py-1 text-xl"
      >
        Edit
      </Link>
      <button
        disabled={isPending}
        onClick={onOpen}
        className="rounded-lg bg-red-700 px-6 py-1 text-xl"
      >
        Delete
      </button>
      <Modal ref={ref}>
        <div className="flex flex-col items-center justify-between p-10">
          <h3 className="mb-6 text-2xl antialiased dark:text-gray-50">
            Delete Post?
          </h3>
          <div className="mt-3 flex flex-col flex-nowrap gap-2 sm:mt-0 md:flex-row dark:text-gray-50">
            <button
              disabled={isPending}
              onClick={onClose}
              type="button"
              className={`${isPending ? "skeleton skeleton-btn cursor-not-allowed" : ""} rounded-lg bg-teal-700 px-6 py-1 text-xl`}
            >
              Cancel
            </button>
            <button
              disabled={isPending}
              onClick={handleClick}
              type="button"
              className={`${isPending ? "skeleton skeleton-btn cursor-not-allowed" : ""} rounded-lg bg-red-700 px-6 py-1 text-xl`}
            >
              {isPending ? "Deleting" : "Confirm"}
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
