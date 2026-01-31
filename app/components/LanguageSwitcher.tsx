"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { mapDeToEn, mapEnToDe } from "@/lib/i18nPaths";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");
  const href = isEnglish ? mapEnToDe(pathname) : mapDeToEn(pathname);

  return (
    <Link href={href} className="flex items-center space-x-1 hover:opacity-80 transition">
      <Image
        src={isEnglish ? "/flags/at.svg" : "/flags/gb.svg"}
        alt={isEnglish ? "Deutsch (Österreich)" : "English"}
        width={22}
        height={22}
      />
      <span className="text-xs text-[var(--muted)]">{isEnglish ? "Deutsch" : "English"}</span>
    </Link>
  );
}
