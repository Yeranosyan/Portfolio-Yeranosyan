import { beforeEach, describe, expect, it, vi } from "vitest";
import {
  MOTION_ARMING_SCRIPT,
  MOTION_ATTR,
  hasPlayed,
  markPlayed,
  motionDisarmed,
} from "@/lib/utils/motion";

function installStorage(initial: Record<string, string> = {}) {
  const store = new Map(Object.entries(initial));
  vi.stubGlobal("window", {
    sessionStorage: {
      getItem: (k: string) => store.get(k) ?? null,
      setItem: (k: string, v: string) => void store.set(k, v),
      removeItem: (k: string) => void store.delete(k),
    },
  });
  return store;
}

function installDocument(motionAttr: string | null) {
  vi.stubGlobal("document", {
    documentElement: { getAttribute: () => motionAttr },
  });
}

beforeEach(() => {
  vi.unstubAllGlobals();
});

describe("play-once bookkeeping", () => {
  it("reports nothing played on a fresh session", () => {
    installStorage();
    expect(hasPlayed("hero")).toBe(false);
  });

  it("remembers a key once marked", () => {
    installStorage();
    markPlayed("hero");
    expect(hasPlayed("hero")).toBe(true);
  });

  it("keeps keys independent of one another", () => {
    installStorage();
    markPlayed("hero");
    expect(hasPlayed("impact")).toBe(false);
  });

  it("does not duplicate a key that is marked twice", () => {
    const store = installStorage();
    markPlayed("hero");
    markPlayed("hero");
    expect(JSON.parse(store.get("motion:played")!)).toEqual(["hero"]);
  });

  it("accumulates across many keys", () => {
    const store = installStorage();
    ["a", "b", "c"].forEach(markPlayed);
    expect(JSON.parse(store.get("motion:played")!)).toEqual(["a", "b", "c"]);
  });

  it("treats corrupt storage as an empty session instead of throwing", () => {
    installStorage({ "motion:played": "not json" });
    expect(() => hasPlayed("hero")).not.toThrow();
    expect(hasPlayed("hero")).toBe(false);
  });

  it("survives storage that throws, e.g. private browsing", () => {
    vi.stubGlobal("window", {
      sessionStorage: {
        getItem: () => {
          throw new Error("denied");
        },
        setItem: () => {
          throw new Error("denied");
        },
        removeItem: () => {},
      },
    });
    expect(() => markPlayed("hero")).not.toThrow();
    expect(hasPlayed("hero")).toBe(false);
  });
});

describe("motionDisarmed", () => {
  it("is disarmed when the arming attribute is absent", () => {
    installDocument(null);
    expect(motionDisarmed()).toBe(true);
  });

  it("is armed when the pre-paint script has run", () => {
    installDocument("armed");
    expect(motionDisarmed()).toBe(false);
  });

  it("is disarmed on the server, where there is no document", () => {
    vi.stubGlobal("document", undefined);
    expect(motionDisarmed()).toBe(true);
  });
});

function runArmingScript(options: {
  navType?: string;
  reduced?: boolean;
  storageThrows?: boolean;
}) {
  const {
    navType = "navigate",
    reduced = false,
    storageThrows = false,
  } = options;

  const setAttribute = vi.fn();
  const removeItem = vi.fn(() => {
    if (storageThrows) throw new Error("denied");
  });

  vi.stubGlobal("performance", {
    getEntriesByType: () => [{ type: navType }],
  });
  vi.stubGlobal("matchMedia", () => ({ matches: reduced }));
  vi.stubGlobal("sessionStorage", { removeItem });
  vi.stubGlobal("document", { documentElement: { setAttribute } });

  new Function(MOTION_ARMING_SCRIPT)();

  const armedWith = setAttribute.mock.calls.find(
    (call) => call[0] === MOTION_ATTR,
  );

  return { setAttribute, removeItem, armedValue: armedWith?.[1] };
}

describe("arming script (executed)", () => {
  it("arms reveals on an ordinary navigation", () => {
    const { armedValue } = runArmingScript({ navType: "navigate" });
    expect(armedValue).toBe("armed");
  });

  it("arms with the exact value motionDisarmed() looks for", () => {
    const { armedValue } = runArmingScript({});
    vi.stubGlobal("document", {
      documentElement: { getAttribute: () => armedValue },
    });
    expect(motionDisarmed()).toBe(false);
  });

  it("does not arm under reduced motion", () => {
    const { setAttribute } = runArmingScript({ reduced: true });
    expect(setAttribute).not.toHaveBeenCalled();
  });

  it("leaves stored keys alone on an ordinary navigation", () => {
    const { removeItem } = runArmingScript({ navType: "navigate" });
    expect(removeItem).not.toHaveBeenCalled();
  });

  it("clears stored keys on reload so animations replay", () => {
    const { removeItem } = runArmingScript({ navType: "reload" });
    expect(removeItem).toHaveBeenCalledWith("motion:played");
  });

  it("still arms on reload after clearing", () => {
    const { armedValue } = runArmingScript({ navType: "reload" });
    expect(armedValue).toBe("armed");
  });

  it("survives storage that throws, e.g. private browsing", () => {
    expect(() =>
      runArmingScript({ navType: "reload", storageThrows: true }),
    ).not.toThrow();
  });

  it("survives a browser with no navigation timing entry", () => {
    vi.stubGlobal("performance", { getEntriesByType: () => [] });
    vi.stubGlobal("matchMedia", () => ({ matches: false }));
    const setAttribute = vi.fn();
    vi.stubGlobal("sessionStorage", { removeItem: vi.fn() });
    vi.stubGlobal("document", { documentElement: { setAttribute } });

    expect(() => new Function(MOTION_ARMING_SCRIPT)()).not.toThrow();
    expect(setAttribute).toHaveBeenCalledWith(MOTION_ATTR, "armed");
  });
});
