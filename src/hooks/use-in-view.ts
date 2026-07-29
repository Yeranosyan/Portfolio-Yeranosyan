"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { motionDisarmed } from "@/lib/utils/motion";

const subscribe = () => () => {};

export function useInView<T extends HTMLElement = HTMLElement>(
  threshold = 0.35,
) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  const active = useSyncExternalStore(
    subscribe,
    () => !motionDisarmed(),
    () => false,
  );

  useEffect(() => {
    if (!active) return;

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold, rootMargin: "0px 0px -5% 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [active, threshold]);

  return { ref, inView, active };
}
