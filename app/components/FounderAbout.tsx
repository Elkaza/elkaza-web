import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import type { Locale } from "@/lib/siteContent";

const copy = {
  de: {
    eyebrow: "Founder-led · Projekt in Vorbereitung",
    title: "Mohamed Elkaza",
    role: "Founder / Technical Lead",
    lead: "Mohamed entwickelt Elkaza in Wien als mögliches künftiges IT-Services-Projekt für kleine und mittlere Unternehmen.",
    background: "Technischer Hintergrund",
    text: "Der fachliche Hintergrund verbindet Wirtschaftsinformatik mit praktischen Themen aus IT-Infrastruktur, Netzwerken, Security-Grundlagen, Linux, Docker und Automatisierung. Der geplante Ansatz setzt auf klar begrenzte Assessments, nachvollziehbare Prioritäten und saubere Dokumentation.",
    scope: "Realistischer Startumfang",
    scopeText: "Vorgesehen sind zunächst kleine Assessment- und Projektumfänge. Ein Team, Partnernetzwerk, laufender Managed Service oder garantierte Servicezeiten werden nicht behauptet.",
    portfolio: "Technisches Portfolio auf elkaza.org",
    status: "Derzeit werden keine Leistungen angeboten und keine Aufträge angenommen.",
    back: "Geplante Leistungsbereiche",
    location: "Wien, Österreich",
  },
  en: {
    eyebrow: "Founder-led · Project in preparation",
    title: "Mohamed Elkaza",
    role: "Founder / Technical Lead",
    lead: "Mohamed is developing Elkaza in Vienna as a possible future IT-services project for small and medium-sized businesses.",
    background: "Technical background",
    text: "His background combines business informatics with practical work across IT infrastructure, networking, security fundamentals, Linux, Docker, and automation. The planned approach emphasizes bounded assessments, understandable priorities, and clear documentation.",
    scope: "Realistic initial scope",
    scopeText: "The intended starting point is small assessment and project engagements. No team, partner network, ongoing managed service, or guaranteed service hours are claimed.",
    portfolio: "Technical portfolio at elkaza.org",
    status: "No services are currently offered and no orders are accepted.",
    back: "Planned service areas",
    location: "Vienna, Austria",
  },
} as const;

export default function FounderAbout({ locale }: { locale: Locale }) {
  const c = copy[locale];
  return (
    <main>
      <section className="hero-gradient-enhanced py-16 md:py-24">
        <div className="mx-auto grid max-w-[960px] gap-8 px-6 sm:grid-cols-[220px_1fr] sm:items-center md:gap-14">
          <Image src="/images/mohamed-elkaza.jpg" alt="Mohamed Elkaza" width={768} height={1024} priority sizes="(max-width: 639px) 180px, 220px" className="aspect-[3/4] w-44 rounded-xl object-cover object-top sm:w-[220px]" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--primary)]">{c.eyebrow}</p>
            <h1 className="mt-3 text-[2.5rem] font-bold leading-tight tracking-tight text-[var(--text)] md:text-5xl">{c.title}</h1>
            <p className="mt-2 text-xl font-medium text-[var(--text-secondary)]">{c.role}</p>
            <p className="mt-5 max-w-[60ch] text-lg leading-relaxed text-[var(--text-secondary)]">{c.lead}</p>
            <p className="mt-4 flex items-center gap-2 text-sm text-[var(--muted)]"><MapPin className="h-4 w-4" aria-hidden="true" />{c.location}</p>
          </div>
        </div>
      </section>
      <section className="bg-[var(--surface)] py-16 md:py-24">
        <div className="mx-auto max-w-[960px] px-6">
          <div className="grid border-t border-[var(--border)] md:grid-cols-2">
            <article className="py-7 md:pr-10"><h2 className="text-2xl font-semibold text-[var(--text)]">{c.background}</h2><p className="mt-4 leading-relaxed text-[var(--text-secondary)]">{c.text}</p></article>
            <article className="border-t border-[var(--border)] py-7 md:border-l md:border-t-0 md:pl-10"><h2 className="text-2xl font-semibold text-[var(--text)]">{c.scope}</h2><p className="mt-4 leading-relaxed text-[var(--text-secondary)]">{c.scopeText}</p></article>
          </div>
        </div>
      </section>
      <section className="border-y border-[var(--status-border)] bg-[var(--status-bg)] py-10">
        <div className="mx-auto flex max-w-[960px] flex-col gap-5 px-6 md:flex-row md:items-center md:justify-between">
          <p className="max-w-xl font-medium text-[var(--status-text)]">{c.status}</p>
          <div className="flex flex-wrap gap-x-6 gap-y-3"><a href="https://elkaza.org" className="inline-flex items-center gap-1.5 font-semibold text-[var(--primary)]">{c.portfolio}<ArrowRight className="h-4 w-4" aria-hidden="true" /></a><Link href={locale === "de" ? "/leistungen" : "/en/services"} className="font-semibold text-[var(--text)]">{c.back}</Link></div>
        </div>
      </section>
    </main>
  );
}
