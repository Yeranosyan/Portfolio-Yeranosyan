import { describe, expect, it } from "vitest";
import { getErrorMessage, validateString } from "@/lib/utils/errors";

describe("validateString", () => {
  it("accepts an ordinary string", () => {
    expect(validateString("hello", 500)).toBe(true);
  });

  it("accepts a string exactly at the limit", () => {
    expect(validateString("a".repeat(500), 500)).toBe(true);
  });

  it("rejects a string one character over the limit", () => {
    expect(validateString("a".repeat(501), 500)).toBe(false);
  });

  it("rejects an empty string, so blank submissions cannot through", () => {
    expect(validateString("", 500)).toBe(false);
  });

  it.each([
    ["undefined", undefined],
    ["null", null],
    ["a number", 42],
    ["an object", { length: 3 }],
    ["an array", ["a"]],
    ["a boolean", true],
  ])("rejects %s", (_label, value) => {
    expect(validateString(value, 500)).toBe(false);
  });

  it("rejects a File, which is what an empty file input actually sends", () => {
    expect(validateString({ name: "x", size: 0 }, 500)).toBe(false);
  });
});

describe("getErrorMessage", () => {
  it("uses the message of a real Error", () => {
    expect(getErrorMessage(new Error("boom"))).toBe("boom");
  });

  it("reads .message off a plain object, which is Resend's error shape", () => {
    expect(getErrorMessage({ message: "rate limited" })).toBe("rate limited");
  });

  it("stringifies a non-string .message rather than returning an object", () => {
    const result = getErrorMessage({ message: 500 });
    expect(typeof result).toBe("string");
    expect(result).toBe("500");
  });

  it("passes a bare string through", () => {
    expect(getErrorMessage("plain failure")).toBe("plain failure");
  });

  it.each([
    ["null", null],
    ["undefined", undefined],
    ["a number", 42],
    ["an empty object", {}],
  ])("falls back to a generic message for %s", (_label, value) => {
    expect(getErrorMessage(value)).toBe("Something went wrong");
  });

  it("always returns a non-empty string, whatever it is handed", () => {
    const inputs = [new Error("x"), "y", { message: "z" }, null, 0, [], {}];
    for (const input of inputs) {
      const result = getErrorMessage(input);
      expect(typeof result).toBe("string");
      expect(result.length).toBeGreaterThan(0);
    }
  });
});
