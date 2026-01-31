"use client";

import { Check, X } from "lucide-react";

interface ScopeSectionProps {
    locale: "de" | "en";
    included: string[];
    notIncluded: string[];
}

const labels = {
    de: { included: "Im Scope", notIncluded: "Nicht im Scope" },
    en: { included: "Included", notIncluded: "Not included" },
};

export default function ScopeSection({
    locale,
    included,
    notIncluded,
}: ScopeSectionProps) {
    const l = labels[locale];

    return (
        <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
                <h3 className="text-lg font-semibold text-[var(--text)] mb-4 flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" aria-hidden="true" />
                    {l.included}
                </h3>
                <ul className="space-y-2">
                    {included.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-[var(--text-secondary)] text-sm">
                            <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" aria-hidden="true" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="p-6 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
                <h3 className="text-lg font-semibold text-[var(--text)] mb-4 flex items-center gap-2">
                    <X className="w-5 h-5 text-[var(--muted)]" aria-hidden="true" />
                    {l.notIncluded}
                </h3>
                <ul className="space-y-2">
                    {notIncluded.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-[var(--muted)] text-sm">
                            <X className="w-4 h-4 text-[var(--muted)] mt-0.5 shrink-0" aria-hidden="true" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
