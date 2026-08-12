"use client";

import { usePathname } from "next/navigation";

export default function SkipLink() {
  const pathname = usePathname() || "/";
  const isEnglish = pathname === "/en" || pathname.startsWith("/en/");
  return <a href="#content" className="skip-link">{isEnglish ? "Skip to content" : "Zum Inhalt springen"}</a>;
}
