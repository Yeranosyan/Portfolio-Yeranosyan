import { describe, expect, it } from "vitest";
import { escapeRegExp, splitByTerms } from "@/lib/utils/text";

const METACHARACTERS = [
  ".",
  "*",
  "+",
  "?",
  "^",
  "$",
  "{",
  "}",
  "(",
  ")",
  "|",
  "[",
  "]",
  "\\",
];

describe("escapeRegExp", () => {
  it.each(METACHARACTERS)("neutralizes %j so it matches literally", (char) => {
    const term = `a${char}b`;
    const pattern = new RegExp(`^${escapeRegExp(term)}$`);

    expect(pattern.test(term)).toBe(true);
    expect(pattern.test("ab")).toBe(false);
  });

  it("never throws when building a pattern from any metacharacter", () => {
    for (const char of METACHARACTERS) {
      expect(() => new RegExp(escapeRegExp(char))).not.toThrow();
    }
  });
});

describe("splitByTerms with regex-significant terms", () => {
  it.each([
    ["a|b", "an a|b term"],
    ["[x]", "an [x] term"],
    ["cost^2", "the cost^2 figure"],
    ["{n}", "a {n} placeholder"],
    ["C++ (fast)", "uses C++ (fast) here"],
    ["100%", "hit 100% today"],
  ])("matches %j literally inside its sentence", (term, sentence) => {
    const chunks = splitByTerms(sentence, [term]);
    const matched = chunks.filter((chunk) => chunk.match);

    expect(matched).toHaveLength(1);
    expect(matched[0].text).toBe(term);
    expect(chunks.map((chunk) => chunk.text).join("")).toBe(sentence);
  });

  it("does not treat a pipe in a term as alternation", () => {
    const chunks = splitByTerms("cats and dogs", ["cats|dogs"]);
    expect(chunks.some((chunk) => chunk.match)).toBe(false);
  });

  it("does not treat brackets in a term as a character class", () => {
    const chunks = splitByTerms("just x here", ["[x]"]);
    expect(chunks.some((chunk) => chunk.match)).toBe(false);
  });
});
