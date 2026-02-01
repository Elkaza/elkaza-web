"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Footer() {
  const pathname = usePathname() || "";

  const isEn = pathname.startsWith("/en");

  const items = isEn
    ? [
        { href: "/en/imprint", label: "Imprint" },
        { href: "/en/privacy", label: "Privacy" },
      ]
    : [
        { href: "/impressum", label: "Impressum" },
        { href: "/datenschutz", label: "Datenschutz" },
      ];

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="max-w-[1140px] mx-auto px-6 py-8 text-sm text-[var(--muted)] flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <p>© 2026 Elkaza Consulting</p>

        <nav className="flex items-center gap-6" aria-label="Legal">
          {items.map((it, i) => (
            <React.Fragment key={it.href}>
              <Link href={it.href} className="hover:text-[var(--link)] transition-colors">
                {it.label}
              </Link>
              {i < items.length - 1 ? <span className="hidden md:inline">·</span> : null}
            </React.Fragment>
          ))}
        </nav>
      </div>
    </footer>
  );
}
