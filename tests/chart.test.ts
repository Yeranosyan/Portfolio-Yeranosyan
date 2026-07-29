import { describe, expect, it } from "vitest";
import { axisPosition, clamp, toSpans } from "@/lib/utils/chart";

describe("clamp", () => {
  it("passes through a value already inside the range", () => {
    expect(clamp(5, 0, 10)).toBe(5);
  });

  it("pins values outside the range to the nearest bound", () => {
    expect(clamp(-3, 0, 10)).toBe(0);
    expect(clamp(99, 0, 10)).toBe(10);
  });
});

describe("axisPosition", () => {
  it("puts a midpoint year at the centre of the track", () => {
    expect(axisPosition(2021, 2016, 2026)).toBe(50);
  });

  it("insets both ends so stem markers stay inside the chart", () => {
    expect(axisPosition(2016, 2016, 2026)).toBe(6);
    expect(axisPosition(2026, 2016, 2026)).toBe(94);
  });

  it("clamps values beyond the axis instead of overflowing", () => {
    expect(axisPosition(1990, 2016, 2026)).toBe(6);
    expect(axisPosition(2050, 2016, 2026)).toBe(94);
  });

  it("honours a custom inset", () => {
    expect(axisPosition(2016, 2016, 2026, 0)).toBe(0);
    expect(axisPosition(2026, 2016, 2026, 0)).toBe(100);
  });

  it("does not divide by zero on a degenerate axis", () => {
    expect(axisPosition(2020, 2020, 2020)).toBe(6);
  });
});

describe("toSpans", () => {
  it("converts amounts into percentages that fill the track", () => {
    const spans = toSpans([1, 1, 2]);
    expect(spans).toEqual([25, 25, 50]);
    expect(spans.reduce((a, b) => a + b, 0)).toBeCloseTo(100);
  });

  it("always totals 100 for arbitrary input", () => {
    const spans = toSpans([33, 13, 13, 11, 8]);
    expect(spans.reduce((a, b) => a + b, 0)).toBeCloseTo(100);
  });

  it("returns zeroes rather than NaN when everything is zero", () => {
    expect(toSpans([0, 0])).toEqual([0, 0]);
  });

  it("returns an empty result for empty input", () => {
    expect(toSpans([])).toEqual([]);
  });
});
