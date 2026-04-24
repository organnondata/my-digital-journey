import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  const stored = window.localStorage.getItem("theme") as Theme | null;
  if (stored === "light" || stored === "dark") return stored;
  return "dark";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const initial = getInitialTheme();
    setTheme(initial);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    window.localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Alternar tema"
      aria-pressed={isDark}
      className="group inline-flex items-center gap-2 h-9 pl-2 pr-3 rounded-full border border-border bg-surface-elevated/60 text-foreground hover:border-accent-vivid/60 transition-colors overflow-hidden"
    >
      <span className="relative inline-flex items-center justify-center size-6">
        <Sun
          className={`absolute size-4 transition-all duration-500 ${
            isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"
          }`}
        />
        <Moon
          className={`absolute size-4 transition-all duration-500 ${
            isDark ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"
          }`}
        />
      </span>
      <span className="text-xs font-medium tracking-tight whitespace-nowrap">
        <span className="text-muted-foreground">Tema de fundo:</span>{" "}
        <span className="relative inline-block align-baseline w-[3.2rem] h-4 overflow-hidden">
          <span
            className={`absolute inset-0 transition-all duration-500 ${
              isDark ? "opacity-0 -translate-y-3" : "opacity-100 translate-y-0"
            } text-accent-vivid`}
          >
            Claro
          </span>
          <span
            className={`absolute inset-0 transition-all duration-500 ${
              isDark ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            } text-accent-vivid`}
          >
            Escuro
          </span>
        </span>
      </span>
    </button>
  );
}
