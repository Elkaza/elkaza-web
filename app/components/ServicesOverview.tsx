import Link from "next/link";
import CoreServices from "@/app/components/CoreServices";
import { siteContent, type Locale } from "@/lib/siteContent";

const copy = {
  de: {
    title: "Geplante IT-Leistungsbereiche",
    lead: "Elkaza ist ein Projekt in Vorbereitung. Als künftiger Startpunkt sind klar begrenzte Assessments und Projektarbeit für kleine und mittlere Unternehmen vorgesehen.",
    primary: "Primärer Fokus für einen möglichen Start",
    roadmap: "Zukunfts-Roadmap",
    roadmapText: "Die folgenden Themen bleiben als Quellmaterial und mögliche spätere Vertiefungen erhalten. Sie sind nicht Teil eines validierten Startangebots.",
    status: "Derzeit werden keine Dienstleistungen angeboten und keine Aufträge angenommen.",
    statusLink: "Projektstatus ansehen",
  },
  en: {
    title: "Planned IT service areas",
    lead: "Elkaza is a project in preparation. The intended future starting point is clearly bounded assessment and project work for small and medium-sized businesses.",
    primary: "Primary focus for a possible launch",
    roadmap: "Future roadmap",
    roadmapText: "The following topics remain available as source material and possible later specialisms. They are not part of a validated launch offer.",
    status: "No services are currently offered and no orders are accepted.",
    statusLink: "View project status",
  },
} as const;

const future = {
  de: [["Zero Trust & Identity", "/leistungen/zero-trust"], ["Ransomware Resilience", "/leistungen/ransomware-resilience"], ["Cloud & SaaS Security", "/leistungen/cloud-saas-security"], ["Endpoint/XDR", "/leistungen/endpoint-security"], ["Secure AI Adoption", "/leistungen/ai-adoption"], ["NIS2 / Compliance", "/leistungen/nis2-compliance"], ["Managed Operations", "/leistungen/managed-ops"]],
  en: [["Zero Trust & Identity", "/en/services/zero-trust"], ["Ransomware Resilience", "/en/services/ransomware-resilience"], ["Cloud & SaaS Security", "/en/services/cloud-saas-security"], ["Endpoint/XDR", "/en/services/endpoint-security"], ["Secure AI Adoption", "/en/services/ai-adoption"], ["NIS2 / Compliance", "/en/services/nis2-compliance"], ["Managed Operations", "/en/services/managed-ops"]],
} as const;

export default function ServicesOverview({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const statusHref = locale === "de" ? "/kontakt" : "/en/contact";
  return <main>
    <section className="hero-gradient-enhanced py-14 md:py-20"><div className="mx-auto max-w-[1140px] px-6"><h1 className="max-w-3xl text-4xl font-bold text-[var(--text)] md:text-5xl">{c.title}</h1><p className="mt-5 max-w-3xl text-lg leading-relaxed text-[var(--text-secondary)]">{c.lead}</p><p className="mt-5 text-sm font-semibold text-[var(--primary)]">{c.status}</p></div></section>
    <section className="bg-[var(--surface)] py-12 md:py-16"><div className="mx-auto max-w-[1140px] px-6"><h2 className="mb-7 text-2xl font-bold text-[var(--text)]">{c.primary}</h2><CoreServices locale={locale} items={siteContent.services[locale].items} /></div></section>
    <section className="bg-[var(--bg)] py-12 md:py-16"><div className="mx-auto max-w-[960px] px-6"><h2 className="text-2xl font-bold text-[var(--text)]">{c.roadmap}</h2><p className="mt-3 text-[var(--text-secondary)]">{c.roadmapText}</p><ul className="mt-6 grid gap-3 sm:grid-cols-2">{future[locale].map(([name, href]) => <li key={name}><Link className="block rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4 font-medium text-[var(--text)] hover:border-[var(--primary)]" href={href}>{name}<span className="mt-1 block text-xs font-normal text-[var(--muted)]">{locale === "de" ? "Nicht validiertes Zukunftsthema" : "Unvalidated future topic"}</span></Link></li>)}</ul><Link href={statusHref} className="mt-8 inline-flex rounded-lg bg-[var(--primary)] px-5 py-3 font-semibold text-[var(--primary-foreground)]">{c.statusLink}</Link></div></section>
  </main>;
}
