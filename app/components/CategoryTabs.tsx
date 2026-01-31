"use client";

import { useState } from "react";

interface CategoryTabsProps {
    locale: "de" | "en";
    onCategoryChange: (category: string) => void;
    activeCategory: string;
}

const categories = {
    de: [
        { id: "all", label: "Alle" },
        { id: "security", label: "Security" },
        { id: "networking", label: "Netzwerk" },
        { id: "cloud", label: "Cloud" },
        { id: "automation", label: "Automation" },
        { id: "operations", label: "Operations" },
        { id: "compliance", label: "Compliance" },
    ],
    en: [
        { id: "all", label: "All" },
        { id: "security", label: "Security" },
        { id: "networking", label: "Networking" },
        { id: "cloud", label: "Cloud" },
        { id: "automation", label: "Automation" },
        { id: "operations", label: "Operations" },
        { id: "compliance", label: "Compliance" },
    ],
};

export default function CategoryTabs({
    locale,
    onCategoryChange,
    activeCategory,
}: CategoryTabsProps) {
    const items = categories[locale];

    return (
        <div
            className="flex flex-wrap justify-center gap-2"
            role="tablist"
            aria-label={locale === "de" ? "Kategorien" : "Categories"}
        >
            {items.map((cat) => (
                <button
                    key={cat.id}
                    role="tab"
                    aria-selected={activeCategory === cat.id}
                    onClick={() => onCategoryChange(cat.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 focus:ring-offset-[var(--bg)] ${activeCategory === cat.id
                            ? "bg-[var(--primary)] text-white"
                            : "bg-[var(--surface)] text-[var(--text-secondary)] hover:bg-[var(--elevated)] hover:text-[var(--text)]"
                        }`}
                >
                    {cat.label}
                </button>
            ))}
        </div>
    );
}
