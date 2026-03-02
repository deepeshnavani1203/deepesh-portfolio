import { useEffect, useState } from "react";

const THEME_CHANGE_EVENT = "theme-change";

export function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "light" || savedTheme === "dark") return savedTheme;
      return "dark";
    }
    return "dark";
  });

  useEffect(() => {
    const handleThemeChange = (e: any) => {
      setTheme(e.detail);
    };

    window.addEventListener(THEME_CHANGE_EVENT, handleThemeChange);
    
    // Also listen for storage changes (for multiple tabs, though not critical here)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "theme" && (e.newValue === "light" || e.newValue === "dark")) {
        setTheme(e.newValue);
      }
    };
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener(THEME_CHANGE_EVENT, handleThemeChange);
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    
    // Dispatch custom event to notify other hook instances
    window.dispatchEvent(new CustomEvent(THEME_CHANGE_EVENT, { detail: newTheme }));
  };

  return { theme, toggleTheme };
}
