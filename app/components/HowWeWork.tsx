import { Search, Settings, Headphones, Clock } from "lucide-react";

interface HowWeWorkProps {
    locale: "de" | "en";
}

const content = {
    de: {
        title: "So arbeiten wir",
        steps: [
            {
                icon: Search,
                name: "Analyse",
                desc: "Wir erfassen den aktuellen Stand. Workshops, Tech-Review, Dokumentation.",
                time: "1-2 Wochen",
            },
            {
                icon: Settings,
                name: "Umsetzung",
                desc: "Wir implementieren die Änderungen. Konfiguration, Tests, Rollout.",
                time: "2-6 Wochen",
            },
            {
                icon: Headphones,
                name: "Betrieb",
                desc: "Übergabe an Ihr Team. Dokumentation, Schulung, optionaler Managed Support.",
                time: "Laufend",
            },
        ],
    },
    en: {
        title: "How We Work",
        steps: [
            {
                icon: Search,
                name: "Assess",
                desc: "We capture the current state. Workshops, tech review, documentation.",
                time: "1-2 weeks",
            },
            {
                icon: Settings,
                name: "Implement",
                desc: "We make the changes. Configuration, testing, rollout.",
                time: "2-6 weeks",
            },
            {
                icon: Headphones,
                name: "Run",
                desc: "Handover to your team. Documentation, training, optional managed support.",
                time: "Ongoing",
            },
        ],
    },
};

export default function HowWeWork({ locale }: HowWeWorkProps) {
    const c = content[locale];

    return (
        <div>
            <h2 className="text-2xl font-semibold text-[var(--text)] mb-8 text-center">{c.title}</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {c.steps.map((step, i) => (
                    <div key={i} className="p-6 rounded-xl bg-[var(--surface)] border border-[var(--border)] text-center">
                        <div className="w-12 h-12 rounded-full bg-[var(--primary-light)] flex items-center justify-center mx-auto mb-4">
                            <step.icon className="w-6 h-6 text-[var(--primary)]" aria-hidden="true" />
                        </div>
                        <h3 className="text-lg font-semibold text-[var(--text)] mb-2">{step.name}</h3>
                        <p className="text-sm text-[var(--text-secondary)] mb-3">{step.desc}</p>
                        <div className="flex items-center justify-center gap-1 text-xs text-[var(--muted)]">
                            <Clock className="w-3 h-3" aria-hidden="true" />
                            <span>{step.time}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
