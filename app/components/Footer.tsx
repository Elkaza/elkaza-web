"use client";

import FooterLegalLinks from "@/app/components/FooterLegalLinks";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname() || "/";
  const isEnglish = pathname === "/en" || pathname.startsWith("/en/");
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="max-w-[1140px] mx-auto px-6 py-8 text-sm text-[var(--muted)] flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <p>© 2026 Elkaza Consulting</p>
        <FooterLegalLinks />
      </div>

      {/* Contact Info Row */}
      <div className="border-t border-[var(--border)] bg-[var(--bg)]">
        <div className="max-w-[1140px] mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-xs text-[var(--muted)]">
          <div>
            {isEnglish ? "Project in preparation" : "Projekt in Vorbereitung"}
          </div>
          <div className="mt-2 md:mt-0">
            {isEnglish ? "Vienna, Austria" : "Wien, Österreich"}
          </div>
        </div>
      </div>
    </footer>
  );
}
