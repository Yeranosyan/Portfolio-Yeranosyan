export const clamp = (value: number, min: number, max: number): number =>
  Math.min(max, Math.max(min, value));

export function axisPosition(
  value: number,
  start: number,
  end: number,
  inset = 6,
): number {
  if (end === start) return inset;
  const raw = ((value - start) / (end - start)) * 100;
  return clamp(raw, inset, 100 - inset);
}

export function toSpans(amounts: readonly number[]): number[] {
  const total = amounts.reduce((sum, amount) => sum + amount, 0);
  if (total <= 0) return amounts.map(() => 0);
  return amounts.map((amount) => (amount / total) * 100);
}
