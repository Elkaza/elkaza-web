import { HelpCircle } from "lucide-react";

interface ServicesFAQProps {
    locale: "de" | "en";
}

const faqs = {
    de: [
        { q: "Wie viel Ausfallzeit entsteht?", a: "Die meisten Änderungen laufen im Hintergrund. Geplante Wartungsfenster werden mit Ihnen abgestimmt." },
        { q: "Welchen Zugang brauchen Sie?", a: "Admin-Zugang zu den relevanten Systemen. Temporär, dokumentiert, nach Projektende entfernt." },
        { q: "Müssen wir bestimmte Tools kaufen?", a: "Wir arbeiten mit dem, was Sie haben. Wenn Investitionen sinnvoll sind, besprechen wir das vorher." },
        { q: "Wem gehört das Ergebnis?", a: "Ihnen. Alle Dokumentation, Konfigurationen und Skripte gehören Ihrem Unternehmen." },
        { q: "Wie steht es mit Vertraulichkeit?", a: "NDA auf Wunsch. Alle Daten bleiben bei Ihnen. Wir nehmen keine Kopien mit." },
    ],
    en: [
        { q: "How much downtime will there be?", a: "Most changes run in the background. Planned maintenance windows are coordinated with you." },
        { q: "What access do you need?", a: "Admin access to relevant systems. Temporary, documented, removed after project end." },
        { q: "Do we need to buy specific tools?", a: "We work with what you have. If investments make sense, we discuss upfront." },
        { q: "Who owns the outcome?", a: "You do. All documentation, configs, and scripts belong to your company." },
        { q: "What about confidentiality?", a: "NDA available. All data stays with you. We take no copies." },
    ],
};

export default function ServicesFAQ({ locale }: ServicesFAQProps) {
    const items = faqs[locale];
    const title = locale === "de" ? "Häufige Fragen" : "Frequently Asked Questions";

    return (
        <div>
            <div className="flex items-center justify-center gap-2 mb-8">
                <HelpCircle className="w-6 h-6 text-[var(--primary)]" aria-hidden="true" />
                <h2 className="text-2xl font-semibold text-[var(--text)]">{title}</h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
                {items.map((faq, i) => (
                    <div key={i} className="p-5 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
                        <h3 className="text-base font-medium text-[var(--text)] mb-2">{faq.q}</h3>
                        <p className="text-sm text-[var(--text-secondary)]">{faq.a}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
