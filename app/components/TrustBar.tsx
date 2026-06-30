"use client";

import { FileText, Clock, CheckCircle, Lock } from "lucide-react";

interface TrustBarProps {
    locale: "de" | "en";
}

const trustItems = {
    de: [
        { icon: FileText, text: "Konzeptdokumentation" },
        { icon: Clock, text: "In Vorbereitung" },
        { icon: CheckCircle, text: "Unverbindliche Planung" },
        { icon: Lock, text: "Noch nicht verfügbar" },
    ],
    en: [
        { icon: FileText, text: "Concept documentation" },
        { icon: Clock, text: "In preparation" },
        { icon: CheckCircle, text: "Non-binding planning" },
        { icon: Lock, text: "Not yet available" },
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
