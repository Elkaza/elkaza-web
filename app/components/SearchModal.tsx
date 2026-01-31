"use client";

import { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";

export default function SearchModal() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  // Close with ESC key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // Return focus to trigger when closing
  useEffect(() => {
    if (!open && triggerRef.current) triggerRef.current.focus();
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        onClick={() => setOpen(true)}
        aria-label="Suche öffnen"
        className="p-2 rounded-lg hover:bg-[var(--elevated)] text-[var(--muted)] hover:text-[var(--text)] transition-colors"
      >
        <Search size={18} aria-hidden="true" />
      </button>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[999]"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="search-title"
            onClick={(e) => e.stopPropagation()}
            className="bg-[var(--surface)] border border-[var(--border)] p-8 rounded-2xl shadow-lg w-full max-w-lg text-center"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 id="search-title" className="text-xl font-semibold text-[var(--text)]">
                Website durchsuchen
              </h2>
              <button
                onClick={() => setOpen(false)}
                className="p-1 rounded-lg text-[var(--muted)] hover:text-[var(--text)] hover:bg-[var(--elevated)] transition-colors"
                aria-label="Schließen"
              >
                <X size={20} />
              </button>
            </div>
            <input
              type="text"
              placeholder="Suche nach Themen, Projekten oder Inhalten..."
              className="w-full border border-[var(--border)] rounded-lg px-4 py-3 bg-[var(--elevated)] text-[var(--text)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20 transition-all"
              autoFocus
            />
            <p className="text-xs text-[var(--muted)] mt-4">
              Drücke <kbd className="border border-[var(--border)] bg-[var(--elevated)] px-1.5 py-0.5 rounded text-xs">ESC</kbd>, um zu schließen.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
