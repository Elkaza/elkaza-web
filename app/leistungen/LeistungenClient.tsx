"use client";

import { useState } from "react";
import Link from "next/link";
import {
    Network, ShieldCheck, Lock, ShieldAlert, Cog, Headphones, Cloud,
    Laptop, Sparkles, ClipboardCheck, FileText, CheckCircle,
    ArrowRight, Settings, BookOpen, Presentation, MessageSquare, HelpCircle
} from "lucide-react";
import CTA from "@/app/components/CTA";

// Service data with icons and categories
const services = [
    { slug: "networking", icon: Network, title: "Netzwerk & Infrastruktur", benefit: "Stabile Verbindungen für wachsende Teams.", bullets: ["Zuverlässiges Wi-Fi und VPN", "Saubere Netzwerksegmentierung", "Dokumentierte Topologie"], categories: ["networking"] },
    { slug: "security-baseline", icon: ShieldCheck, title: "Security Baseline", benefit: "Die Grundlagen richtig machen.", bullets: ["MFA auf allen Konten", "Patch-Management aufgesetzt", "Backups getestet"], categories: ["security"], recommended: true },
    { slug: "zero-trust", icon: Lock, title: "Zero Trust & Identity", benefit: "Zugriff nur für die, die ihn brauchen.", bullets: ["Identitätsbasierte Zugriffskontrolle", "Conditional Access Policies", "Privileged Access Management"], categories: ["security"] },
    { slug: "ransomware-resilience", icon: ShieldAlert, title: "Ransomware Resilience", benefit: "Bereit für den Ernstfall.", bullets: ["Immutable Backups", "Getestete Restore-Prozesse", "Incident-Runbooks"], categories: ["security"] },
    { slug: "automation", icon: Cog, title: "Automation & Platform Engineering", benefit: "Weniger manuelle Arbeit. Weniger Fehler.", bullets: ["Automatisierte Deployments", "Infrastructure as Code", "Self-Service für Teams"], categories: ["automation"] },
    { slug: "managed-ops", icon: Headphones, title: "Managed Operations", benefit: "Geplantes Modell für laufende Betreuung.", bullets: ["Monitoring-Konzept", "Incident-Abläufe", "Regelmäßige Reviews"], categories: ["operations"] },
    { slug: "cloud-saas-security", icon: Cloud, title: "Cloud & SaaS Security", benefit: "Kontrolle über Ihre Cloud-Umgebung.", bullets: ["Cloud Security Posture", "Konfigurationsaudits", "Shadow-IT-Erkennung"], categories: ["security", "cloud"] },
    { slug: "endpoint-security", icon: Laptop, title: "Endpoint & Device Security", benefit: "Jedes Gerät abgesichert.", bullets: ["EDR/XDR-Rollout", "Device Compliance", "Sichere Gerätekonfiguration"], categories: ["security"] },
    { slug: "ai-adoption", icon: Sparkles, title: "Secure AI Adoption", benefit: "KI nutzen, ohne Daten zu riskieren.", bullets: ["Datenklassifizierung", "Berechtigungs-Cleanup", "AI-Nutzungsrichtlinie"], categories: ["compliance"] },
    { slug: "nis2-compliance", icon: ClipboardCheck, title: "NIS2 / Compliance Readiness", benefit: "Audit-bereit mit klaren Nachweisen.", bullets: ["Gap-Analyse", "Kontroll-Dokumentation", "Incident-Readiness"], categories: ["compliance"] },
];

const categories = [
    { id: "all", label: "Alle" },
    { id: "security", label: "Security" },
    { id: "networking", label: "Netzwerk" },
    { id: "cloud", label: "Cloud" },
    { id: "automation", label: "Automation" },
    { id: "operations", label: "Operations" },
    { id: "compliance", label: "Compliance" },
];

const entryPaths = [
    {
        title: "Ich brauche zuerst Klarheit",
        label: "Assessment",
        text: "Bestandsaufnahme, Risiken und priorisierte Maßnahmen, bevor etwas umgebaut wird.",
        href: "/pakete",
    },
    {
        title: "Ich will konkrete Verbesserungen",
        label: "Security Baseline",
        text: "MFA, Backups, Patch-Stand, Admin-Zugänge und Dokumentation pragmatisch verbessern.",
        href: "/leistungen/security-baseline",
    },
    {
        title: "Ich brauche laufenden Betrieb",
        label: "Managed Operations",
        text: "Monitoring, Patch-Rhythmus, Backup-Prüfung und klare Reaktion bei Störungen.",
        href: "/leistungen/managed-ops",
    },
];



const deliverables = [
    { icon: FileText, name: "Dokumentation", desc: "Jede Änderung dokumentiert." },
    { icon: BookOpen, name: "Wissenstransfer", desc: "Schulung für Ihr Team." },
    { icon: Presentation, name: "Abschlussbericht", desc: "Zusammenfassung und Empfehlungen." },
    { icon: MessageSquare, name: "Übergabe", desc: "Klare nächste Schritte und Verantwortlichkeiten." },
];

const faqs = [
    { q: "Kann man diese Leistungen schon beauftragen?", a: "Nein. Diese Seite dokumentiert den aktuellen Planungsstand. Derzeit werden keine Angebote erstellt und keine Aufträge angenommen." },
    { q: "Warum sind die Bereiche trotzdem beschrieben?", a: "Die Beschreibungen helfen, den geplanten Fokus transparent zu machen: Netzwerk, Security, Zugänge, Backups und dokumentierter Betrieb." },
    { q: "Sind die Szenarien Kundenreferenzen?", a: "Nein. Sie sind illustrative Beispielverläufe und keine echten Kundenprojekte." },
    { q: "Wann werden Preise und Kontaktweg ergänzt?", a: "Erst nach rechtlicher und organisatorischer Klärung, inklusive vollständiger Anbieterkennzeichnung und aktivem Kontaktkanal." },
];

export default function LeistungenClient() {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredServices = activeCategory === "all"
        ? services
        : services.filter(s => s.categories.includes(activeCategory));

    return (
        <main className="scroll-smooth">
            {/* Hero */}
            <section className="py-12 md:py-20 hero-gradient-enhanced">
                <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
                    <div className="md:flex md:items-center md:justify-between gap-10">
                        <div className="md:w-3/5">
                            <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-4">
                                Geplante IT-Leistungsbereiche für Wiener KMUs.
                            </h1>
                            <p className="text-lg leading-relaxed text-[var(--text-secondary)] mb-8 md:text-xl">
                                Diese Seite zeigt, wie ein späteres Angebot für Netzwerk, Security, Zugänge, Backups und dokumentierten IT-Betrieb aufgebaut sein könnte. Derzeit ist Elkaza ein Projekt in Vorbereitung.
                            </p>
                            <div className="flex flex-wrap gap-4 mb-8">
                                <CTA href="/kontakt">Projektstatus ansehen</CTA>
                                <Link href="/pakete" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[var(--border)] text-[var(--text)] hover:bg-[var(--surface)] transition-colors">
                                    Pakete ansehen
                                </Link>
                            </div>

                            <ul className="text-sm text-[var(--muted)] space-y-2">
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-[var(--primary)]" />
                                    <span>Konzeptphase: keine Auftragsannahme über diese Website</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-[var(--primary)]" />
                                    <span>Geplanter Fokus: KMU, Microsoft-Umgebungen, Open Source und Dokumentation</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-[var(--primary)]" />
                                    <span>Preise, SLAs und Kontaktweg werden erst vor kommerzieller Aktivierung ergänzt</span>
                                </li>
                            </ul>
                        </div>
                        {/* Right side visual placeholder or breathing room */}
                        <div className="hidden md:block md:w-2/5">
                            {/* Abstract visual/icon could go here, currently clean space */}
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[var(--bg)] py-10 md:py-12">
                <div className="mx-auto max-w-[1140px] px-4 sm:px-6">
                    <div className="mb-6 max-w-3xl">
                        <h2 className="text-2xl font-semibold text-[var(--text)]">Welcher Einstieg passt?</h2>
                        <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                            Wenn das Angebot später aktiviert wird, könnten diese drei Einstiegspunkte die häufigsten Situationen abdecken.
                        </p>
                    </div>
                    <div className="grid gap-4 md:grid-cols-3">
                        {entryPaths.map((path) => (
                            <Link
                                key={path.title}
                                href={path.href}
                                className="group flex min-w-0 flex-col rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow-sm)] transition-all hover:border-[var(--primary)] hover:bg-[var(--elevated)]"
                            >
                                <span className="mb-3 w-fit rounded-md border border-[var(--border)] bg-[var(--elevated)] px-2.5 py-1 text-xs font-bold text-[var(--text)]">
                                    {path.label}
                                </span>
                                <h3 className="text-lg font-semibold text-[var(--text)] group-hover:text-[var(--primary)]">{path.title}</h3>
                                <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--text-secondary)]">{path.text}</p>
                                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[var(--primary)]">
                                    Konzept ansehen <ArrowRight className="h-4 w-4" aria-hidden="true" />
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* For Whom / When Useful Block */}
            <section className="py-10 bg-[var(--surface)] border-y border-[var(--border)]">
                <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="font-semibold text-[var(--text)] mb-3 flex items-center gap-2">
                                <Settings className="w-5 h-5 text-[var(--primary)]" /> Für wen?
                            </h3>
                            <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                                <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-1.5" />Kleine & mittlere Unternehmen (10-200 User)</li>
                                <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-1.5" />Agenturen, Kanzleien & Praxen</li>
                                <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-1.5" />Firmen mit hybriden Teams (Office/Remote)</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-[var(--text)] mb-3 flex items-center gap-2">
                                <ShieldAlert className="w-5 h-5 text-[var(--primary)]" /> Wann sinnvoll?
                            </h3>
                            <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                                <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-1.5" />Das Netzwerk ist langsam oder fällt aus</li>
                                <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-1.5" />Sorge vor Ransomware & Datenverlust</li>
                                <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-1.5" />Keine Übersicht über Geräte & Zugriffe</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-[var(--text)] mb-3 flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-[var(--primary)]" /> Geplanter Nutzen
                            </h3>
                            <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                                <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-1.5" />Ein klarer Ansprechpartner für technische Fragen</li>
                                <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-1.5" />Security-Basics ohne unnötige Komplexität</li>
                                <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-1.5" />Planbare Modelle statt Ad-hoc-Betrieb</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Category Tabs */}
            <section className="py-6 bg-[var(--bg)]">
                <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
                    <div className="flex gap-2 overflow-x-auto pb-1 md:flex-wrap md:justify-center" role="tablist" aria-label="Kategorien">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                role="tab"
                                aria-selected={activeCategory === cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-[var(--primary)] ${activeCategory === cat.id
                                    ? "bg-[var(--primary)] text-white"
                                    : "bg-[var(--surface)] text-[var(--text-secondary)] hover:bg-[var(--elevated)] hover:text-[var(--text)]"
                                    }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Cards Grid */}
            <section className="py-10 md:py-14 bg-[var(--bg)]">
                <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {filteredServices.map((service) => (
                            <Link
                                key={service.slug}
                                href={`/leistungen/${service.slug}`}
                                className={`group relative flex min-w-0 flex-col rounded-xl border bg-[var(--surface)] p-5 transition-all hover:bg-[var(--elevated)] ${service.recommended
                                    ? "border-[var(--primary)] ring-1 ring-[var(--primary)]"
                                    : "border-[var(--border)] hover:border-[var(--primary)]"
                                    }`}
                            >
                                {service.recommended && (
                                    <span className="absolute -top-3 left-4 rounded-full bg-[var(--primary)] px-2.5 py-0.5 text-xs font-semibold text-white">
                                        Empfohlener Einstieg
                                    </span>
                                )}
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="p-2 rounded-lg bg-[var(--primary-light)]">
                                        <service.icon className="w-5 h-5 text-[var(--primary)]" aria-hidden="true" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-[var(--text)] group-hover:text-[var(--primary)] transition-colors">
                                        {service.title}
                                    </h3>
                                </div>
                                <p className="text-sm text-[var(--text-secondary)] mb-3">{service.benefit}</p>
                                <ul className="mb-4 space-y-1.5">
                                    {service.bullets.map((b, i) => (
                                        <li key={i} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                                            <CheckCircle className="w-3.5 h-3.5 text-[var(--primary)] mt-0.5 shrink-0" />
                                            <span>{b}</span>
                                        </li>
                                    ))}
                                </ul>
                                <span className="mt-auto flex items-center gap-1 text-sm font-semibold text-[var(--link)] group-hover:text-[var(--link-hover)]">
                                    Mehr erfahren <ArrowRight className="w-4 h-4" />
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Recommended Start (Security Baseline) */}
            <section className="py-12 md:py-16 bg-[var(--surface)]">
                <div className="max-w-[800px] mx-auto px-6 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--primary-light)] text-[var(--primary)] text-sm font-medium mb-4">
                        <ShieldCheck className="w-4 h-4" /> Unsere Empfehlung
                    </div>
                    <h2 className="text-2xl md:text-3xl font-semibold text-[var(--text)] mb-4">
                        Geplanter Start: Security Baseline
                    </h2>
                    <p className="text-[var(--text-secondary)] mb-6">
                        Viele Risiken entstehen durch fehlende MFA, unklare Zugriffsrechte, ungeprüfte Backups oder veraltete Systeme. Die Security Baseline ist als strukturierter Einstieg gedacht, um genau diese Grundlagen sichtbar und priorisierbar zu machen.
                    </p>
                    <CTA href="/leistungen/security-baseline">Security Baseline ansehen</CTA>
                </div>
            </section>

            {/* Process - So läuft es ab */}
            <section className="py-12 md:py-16 bg-[var(--bg)]">
                <div className="max-w-[1140px] mx-auto px-6">
                    <h2 className="text-2xl font-semibold text-[var(--text)] mb-8 text-center">So läuft es ab</h2>
                    <div className="grid md:grid-cols-4 gap-4 relative">
                        {/* Steps */}
                        <div className="p-6 rounded-xl bg-[var(--surface)] border border-[var(--border)] relative z-10">
                            <span className="text-4xl font-bold text-[var(--primary-light)] absolute top-4 right-4 opacity-50">1</span>
                            <h3 className="text-lg font-semibold text-[var(--text)] mb-2">Analyse</h3>
                            <p className="text-sm text-[var(--text-secondary)]">Wir prüfen Ihren Status Quo (Infrastruktur, Security, Prozesse). Kein Fachchinesisch, nur Fakten.</p>
                        </div>
                        <div className="p-6 rounded-xl bg-[var(--surface)] border border-[var(--border)] relative z-10">
                            <span className="text-4xl font-bold text-[var(--primary-light)] absolute top-4 right-4 opacity-50">2</span>
                            <h3 className="text-lg font-semibold text-[var(--text)] mb-2">Konzept</h3>
                            <p className="text-sm text-[var(--text-secondary)]">Ein späteres Angebot würde einen klaren Plan mit priorisierten Maßnahmen enthalten.</p>
                        </div>
                        <div className="p-6 rounded-xl bg-[var(--surface)] border border-[var(--border)] relative z-10">
                            <span className="text-4xl font-bold text-[var(--primary-light)] absolute top-4 right-4 opacity-50">3</span>
                            <h3 className="text-lg font-semibold text-[var(--text)] mb-2">Umsetzung</h3>
                            <p className="text-sm text-[var(--text-secondary)]">Umsetzung wäre erst nach einem klaren Angebot und abgestimmtem Umfang möglich.</p>
                        </div>
                        <div className="p-6 rounded-xl bg-[var(--surface)] border border-[var(--border)] relative z-10">
                            <span className="text-4xl font-bold text-[var(--primary-light)] absolute top-4 right-4 opacity-50">4</span>
                            <h3 className="text-lg font-semibold text-[var(--text)] mb-2">Betrieb</h3>
                            <p className="text-sm text-[var(--text-secondary)]">Übergabe, Dokumentation oder laufende Betreuung sind als mögliche Modelle skizziert.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Studies */}
            <section className="py-12 md:py-16 bg-[var(--surface)]">
                <div className="max-w-[1140px] mx-auto px-6">
                    <h2 className="text-2xl font-semibold text-[var(--text)] mb-3 text-center">Illustrative Szenarien</h2>
                    <p className="mx-auto mb-8 max-w-2xl text-center text-sm text-[var(--muted)]">
                        Die folgenden Beispiele sind fiktive Szenarien zur Erklärung der geplanten Arbeitsweise; sie sind keine Kundenreferenzen.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Case 1 */}
                        <div className="p-6 rounded-xl bg-[var(--bg)] border border-[var(--border)]">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-semibold">Beispiel: Kanzlei in Wien</span>
                            </div>
                            <h3 className="text-lg font-semibold text-[var(--text)] mb-2">Situation</h3>
                            <p className="text-sm text-[var(--text-secondary)] mb-3">VPN-Verbindung war langsam und instabil. Sorge vor Ransomware und Datenverlust bei sensiblen Klienten-Akten.</p>
                            <h3 className="text-lg font-semibold text-[var(--text)] mb-2">Möglicher Ansatz</h3>
                            <ul className="text-sm text-[var(--text-secondary)] space-y-1">
                                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[var(--primary)] mt-0.5" /> Netzwerksegmentierung planen</li>
                                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[var(--primary)] mt-0.5" /> Firewall-Regeln, MFA und Backup-Konzept prüfen</li>
                                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[var(--primary)] mt-0.5" /> <strong>Zielbild:</strong> stabilerer Fernzugriff und nachvollziehbare Wiederherstellung.</li>
                            </ul>
                        </div>
                        {/* Case 2 */}
                        <div className="p-6 rounded-xl bg-[var(--bg)] border border-[var(--border)]">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-semibold">Beispiel: Remote-Team</span>
                            </div>
                            <h3 className="text-lg font-semibold text-[var(--text)] mb-2">Situation</h3>
                            <p className="text-sm text-[var(--text-secondary)] mb-3">Onboarding neuer Mitarbeiter dauerte Tage. Zugriffsrechte waren chaotisch verteilt (&quot;Wildwuchs&quot;).</p>
                            <h3 className="text-lg font-semibold text-[var(--text)] mb-2">Möglicher Ansatz</h3>
                            <ul className="text-sm text-[var(--text-secondary)] space-y-1">
                                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[var(--primary)] mt-0.5" /> Microsoft 365 Berechtigungen und Richtlinien prüfen</li>
                                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[var(--primary)] mt-0.5" /> Standardisiertes Device-Setup entwerfen</li>
                                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[var(--primary)] mt-0.5" /> <strong>Zielbild:</strong> schnelleres Onboarding und kontrolliertes Offboarding.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* What You Get */}
            <section className="py-12 md:py-16 bg-[var(--bg)]">
                <div className="max-w-[1140px] mx-auto px-6">
                    <h2 className="text-2xl font-semibold text-[var(--text)] mb-8 text-center">Standards bei jedem Projekt</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {deliverables.map((item, i) => (
                            <div key={i} className="p-5 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
                                <item.icon className="w-5 h-5 text-[var(--primary)] mb-3" />
                                <h3 className="text-base font-semibold text-[var(--text)] mb-1">{item.name}</h3>
                                <p className="text-sm text-[var(--muted)]">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-12 md:py-16 bg-[var(--surface)]">
                <div className="max-w-[1140px] mx-auto px-6">
                    <div className="flex items-center justify-center gap-2 mb-8">
                        <HelpCircle className="w-6 h-6 text-[var(--primary)]" />
                        <h2 className="text-2xl font-semibold text-[var(--text)]">Häufige Fragen</h2>
                    </div>
                    <div className="max-w-3xl mx-auto space-y-4">
                        {/* Using existing FAQ data but rendering styled */}
                        {faqs.map((faq, i) => (
                            <div key={i} className="p-5 rounded-xl bg-[var(--bg)] border border-[var(--border)]">
                                <h3 className="text-base font-medium text-[var(--text)] mb-2">{faq.q}</h3>
                                <p className="text-sm text-[var(--text-secondary)]">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-12 md:py-16 bg-[var(--bg)]">
                <div className="max-w-[1140px] mx-auto px-6 text-center">
                    <h2 className="text-2xl font-semibold text-[var(--text)] mb-4">Projektstatus ansehen</h2>
                    <p className="text-[var(--text-secondary)] mb-6">Derzeit ist noch kein Kontakt- oder Auftragskanal aktiv. Die Seite dokumentiert den Planungsstand.</p>
                    <CTA href="/kontakt">Projektstatus ansehen</CTA>
                    <p className="text-sm text-[var(--muted)] mt-4">Keine Auftragsannahme über diese Website.</p>
                </div>
            </section>
        </main>
    );
}
