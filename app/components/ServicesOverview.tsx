import Link from "next/link";
import CoreServices from "@/app/components/CoreServices";
import { siteContent, type Locale } from "@/lib/siteContent";

const copy = {
  de: {
    title: "Geplante IT-Leistungsbereiche",
    lead: "Geplant sind klar begrenzte Assessments und Projektarbeit für kleine und mittlere Unternehmen.",
    primary: "Primärer Fokus für einen möglichen Start",
    roadmap: "Themen zur späteren Validierung",
    roadmapText: "Diese Themen sind nicht Teil des geplanten Startangebots. Sie können später einzeln geprüft werden.",
    status: "Derzeit werden keine Dienstleistungen angeboten und keine Aufträge angenommen.",
    statusLink: "Projektstatus ansehen",
  },
  en: {
    title: "Planned IT service areas",
    lead: "The plan is to begin with clearly bounded assessments and project work for small and medium-sized businesses.",
    primary: "Primary focus for a possible launch",
    roadmap: "Topics for later validation",
    roadmapText: "These topics are not part of the planned launch offer. They may be evaluated individually later.",
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
    <section className="hero-gradient-enhanced py-16 md:py-24"><div className="mx-auto max-w-[1140px] px-6"><h1 className="max-w-3xl text-[2.125rem] font-bold leading-tight tracking-tight text-[var(--text)] md:text-5xl">{c.title}</h1><p className="mt-5 max-w-[65ch] text-lg leading-relaxed text-[var(--text-secondary)]">{c.lead}</p><div className="mt-6 flex items-start gap-2 text-sm text-[var(--status-text)]"><span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-amber-500" aria-hidden="true"/><span>{c.status}</span></div></div></section>
    <section className="bg-[var(--surface)] py-16 md:py-24"><div className="mx-auto max-w-[1140px] px-6"><h2 className="mb-9 text-3xl font-bold tracking-tight text-[var(--text)]">{c.primary}</h2><CoreServices locale={locale} items={siteContent.services[locale].items} /></div></section>
    <section className="bg-[var(--bg)] py-16 md:py-24"><div className="mx-auto max-w-[960px] px-6"><h2 className="text-3xl font-bold tracking-tight text-[var(--text)]">{c.roadmap}</h2><p className="mt-4 max-w-[70ch] text-[var(--text-secondary)]">{c.roadmapText}</p><ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-y border-[var(--border)] py-5">{future[locale].map(([name, href]) => <li key={name}><Link className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--primary)]" href={href}>{name}<span aria-hidden="true">→</span></Link></li>)}</ul><Link href={statusHref} className="mt-8 inline-flex font-semibold text-[var(--primary)]">{c.statusLink} →</Link></div></section>
  </main>;
}
