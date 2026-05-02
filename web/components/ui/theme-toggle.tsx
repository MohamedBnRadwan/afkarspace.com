"use client";

import { useEffect, useState } from "react";

export function ThemeToggle({ label }: { label: string }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const root = document.documentElement;
    const current = root.dataset.theme === "dark" ? "dark" : "light";
    setTheme(current);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", next === "dark");
    document.documentElement.dataset.theme = next;
    localStorage.setItem("afkar-theme", next);
    setTheme(next);
  };

  return (
    <button
      type="button"
      aria-label={label}
      onClick={toggleTheme}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line/70 bg-white/70 text-foreground transition hover:border-accent hover:text-accent dark:bg-accentSoft/60"
    >
      <span className="relative block h-5 w-5">
        <span
          className={`absolute inset-0 rounded-full border-2 border-current transition ${
            theme === "dark" ? "scale-75 opacity-100" : "scale-100 opacity-100"
          }`}
        />
        <span
          className={`absolute right-0 top-0 h-2 w-2 rounded-full bg-current transition ${
            theme === "dark" ? "opacity-0" : "opacity-100"
          }`}
        />
      </span>
    </button>
  );
}
