"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const isGerman = pathname.startsWith("/de");
  const href = isGerman ? pathname.replace("/de", "/en") : pathname.replace("/en", "/de");

  return (
    <Link href={href} className="flex items-center space-x-1 hover:opacity-80 transition">
      <Image
        src={isGerman ? "/flags/gb.svg" : "/flags/at.svg"}
        alt={isGerman ? "English" : "Deutsch (Österreich)"}
        width={22}
        height={22}
      />
      <span className="text-sm">{isGerman ? "English" : "Deutsch"}</span>
    </Link>
  );
}
