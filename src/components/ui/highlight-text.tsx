import React from "react";
import { splitByTerms } from "@/lib/utils/text";

type HighlightTextProps = {
  text: string;
  terms: readonly string[];
};

export default function HighlightText({ text, terms }: HighlightTextProps) {
  return (
    <>
      {splitByTerms(text, terms).map((chunk, index) =>
        chunk.match ? (
          <span key={index} className="text-ink-faint">
            {chunk.text}
          </span>
        ) : (
          <React.Fragment key={index}>{chunk.text}</React.Fragment>
        ),
      )}
    </>
  );
}
