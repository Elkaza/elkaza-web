"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

export default function ThemeToggle() {
    const [theme, setTheme] = useState<Theme>(() => {
        try {
            if (typeof window === "undefined") return "light";
            const stored = localStorage.getItem("theme");
            if (stored === "light" || stored === "dark") return stored;
        } catch {
        }
        return "light";
    });

    useEffect(() => {
        try {
            document.documentElement.setAttribute("data-theme", theme);
            localStorage.setItem("theme", theme);
        } catch {
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] hover:text-[var(--text)] hover:border-[var(--border-hover)] hover:bg-[var(--elevated)] active:scale-95 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
            aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
            title={theme === "light" ? "Dark mode" : "Light mode"}
        >
            {theme === "light" ? (
                <Moon className="w-4 h-4" />
            ) : (
                <Sun className="w-4 h-4" />
            )}
        </button>
    );
}
