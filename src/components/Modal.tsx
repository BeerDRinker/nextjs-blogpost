import { ReactNode, forwardRef } from "react";

interface Props {
  children?: ReactNode;
}

export type Ref = HTMLDialogElement;

export default forwardRef<Ref, Props>(function Modal({ children }, ref) {
  return (
    <dialog
      ref={ref}
      id="modal-dialog"
      className="w-10/12 rounded-md border-0 border-gray-300 bg-white p-0 shadow-md md:w-6/12 lg:w-4/12 dark:border-gray-700 dark:bg-gray-800"
    >
      {children}
    </dialog>
  );
});
