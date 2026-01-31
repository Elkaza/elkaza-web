"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, BarChart3 } from "lucide-react";

interface StickyCTABarProps {
    locale: "de" | "en";
}

const content = {
    de: {
        primary: "Kostenloses Erstgespräch",
        primaryHref: "/kontakt",
        secondary: "Leistungen vergleichen",
        secondaryHref: "/pakete",
    },
    en: {
        primary: "Book free consultation",
        primaryHref: "/en/contact",
        secondary: "Compare services",
        secondaryHref: "/en/packages",
    },
};

export default function StickyCTABar({ locale }: StickyCTABarProps) {
    const [isVisible, setIsVisible] = useState(false);
    const c = content[locale];

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 400);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={`fixed bottom-0 left-0 right-0 z-50 bg-[var(--surface)] border-t border-[var(--border)] shadow-lg transition-transform duration-300 ${isVisible ? "translate-y-0" : "translate-y-full"
                }`}
            role="complementary"
            aria-label={locale === "de" ? "Kontakt Aktionen" : "Contact Actions"}
        >
            <div className="max-w-[1140px] mx-auto px-6 py-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link
                    href={c.primaryHref}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--primary)] text-white rounded-lg font-medium hover:bg-[var(--primary-dark)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2"
                >
                    {c.primary}
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                <Link
                    href={c.secondaryHref}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-[var(--text-secondary)] hover:text-[var(--text)] transition-colors"
                >
                    <BarChart3 className="w-4 h-4" aria-hidden="true" />
                    {c.secondary}
                </Link>
            </div>
        </div>
    );
}
