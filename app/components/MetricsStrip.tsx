"use client";

import { Briefcase, Clock, Activity, Users } from "lucide-react";

interface MetricsStripProps {
    locale: "de" | "en";
}

const metrics = {
    de: [
        { icon: Briefcase, value: "10", label: "Geplante Leistungsbereiche" },
        { icon: Activity, value: "24/7", label: "Monitoring als Zielbild" },
        { icon: Clock, value: "2026", label: "Konzeptphase" },
        { icon: Users, value: "KMU", label: "Geplanter Fokus" },
    ],
    en: [
        { icon: Briefcase, value: "10", label: "Planned service areas" },
        { icon: Activity, value: "24/7", label: "Monitoring target model" },
        { icon: Clock, value: "2026", label: "Concept phase" },
        { icon: Users, value: "SME", label: "Planned focus" },
    ],
};

export default function MetricsStrip({ locale }: MetricsStripProps) {
    const items = metrics[locale];

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {items.map((item, i) => (
                <div key={i} className="text-center">
                    <div className="flex justify-center mb-2">
                        <item.icon className="w-5 h-5 text-[var(--primary)]" aria-hidden="true" />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-[var(--text)]">
                        {item.value}
                    </div>
                    <div className="text-sm text-[var(--muted)]">{item.label}</div>
                </div>
            ))}
        </div>
    );
}
