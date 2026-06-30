import Link from "next/link";
import { ArrowRight, Check, ClipboardCheck, ShieldCheck, Wrench } from "lucide-react";
import CTA from "@/app/components/CTA";
import { siteContent, type Locale } from "@/lib/siteContent";

const heroDetails = {
  de: {
    eyebrow: "Elkaza Consulting",
    audience: "Für KMU in Wien und Österreich",
    note: "Unverbindliche Projektvorschau. Derzeit kein Angebot.",
    caseStudyLabel: "Pakete ansehen",
    caseStudyHref: "/pakete",
    panelTitle: "Der erste Schritt",
    panelLead: "Ein kurzer, kontrollierter Einstieg statt großer Umbau auf Verdacht.",
    steps: [
      {
        icon: ClipboardCheck,
        title: "Ist-Stand erfassen",
        text: "Netzwerk, Zugänge, Backups, Cloud- und Admin-Konten prüfen.",
      },
      {
        icon: ShieldCheck,
        title: "Risiken priorisieren",
        text: "MFA, Patch-Stand, Backup-Restore und öffentliche Angriffsfläche bewerten.",
      },
      {
        icon: Wrench,
        title: "Umsetzung planen",
        text: "Konkrete Roadmap mit Quick-Wins, Aufwand und nächstem Schritt.",
      },
    ],
    outcomes: ["Assessment", "Security Baseline", "Betrieb"],
  },
  en: {
    eyebrow: "Elkaza Consulting",
    audience: "For SMEs in Vienna and Austria",
    note: "Non-binding project preview. No current offer.",
    caseStudyLabel: "View packages",
    caseStudyHref: "/en/packages",
    panelTitle: "The first step",
    panelLead: "A controlled starting point instead of a large rebuild on guesswork.",
    steps: [
      {
        icon: ClipboardCheck,
        title: "Capture current state",
        text: "Review network, access, backups, cloud services, and admin accounts.",
      },
      {
        icon: ShieldCheck,
        title: "Prioritize risk",
        text: "Check MFA, patch status, restore readiness, and public exposure.",
      },
      {
        icon: Wrench,
        title: "Plan implementation",
        text: "A practical roadmap with quick wins, effort, and the next step.",
      },
    ],
    outcomes: ["Assessment", "Security baseline", "Operations"],
  },
} as const;

interface HomeHeroProps {
  locale: Locale;
}

export default function HomeHero({ locale }: HomeHeroProps) {
  const hero = siteContent.hero[locale];
  const details = heroDetails[locale];

  return (
    <section className="hero-gradient-enhanced py-12 md:py-18">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold text-[var(--primary)]">
            {details.eyebrow} · {details.audience}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 text-[var(--text)] leading-tight tracking-normal text-balance">
            {hero.headline}
          </h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mb-8 leading-relaxed">
            {hero.subheadline}
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <CTA href={hero.primaryCtaHref}>{hero.primaryCta}</CTA>
            <CTA href={hero.secondaryCtaHref} variant="secondary">
              {hero.secondaryCta}
            </CTA>
          </div>

          <div className="mt-5 flex flex-col gap-3 text-sm text-[var(--muted)] sm:flex-row sm:items-center">
            <span>{details.note}</span>
            <Link
              href={details.caseStudyHref}
              className="inline-flex items-center gap-1 font-semibold text-[var(--primary)] hover:text-[var(--primary-hover)]"
            >
              {details.caseStudyLabel}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="mt-10 border-t border-[var(--border)] pt-7 md:mt-12 md:pt-8">
          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold text-[var(--text)]">{details.panelTitle}</h2>
              <p className="mt-1 text-sm text-[var(--text-secondary)]">{details.panelLead}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {details.outcomes.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-md border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-xs font-semibold text-[var(--text-secondary)]"
                >
                  <Check className="h-3.5 w-3.5 text-[var(--primary)]" aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <ol className="grid gap-4 md:grid-cols-3">
            {details.steps.map((step, index) => (
              <li key={step.title} className="grid grid-cols-[auto_1fr] gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--primary-light)] text-[var(--primary)]">
                  <step.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[var(--text)]">
                    {index + 1}. {step.title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--text-secondary)]">
                    {step.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
