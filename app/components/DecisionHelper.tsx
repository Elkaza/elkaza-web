"use client";

import { useState } from "react";
import { Users, AlertTriangle, Cloud } from "lucide-react";

interface DecisionHelperProps {
    locale: "de" | "en";
}

const content = {
    de: {
        title: "Welche Leistung passt zu Ihnen?",
        questions: [
            {
                id: "size",
                question: "Wie viele Mitarbeiter hat Ihr Team?",
                options: ["Unter 20", "20-50", "50-200", "Über 200"],
            },
            {
                id: "pain",
                question: "Was ist Ihr größtes Problem?",
                options: ["Incidents und Ausfälle", "Compliance-Anforderungen", "Produktivität und Wachstum"],
            },
            {
                id: "env",
                question: "Wo läuft Ihre IT?",
                options: ["Hauptsächlich Cloud", "Hauptsächlich On-Prem", "Hybrid"],
            },
        ],
        results: {
            default: { service: "Security Baseline", reason: "Grundlagen zuerst. MFA, Patching, Backups." },
            incidents: { service: "Managed Operations", reason: "Proaktives Monitoring verhindert Ausfälle." },
            compliance: { service: "NIS2 / Compliance Readiness", reason: "Dokumentierte Kontrollen für Audits." },
            growth: { service: "Network & Infrastructure", reason: "Stabile Basis für wachsende Teams." },
        },
        cta: "Mit dieser Leistung starten",
        reset: "Neu starten",
    },
    en: {
        title: "Which service fits you?",
        questions: [
            {
                id: "size",
                question: "How many employees in your team?",
                options: ["Under 20", "20-50", "50-200", "Over 200"],
            },
            {
                id: "pain",
                question: "What is your biggest challenge?",
                options: ["Incidents and outages", "Compliance requirements", "Productivity and growth"],
            },
            {
                id: "env",
                question: "Where does your IT run?",
                options: ["Mostly cloud", "Mostly on-prem", "Hybrid"],
            },
        ],
        results: {
            default: { service: "Security Baseline", reason: "Basics first. MFA, patching, backups." },
            incidents: { service: "Managed Operations", reason: "Proactive monitoring prevents outages." },
            compliance: { service: "NIS2 / Compliance Readiness", reason: "Documented controls for audits." },
            growth: { service: "Network & Infrastructure", reason: "Stable foundation for growing teams." },
        },
        cta: "Start with this service",
        reset: "Start over",
    },
};

export default function DecisionHelper({ locale }: DecisionHelperProps) {
    const c = content[locale];
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState<string[]>([]);

    const handleAnswer = (answer: string) => {
        const newAnswers = [...answers, answer];
        setAnswers(newAnswers);
        setStep(step + 1);
    };

    const getResult = () => {
        const pain = answers[1];
        if (pain?.includes("Incidents") || pain?.includes("Ausfälle")) return c.results.incidents;
        if (pain?.includes("Compliance")) return c.results.compliance;
        if (pain?.includes("Productivity") || pain?.includes("Wachstum")) return c.results.growth;
        return c.results.default;
    };

    const reset = () => {
        setStep(0);
        setAnswers([]);
    };

    const basePath = locale === "de" ? "/leistungen" : "/en/services";

    if (step >= c.questions.length) {
        const result = getResult();
        const slug = result.service.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-").replace(/\//g, "");
        return (
            <div className="p-6 rounded-xl bg-[var(--surface)] border border-[var(--primary)] text-center">
                <p className="text-sm text-[var(--muted)] mb-2">{locale === "de" ? "Empfehlung:" : "Recommendation:"}</p>
                <h3 className="text-xl font-semibold text-[var(--text)] mb-2">{result.service}</h3>
                <p className="text-[var(--text-secondary)] mb-6">{result.reason}</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                        href={`${basePath}/${slug === "nis2--compliance-readiness" ? "nis2-compliance" : slug}`}
                        className="px-5 py-2.5 bg-[var(--primary)] text-white rounded-lg font-medium hover:bg-[var(--primary-dark)] transition-colors"
                    >
                        {c.cta}
                    </a>
                    <button
                        onClick={reset}
                        className="px-5 py-2.5 text-[var(--text-secondary)] hover:text-[var(--text)] transition-colors"
                    >
                        {c.reset}
                    </button>
                </div>
            </div>
        );
    }

    const q = c.questions[step];
    return (
        <div className="p-6 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
            <div className="flex items-center gap-2 mb-4">
                <span className="text-sm text-[var(--muted)]">{step + 1}/{c.questions.length}</span>
            </div>
            <h3 className="text-lg font-semibold text-[var(--text)] mb-4">{q.question}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {q.options.map((opt) => (
                    <button
                        key={opt}
                        onClick={() => handleAnswer(opt)}
                        className="p-4 rounded-lg border border-[var(--border)] text-left text-[var(--text)] hover:border-[var(--primary)] hover:bg-[var(--elevated)] transition-all focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    >
                        {opt}
                    </button>
                ))}
            </div>
        </div>
    );
}
