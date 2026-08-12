"use client";

import FooterLegalLinks from "@/app/components/FooterLegalLinks";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname() || "/";
  const isEnglish = pathname === "/en" || pathname.startsWith("/en/");
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="max-w-[1140px] mx-auto px-6 py-8 text-sm text-[var(--muted)] flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <p>© 2026 Elkaza</p>
        <FooterLegalLinks />
      </div>

      <div className="border-t border-[var(--border)] bg-[var(--bg)]">
        <div className="mx-auto flex max-w-[1140px] flex-col gap-2 px-6 py-4 text-xs text-[var(--muted)] md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-500" aria-hidden="true" />
            {isEnglish ? "Project in preparation" : "Projekt in Vorbereitung"}
          </div>
          <div>
            {isEnglish ? "Vienna, Austria" : "Wien, Österreich"}
          </div>
        </div>
      </div>
    </footer>
  );
}
