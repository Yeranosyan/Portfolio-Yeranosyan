import { describe, expect, it } from "vitest";
import { escapeRegExp, splitByTerms, splitNumeric } from "@/lib/utils/text";

describe("splitByTerms", () => {
  it("returns the whole string when there are no terms", () => {
    expect(splitByTerms("Plain sentence.", [])).toEqual([
      { text: "Plain sentence.", match: false },
    ]);
  });

  it("marks a matched term and keeps the surrounding text", () => {
    expect(
      splitByTerms("Patients manage appointments daily", [
        "manage appointments",
      ]),
    ).toEqual([
      { text: "Patients ", match: false },
      { text: "manage appointments", match: true },
      { text: " daily", match: false },
    ]);
  });

  it("matches case-insensitively but preserves the original casing", () => {
    const [chunk] = splitByTerms("Technical Writing Program", [
      "technical writing",
    ]);
    expect(chunk).toEqual({ text: "Technical Writing", match: true });
  });

  it("marks every occurrence, not just the first", () => {
    const matches = splitByTerms("SMS then more SMS", ["SMS"]).filter(
      (c) => c.match,
    );
    expect(matches).toHaveLength(2);
  });

  it("reassembles into exactly the input text", () => {
    const source = "Prisma and MongoDB persist the data.";
    const rebuilt = splitByTerms(source, ["Prisma and MongoDB", "data"])
      .map((chunk) => chunk.text)
      .join("");
    expect(rebuilt).toBe(source);
  });

  it("treats regex metacharacters in a term literally", () => {
    expect(splitByTerms("Uses C++ (a lot)", ["C++ (a lot)"])).toEqual([
      { text: "Uses ", match: false },
      { text: "C++ (a lot)", match: true },
    ]);
  });

  it("ignores blank terms rather than matching everything", () => {
    expect(splitByTerms("Hello", ["", "   "])).toEqual([
      { text: "Hello", match: false },
    ]);
  });

  describe("overlapping terms", () => {
    it("prefers the longer term even when the shorter is listed first", () => {
      expect(splitByTerms("database design", ["data", "database"])).toEqual([
        { text: "database", match: true },
        { text: " design", match: false },
      ]);
    });

    it("gives the same result whichever order the terms are supplied", () => {
      const a = splitByTerms("database design", ["data", "database"]);
      const b = splitByTerms("database design", ["database", "data"]);
      expect(a).toEqual(b);
    });

    it("never splits a matched term into a match plus a stray remainder", () => {
      const chunks = splitByTerms("the database design", ["data", "database"]);
      expect(chunks.some((c) => c.text === "base design")).toBe(false);
      expect(chunks.filter((c) => c.match).map((c) => c.text)).toEqual([
        "database",
      ]);
    });

    it("still matches the shorter term where the longer one is absent", () => {
      const chunks = splitByTerms("raw data here", ["data", "database"]);
      expect(chunks.filter((c) => c.match).map((c) => c.text)).toEqual([
        "data",
      ]);
    });
  });
});

describe("escapeRegExp", () => {
  it("escapes characters that would otherwise change the pattern", () => {
    expect(escapeRegExp("a.b*c")).toBe("a\\.b\\*c");
  });
});

describe("splitNumeric", () => {
  it("passes a plain number straight through", () => {
    expect(splitNumeric(42)).toEqual({ prefix: "", value: 42, suffix: "" });
  });

  it("splits a trailing suffix", () => {
    expect(splitNumeric("6+")).toEqual({ prefix: "", value: 6, suffix: "+" });
  });

  it("splits a leading prefix and a trailing suffix", () => {
    expect(splitNumeric("$380B")).toEqual({
      prefix: "$",
      value: 380,
      suffix: "B",
    });
  });

  it("keeps decimals", () => {
    expect(splitNumeric("5.5L")).toEqual({
      prefix: "",
      value: 5.5,
      suffix: "L",
    });
  });

  it("returns null when there is nothing to count", () => {
    expect(splitNumeric("Present")).toBeNull();
  });
});
