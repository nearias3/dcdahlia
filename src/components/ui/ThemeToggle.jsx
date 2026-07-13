import { useEffect, useState } from "react";

const THEME_STORAGE_KEY = "dc-dahlia-theme";
const TRANSITION_DURATION = 650;
const THEME_SWITCH_DELAY = 260;

function getInitialTheme() {
  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);

  if (savedTheme === "dark" || savedTheme === "light") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  function toggleTheme() {
    if (isTransitioning) return;

    const nextTheme = theme === "dark" ? "light" : "dark";

    setIsTransitioning(true);

    document.documentElement.classList.add(
      "theme-is-transitioning",
      nextTheme === "dark"
        ? "theme-transition-to-noir"
        : "theme-transition-to-classic",
    );

    window.setTimeout(() => {
      setTheme(nextTheme);
    }, THEME_SWITCH_DELAY);

    window.setTimeout(() => {
      document.documentElement.classList.remove(
        "theme-is-transitioning",
        "theme-transition-to-noir",
        "theme-transition-to-classic",
      );

      setIsTransitioning(false);
    }, TRANSITION_DURATION);
  }

  const isDark = theme === "dark";

  return (
    <button
      className="theme-toggle"
      type="button"
      aria-label={`Switch to ${isDark ? "Classic" : "Noir"} mode`}
      aria-pressed={isDark}
      disabled={isTransitioning}
      onClick={toggleTheme}
    >
      <span className="theme-toggle__icon" aria-hidden="true">
        {isDark ? "☀️" : "🔦"}
      </span>

      <span className="theme-toggle__text">{isDark ? "Classic" : "Noir"}</span>
    </button>
  );
}
