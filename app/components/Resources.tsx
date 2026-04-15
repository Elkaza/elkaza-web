"use client";

import Link from "next/link";
import { Download, FileText, CheckSquare, BarChart3 } from "lucide-react";
import CTA from "./CTA";

interface ResourceProps {
  locale: string;
}

export default function Resources({ locale }: ResourceProps) {
  const resources = locale === "de" ? [
    {
      title: "Security Baseline Checklist",
      description: "Schritt-für-Schritt Anleitung für eine sichere IT-Basis",
      icon: CheckSquare,
      details: "PDF • 8 Seiten • Praktisch",
      cta: "Kostenlos herunterladen",
    },
    {
      title: "IT Assessment Template",
      description: "Vorlage zur Bestandsaufnahme deiner IT-Infrastruktur",
      icon: FileText,
      details: "Excel • Anpassbar • Sofort einsatzbereit",
      cta: "Template erhalten",
    },
    {
      title: "Sicherheits-Roadmap",
      description: "12-Monats-Plan für Sicherheit & Stabilität",
      icon: BarChart3,
      details: "PDF + Excel • Priorisiert • Realistisch",
      cta: "Kostenlos abrufen",
    },
  ] : [
    {
      title: "Security Baseline Checklist",
      description: "Step-by-step guide for secure IT fundamentals",
      icon: CheckSquare,
      details: "PDF • 8 pages • Practical",
      cta: "Download Free",
    },
    {
      title: "IT Assessment Template",
      description: "Template for IT infrastructure inventory",
      icon: FileText,
      details: "Excel • Customizable • Ready to use",
      cta: "Get Template",
    },
    {
      title: "Security Roadmap",
      description: "12-month plan for security & stability",
      icon: BarChart3,
      details: "PDF + Excel • Prioritized • Realistic",
      cta: "Get Roadmap",
    },
  ];

  return (
    <section className="py-12 md:py-14 bg-[var(--surface)]">
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-3">
            {locale === "de" ? "Kostenlose Ressourcen für dein Unternehmen" : "Free Resources for Your Company"}
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            {locale === "de" 
              ? "Nutze unsere bewährten Templates und Checklisten, um deine IT-Sicherheit zu verbessern. Keine Anmeldung erforderlich."
              : "Use our proven templates and checklists to improve your IT security. No sign-up required."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {resources.map((resource, idx) => {
            const Icon = resource.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-xl border border-[var(--border)] bg-[var(--elevated)] shadow-[var(--shadow-sm)] flex flex-col hover:border-[var(--primary)] hover:shadow-[var(--shadow-md)] transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-lg bg-[var(--primary-light)] flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[var(--primary)]" />
                </div>
                
                <h3 className="text-lg font-semibold text-[var(--text)] mb-2">{resource.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] mb-4 flex-1">{resource.description}</p>
                
                <div className="mb-4 pt-4 border-t border-[var(--border)]">
                  <p className="text-xs text-[var(--muted)] font-medium">{resource.details}</p>
                </div>
                
                <Link
                  href={`${locale === "de" ? "/kontakt" : "/en/contact"}?resource=${resource.title}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--primary-light)] text-[var(--primary)] font-semibold hover:bg-[var(--primary)] hover:text-white transition-colors text-sm"
                >
                  <Download className="w-4 h-4" />
                  {resource.cta}
                </Link>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-6 items-center mb-0">
          <div className="p-6 rounded-xl bg-[var(--bg)] border border-[var(--border)]">
            <h3 className="text-lg font-semibold text-[var(--text)] mb-3">
              {locale === "de" ? "Was ist in deinem IT-Zustand versteckt?" : "What's hiding in your IT status?"}
            </h3>
            <ul className="space-y-2">
              {locale === "de" ? [
                "Unpatched systems erhöhen das Risiko um bis zu 80%",
                "Schwache Passwörter verursachen 50% aller Sicherheitsverletzungen",
                "Untestete Backups funktionieren oft nicht im Ernstfall",
                "Unbegrenzte Zugriffsrechte kosten Unternehmen durchschnittlich €200k/Jahr",
              ] : [
                "Unpatched systems increase risk by up to 80%",
                "Weak passwords cause 50% of all security breaches",
                "Untested backups often don't work in emergencies",
                "Unlimited access rights cost companies €200k/year on average",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-sm text-[var(--text-secondary)]">
                  <span className="text-[var(--primary)] font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center">
            <p className="text-[var(--text-secondary)] text-sm mb-5">
              {locale === "de" 
                ? "Unser kostenloses Security Assessment zeigt dir genau, wo deine Schwachstellen sind – und wie du sie am schnellsten behebst."
                : "Our free security assessment shows you exactly where your vulnerabilities are – and how to fix them fastest."}
            </p>
            <CTA href={locale === "de" ? "/kontakt" : "/en/contact"}>
              {locale === "de" ? "Kostenlose Analyse vereinbaren" : "Schedule Free Analysis"}
            </CTA>
          </div>
        </div>
      </div>
    </section>
  );
}
