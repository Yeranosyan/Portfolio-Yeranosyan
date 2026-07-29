const STORE_KEY = "motion:played";

export const MOTION_ATTR = "data-motion";

function readPlayed(): Set<string> {
  if (typeof window === "undefined") return new Set();
  try {
    const raw = window.sessionStorage.getItem(STORE_KEY);
    return new Set<string>(raw ? JSON.parse(raw) : []);
  } catch {
    return new Set();
  }
}

export function hasPlayed(key: string): boolean {
  return readPlayed().has(key);
}

export function markPlayed(key: string): void {
  if (typeof window === "undefined") return;
  try {
    const played = readPlayed();
    played.add(key);
    window.sessionStorage.setItem(STORE_KEY, JSON.stringify([...played]));
  } catch {
    void 0;
  }
}

export function motionDisarmed(): boolean {
  if (typeof document === "undefined") return true;
  return document.documentElement.getAttribute(MOTION_ATTR) !== "armed";
}

export const MOTION_ARMING_SCRIPT = `(function(){try{
var nav=performance.getEntriesByType("navigation")[0];
if(nav&&nav.type==="reload"){sessionStorage.removeItem("${STORE_KEY}");}
var reduced=matchMedia("(prefers-reduced-motion: reduce)").matches;
if(!reduced){document.documentElement.setAttribute("${MOTION_ATTR}","armed");}
}catch(e){}})();`;
