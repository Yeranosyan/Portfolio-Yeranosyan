"use client";

import { BsMoon, BsSun } from "react-icons/bs";
import { toggleTheme } from "@/lib/utils/theme";

export default function ThemeToggle() {
  return (
    <button type="button" onClick={toggleTheme} className="theme-toggle">
      <BsMoon size={14} aria-hidden className="dark:hidden" />
      <BsSun size={14} aria-hidden className="hidden dark:block" />
      <span className="sr-only dark:hidden">Switch to dark theme</span>
      <span className="sr-only hidden dark:inline">Switch to light theme</span>
    </button>
  );
}
