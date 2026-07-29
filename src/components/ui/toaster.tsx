"use client";

import clsx from "clsx";
import { Toaster as HotToaster, resolveValue } from "react-hot-toast";

export default function Toaster() {
  return (
    <HotToaster
      position="top-center"
      containerStyle={{ top: 24 }}
      toastOptions={{ duration: 4000 }}
    >
      {(t) => (
        <div
          {...t.ariaProps}
          className={clsx("toast", t.visible ? "toast--in" : "toast--out")}
        >
          {resolveValue(t.message, t)}
        </div>
      )}
    </HotToaster>
  );
}
