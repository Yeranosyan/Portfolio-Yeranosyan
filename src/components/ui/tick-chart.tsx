"use client";

import clsx from "clsx";
import { useReveal } from "@/hooks/use-reveal";
import CountUp from "@/components/motion/count-up";
import { splitNumeric } from "@/lib/utils/text";

export type TickTone = "brand" | "accent" | "muted";

export type Tick = {
  fill: number;
  tone: TickTone;
};

export type TickMarker = {
  at: number;
  value: string;
  label: string;
  variant?: "solid" | "dashed";
};

type TickChartProps = {
  ticks: Tick[];
  markers?: TickMarker[];
  scale?: string[];
  motionKey: string;
  className?: string;
};

function MarkerValue({
  value,
  motionKey,
}: {
  value: string;
  motionKey: string;
}) {
  const parts = splitNumeric(value);
  if (!parts) return <>{value}</>;

  return (
    <>
      {parts.prefix}
      <CountUp value={parts.value} motionKey={motionKey} />
      {parts.suffix}
    </>
  );
}

export default function TickChart({
  ticks,
  markers = [],
  scale,
  motionKey,
  className,
}: TickChartProps) {
  const { ref, shown } = useReveal<HTMLDivElement>(motionKey, 0.25);

  return (
    <div ref={ref} className={clsx("tickchart", className)}>
      <div className="tickchart__plot">
        {markers.map((marker) => (
          <span
            key={marker.label}
            className={clsx(
              "tickchart__marker",
              marker.variant === "dashed" && "tickchart__marker--dashed",
              marker.at > 50 && "tickchart__marker--end",
            )}
            style={{ left: `${marker.at}%` }}
          >
            <span className="tickchart__marker-value">
              <MarkerValue
                value={marker.value}
                motionKey={`${motionKey}-marker-${marker.label}`}
              />
            </span>
            <span className="tickchart__marker-label">{marker.label}</span>
            <span aria-hidden className="tickchart__marker-dot" />
            <span aria-hidden className="tickchart__marker-stem" />
          </span>
        ))}

        <div aria-hidden className="tickchart__ticks">
          {ticks.map((tick, index) => (
            <span
              key={index}
              className={clsx("tickchart__tick", shown && "is-grown")}
              style={{ animationDelay: `${index * 18}ms` }}
            >
              <span
                className={`tickchart__fill tickchart__fill--${tick.tone}`}
                style={{ height: `${tick.fill * 100}%` }}
              />
              <span className="tickchart__base" />
            </span>
          ))}
        </div>
      </div>

      {scale ? (
        <div className="tickchart__scale">
          {scale.map((mark) => (
            <span key={mark} className="tickchart__mark">
              {mark}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
}
