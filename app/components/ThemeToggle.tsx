import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  return (
    <button
      type="button"
      data-theme-toggle
      className="p-2 rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] hover:text-[var(--text)] hover:border-[var(--border-hover)] hover:bg-[var(--elevated)] active:scale-95 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
      aria-label="Switch to dark mode"
      title="Dark mode"
    >
      <Moon data-theme-icon="moon" className="w-4 h-4" />
      <Sun data-theme-icon="sun" className="hidden w-4 h-4" />
    </button>
  );
}
