import CTA from "@/app/components/CTA";
import { siteContent, type Locale } from "@/lib/siteContent";

const details = {
  de: {
    eyebrow: "Projekt in Vorbereitung · Wien, Österreich",
    note: "Derzeit werden keine Dienstleistungen angeboten und keine Aufträge angenommen.",
  },
  en: {
    eyebrow: "Project in preparation · Vienna, Austria",
    note: "No services are currently offered and no orders are accepted.",
  },
} as const;

export default function HomeHero({ locale }: { locale: Locale }) {
  const hero = siteContent.hero[locale];
  const copy = details[locale];

  return (
    <section className="hero-gradient-enhanced py-14 md:py-20">
      <div className="mx-auto max-w-[1140px] px-6">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-[var(--primary)]">{copy.eyebrow}</p>
          <h1 className="text-balance text-4xl font-bold leading-tight text-[var(--text)] md:text-5xl">{hero.headline}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--text-secondary)]">{hero.subheadline}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTA href={hero.secondaryCtaHref}>{hero.secondaryCta}</CTA>
            <CTA href={hero.primaryCtaHref} variant="secondary">{hero.primaryCta}</CTA>
          </div>
          <p className="mt-5 text-sm font-medium text-[var(--muted)]">{copy.note}</p>
        </div>
      </div>
    </section>
  );
}
