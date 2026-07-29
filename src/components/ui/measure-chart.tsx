"use client";

import clsx from "clsx";
import { useReveal } from "@/hooks/use-reveal";
import CountUp from "@/components/motion/count-up";
import { splitNumeric } from "@/lib/utils/text";

export type MeasureSegment = {
  span: number;
  tone: "brand" | "accent";
};

export type MeasureMarker = {
  at: number;
  value: string;
  label: string;
  variant?: "solid" | "dashed";
};

type MeasureChartProps = {
  barShare: number;
  segments: MeasureSegment[];
  ticks: number;
  markers: MeasureMarker[];
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

export default function MeasureChart({
  barShare,
  segments,
  ticks,
  markers,
  motionKey,
  className,
}: MeasureChartProps) {
  const { ref, shown } = useReveal<HTMLDivElement>(motionKey, 0.25);

  return (
    <div ref={ref} className={clsx("measure", className)}>
      <div className="measure__plot">
        {markers.map((marker) => (
          <span
            key={marker.label}
            className={clsx(
              "measure__marker",
              marker.variant === "dashed" && "measure__marker--dashed",
              marker.at > 50 && "measure__marker--end",
            )}
            style={{ left: `${marker.at}%` }}
          >
            <span className="measure__value">
              <MarkerValue
                value={marker.value}
                motionKey={`${motionKey}-marker-${marker.label}`}
              />
            </span>
            <span className="measure__label">{marker.label}</span>
            <span aria-hidden className="measure__dot" />
            <span aria-hidden className="measure__stem" />
          </span>
        ))}

        <div aria-hidden className="measure__row">
          <span
            className={clsx("measure__bar", shown && "is-grown")}
            style={{ width: `${barShare}%` }}
          >
            {segments.map((segment, index) => (
              <span
                key={index}
                className={`measure__seg measure__seg--${segment.tone}`}
                style={{ width: `${segment.span}%` }}
              />
            ))}
          </span>

          <span className="measure__ticks">
            {Array.from({ length: ticks }, (_, index) => (
              <span
                key={index}
                className={clsx("measure__tick", shown && "is-grown")}
                style={{ animationDelay: `${index * 26}ms` }}
              />
            ))}
          </span>
        </div>
      </div>
    </div>
  );
}
