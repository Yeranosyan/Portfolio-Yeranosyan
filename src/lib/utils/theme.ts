export type Theme = "light" | "dark";

const STORE_KEY = "theme";

export const DARK_CLASS = "dark";

export function currentTheme(): Theme {
  if (typeof document === "undefined") return "light";
  return document.documentElement.classList.contains(DARK_CLASS)
    ? "dark"
    : "light";
}

export function setTheme(theme: Theme): void {
  if (typeof document === "undefined") return;
  document.documentElement.classList.toggle(DARK_CLASS, theme === "dark");
  try {
    window.localStorage.setItem(STORE_KEY, theme);
  } catch {
    void 0;
  }
}

export function toggleTheme(): void {
  setTheme(currentTheme() === "dark" ? "light" : "dark");
}

export const THEME_SCRIPT = `(function(){try{
var stored=localStorage.getItem("${STORE_KEY}");
var dark=stored?stored==="dark":matchMedia("(prefers-color-scheme: dark)").matches;
if(dark){document.documentElement.classList.add("${DARK_CLASS}");}
}catch(e){}})();`;
