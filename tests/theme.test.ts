import { beforeEach, describe, expect, it, vi } from "vitest";
import {
  DARK_CLASS,
  THEME_SCRIPT,
  currentTheme,
  setTheme,
  toggleTheme,
} from "@/lib/utils/theme";

/** A <html> element stand-in whose class list can be inspected afterwards. */
function installDocument(classes: string[] = []) {
  const set = new Set(classes);
  const classList = {
    contains: (c: string) => set.has(c),
    add: (c: string) => void set.add(c),
    remove: (c: string) => void set.delete(c),
    toggle: (c: string, force?: boolean) =>
      force ? void set.add(c) : void set.delete(c),
  };
  vi.stubGlobal("document", { documentElement: { classList } });
  return set;
}

function installStorage(initial: Record<string, string> = {}) {
  const store = new Map(Object.entries(initial));
  vi.stubGlobal("window", {
    localStorage: {
      getItem: (k: string) => store.get(k) ?? null,
      setItem: (k: string, v: string) => void store.set(k, v),
    },
  });
  return store;
}

beforeEach(() => {
  vi.unstubAllGlobals();
});

describe("currentTheme", () => {
  it("reads light when the dark class is absent", () => {
    installDocument();
    expect(currentTheme()).toBe("light");
  });

  it("reads dark from the class the pre-paint script wrote", () => {
    installDocument([DARK_CLASS]);
    expect(currentTheme()).toBe("dark");
  });

  it("is light on the server, where there is no document", () => {
    vi.stubGlobal("document", undefined);
    expect(currentTheme()).toBe("light");
  });
});

describe("setTheme", () => {
  it("paints dark and remembers the choice", () => {
    const classes = installDocument();
    const store = installStorage();

    setTheme("dark");

    expect(classes.has(DARK_CLASS)).toBe(true);
    expect(store.get("theme")).toBe("dark");
  });

  it("paints light and remembers the choice", () => {
    const classes = installDocument([DARK_CLASS]);
    const store = installStorage();

    setTheme("light");

    expect(classes.has(DARK_CLASS)).toBe(false);
    expect(store.get("theme")).toBe("light");
  });

  it("stores what the pre-paint script reads back", () => {
    installDocument();
    const store = installStorage();

    setTheme("dark");

    expect(runThemeScript({ stored: store.get("theme") ?? null })).toBe("dark");
  });

  it("still paints when storage throws, e.g. private browsing", () => {
    const classes = installDocument();
    vi.stubGlobal("window", {
      localStorage: {
        setItem: () => {
          throw new Error("denied");
        },
      },
    });

    expect(() => setTheme("dark")).not.toThrow();
    expect(classes.has(DARK_CLASS)).toBe(true);
  });

  it("does nothing on the server, where there is no document", () => {
    vi.stubGlobal("document", undefined);
    expect(() => setTheme("dark")).not.toThrow();
  });
});

describe("toggleTheme", () => {
  it("flips light to dark", () => {
    const classes = installDocument();
    installStorage();

    toggleTheme();

    expect(classes.has(DARK_CLASS)).toBe(true);
  });

  it("flips dark back to light", () => {
    const classes = installDocument([DARK_CLASS]);
    installStorage();

    toggleTheme();

    expect(classes.has(DARK_CLASS)).toBe(false);
  });

  it("returns to where it started after two flips", () => {
    const classes = installDocument([DARK_CLASS]);
    const store = installStorage();

    toggleTheme();
    toggleTheme();

    expect(classes.has(DARK_CLASS)).toBe(true);
    expect(store.get("theme")).toBe("dark");
  });
});

function runThemeScript(options: {
  stored?: string | null;
  prefersDark?: boolean;
  storageThrows?: boolean;
}) {
  const { stored = null, prefersDark = false, storageThrows = false } = options;

  const classes = installDocument();
  vi.stubGlobal("localStorage", {
    getItem: () => {
      if (storageThrows) throw new Error("denied");
      return stored;
    },
  });
  vi.stubGlobal("matchMedia", () => ({ matches: prefersDark }));

  new Function(THEME_SCRIPT)();

  return classes.has(DARK_CLASS) ? "dark" : "light";
}

describe("pre-paint script (executed)", () => {
  it("honours a stored dark choice over a light system preference", () => {
    expect(runThemeScript({ stored: "dark", prefersDark: false })).toBe("dark");
  });

  it("honours a stored light choice over a dark system preference", () => {
    expect(runThemeScript({ stored: "light", prefersDark: true })).toBe(
      "light",
    );
  });

  it("follows a dark system preference when nothing is stored", () => {
    expect(runThemeScript({ stored: null, prefersDark: true })).toBe("dark");
  });

  it("stays light when nothing is stored and the system is light", () => {
    expect(runThemeScript({ stored: null, prefersDark: false })).toBe("light");
  });

  it("falls back to light on a corrupt stored value", () => {
    expect(runThemeScript({ stored: "purple", prefersDark: true })).toBe(
      "light",
    );
  });

  it("survives storage that throws, e.g. private browsing", () => {
    expect(() => runThemeScript({ storageThrows: true })).not.toThrow();
    expect(runThemeScript({ storageThrows: true })).toBe("light");
  });
});
