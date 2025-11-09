"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");
  // Minimal safe toggle: from any German route (default at root) → /en, from /en/* → /
  const href = isEnglish ? "/" : "/en";

  return (
    <Link href={href} className="flex items-center space-x-1 hover:opacity-80 transition">
      <Image
        src={isEnglish ? "/flags/at.svg" : "/flags/gb.svg"}
        alt={isEnglish ? "Deutsch (Österreich)" : "English"}
        width={22}
        height={22}
      />
      <span className="text-sm">{isEnglish ? "Deutsch" : "English"}</span>
    </Link>
  );
}
