"use client";

import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="btn btn--solid w-full sm:w-auto"
    >
      {pending ? "Sending…" : "Send message"}
      <span aria-hidden>{pending ? "" : "→"}</span>
    </button>
  );
}
