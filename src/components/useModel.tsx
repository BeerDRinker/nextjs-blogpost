"use client";

import { useCallback, useRef } from "react";

export default function useModal() {
  const handleModalClick = useCallback((event: MouseEvent) => {
    const dialogElement = ref.current;
    if (!dialogElement) return;

    if (event.target === dialogElement) {
      dialogElement.close();
    }
  }, []);

  const ref = useRef<HTMLDialogElement | null>(null);

  const onOpen = () => {
    const dialogElement = ref.current;
    if (!dialogElement) return;

    dialogElement.addEventListener("click", handleModalClick);
    dialogElement.showModal();
  };

  const onClose = () => {
    const dialogElement = ref.current;
    if (!dialogElement) return;

    dialogElement.removeEventListener("click", handleModalClick);
    dialogElement.close();
  };

  return { ref, onClose, onOpen };
}
