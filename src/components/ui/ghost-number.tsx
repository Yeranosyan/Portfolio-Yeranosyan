import clsx from "clsx";

type GhostNumberProps = {
  children: React.ReactNode;
  variant?: "outline" | "solid";
  className?: string;
};

export default function GhostNumber({
  children,
  variant = "outline",
  className,
}: GhostNumberProps) {
  return (
    <span
      aria-hidden
      className={clsx("ghost-num", `ghost-num--${variant}`, className)}
    >
      {children}
    </span>
  );
}
