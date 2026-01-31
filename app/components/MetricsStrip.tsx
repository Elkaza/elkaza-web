"use client";

import { Briefcase, Clock, Activity, Users } from "lucide-react";

interface MetricsStripProps {
    locale: "de" | "en";
}

const metrics = {
    de: [
        { icon: Briefcase, value: "50+", label: "Projekte abgeschlossen" },
        { icon: Activity, value: "99.9%", label: "Verfügbarkeit erreicht" },
        { icon: Clock, value: "<4h", label: "Reaktionszeit" },
        { icon: Users, value: "30+", label: "Zufriedene Kunden" },
    ],
    en: [
        { icon: Briefcase, value: "50+", label: "Projects delivered" },
        { icon: Activity, value: "99.9%", label: "Uptime achieved" },
        { icon: Clock, value: "<4h", label: "Response time" },
        { icon: Users, value: "30+", label: "Satisfied clients" },
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
