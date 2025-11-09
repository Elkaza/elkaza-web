"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "@/app/components/LanguageSwitcher";

export default function Header() {
  const pathname = usePathname() || "/";
  const isEnglish = pathname.startsWith("/en");

  const homeHref = isEnglish ? "/en" : "/";
  const items = isEnglish
    ? [
        { href: "/en/services", label: "Services" },
        { href: "/en/case-studies", label: "Case Studies" },
        { href: "/en/insights", label: "Insights" },
        { href: "/en/about", label: "About" },
        { href: "/en/contact", label: "Contact" },
      ]
    : [
        { href: "/leistungen", label: "Leistungen" },
        { href: "/case-studies", label: "Case Studies" },
        { href: "/insights", label: "Insights" },
        { href: "/ueber-uns", label: "Über uns" },
        { href: "/kontakt", label: "Kontakt" },
      ];

  return (
    <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href={homeHref} className="flex items-center gap-2">
          <Image src="/logo.png" alt="Elkaza" width={36} height={36} />
          <span className="text-xl font-semibold">
            <span className="text-blue-700">Elkaza</span> Consulting
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {items.map((it) => (
            <Link key={it.href} href={it.href} className="hover:text-blue-700">
              {it.label}
            </Link>
          ))}
        </nav>
        <div className="ml-4">
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}

