import clsx from "clsx";
import CountUp from "@/components/motion/count-up";
import { splitNumeric } from "@/lib/utils/text";

type StatSize = "sm" | "md" | "lg" | "xl";

type StatProps = {
  value: string | number;
  unit?: string;
  label: string;
  hint?: string;
  size?: StatSize;
  motionKey?: string;
  className?: string;
};

export default function Stat({
  value,
  unit,
  label,
  hint,
  size = "md",
  motionKey,
  className,
}: StatProps) {
  const parts = splitNumeric(value);
  const precision = parts && !Number.isInteger(parts.value) ? 1 : 0;

  return (
    <div className={clsx("min-w-0", className)}>
      <p className={clsx("stat__value", `stat__value--${size}`)}>
        {parts ? (
          <>
            {parts.prefix}
            <CountUp
              value={parts.value}
              motionKey={motionKey ?? `stat-${label}-${value}`}
              precision={precision}
            />
            {parts.suffix}
          </>
        ) : (
          value
        )}
        {unit ? <span className="stat__unit">{unit}</span> : null}
      </p>
      <p className="stat__label">{label}</p>
      {hint ? <p className="stat__hint">{hint}</p> : null}
    </div>
  );
}
