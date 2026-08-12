"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FooterLegalLinks() {
  const pathname = usePathname() || "/";
  const isEnglish = pathname === "/en" || pathname.startsWith("/en/");
  return (
    <nav className="flex items-center gap-6" aria-label="Legal">
      <span className="inline-flex items-center gap-6">
        <Link href={isEnglish ? "/en/imprint" : "/impressum"} className="hover:text-[var(--link)] transition-colors">
          {isEnglish ? "Imprint" : "Impressum"}
        </Link>
        <span className="hidden md:inline">/</span>
        <Link href={isEnglish ? "/en/privacy" : "/datenschutz"} className="hover:text-[var(--link)] transition-colors">
          {isEnglish ? "Privacy" : "Datenschutz"}
        </Link>
      </span>
    </nav>
  );
}
