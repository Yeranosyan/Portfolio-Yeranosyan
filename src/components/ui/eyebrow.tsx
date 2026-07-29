import clsx from "clsx";
import DotMatrixText from "./dot-matrix-text";

type EyebrowProps = {
  children: string;
  className?: string;
};

type SlashGroupProps = {
  opacities: readonly number[];
};

const LEADING_SLASHES = [0.35, 0.6, 1] as const;
const TRAILING_SLASHES = [1, 0.6, 0.35] as const;
const DOTS_PER_SLASH = 7;

function SlashGroup({ opacities }: SlashGroupProps) {
  return (
    <svg aria-hidden viewBox="0 0 26 16" className="eyebrow__slashes">
      {opacities.flatMap((opacity, slashIndex) =>
        Array.from({ length: DOTS_PER_SLASH }, (_, dotIndex) => (
          <circle
            key={`${slashIndex}-${dotIndex}`}
            cx={2.2 + slashIndex * 7 + dotIndex * 1.1}
            cy={14 - dotIndex * 2}
            r={0.95}
            fill="currentColor"
            opacity={opacity}
          />
        )),
      )}
    </svg>
  );
}

export default function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <p className={clsx("eyebrow", className)}>
      <SlashGroup opacities={LEADING_SLASHES} />
      <DotMatrixText value={children} />
      <SlashGroup opacities={TRAILING_SLASHES} />
    </p>
  );
}
