import Link from "next/link";
import { siteContent } from "@/lib/siteContent";
import CTA from "@/app/components/CTA";
import CoreServices from "@/app/components/CoreServices";
import FAQ from "@/app/components/FAQ";
import HomeTrustStrip from "@/app/components/HomeTrustStrip";
import HomeDecisionPath from "@/app/components/HomeDecisionPath";
import HomeHero from "@/app/components/HomeHero";
import { Check } from "lucide-react";

export const metadata = {
  title: "Stabile IT-Infrastruktur fuer KMU in Wien",
  description:
    "Stabile IT-Infrastruktur, Security und Automatisierung fuer KMU in Wien: dokumentiert, zuverlaessig und ohne unnoetige Komplexitaet.",
  alternates: { canonical: "/" },
};

export default function Home() {
  const painPoints = siteContent.painPoints.de;
  const whyUs = siteContent.whyUs.de;
  const caseStudies = siteContent.caseStudies.de;
  const process = siteContent.process.de;

  return (
    <main>
      <HomeHero locale="de" />

      <HomeTrustStrip locale="de" />

      {/* Pain points - surface level */}
      <section className="py-12 md:py-14 bg-[var(--surface)]">
        <div className="max-w-[1140px] mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-6">
            Kommt Ihnen das bekannt vor?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
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

      <HomeDecisionPath locale="de" />

      {/* Services - background level */}
      <section className="py-12 md:py-14 bg-[var(--surface)]">
        <div className="max-w-[1140px] mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-2">
            Unsere Leistungen
          </h2>
          <p className="text-[var(--text-secondary)] mb-2">
            <strong>Startpunkt für die meisten: Security Baseline.</strong>
          </p>
          <p className="mb-8 max-w-3xl text-sm leading-relaxed text-[var(--text-secondary)]">
            Wählen Sie zuerst den passenden Einstieg: Netzwerk stabilisieren, Security-Basis schaffen,
            Zugriffe absichern oder wiederkehrende IT-Aufgaben automatisieren.
          </p>
          <CoreServices locale="de" items={siteContent.services.de.items} />
        </div>
      </section>

      {/* Security Baseline Highlight */}
      <section className="py-10 md:py-12 bg-[var(--bg)]">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <div className="p-6 rounded-xl border-2 border-[var(--primary)] bg-[var(--elevated)]">
            <h3 className="text-xl font-semibold text-[var(--text)] mb-3">
              Empfohlener Einstieg: Security Baseline
            </h3>
            <p className="text-sm text-[var(--text-secondary)] mb-4">
              <strong>Für wen:</strong> KMUs ohne eigenes Security-Team.<br />
              <strong>Dauer:</strong> 3-6 Wochen.<br />
              <strong>Am Ende:</strong> MFA aktiv, Backups getestet, Dokumentation übergeben.
            </p>
            <CTA href="/leistungen/security-baseline">Security Baseline starten</CTA>
          </div>
        </div>
      </section>

      {/* Process - surface level */}
      <section className="py-12 md:py-14 bg-[var(--surface)]">
        <div className="max-w-[1140px] mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-8 md:text-center">
            So läuft’s ab
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {process.map((step, i) => (
              <div key={i} className="flex-1 min-w-[200px] max-w-[250px] p-6 rounded-xl bg-[var(--elevated)] border border-[var(--border)] text-center">
                <div className="w-10 h-10 rounded-full bg-[var(--primary)] text-white flex items-center justify-center mx-auto mb-4 font-bold">{step.step}</div>
                <h3 className="text-lg font-semibold text-[var(--text)] mb-2">{step.title}</h3>
                <p className="text-sm text-[var(--text-secondary)]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us - surface level */}
      <section className="py-12 md:py-14 bg-[var(--surface)]">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-4">
                {whyUs.title}
              </h2>
              <p className="text-[var(--text-secondary)] text-lg mb-2">{whyUs.lead}</p>
              <p className="text-[var(--muted)] mb-6">Wir liefern Lösungen, die funktionieren, nicht nur Konzepte.</p>
              <ul className="space-y-3">
                {whyUs.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[var(--primary)] mt-1 shrink-0" />
                    <span className="text-[var(--text-secondary)] text-base leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Stats Block */}
            <div className="grid grid-cols-1 gap-4">
              {siteContent.stats.de.map((stat, i) => (
                <div key={i} className="p-5 rounded-xl bg-[var(--elevated)] border border-[var(--border)] shadow-[var(--shadow-sm)] flex flex-col items-center text-center">
                  <span className="text-sm font-medium text-[var(--muted)] uppercase tracking-wider mb-1">{stat.label}</span>
                  <span className="text-2xl md:text-3xl font-bold text-[var(--primary)] mb-1">{stat.value}</span>
                  <span className="text-xs text-[var(--text-secondary)]">{stat.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured case studies - background level */}
      <section className="py-12 md:py-14 bg-[var(--bg)]">
        <div className="max-w-[1140px] mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-6">
            Illustrative Szenarien
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
                  <span className="text-xs text-[var(--text-secondary)] font-medium">{cs.context}</span>
                </div>
                <h3 className="text-lg font-semibold text-[var(--text)] mb-4 group-hover:text-[var(--primary)] transition-colors">{cs.title}</h3>

                <div className="space-y-2 text-sm">
                  <div className="flex gap-2">
                    <span className="font-semibold text-[var(--text)] min-w-[70px]">Problem:</span>
                    <span className="text-[var(--text-secondary)]">{cs.problem}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-semibold text-[var(--text)] min-w-[70px]">Lösung:</span>
                    <span className="text-[var(--text-secondary)]">{cs.approach}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-semibold text-[var(--text)] min-w-[70px]">Ergebnis:</span>
                    <span className="text-[var(--text-secondary)]">{cs.result}</span>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-[var(--border)] text-xs text-[var(--muted)]">
                  <span className="font-medium">Tools:</span> {cs.tools}
                </div>
              </Link>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-[var(--muted)]">
            Fiktive Beispielszenarien zur Darstellung möglicher Vorgehensweisen; keine Kundenreferenzen.
          </p>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-10 md:py-12 bg-[var(--surface)]">
        <div className="max-w-[1140px] mx-auto px-6">
          <h2 className="text-xl font-semibold text-[var(--text)] mb-4 text-center">
            Was Sie bei jedem Projekt erhalten
          </h2>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-[var(--text-secondary)]">
            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-[var(--primary)]" />Dokumentation</span>
            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-[var(--primary)]" />Runbooks</span>
            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-[var(--primary)]" />Übergabegespräch</span>
            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-[var(--primary)]" />Zugangsliste</span>
            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-[var(--primary)]" />Baseline-Report</span>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ items={siteContent.faqs.de.items} locale="de" />

      {/* Final CTA - surface level */}
      <section className="py-12 md:py-14 bg-[var(--surface)]">
        <div className="max-w-[1140px] mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-5">
            Bereit für stabile Infrastruktur?
          </h2>
          <CTA href="/kontakt">Projektstatus ansehen</CTA>
          <p className="mt-3 text-sm text-[var(--muted)]">
            Sie erhalten eine klare Empfehlung – auch wenn wir nicht zusammenarbeiten.
          </p>
        </div>
      </section>
    </main>
  );
}
