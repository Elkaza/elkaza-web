"use client";

import { Building2 } from "lucide-react";

interface MicroCaseStudyProps {
    locale: "de" | "en";
}

const caseStudies = {
    de: [
        {
            industry: "Finanzdienstleister, 20 MA",
            challenge: "Kein MFA, geteilte Admin-Passwörter",
            result: "MFA auf allen Konten in 2 Wochen, Credential-Angriff gestoppt",
        },
        {
            industry: "Produktionsbetrieb, 80 MA",
            challenge: "IT-Probleme erst nach User-Beschwerden bekannt",
            result: "Proaktives Monitoring, 70% der Issues vor Eskalation behoben",
        },
    ],
    en: [
        {
            industry: "Financial services, 20 employees",
            challenge: "No MFA, shared admin passwords",
            result: "MFA on all accounts in 2 weeks, credential attack stopped",
        },
        {
            industry: "Manufacturing, 80 employees",
            challenge: "IT issues only known after user complaints",
            result: "Proactive monitoring, 70% of issues fixed before escalation",
        },
    ],
};

export default function MicroCaseStudy({ locale }: MicroCaseStudyProps) {
    const studies = caseStudies[locale];
    const labels = {
        de: { industry: "Branche", challenge: "Problem", result: "Ergebnis" },
        en: { industry: "Industry", challenge: "Challenge", result: "Result" },
    };

    return (
        <div className="grid md:grid-cols-2 gap-6">
            {studies.map((study, i) => (
                <div
                    key={i}
                    className="p-6 rounded-xl bg-[var(--surface)] border border-[var(--border)]"
                >
                    <div className="flex items-center gap-2 mb-4 text-[var(--muted)]">
                        <Building2 className="w-4 h-4" aria-hidden="true" />
                        <span className="text-sm">{study.industry}</span>
                    </div>
                    <div className="space-y-3">
                        <div>
                            <span className="text-red-400 text-sm font-medium">
                                {labels[locale].challenge}:
                            </span>{" "}
                            <span className="text-[var(--text-secondary)] text-sm">
                                {study.challenge}
                            </span>
                        </div>
                        <div>
                            <span className="text-green-400 text-sm font-medium">
                                {labels[locale].result}:
                            </span>{" "}
                            <span className="text-[var(--text)] text-sm">{study.result}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
