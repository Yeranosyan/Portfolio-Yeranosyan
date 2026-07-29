import { describe, expect, it } from "vitest";
import {
  DOT_MATRIX_COLUMNS,
  DOT_MATRIX_ROWS,
  hasDotMatrixGlyph,
  toDotMatrixGlyphs,
} from "@/lib/utils/dot-matrix";

const EYEBROW_LABELS = [
  "Who I am",
  "What I solve for business",
  "How I work",
  "Measured outcomes",
  "Selected work",
  "Go deeper",
  "Contact",
  "Work experience",
  "Tenure",
  "Roles",
  "Education & credentials",
  "Timeline",
  "Credentials",
  "Skills",
  "Distribution",
  "By layer",
];

describe("toDotMatrixGlyphs", () => {
  it("returns one glyph per character", () => {
    expect(toDotMatrixGlyphs("Who I am")).toHaveLength(8);
  });

  it("shapes every glyph as a 5x7 bitmap", () => {
    for (const glyph of toDotMatrixGlyphs(EYEBROW_LABELS.join(" "))) {
      expect(glyph).toHaveLength(DOT_MATRIX_ROWS);
      for (const row of glyph) {
        expect(row).toHaveLength(DOT_MATRIX_COLUMNS);
        expect(row).toMatch(/^[01]+$/);
      }
    }
  });

  it("keeps letter case distinct", () => {
    const [upper] = toDotMatrixGlyphs("W");
    const [lower] = toDotMatrixGlyphs("w");
    expect(upper).not.toEqual(lower);
  });

  it("falls back to a blank cell for unsupported characters", () => {
    const [glyph] = toDotMatrixGlyphs("€");
    expect(glyph.join("")).toMatch(/^0+$/);
  });

  it("maps en and em dashes onto the hyphen glyph", () => {
    expect(toDotMatrixGlyphs("–")).toEqual(toDotMatrixGlyphs("-"));
    expect(toDotMatrixGlyphs("—")).toEqual(toDotMatrixGlyphs("-"));
  });
});

describe("hasDotMatrixGlyph", () => {
  it("covers every character used in eyebrow copy", () => {
    const characters = [...new Set(EYEBROW_LABELS.join("").split(""))];
    const missing = characters.filter(
      (character) => !hasDotMatrixGlyph(character),
    );
    expect(missing).toEqual([]);
  });

  it("reports unsupported characters", () => {
    expect(hasDotMatrixGlyph("€")).toBe(false);
  });
});
