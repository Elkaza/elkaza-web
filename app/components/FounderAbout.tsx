import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import type { Locale } from "@/lib/siteContent";

const copy = {
  de: {
    eyebrow: "Projekt in Vorbereitung",
    title: "Wer hinter Elkaza steht",
    lead: "Elkaza wird von Mohamed Elkaza in Wien als mögliches künftiges IT-Services-Projekt für kleine und mittlere Unternehmen entwickelt.",
    background: "Technischer Hintergrund",
    text: "Der fachliche Hintergrund verbindet Wirtschaftsinformatik mit praktischen Themen aus IT-Infrastruktur, Netzwerken, Security-Grundlagen, Linux, Docker und Automatisierung. Der geplante Ansatz setzt auf klar begrenzte Assessments, nachvollziehbare Prioritäten und saubere Dokumentation.",
    scope: "Realistischer Startumfang",
    scopeText: "Vorgesehen sind zunächst kleine Assessment- und Projektumfänge. Ein Team, Partnernetzwerk, laufender Managed Service oder garantierte Servicezeiten werden nicht behauptet.",
    portfolio: "Technisches Portfolio und Projekte auf elkaza.org",
    status: "Derzeit werden keine Leistungen angeboten und keine Aufträge angenommen.",
    back: "Geplante Leistungsbereiche",
  },
  en: {
    eyebrow: "Project in preparation",
    title: "Who is behind Elkaza",
    lead: "Mohamed Elkaza is developing Elkaza in Vienna as a possible future IT-services project for small and medium-sized businesses.",
    background: "Technical background",
    text: "His background combines business informatics with practical work across IT infrastructure, networking, security fundamentals, Linux, Docker, and automation. The planned approach emphasizes bounded assessments, understandable priorities, and clear documentation.",
    scope: "Realistic initial scope",
    scopeText: "The intended starting point is small assessment and project engagements. No team, partner network, ongoing managed service, or guaranteed service hours are claimed.",
    portfolio: "Technical portfolio and projects at elkaza.org",
    status: "No services are currently offered and no orders are accepted.",
    back: "Planned service areas",
  },
} as const;

export default function FounderAbout({ locale }: { locale: Locale }) {
  const c = copy[locale];
  return <main>
    <section className="hero-gradient-enhanced py-14 md:py-20"><div className="mx-auto grid max-w-[960px] gap-8 px-6 md:grid-cols-[200px_1fr] md:items-center"><div className="flex aspect-square items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--surface)] text-6xl font-bold text-[var(--primary)]" aria-label="Mohamed Elkaza">ME</div><div><p className="text-sm font-semibold uppercase tracking-wide text-[var(--primary)]">{c.eyebrow}</p><h1 className="mt-3 text-4xl font-bold text-[var(--text)] md:text-5xl">{c.title}</h1><p className="mt-5 text-lg leading-relaxed text-[var(--text-secondary)]">{c.lead}</p><p className="mt-4 flex items-center gap-2 text-sm text-[var(--muted)]"><MapPin className="h-4 w-4"/>Vienna, Austria</p></div></div></section>
    <section className="bg-[var(--surface)] py-12 md:py-16"><div className="mx-auto grid max-w-[960px] gap-6 px-6 md:grid-cols-2"><article className="rounded-xl border border-[var(--border)] bg-[var(--bg)] p-6"><h2 className="text-xl font-bold text-[var(--text)]">{c.background}</h2><p className="mt-3 leading-relaxed text-[var(--text-secondary)]">{c.text}</p></article><article className="rounded-xl border border-[var(--border)] bg-[var(--bg)] p-6"><h2 className="text-xl font-bold text-[var(--text)]">{c.scope}</h2><p className="mt-3 leading-relaxed text-[var(--text-secondary)]">{c.scopeText}</p></article></div></section>
    <section className="bg-[var(--bg)] py-12 text-center"><div className="mx-auto max-w-2xl px-6"><p className="font-semibold text-[var(--text)]">{c.status}</p><div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row"><a href="https://elkaza.org" className="inline-flex items-center justify-center gap-1 rounded-lg bg-[var(--primary)] px-5 py-3 font-semibold text-[var(--primary-foreground)]">{c.portfolio}<ArrowRight className="h-4 w-4"/></a><Link href={locale === "de" ? "/leistungen" : "/en/services"} className="inline-flex items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] px-5 py-3 font-semibold text-[var(--text)]">{c.back}</Link></div></div></section>
  </main>;
}
