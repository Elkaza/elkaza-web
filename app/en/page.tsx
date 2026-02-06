import Link from "next/link";
import { siteContent } from "@/lib/siteContent";
import CTA from "@/app/components/CTA";
import ServiceCards from "@/app/components/ServiceCards";
import PackageCards from "@/app/components/PackageCards";
import { Check } from "lucide-react";

export const metadata = {
  title: "Elkaza Consulting - Networking, Security & Automation for SMEs",
  description:
    "We build stable IT infrastructure for growing teams: networking, security, and automation from a single source.",
};

export default function HomeEN() {
  const hero = siteContent.hero.en;
  const painPoints = siteContent.painPoints.en;
  const whyUs = siteContent.whyUs.en;
  const caseStudies = siteContent.caseStudies.en;
  const process = siteContent.process.en;

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

      {/* Trust Strip */}
      <div className="border-y border-[var(--border)] bg-[var(--surface)]/50 backdrop-blur-sm">
        <div className="max-w-[1140px] mx-auto px-6 py-4">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-[var(--muted)] font-medium">
            {siteContent.trust.en.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[var(--primary)]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pain points */}
      <section className="py-12 md:py-14 bg-[var(--surface)]">
        <div className="max-w-[1140px] mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-6">
            Sound familiar?
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

      {/* Services */}
      <section className="py-12 md:py-14 bg-[var(--bg)]">
        <div className="max-w-[1140px] mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-6">
            Our Services
          </h2>
          <ServiceCards locale="en" items={siteContent.services.en.items} />
        </div>
      </section>

      {/* Process */}
      <section className="py-12 md:py-14 bg-[var(--surface)]">
        <div className="max-w-[1140px] mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-8 md:text-center">
            How it works
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

      {/* Packages */}
      <section className="py-12 md:py-14 bg-[var(--bg)]">
        <div className="max-w-[1140px] mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-6 text-center">
            Our Packages
          </h2>
          <PackageCards locale="en" />
        </div>
      </section>

      {/* Why us */}
      <section className="py-12 md:py-14 bg-[var(--surface)]">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-4">
                {whyUs.title}
              </h2>
              <p className="text-[var(--text-secondary)] text-lg mb-2">{whyUs.lead}</p>
              <p className="text-[var(--muted)] mb-6">We deliver solutions that work, not just concepts.</p>
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
              {siteContent.stats.en.map((stat, i) => (
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

      {/* Featured case studies */}
      <section className="py-12 md:py-14 bg-[var(--bg)]">
        <div className="max-w-[1140px] mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-6">
            Case Studies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {caseStudies.items.slice(0, 2).map((cs) => (
              <Link
                key={cs.slug}
                href={`/en/case-studies/${cs.slug}`}
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
                    <span className="font-semibold text-[var(--text)] min-w-[70px]">Solution:</span>
                    <span className="text-[var(--text-secondary)]">{cs.approach}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-semibold text-[var(--text)] min-w-[70px]">Result:</span>
                    <span className="text-[var(--text-secondary)]">{cs.result}</span>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-[var(--border)] text-xs text-[var(--muted)]">
                  <span className="font-medium">Tools:</span> {cs.tools}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-14 bg-[var(--surface)]">
        <div className="max-w-[1140px] mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-5">
            Ready for stable infrastructure?
          </h2>
          <CTA href="/en/contact">Schedule a Free Consultation</CTA>
        </div>
      </section>
    </main>
  );
}
