"use client";

import { useEffect, useState } from "react";

interface StickySectionNavProps {
    locale: "de" | "en";
    sections: { id: string; label: string }[];
}

export default function StickySectionNav({ locale, sections }: StickySectionNavProps) {
    const [activeSection, setActiveSection] = useState("");
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 300);

            // Find active section based on scroll position
            const sectionElements = sections.map((s) => document.getElementById(s.id));
            const scrollPos = window.scrollY + 150;

            for (let i = sectionElements.length - 1; i >= 0; i--) {
                const el = sectionElements[i];
                if (el && el.offsetTop <= scrollPos) {
                    setActiveSection(sections[i].id);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [sections]);

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <nav
            className={`bg-[var(--bg)] border-b border-[var(--border)] transition-all duration-200 ${isSticky ? "fixed top-0 left-0 right-0 z-40 shadow-sm" : ""
                }`}
            aria-label={locale === "de" ? "Seitennavigation" : "Page navigation"}
        >
            <div className="max-w-[1140px] mx-auto px-6">
                <div className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-hide">
                    {sections.map((section) => (
                        <button
                            key={section.id}
                            onClick={() => scrollToSection(section.id)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--primary)] ${activeSection === section.id
                                    ? "bg-[var(--primary-light)] text-[var(--primary)]"
                                    : "text-[var(--text-secondary)] hover:text-[var(--text)] hover:bg-[var(--surface)]"
                                }`}
                        >
                            {section.label}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
}
