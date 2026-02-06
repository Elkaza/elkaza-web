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
    { slug: "managed-ops", icon: Headphones, title: "Managed Operations", benefit: "Wir kümmern uns. Sie konzentrieren sich aufs Geschäft.", bullets: ["Proaktives Monitoring", "Incident-Response", "Regelmäßige Reviews"], categories: ["operations"] },
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



const deliverables = [
    { icon: FileText, name: "Dokumentation", desc: "Jede Änderung dokumentiert." },
    { icon: BookOpen, name: "Wissenstransfer", desc: "Schulung für Ihr Team." },
    { icon: Presentation, name: "Abschlussbericht", desc: "Zusammenfassung und Empfehlungen." },
    { icon: MessageSquare, name: "Support", desc: "Fragen nach Projektende? Erreichbar." },
];

const faqs = [
    { q: "Wie viel Ausfallzeit entsteht?", a: "Die meisten Änderungen laufen im Hintergrund. Geplante Wartungsfenster werden mit Ihnen abgestimmt." },
    { q: "Welchen Zugang brauchen Sie?", a: "Admin-Zugang zu den relevanten Systemen. Temporär, dokumentiert, nach Projektende entfernt." },
    { q: "Müssen wir bestimmte Tools kaufen?", a: "Wir arbeiten mit dem, was Sie haben. Wenn Investitionen sinnvoll sind, besprechen wir das vorher." },
    { q: "Wem gehört das Ergebnis?", a: "Ihnen. Alle Dokumentation, Konfigurationen und Skripte gehören Ihrem Unternehmen." },
    { q: "Wie steht es mit Vertraulichkeit?", a: "NDA auf Wunsch. Alle Daten bleiben bei Ihnen. Wir nehmen keine Kopien mit." },
];

export default function LeistungenClient() {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredServices = activeCategory === "all"
        ? services
        : services.filter(s => s.categories.includes(activeCategory));

    return (
        <main className="scroll-smooth">
            {/* Hero */}
            <section className="py-14 md:py-20 hero-gradient">
                <div className="max-w-[1140px] mx-auto px-6">
                    <div className="md:flex md:items-center md:justify-between gap-10">
                        <div className="md:w-3/5">
                            <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-4">
                                IT-Infrastruktur für Wiener KMUs. <br />
                                Stabil. Sicher. Skalierbar.
                            </h1>
                            <p className="text-xl text-[var(--text-secondary)] mb-8">
                                Kein Technik-Kauderwelsch. Wir sorgen dafür, dass Ihr Netzwerk läuft, Ihre Daten sicher sind und Sie sich auf Ihr Geschäft konzentrieren können. Ihr persönlicher Ansprechpartner vor Ort in Wien.
                            </p>
                            <div className="flex flex-wrap gap-4 mb-8">
                                <CTA href="/kontakt">Erstgespräch vereinbaren</CTA>
                                <Link href="/pakete" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[var(--border)] text-[var(--text)] hover:bg-[var(--surface)] transition-colors">
                                    Pakete ansehen
                                </Link>
                            </div>

                            {/* Trust Block - Why Elkaza */}
                            <ul className="text-sm text-[var(--muted)] space-y-2">
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-[var(--primary)]" />
                                    <span>Über 10 Jahre Erfahrung in Enterprise-IT & Security</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-[var(--primary)]" />
                                    <span>Zertifiziert (Cisco, Microsoft, Fortinet)</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle className="w-4 h-4 text-[var(--primary)]" />
                                    <span><span className="font-medium text-[var(--text)]">Antwortzeit &lt; 4 Stunden</span> bei Managed Services</span>
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

            {/* For Whom / When Useful Block */}
            <section className="py-10 bg-[var(--surface)] border-y border-[var(--border)]">
                <div className="max-w-[1140px] mx-auto px-6">
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
                                <Sparkles className="w-5 h-5 text-[var(--primary)]" /> Ihr Vorteil
                            </h3>
                            <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                                <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-1.5" />Ein Ansprechpartner für alles Technische</li>
                                <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-1.5" />Security-Basics ohne Komplexitäts-Monster</li>
                                <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] mt-1.5" />Planbare IT-Kosten</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Category Tabs */}
            <section className="py-6 bg-[var(--bg)]">
                <div className="max-w-[1140px] mx-auto px-6">
                    <div className="flex flex-wrap justify-center gap-2" role="tablist" aria-label="Kategorien">
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
                <div className="max-w-[1140px] mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {filteredServices.map((service) => (
                            <Link
                                key={service.slug}
                                href={`/leistungen/${service.slug}`}
                                className={`group p-5 rounded-xl border bg-[var(--surface)] hover:bg-[var(--elevated)] transition-all relative ${service.recommended
                                    ? "border-[var(--primary)] ring-1 ring-[var(--primary)]"
                                    : "border-[var(--border)] hover:border-[var(--primary)]"
                                    }`}
                            >
                                {service.recommended && (
                                    <span className="absolute -top-3 left-4 px-2 py-0.5 bg-[var(--primary)] text-white text-xs font-medium rounded-full">
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
                                <ul className="space-y-1.5 mb-4">
                                    {service.bullets.map((b, i) => (
                                        <li key={i} className="text-xs text-[var(--muted)] flex items-start gap-2">
                                            <CheckCircle className="w-3.5 h-3.5 text-[var(--primary)] mt-0.5 shrink-0" />
                                            <span>{b}</span>
                                        </li>
                                    ))}
                                </ul>
                                <span className="text-sm text-[var(--link)] font-medium group-hover:text-[var(--link-hover)] flex items-center gap-1">
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
                        Starten Sie mit Security Baseline
                    </h2>
                    <p className="text-[var(--text-secondary)] mb-6">
                        Die meisten erfolgreichen Angriffe nutzen einfache Lücken wie fehlende Updates oder schwache Passwörter. Wir schließen diese Tore zuerst: MFA, Patch-Management und sichere Backups bilden das Fundament jeder stabilen IT.
                    </p>
                    <CTA href="/leistungen/security-baseline">Mit Security Baseline starten</CTA>
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
                            <p className="text-sm text-[var(--text-secondary)]">Sie erhalten einen klaren Plan mit priorisierten Maßnahmen. Sie entscheiden, was wir umsetzen.</p>
                        </div>
                        <div className="p-6 rounded-xl bg-[var(--surface)] border border-[var(--border)] relative z-10">
                            <span className="text-4xl font-bold text-[var(--primary-light)] absolute top-4 right-4 opacity-50">3</span>
                            <h3 className="text-lg font-semibold text-[var(--text)] mb-2">Umsetzung</h3>
                            <p className="text-sm text-[var(--text-secondary)]">Wir implementieren die Lösungen – minimaler Impact auf Ihren laufenden Betrieb.</p>
                        </div>
                        <div className="p-6 rounded-xl bg-[var(--surface)] border border-[var(--border)] relative z-10">
                            <span className="text-4xl font-bold text-[var(--primary-light)] absolute top-4 right-4 opacity-50">4</span>
                            <h3 className="text-lg font-semibold text-[var(--text)] mb-2">Betrieb</h3>
                            <p className="text-sm text-[var(--text-secondary)]">Übergabe an Ihr Team oder laufende Betreuung durch uns (Managed Services).</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Studies */}
            <section className="py-12 md:py-16 bg-[var(--surface)]">
                <div className="max-w-[1140px] mx-auto px-6">
                    <h2 className="text-2xl font-semibold text-[var(--text)] mb-8 text-center">Erfolgsbeispiele aus der Praxis</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Case 1 */}
                        <div className="p-6 rounded-xl bg-[var(--bg)] border border-[var(--border)]">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-semibold">Rechtsanwaltskanzlei (Wien)</span>
                            </div>
                            <h3 className="text-lg font-semibold text-[var(--text)] mb-2">Situation</h3>
                            <p className="text-sm text-[var(--text-secondary)] mb-3">VPN-Verbindung war langsam und instabil. Sorge vor Ransomware und Datenverlust bei sensiblen Klienten-Akten.</p>
                            <h3 className="text-lg font-semibold text-[var(--text)] mb-2">Lösung & Ergebnis</h3>
                            <ul className="text-sm text-[var(--text-secondary)] space-y-1">
                                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[var(--primary)] mt-0.5" /> Netzwerk segmentiert (Gäste vs. Intern)</li>
                                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[var(--primary)] mt-0.5" /> Robuste Firewall & MFA eingeführt</li>
                                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[var(--primary)] mt-0.5" /> <strong>Ergebnis:</strong> Schneller Fernzugriff und ruhiges Gewissen dank Immutable Backups.</li>
                            </ul>
                        </div>
                        {/* Case 2 */}
                        <div className="p-6 rounded-xl bg-[var(--bg)] border border-[var(--border)]">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-semibold">Marketing-Agentur (Remote)</span>
                            </div>
                            <h3 className="text-lg font-semibold text-[var(--text)] mb-2">Situation</h3>
                            <p className="text-sm text-[var(--text-secondary)] mb-3">Onboarding neuer Mitarbeiter dauerte Tage. Zugriffsrechte waren chaotisch verteilt (&quot;Wildwuchs&quot;).</p>
                            <h3 className="text-lg font-semibold text-[var(--text)] mb-2">Lösung & Ergebnis</h3>
                            <ul className="text-sm text-[var(--text-secondary)] space-y-1">
                                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[var(--primary)] mt-0.5" /> Microsoft 365 Tenant gehärtet & aufgeräumt</li>
                                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[var(--primary)] mt-0.5" /> Automatisches Device-Setup (Mac & Windows)</li>
                                <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[var(--primary)] mt-0.5" /> <strong>Ergebnis:</strong> Neue Laptops sind in 30 Minuten einsatzbereit. Safe Offboarding per Knopfdruck.</li>
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
                    <h2 className="text-2xl font-semibold text-[var(--text)] mb-4">Bereit für professionelle IT?</h2>
                    <p className="text-[var(--text-secondary)] mb-6">Lassen Sie uns herausfinden, ob wir zusammenpassen. Ein kurzes Gespräch kostet nichts.</p>
                    <CTA href="/kontakt">15-Minuten Erstgespräch vereinbaren</CTA>
                    <p className="text-sm text-[var(--muted)] mt-4">Kein Verkaufsdruck. Nur Beratung.</p>
                </div>
            </section>
        </main>
    );
}
