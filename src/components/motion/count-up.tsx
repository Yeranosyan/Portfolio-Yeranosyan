"use client";

import { useEffect, useState } from "react";
import { useInView } from "@/hooks/use-in-view";

type CountUpProps = {
  value: number;
  durationMs?: number;
  /** Decimal places to render. */
  precision?: number;
};

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

export default function CountUp({
  value,
  durationMs = 1400,
  precision = 0,
}: CountUpProps) {
  const { ref, inView, active } = useInView<HTMLSpanElement>(0.35);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!active) return;

    let frame = 0;

    if (!inView) {
      frame = requestAnimationFrame(() => setDisplay(0));
      return () => cancelAnimationFrame(frame);
    }

    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / durationMs, 1);
      setDisplay(value * easeOut(progress));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, inView, value, durationMs]);

  return (
    <span ref={ref} className="tabular-nums">
      {display.toFixed(precision)}
    </span>
  );
}
