"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "@/app/components/LanguageSwitcher";
import ThemeToggle from "@/app/components/ThemeToggle";
import { Menu, X } from "lucide-react";

export default function Header() {
  const pathname = usePathname() || "/";
  const isEnglish = pathname.startsWith("/en");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const homeHref = isEnglish ? "/en" : "/";
  const items = isEnglish
    ? [
      { href: "/en/services", label: "Services" },
      { href: "/en/packages", label: "Packages" },
      { href: "/en/case-studies", label: "Case Studies" },
      { href: "/en/contact", label: "Contact" },
    ]
    : [
      { href: "/leistungen", label: "Leistungen" },
      { href: "/pakete", label: "Pakete" },
      { href: "/referenzen", label: "Referenzen" },
      { href: "/kontakt", label: "Kontakt" },
    ];

  return (
    <header className="border-b border-[var(--border)] bg-[var(--surface)]/95 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-[1140px] mx-auto px-6 py-4 flex items-center justify-between">
        <Link href={homeHref} className="flex items-center gap-3 group">
          <Image
            src="/logo-mark.svg"
            alt="Elkaza"
            width={36}
            height={36}
            className="rounded-lg"
          />
          <span className="text-lg font-semibold text-[var(--text)]">
            <span className="text-[var(--primary)] group-hover:text-[var(--primary-hover)] transition-colors">Elkaza</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-8 text-sm font-medium">
          {items.map((it) => {
            const isActive = pathname === it.href || pathname.startsWith(it.href + "/");
            return (
              <Link
                key={it.href}
                href={it.href}
                className={`transition-colors duration-200 py-1 ${isActive
                    ? "text-[var(--primary)] border-b-2 border-[var(--primary)]"
                    : "text-[var(--muted)] hover:text-[var(--text)]"
                  }`}
                aria-current={isActive ? "page" : undefined}
              >
                {it.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>
          <ThemeToggle />
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-[var(--muted)] hover:text-[var(--text)] rounded-lg hover:bg-[var(--elevated)] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileMenuOpen && (
        <nav aria-label="Mobile navigation" className="md:hidden border-t border-[var(--border)] bg-[var(--surface)] px-6 py-4 space-y-1">
          {items.map((it) => (
            <Link
              key={it.href}
              href={it.href}
              className="block py-3 text-[var(--text)] hover:text-[var(--primary)] font-medium transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {it.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-[var(--border)]">
            <LanguageSwitcher />
          </div>
        </nav>
      )}
    </header>
  );
}
