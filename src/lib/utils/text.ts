export function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export type TextChunk = {
  text: string;
  match: boolean;
};

export function splitByTerms(
  text: string,
  terms: readonly string[],
): TextChunk[] {
  const usable = terms
    .filter((term) => term.trim().length > 0)
    .slice()
    .sort((a, b) => b.length - a.length);

  if (usable.length === 0) return [{ text, match: false }];

  const pattern = new RegExp(`(${usable.map(escapeRegExp).join("|")})`, "gi");
  const lowered = new Set(usable.map((term) => term.toLowerCase()));

  return text
    .split(pattern)
    .filter((chunk) => chunk.length > 0)
    .map((chunk) => ({ text: chunk, match: lowered.has(chunk.toLowerCase()) }));
}

export type NumericParts = {
  prefix: string;
  value: number;
  suffix: string;
};

export function splitNumeric(value: string | number): NumericParts | null {
  if (typeof value === "number") {
    return { prefix: "", value, suffix: "" };
  }

  const match = /^(\D*)(\d+(?:\.\d+)?)(.*)$/.exec(value);
  if (!match) return null;

  return { prefix: match[1], value: Number(match[2]), suffix: match[3] };
}
