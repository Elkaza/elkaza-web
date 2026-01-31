import Link from "next/link";
import { siteContent } from "@/lib/siteContent";
import CTA from "@/app/components/CTA";
import ServiceCards from "@/app/components/ServiceCards";
import { Check } from "lucide-react";

export const metadata = {
  title: "Elkaza Consulting - Networking, Security & Automation für KMUs",
  description:
    "Wir bauen stabile IT-Infrastruktur für wachsende Teams: Netzwerk, Sicherheit und Automatisierung aus einer Hand.",
};

export default function Home() {
  const hero = siteContent.hero.de;
  const painPoints = siteContent.painPoints.de;
  const whyUs = siteContent.whyUs.de;
  const caseStudies = siteContent.caseStudies.de;

  return (
    <main>
      {/* Hero */}
      <section className="relative text-center py-14 md:py-20 hero-gradient">
        <div className="max-w-[1140px] mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-5 text-[var(--text)] leading-tight tracking-tight">
            {hero.headline}
          </h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto mb-8 leading-relaxed">
            {hero.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTA href={hero.primaryCtaHref}>{hero.primaryCta}</CTA>
            <CTA href={hero.secondaryCtaHref} variant="secondary">
              {hero.secondaryCta}
            </CTA>
          </div>
        </div>
      </section>

      {/* Pain points - surface level */}
      <section className="py-12 md:py-14 bg-[var(--surface)]">
        <div className="max-w-[1140px] mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-6">
            Kommt Ihnen das bekannt vor?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {painPoints.map((point, i) => (
              <div
                key={i}
                className="p-5 rounded-xl border border-[var(--border)] bg-[var(--elevated)] shadow-[var(--shadow-sm)]"
              >
                <h3 className="font-semibold text-[var(--text)] mb-2">{point.title}</h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services - background level */}
      <section className="py-12 md:py-14 bg-[var(--bg)]">
        <div className="max-w-[1140px] mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-6">
            Unsere Leistungen
          </h2>
          <ServiceCards locale="de" items={siteContent.services.de.items} />
        </div>
      </section>

      {/* Why us - surface level */}
      <section className="py-12 md:py-14 bg-[var(--surface)]">
        <div className="max-w-[1140px] mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-2">
            {whyUs.title}
          </h2>
          <p className="text-[var(--text-secondary)] text-lg mb-2">{whyUs.lead}</p>
          <p className="text-[var(--muted)] mb-6">Wir liefern Lösungen, die funktionieren, nicht nur Konzepte.</p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whyUs.bullets.map((bullet, i) => (
              <li key={i} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[var(--primary)] mt-1 shrink-0" />
                <span className="text-[var(--text-secondary)] text-base leading-relaxed">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Featured case studies - background level */}
      <section className="py-12 md:py-14 bg-[var(--bg)]">
        <div className="max-w-[1140px] mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-6">
            Referenzen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {caseStudies.items.slice(0, 2).map((cs) => (
              <Link
                key={cs.slug}
                href={`/referenzen/${cs.slug}`}
                className="group block rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow-sm)] hover:border-[var(--primary)] hover:shadow-[var(--shadow-glow)] hover:bg-[var(--elevated)] transition-all duration-200"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-[var(--primary-foreground)] bg-[var(--primary)] px-3 py-1 rounded-full">
                    {cs.tag}
                  </span>
                  <span className="text-xs text-[var(--muted)]">{cs.meta}</span>
                </div>
                <h3 className="text-lg font-semibold text-[var(--text)] mb-2 group-hover:text-[var(--primary)] transition-colors">{cs.title}</h3>
                <p className="text-[var(--muted)] text-sm leading-relaxed">{cs.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - surface level */}
      <section className="py-12 md:py-14 bg-[var(--surface)]">
        <div className="max-w-[1140px] mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-5">
            Bereit für stabile Infrastruktur?
          </h2>
          <CTA href="/kontakt">Kostenloses Erstgespräch vereinbaren</CTA>
        </div>
      </section>
    </main>
  );
}
