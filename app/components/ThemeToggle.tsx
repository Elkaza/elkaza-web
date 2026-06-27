import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  return (
    <button
      type="button"
      data-theme-toggle
      className="flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] text-[var(--muted)] hover:text-[var(--text)] hover:border-[var(--border-hover)] hover:bg-[var(--elevated)] active:scale-95 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
      aria-label="Zum dunklen Design wechseln"
      title="Dunkles Design"
    >
      <Moon data-theme-icon="moon" className="w-5 h-5" aria-hidden="true" />
      <Sun data-theme-icon="sun" className="hidden w-5 h-5" aria-hidden="true" />
    </button>
  );
}
