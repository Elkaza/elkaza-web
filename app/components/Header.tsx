"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "@/app/components/LanguageSwitcher";
import ThemeToggle from "@/app/components/ThemeToggle";
import { Menu, X } from "lucide-react";

export default function Header() {
  const pathname = usePathname() || "/";
  const isEnglish = pathname === "/en" || pathname.startsWith("/en/");
  const deItems = [
    { href: "/leistungen", label: "Konzepte" },
    { href: "/pakete", label: "Pakete" },
    { href: "/referenzen", label: "Szenarien" },
    { href: "/kontakt", label: "Kontakt" },
  ];
  const enItems = [
    { href: "/en/services", label: "Concepts" },
    { href: "/en/packages", label: "Packages" },
    { href: "/en/case-studies", label: "Scenarios" },
    { href: "/en/contact", label: "Contact" },
  ];

  const renderNavItems = (items: typeof deItems, className = "site-nav-link") =>
    items.map((item) => (
      <Link key={item.href} href={item.href} data-nav-href={item.href} className={className}>
        {item.label}
      </Link>
    ));

  return (
    <header className="border-b border-[var(--border)] bg-[var(--surface)]/95 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-[1140px] mx-auto px-6 py-4 flex items-center justify-between">
        <div>
          <Link href={isEnglish ? "/en" : "/"} className="flex items-center gap-3 group">
            <Image src="/logo-mark.svg" alt="Elkaza" width={36} height={36} className="rounded-lg" />
            <span className="text-lg font-semibold text-[var(--primary)] group-hover:text-[var(--primary-hover)] transition-colors">
              Elkaza
            </span>
          </Link>
        </div>

        <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-8 text-sm font-medium">
          {renderNavItems(isEnglish ? enItems : deItems)}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>
          <ThemeToggle />
          <button
            type="button"
            data-mobile-menu-toggle
            aria-controls="mobile-navigation"
            aria-expanded="false"
            className="md:hidden p-2.5 text-[var(--muted)] hover:text-[var(--text)] rounded-lg hover:bg-[var(--elevated)] transition-colors"
            aria-label="Menü öffnen"
          >
            <Menu data-mobile-menu-icon="open" className="w-6 h-6" aria-hidden="true" />
            <X data-mobile-menu-icon="close" className="hidden w-6 h-6" aria-hidden="true" />
          </button>
        </div>
      </div>

      <nav
        id="mobile-navigation"
        hidden
        aria-label="Mobile navigation"
        className="md:hidden border-t border-[var(--border)] bg-[var(--surface)] px-6 py-4 space-y-1"
      >
        {renderNavItems(isEnglish ? enItems : deItems, "mobile-nav-link")}
        <div className="pt-3 border-t border-[var(--border)]">
          <LanguageSwitcher />
        </div>
      </nav>
    </header>
  );
}
