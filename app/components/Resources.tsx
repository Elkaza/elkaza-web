import Link from "next/link";
import { BarChart3, CheckSquare, Download, FileText } from "lucide-react";
import CTA from "./CTA";

interface ResourceProps {
  locale: string;
}

export default function Resources({ locale }: ResourceProps) {
  const resources = locale === "de" ? [
    {
      title: "Security Baseline Checklist",
      description: "Schritt-für-Schritt-Anleitung für eine sichere IT-Basis",
      icon: CheckSquare,
      details: "PDF - 8 Seiten - praktisch",
      cta: "Kostenlos herunterladen",
    },
    {
      title: "IT Assessment Template",
      description: "Vorlage zur Bestandsaufnahme Ihrer IT-Infrastruktur",
      icon: FileText,
      details: "Excel - anpassbar - sofort einsatzbereit",
      cta: "Template erhalten",
    },
    {
      title: "Sicherheits-Roadmap",
      description: "12-Monats-Plan für Sicherheit und Stabilität",
      icon: BarChart3,
      details: "PDF + Excel - priorisiert - realistisch",
      cta: "Kostenlos abrufen",
    },
  ] : [
    {
      title: "Security Baseline Checklist",
      description: "Step-by-step guide for secure IT fundamentals",
      icon: CheckSquare,
      details: "PDF - 8 pages - practical",
      cta: "Download Free",
    },
    {
      title: "IT Assessment Template",
      description: "Template for IT infrastructure inventory",
      icon: FileText,
      details: "Excel - customizable - ready to use",
      cta: "Get Template",
    },
    {
      title: "Security Roadmap",
      description: "12-month plan for security and stability",
      icon: BarChart3,
      details: "PDF + Excel - prioritized - realistic",
      cta: "Get Roadmap",
    },
  ];

  const riskItems = locale === "de" ? [
    "Ungepatchte Systeme erhöhen das Risiko deutlich",
    "Schwache Passwörter bleiben ein häufiger Einfallspunkt",
    "Ungetestete Backups funktionieren im Ernstfall oft nicht",
    "Unbegrenzte Zugriffsrechte machen Vorfälle teurer und schwerer einzudämmen",
  ] : [
    "Unpatched systems materially increase risk",
    "Weak passwords remain a common entry point",
    "Untested backups often fail during real incidents",
    "Unlimited access rights make incidents more expensive and harder to contain",
  ];

  return (
    <section className="py-12 md:py-14 bg-[var(--surface)]">
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-3">
            {locale === "de" ? "Kostenlose Ressourcen für Ihr Unternehmen" : "Free Resources for Your Company"}
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            {locale === "de"
              ? "Nutzen Sie bewährte Templates und Checklisten, um IT-Sicherheit strukturiert zu verbessern. Keine Anmeldung erforderlich."
              : "Use proven templates and checklists to improve your IT security. No sign-up required."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {resources.map((resource) => {
            const Icon = resource.icon;
            return (
              <div
                key={resource.title}
                className="p-6 rounded-xl border border-[var(--border)] bg-[var(--elevated)] shadow-[var(--shadow-sm)] flex flex-col hover:border-[var(--primary)] hover:shadow-[var(--shadow-md)] transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-lg bg-[var(--primary-light)] flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[var(--primary)]" aria-hidden="true" />
                </div>

                <h3 className="text-lg font-semibold text-[var(--text)] mb-2">{resource.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] mb-4 flex-1">{resource.description}</p>

                <div className="mb-4 pt-4 border-t border-[var(--border)]">
                  <p className="text-xs text-[var(--muted)] font-medium">{resource.details}</p>
                </div>

                <Link
                  href={`${locale === "de" ? "/kontakt" : "/en/contact"}?resource=${encodeURIComponent(resource.title)}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--primary-light)] text-[var(--primary)] font-semibold hover:bg-[var(--primary)] hover:text-white transition-colors text-sm"
                >
                  <Download className="w-4 h-4" aria-hidden="true" />
                  {resource.cta}
                </Link>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-6 items-center mb-0">
          <div className="p-6 rounded-xl bg-[var(--bg)] border border-[var(--border)]">
            <h3 className="text-lg font-semibold text-[var(--text)] mb-3">
              {locale === "de" ? "Was steckt in Ihrem IT-Status?" : "What's hiding in your IT status?"}
            </h3>
            <ul className="space-y-2">
              {riskItems.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-[var(--text-secondary)]">
                  <span className="text-[var(--primary)] font-bold" aria-hidden="true">-</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center">
            <p className="text-[var(--text-secondary)] text-sm mb-5">
              {locale === "de"
                ? "Ein kurzes Security Assessment zeigt, welche Lücken zuerst geschlossen werden sollten und welche Maßnahmen den größten Effekt haben."
                : "A short security assessment shows which gaps should be closed first and which actions have the greatest effect."}
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
