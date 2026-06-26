"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getLanguageSwitchHref } from "@/lib/i18nPaths";

export default function LanguageSwitcher() {
  const pathname = usePathname() || "/";
  const isEnglish = pathname === "/en" || pathname.startsWith("/en/");
  const href = getLanguageSwitchHref(pathname);
  const className = "inline-flex items-center gap-1.5 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-sm font-medium text-[var(--text-secondary)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]";

  return (
    <Link
      href={href}
      data-language-switch
      className={className}
      aria-label={isEnglish ? "Auf Deutsch wechseln" : "Switch to English"}
    >
      <Image
        src={isEnglish ? "/flags/at.svg" : "/flags/gb.svg"}
        alt=""
        width={20}
        height={20}
        aria-hidden="true"
      />
      <span>{isEnglish ? "Deutsch" : "English"}</span>
    </Link>
  );
}
