import clsx from "clsx";
import type { DotTone } from "./pipeline";

type StepPagerProps = {
  total: number;
  current: number;
  tone?: DotTone;
  className?: string;
};

export default function StepPager({
  total,
  current,
  tone = "brand",
  className,
}: StepPagerProps) {
  return (
    <ol className={clsx("pager", className)} aria-label="Project position">
      {Array.from({ length: total }, (_, index) => {
        const step = index + 1;
        const active = step === current;
        return (
          <li
            key={step}
            aria-current={active ? "step" : undefined}
            className={clsx("pager__step", active && `pager__step--${tone}`)}
          >
            {String(step).padStart(2, "0")}
          </li>
        );
      })}
    </ol>
  );
}
