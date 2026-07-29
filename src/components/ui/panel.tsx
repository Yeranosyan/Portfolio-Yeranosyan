import clsx from "clsx";

type PanelTone = "plain" | "raised" | "slab";

type PanelProps = {
  children: React.ReactNode;
  tone?: PanelTone;
  className?: string;
};

const SLAB_VARS = {
  "--ink-soft": "#d2d2d2",
  "--ink-muted": "#949494",
  "--ink-faint": "#6e6e6e",
  "--hairline": "rgba(255,255,255,0.12)",
  "--hairline-strong": "rgba(255,255,255,0.32)",
  "--pipe-rail": "rgba(255,255,255,0.08)",
  "--pipe-hatch": "rgba(255,255,255,0.30)",
} as React.CSSProperties;

export default function Panel({
  children,
  tone = "plain",
  className,
}: PanelProps) {
  return (
    <div
      style={tone === "slab" ? SLAB_VARS : undefined}
      className={clsx("panel", `panel--${tone}`, className)}
    >
      {children}
    </div>
  );
}
