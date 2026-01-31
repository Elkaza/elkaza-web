"use client";

import { FileText, Clock, CheckCircle, Lock } from "lucide-react";

interface TrustBarProps {
    locale: "de" | "en";
}

const trustItems = {
    de: [
        { icon: FileText, text: "Dokumentation inklusive" },
        { icon: Clock, text: "Antwort in 24h" },
        { icon: CheckCircle, text: "Fixpreis möglich" },
        { icon: Lock, text: "NDA auf Wunsch" },
    ],
    en: [
        { icon: FileText, text: "Documentation included" },
        { icon: Clock, text: "Response in 24h" },
        { icon: CheckCircle, text: "Fixed scope available" },
        { icon: Lock, text: "NDA available" },
    ],
};

export default function TrustBar({ locale }: TrustBarProps) {
    const items = trustItems[locale];

    return (
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {items.map((item, i) => (
                <div
                    key={i}
                    className="flex items-center gap-2 text-sm text-[var(--text-secondary)]"
                >
                    <item.icon className="w-4 h-4 text-[var(--primary)]" aria-hidden="true" />
                    <span>{item.text}</span>
                </div>
            ))}
        </div>
    );
}
