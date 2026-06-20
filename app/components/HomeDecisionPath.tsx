import Link from "next/link";
import { ArrowRight, ClipboardList, LifeBuoy, ShieldCheck } from "lucide-react";
import type { Locale } from "@/lib/siteContent";

const content = {
  de: {
    title: "Wählen Sie den richtigen Einstieg",
    subtitle: "Drei klare Wege, je nachdem ob Sie zuerst Klarheit, Umsetzung oder laufenden Betrieb brauchen.",
    items: [
      {
        icon: ClipboardList,
        title: "Assessment",
        tag: "1-2 Wochen",
        text: "Ist-Stand, Risiken und priorisierte Maßnahmen verstehen.",
        href: "/pakete",
        cta: "Starter ansehen",
      },
      {
        icon: ShieldCheck,
        title: "Security Baseline",
        tag: "3-6 Wochen",
        text: "MFA, Admin-Zugänge, Backups, Patch-Stand und Dokumentation verbessern.",
        href: "/leistungen/security-baseline",
        cta: "Baseline ansehen",
      },
      {
        icon: LifeBuoy,
        title: "Managed Operations",
        tag: "laufend",
        text: "Monitoring, Patching, Backup-Prüfung und klare Reaktion bei Störungen.",
        href: "/leistungen/managed-ops",
        cta: "Betrieb ansehen",
      },
    ],
  },
  en: {
    title: "Choose the right starting point",
    subtitle: "Three clear paths depending on whether you need clarity, implementation, or ongoing operations first.",
    items: [
      {
        icon: ClipboardList,
        title: "Assessment",
        tag: "1-2 weeks",
        text: "Understand current state, risks, and prioritized actions.",
        href: "/en/packages",
        cta: "View Starter",
      },
      {
        icon: ShieldCheck,
        title: "Security Baseline",
        tag: "3-6 weeks",
        text: "Improve MFA, admin access, backups, patch status, and documentation.",
        href: "/en/services/security-baseline",
        cta: "View Baseline",
      },
      {
        icon: LifeBuoy,
        title: "Managed Operations",
        tag: "ongoing",
        text: "Monitoring, patching, backup checks, and clear incident response.",
        href: "/en/services/managed-ops",
        cta: "View Operations",
      },
    ],
  },
} as const;

interface HomeDecisionPathProps {
  locale: Locale;
}

export default function HomeDecisionPath({ locale }: HomeDecisionPathProps) {
  const copy = content[locale];

  return (
    <section className="py-12 md:py-14 bg-[var(--bg)]">
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="mb-7 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--text)]">{copy.title}</h2>
          <p className="mt-2 text-[var(--text-secondary)]">{copy.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {copy.items.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow-sm)] transition-all duration-200 hover:border-[var(--primary)] hover:bg-[var(--elevated)] hover:shadow-[var(--shadow-md)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--primary-light)] text-[var(--primary)]">
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <span className="rounded-md border border-[var(--border)] px-2.5 py-1 text-xs font-semibold text-[var(--muted)]">
                  {item.tag}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-[var(--text)] group-hover:text-[var(--primary)]">
                {item.title}
              </h3>
              <p className="mt-2 min-h-[4.5rem] text-sm leading-relaxed text-[var(--text-secondary)]">
                {item.text}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[var(--primary)]">
                {item.cta}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
