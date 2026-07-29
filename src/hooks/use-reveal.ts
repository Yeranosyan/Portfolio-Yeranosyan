"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { hasPlayed, markPlayed, motionDisarmed } from "@/lib/utils/motion";

type RevealState<T extends HTMLElement> = {
  ref: React.RefObject<T | null>;
  shown: boolean;
  instant: boolean;
  pending: boolean;
};

const subscribe = () => () => {};

export function useReveal<T extends HTMLElement = HTMLDivElement>(
  key: string,
  threshold = 0.2,
): RevealState<T> {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  const skip = useSyncExternalStore(
    subscribe,
    () => motionDisarmed() || hasPlayed(key),
    () => true,
  );

  useEffect(() => {
    if (skip) return;

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        markPlayed(key);
        setInView(true);
        observer.disconnect();
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [key, skip, threshold]);

  return {
    ref,
    shown: skip || inView,
    instant: skip,
    pending: !skip && !inView,
  };
}
