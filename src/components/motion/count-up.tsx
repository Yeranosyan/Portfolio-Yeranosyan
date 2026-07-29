"use client";

import { useEffect, useState } from "react";
import { useReveal } from "@/hooks/use-reveal";

type CountUpProps = {
  value: number;
  motionKey: string;
  durationMs?: number;
  precision?: number;
};

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

export default function CountUp({
  value,
  motionKey,
  durationMs = 800,
  precision = 0,
}: CountUpProps) {
  const { ref, shown, instant } = useReveal<HTMLSpanElement>(motionKey, 0.35);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    let frame = 0;

    if (instant || !shown) {
      const target = instant ? value : 0;
      frame = requestAnimationFrame(() => setDisplay(target));
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
  }, [shown, instant, value, durationMs]);

  return (
    <span ref={ref} className="tabular-nums">
      {display.toFixed(precision)}
    </span>
  );
}
