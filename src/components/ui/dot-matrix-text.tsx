import clsx from "clsx";
import { toDotMatrixGlyphs } from "@/lib/utils/dot-matrix";

export type DotMatrixSize = "xs" | "sm" | "md" | "lg" | "xl";
export type DotMatrixTone = "muted" | "ink" | "ghost";

type DotMatrixTextProps = {
  value: string;
  size?: DotMatrixSize;
  tone?: DotMatrixTone;
  wrap?: boolean;
  className?: string;
};

export default function DotMatrixText({
  value,
  size = "xs",
  tone = "muted",
  wrap = false,
  className,
}: DotMatrixTextProps) {
  return (
    <span
      role="img"
      aria-label={value}
      className={clsx(
        "dots",
        `dots--${size}`,
        `dots--${tone}`,
        wrap && "dots--wrap",
        className,
      )}
    >
      {value.split(" ").map((word, wordIndex) => (
        <span key={wordIndex} aria-hidden className="dots__word">
          {toDotMatrixGlyphs(word).map((glyph, glyphIndex) => (
            <span key={glyphIndex} className="dots__glyph">
              {glyph.flatMap((row, rowIndex) =>
                row
                  .split("")
                  .map((bit, columnIndex) => (
                    <span
                      key={`${rowIndex}-${columnIndex}`}
                      className={clsx(
                        "dots__dot",
                        bit === "1" && "dots__dot--lit",
                      )}
                    />
                  )),
              )}
            </span>
          ))}
        </span>
      ))}
    </span>
  );
}
