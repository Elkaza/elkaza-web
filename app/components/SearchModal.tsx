"use client";

import { useState, useEffect } from "react";

export default function SearchModal() {
  const [open, setOpen] = useState(false);

  // Close with ESC key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Search"
        className="p-2 rounded-full hover:bg-gray-100 transition"
      >
        🔍
      </button>

      {/* Overlay Modal */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[999]"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-lg text-center"
          >
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Website durchsuchen
            </h2>
            <input
              type="text"
              placeholder="Suche nach Themen, Projekten oder Inhalten..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
              autoFocus
            />
            <p className="text-xs text-gray-400 mt-4">
              Drücke <kbd className="border px-1">ESC</kbd>, um zu schließen.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
