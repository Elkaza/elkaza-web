import { FileText, BookOpen, Presentation, MessageSquare } from "lucide-react";

interface WhatYouGetProps {
    locale: "de" | "en";
}

const content = {
    de: {
        title: "Was Sie bekommen",
        items: [
            { icon: FileText, name: "Dokumentation", desc: "Jede Änderung dokumentiert. Netzwerkdiagramme, Konfigurationen, Runbooks." },
            { icon: BookOpen, name: "Wissenstransfer", desc: "Schulung für Ihr Team. Keine Abhängigkeit von uns." },
            { icon: Presentation, name: "Abschlussbericht", desc: "Zusammenfassung der Ergebnisse. Empfehlungen für nächste Schritte." },
            { icon: MessageSquare, name: "Support", desc: "Fragen nach Projektende? Wir sind erreichbar." },
        ],
    },
    en: {
        title: "What You Get",
        items: [
            { icon: FileText, name: "Documentation", desc: "Every change documented. Network diagrams, configs, runbooks." },
            { icon: BookOpen, name: "Knowledge Transfer", desc: "Training for your team. No dependency on us." },
            { icon: Presentation, name: "Final Report", desc: "Summary of outcomes. Recommendations for next steps." },
            { icon: MessageSquare, name: "Support", desc: "Questions after project end? We're available." },
        ],
    },
};

export default function WhatYouGet({ locale }: WhatYouGetProps) {
    const c = content[locale];

    return (
        <div>
            <h2 className="text-2xl font-semibold text-[var(--text)] mb-8 text-center">{c.title}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {c.items.map((item, i) => (
                    <div key={i} className="p-5 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
                        <item.icon className="w-5 h-5 text-[var(--primary)] mb-3" aria-hidden="true" />
                        <h3 className="text-base font-semibold text-[var(--text)] mb-1">{item.name}</h3>
                        <p className="text-sm text-[var(--muted)]">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
