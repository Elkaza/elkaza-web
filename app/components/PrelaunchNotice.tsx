"use client";

import { usePathname } from "next/navigation";

export default function PrelaunchNotice() {
  const pathname = usePathname() || "/";
  const isEnglish = pathname === "/en" || pathname.startsWith("/en/");
  return (
    <div className="border-b border-[var(--status-border)] bg-[var(--status-bg)] text-[var(--status-text)]" role="status">
      <div className="mx-auto flex max-w-[1140px] items-start justify-center gap-2 px-4 py-2 text-sm sm:items-center sm:px-6">
        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-amber-500 sm:mt-0" aria-hidden="true" />
        <p>
          <strong className="font-semibold">{isEnglish ? "Project in preparation" : "Projekt in Vorbereitung"}</strong>
          <span className="text-[var(--status-muted)]">
            {isEnglish
              ? " · No services or orders currently accepted."
              : " · Derzeit keine Dienstleistungen oder Aufträge."}
          </span>
        </p>
      </div>
    </div>
  );
}
