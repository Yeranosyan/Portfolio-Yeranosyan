"use client";

import clsx from "clsx";
import { useReveal } from "@/hooks/use-reveal";
import CountUp from "@/components/motion/count-up";
import { splitNumeric } from "@/lib/utils/text";

export type PipeTone = "brand" | "accent" | "rust" | "hatch" | "rail";
export type DotTone = Extract<PipeTone, "brand" | "accent" | "rust">;

export type PipeSegment = {
  span: number;
  tone: PipeTone;
};

export type PipeMarker = {
  at: number;
  label: string;
  value?: string;
  tone?: DotTone;
};

type PipelineProps = {
  segments: PipeSegment[];
  markers?: PipeMarker[];
  scale?: string[];
  thickness?: "thin" | "base" | "thick";
  motionKey: string;
  className?: string;
};

type MarkerAlign = "start" | "center" | "end";
type MarkerLayout = { at: number; align: MarkerAlign; room: number };

const EDGE_ZONE = 15;
const CROWD_ZONE = 30;

function markerAlign(at: number, before?: number, after?: number): MarkerAlign {
  if (at <= EDGE_ZONE) return "start";
  if (at >= 100 - EDGE_ZONE) return "end";

  const gapBefore = before === undefined ? Infinity : at - before;
  const gapAfter = after === undefined ? Infinity : after - at;
  if (gapAfter < CROWD_ZONE && gapAfter <= gapBefore) return "end";
  if (gapBefore < CROWD_ZONE && gapBefore < gapAfter) return "start";
  return "center";
}

function markerRoom(
  at: number,
  align: MarkerAlign,
  before?: MarkerLayout,
  after?: MarkerLayout,
) {
  const left =
    before === undefined
      ? 0
      : before.align === "end"
        ? before.at
        : (before.at + at) / 2;
  const right =
    after === undefined
      ? 100
      : after.align === "start"
        ? after.at
        : (at + after.at) / 2;

  if (align === "start") return right - at;
  if (align === "end") return at - left;
  return Math.min(at - left, right - at) * 2;
}

function layoutMarkers(markers: PipeMarker[]) {
  const order = markers
    .map((_, index) => index)
    .sort((a, b) => markers[a].at - markers[b].at);

  const placed: MarkerLayout[] = order.map((index, position) => {
    const { at } = markers[index];
    const before = position > 0 ? markers[order[position - 1]].at : undefined;
    const after =
      position < order.length - 1 ? markers[order[position + 1]].at : undefined;
    return { at, align: markerAlign(at, before, after), room: 0 };
  });

  placed.forEach((entry, position) => {
    entry.room = markerRoom(
      entry.at,
      entry.align,
      placed[position - 1],
      placed[position + 1],
    );
  });

  const layout: MarkerLayout[] = [];
  order.forEach((index, position) => {
    layout[index] = placed[position];
  });

  return layout;
}

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
      <CountUp
        value={parts.value}
        motionKey={motionKey}
        precision={Number.isInteger(parts.value) ? 0 : 1}
      />
      {parts.suffix}
    </>
  );
}

export default function Pipeline({
  segments,
  markers = [],
  scale,
  thickness = "base",
  motionKey,
  className,
}: PipelineProps) {
  const { ref, shown, instant } = useReveal(motionKey, 0.25);
  const layout = layoutMarkers(markers);

  return (
    <div ref={ref} className={clsx("pipe", className)}>
      {markers.length > 0 ? (
        <div className="pipe__markers">
          {markers.map((marker, index) => {
            const { align, room } = layout[index];

            return (
              <div
                key={`${marker.at}-${marker.label}`}
                className={clsx(
                  "pipe__marker reveal",
                  `pipe__marker--${align}`,
                  shown && "is-revealed",
                  instant && "is-instant",
                )}
                style={
                  {
                    left: `${marker.at}%`,
                    "--marker-room": `${room}%`,
                    transitionDelay: instant
                      ? undefined
                      : `${300 + index * 110}ms`,
                  } as React.CSSProperties
                }
              >
                <span className="pipe__marker-text">
                  {marker.value ? (
                    <span className="pipe__marker-value">
                      <MarkerValue
                        value={marker.value}
                        motionKey={`${motionKey}-marker-${marker.label}`}
                      />
                    </span>
                  ) : null}
                  <span className="pipe__marker-label">{marker.label}</span>
                </span>
                <span
                  className={clsx(
                    "pipe__dot",
                    `dot--${marker.tone ?? "brand"}`,
                  )}
                />
                <span className="pipe__stem" />
              </div>
            );
          })}
        </div>
      ) : null}

      <div
        className={clsx(
          "pipe__track",
          `pipe__track--${thickness}`,
          shown && "is-grown",
        )}
      >
        {segments.map((segment, index) => (
          <span
            key={`${segment.tone}-${index}`}
            className={clsx("pipe__seg", `pipe__seg--${segment.tone}`)}
            style={{ width: `${segment.span}%` }}
          />
        ))}
      </div>

      {scale ? (
        <div className="pipe__scale">
          {scale.map((tick) => (
            <span key={tick} className="pipe__tick">
              {tick}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
}
