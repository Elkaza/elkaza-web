import Link from "next/link";
import { ArrowRight, ClipboardCheck, MapPin, Network, ShieldCheck, Workflow } from "lucide-react";
import FAQ from "@/app/components/FAQ";
import HomeHero from "@/app/components/HomeHero";
import { siteContent, type Locale } from "@/lib/siteContent";

const copy = {
  de: {
    problemsTitle: "Drei typische Ausgangslagen in kleinen Unternehmen",
    problems: [
      ["Unklare Zugänge", "Administrationsrechte, MFA und externe Zugänge sind nicht einheitlich dokumentiert."],
      ["Ungeprüfte Wiederherstellung", "Backups bestehen, aber Restore-Abläufe und Zuständigkeiten sind unklar."],
      ["Gewachsene Abläufe", "Wiederkehrende Aufgaben und Systemänderungen hängen von Einzelwissen ab."],
    ],
    areasTitle: "Drei geplante Leistungsbereiche",
    areasLead: "Der vorgesehene Startpunkt sind klar begrenzte Assessments und Projektarbeit. Derzeit besteht noch kein Angebot.",
    areas: [
      ["IT & Security Baseline", "Ist-Stand, MFA und Zugänge, Backup-/Restore-Bereitschaft, Patch-Grundlagen, Roadmap und Dokumentation.", ShieldCheck, "/leistungen/security-baseline"],
      ["Infrastruktur & Zugänge", "Netzwerk, Remote-Zugriff, Segmentierung sowie System-, Zugangs- und Infrastruktur-Dokumentation.", Network, "/leistungen/networking"],
      ["Automatisierung & dokumentierter Betrieb", "Wiederkehrende Aufgaben, Linux/Docker wo passend, Monitoring-Konzepte, Runbooks und Deployment-Dokumentation.", Workflow, "/leistungen/automation"],
    ],
    areaLink: "Konzept ansehen",
    processTitle: "So könnte ein Assessment später ablaufen",
    founderTitle: "Wer hinter Elkaza steht",
    founderText: "Mohamed Elkaza entwickelt Elkaza als mögliches künftiges IT-Services-Projekt für KMU. Der technische Hintergrund umfasst Wirtschaftsinformatik, IT-Infrastruktur, Netzwerke, Security-Grundlagen und Automatisierung.",
    location: "Wien, Österreich",
    portfolio: "Technisches Portfolio und Projekte",
    scenariosTitle: "Beispielszenarien",
    scenariosLead: "Fiktive Situationen zur Erklärung möglicher Ansätze und Zielbilder – keine Kundenreferenzen.",
    labels: ["Situation", "Möglicher Ansatz", "Zielbild"],
    allScenarios: "Alle Beispielszenarien",
    statusTitle: "Projekt in Vorbereitung",
    statusText: "Elkaza nimmt derzeit keine Anfragen oder Aufträge an. Ein geschäftlicher Kontaktkanal wird erst vor einer möglichen kommerziellen Aktivierung eingerichtet.",
    statusLink: "Projektstatus ansehen",
  },
  en: {
    problemsTitle: "Three common starting points in small businesses",
    problems: [
      ["Unclear access", "Administrative privileges, MFA, and external access are not documented consistently."],
      ["Unverified recovery", "Backups exist, but restore procedures and ownership are unclear."],
      ["Processes built around individuals", "Recurring tasks and system changes depend on knowledge held by one person."],
    ],
    areasTitle: "Three planned service areas",
    areasLead: "The intended starting model is clearly bounded assessment and project work. No offer is currently available.",
    areas: [
      ["IT & Security Baseline", "Current-state review, MFA and access, backup/restore readiness, patch fundamentals, roadmap, and documentation.", ShieldCheck, "/en/services/security-baseline"],
      ["Infrastructure & Access", "Networking, remote access, segmentation, and clear system, access, and infrastructure documentation.", Network, "/en/services/networking"],
      ["Automation & Documented Operations", "Recurring tasks, Linux/Docker where appropriate, monitoring concepts, runbooks, and deployment documentation.", Workflow, "/en/services/automation"],
    ],
    areaLink: "View concept",
    processTitle: "How a future assessment could work",
    founderTitle: "Who is behind Elkaza",
    founderText: "Mohamed Elkaza is developing Elkaza as a possible future IT-services project for SMEs. His technical background covers business informatics, IT infrastructure, networking, security fundamentals, and automation.",
    location: "Vienna, Austria",
    portfolio: "Technical portfolio and projects",
    scenariosTitle: "Illustrative Scenarios",
    scenariosLead: "Fictional situations explaining possible approaches and target states – not customer references.",
    labels: ["Situation", "Possible approach", "Target state"],
    allScenarios: "All illustrative scenarios",
    statusTitle: "Project in preparation",
    statusText: "Elkaza is not currently accepting inquiries or orders. A business contact channel will only be activated before a possible commercial launch.",
    statusLink: "View project status",
  },
} as const;

export default function ProfessionalHome({ locale }: { locale: Locale }) {
  const c = copy[locale];
  const process = siteContent.process[locale];
  const scenarios = siteContent.caseStudies[locale].items.slice(0, 2);
  const base = locale === "de" ? "/referenzen" : "/en/case-studies";
  const statusHref = locale === "de" ? "/kontakt" : "/en/contact";

  return (
    <main>
      <HomeHero locale={locale} />

      <section className="bg-[var(--surface)] py-12 md:py-16">
        <div className="mx-auto max-w-[1140px] px-6">
          <h2 className="text-2xl font-bold text-[var(--text)] md:text-3xl">{c.problemsTitle}</h2>
          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {c.problems.map(([title, text]) => <article key={title} className="rounded-xl border border-[var(--border)] bg-[var(--bg)] p-5"><h3 className="font-semibold text-[var(--text)]">{title}</h3><p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="bg-[var(--bg)] py-12 md:py-16">
        <div className="mx-auto max-w-[1140px] px-6">
          <h2 className="text-2xl font-bold text-[var(--text)] md:text-3xl">{c.areasTitle}</h2>
          <p className="mt-3 max-w-3xl text-[var(--text-secondary)]">{c.areasLead}</p>
          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {c.areas.map(([title, text, Icon, href]) => <Link key={title} href={href} className="group rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 hover:border-[var(--primary)]"><Icon className="h-6 w-6 text-[var(--primary)]" aria-hidden="true"/><h3 className="mt-4 font-semibold text-[var(--text)]">{title}</h3><p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">{text}</p><span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[var(--primary)]">{c.areaLink}<ArrowRight className="h-4 w-4"/></span></Link>)}
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface)] py-12 md:py-16">
        <div className="mx-auto max-w-[960px] px-6">
          <h2 className="text-2xl font-bold text-[var(--text)] md:text-3xl">{c.processTitle}</h2>
          <ol className="mt-7 grid gap-5 md:grid-cols-3">{process.map((step) => <li key={step.step} className="rounded-xl border border-[var(--border)] p-5"><ClipboardCheck className="h-5 w-5 text-[var(--primary)]"/><h3 className="mt-3 font-semibold text-[var(--text)]">{step.step}. {step.title}</h3><p className="mt-2 text-sm text-[var(--text-secondary)]">{step.desc}</p></li>)}</ol>
        </div>
      </section>

      <section className="bg-[var(--bg)] py-12 md:py-16">
        <div className="mx-auto grid max-w-[960px] gap-8 px-6 md:grid-cols-[180px_1fr] md:items-center">
          <div className="flex aspect-square items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--surface)] text-5xl font-bold text-[var(--primary)]" aria-label="Mohamed Elkaza">ME</div>
          <div><h2 className="text-2xl font-bold text-[var(--text)] md:text-3xl">{c.founderTitle}</h2><p className="mt-4 leading-relaxed text-[var(--text-secondary)]">{c.founderText}</p><p className="mt-4 flex items-center gap-2 text-sm text-[var(--muted)]"><MapPin className="h-4 w-4"/>{c.location}</p><a className="mt-4 inline-flex items-center gap-1 font-semibold text-[var(--primary)]" href="https://elkaza.org">{c.portfolio}<ArrowRight className="h-4 w-4"/></a></div>
        </div>
      </section>

      <section className="bg-[var(--surface)] py-12 md:py-16">
        <div className="mx-auto max-w-[1140px] px-6"><h2 className="text-2xl font-bold text-[var(--text)] md:text-3xl">{c.scenariosTitle}</h2><p className="mt-3 text-[var(--text-secondary)]">{c.scenariosLead}</p><div className="mt-7 grid gap-5 md:grid-cols-2">{scenarios.map((item) => <Link key={item.slug} href={`${base}/${item.slug}`} className="rounded-xl border border-[var(--border)] bg-[var(--bg)] p-5 hover:border-[var(--primary)]"><h3 className="font-semibold text-[var(--text)]">{item.title}</h3>{[[c.labels[0], item.problem],[c.labels[1],item.approach],[c.labels[2],item.result]].map(([label,text]) => <p key={label} className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]"><strong className="text-[var(--text)]">{label}:</strong> {text}</p>)}</Link>)}</div><Link href={base} className="mt-6 inline-flex items-center gap-1 font-semibold text-[var(--primary)]">{c.allScenarios}<ArrowRight className="h-4 w-4"/></Link></div>
      </section>

      <section className="bg-[var(--bg)] py-12 text-center md:py-16"><div className="mx-auto max-w-2xl px-6"><h2 className="text-2xl font-bold text-[var(--text)]">{c.statusTitle}</h2><p className="mt-3 text-[var(--text-secondary)]">{c.statusText}</p><Link href={statusHref} className="mt-6 inline-flex rounded-lg bg-[var(--primary)] px-5 py-3 font-semibold text-[var(--primary-foreground)]">{c.statusLink}</Link></div></section>
      <FAQ items={siteContent.faqs[locale].items} locale={locale} />
    </main>
  );
}
