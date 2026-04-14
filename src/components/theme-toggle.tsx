"use client";

import { useEffect, useState } from "react";

type ThemeMode = "system" | "dark" | "light";

function resolveDarkMode(mode: ThemeMode): boolean {
  if (mode === "dark") {
    return true;
  }
  if (mode === "light") {
    return false;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

function applyTheme(mode: ThemeMode) {
  document.documentElement.classList.toggle("dark", resolveDarkMode(mode));
}

export default function ThemeToggle() {
  const [mode, setMode] = useState<ThemeMode>(() => {
    if (typeof window === "undefined") {
      return "system";
    }

    const saved = localStorage.getItem("theme") as ThemeMode | null;
    return saved === "system" || saved === "dark" || saved === "light"
      ? saved
      : "system";
  });

  useEffect(() => {
    applyTheme(mode);
    localStorage.setItem("theme", mode);
  }, [mode]);

  useEffect(() => {
    if (mode !== "system") {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => applyTheme("system");
    mediaQuery.addEventListener("change", onChange);

    return () => mediaQuery.removeEventListener("change", onChange);
  }, [mode]);

  const toggleTheme = () => {
    const nextMode: ThemeMode =
      mode === "system" ? "dark" : mode === "dark" ? "light" : "system";

    setMode(nextMode);
  };

  const title =
    mode === "system"
      ? "Chế độ hệ thống"
      : mode === "dark"
        ? "Chế độ tối"
        : "Chế độ sáng";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Đổi giao diện"
      title={title}
      className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-emerald-50 dark:hover:bg-gray-800 transition-colors"
    >
      {mode === "dark" ? (
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364 6.364-1.414-1.414M7.05 7.05 5.636 5.636m12.728 0-1.414 1.414M7.05 16.95l-1.414 1.414M12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : mode === "light" ? (
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            d="M21 12.79A9 9 0 1 1 11.21 3c-.17.57-.26 1.18-.26 1.82a7 7 0 0 0 8.23 6.9c.6-.1 1.18-.28 1.74-.53.05.2.08.4.08.6Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            d="M3 5h18v12H3z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M8 19h8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </button>
  );
}
