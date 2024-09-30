import { RefObject } from "react";

type TModal = {
  dialogRef: RefObject<HTMLDialogElement>;
  title: string;
  body: string;
};

export default function Modal({ dialogRef, title, body }: TModal) {
  return (
    <dialog ref={dialogRef} className="rounded-lg p-10">
      <h2 className="font-bold text-3xl mb-2">{title}</h2>
      <p className="text-neutral-700 text-lg">{body}</p>
      <button
        className="block mx-auto mt-6 bg-gradient-to-r from-blue-400 to-teal-300 text-black rounded-md px-6 py-2 text-lg font-semibold"
        onClick={() => dialogRef.current && dialogRef.current.close()}>
        Ok
      </button>
    </dialog>
  );
}
