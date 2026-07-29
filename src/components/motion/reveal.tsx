"use client";

import clsx from "clsx";
import { useReveal } from "@/hooks/use-reveal";

type RevealProps = {
  children: React.ReactNode;
  motionKey: string;
  delay?: number;
  className?: string;
};

export default function Reveal({
  children,
  motionKey,
  delay = 0,
  className,
}: RevealProps) {
  const { ref, shown, instant } = useReveal(motionKey);

  return (
    <div
      ref={ref}
      style={delay && !instant ? { transitionDelay: `${delay}ms` } : undefined}
      className={clsx(
        "reveal",
        shown && "is-revealed",
        instant && "is-instant",
        className,
      )}
    >
      {children}
    </div>
  );
}
