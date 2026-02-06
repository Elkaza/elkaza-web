"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Network, ShieldCheck, Lock, ShieldAlert, Cog, Headphones, Cloud,
  Laptop, Sparkles, ClipboardCheck, FileText, Clock, CheckCircle,
  ArrowRight, Search, Settings, BookOpen, Presentation, MessageSquare, HelpCircle
} from "lucide-react";
import TrustBar from "@/app/components/TrustBar";
import CTA from "@/app/components/CTA";

export const metadata = {
  title: "Unsere Leistungen – Netzwerk & Security aus Wien | Elkaza",
  description: "Von Security Baseline bis Managed Operations: Wir sorgen für stabile Netzwerke und sichere IT-Umgebungen für KMUs in Wien und Umgebung.",
  alternates: { canonical: "/leistungen" },
};

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

const processSteps = [
  { icon: Search, name: "Analyse", desc: "Wir erfassen den aktuellen Stand.", time: "1-2 Wochen" },
  { icon: Settings, name: "Umsetzung", desc: "Wir implementieren die Änderungen.", time: "2-6 Wochen" },
  { icon: Headphones, name: "Betrieb", desc: "Übergabe an Ihr Team.", time: "Laufend" },
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

export default function LeistungenPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredServices = activeCategory === "all"
    ? services
    : services.filter(s => s.categories.includes(activeCategory));

  return (
    <main className="scroll-smooth">
      {/* Hero */}
      <section className="py-14 md:py-20 hero-gradient">
        <div className="max-w-[1140px] mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-4">Leistungen</h1>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mb-8">
            IT-Infrastruktur und Security für wachsende KMUs. Klar definierte Projekte mit messbaren Ergebnissen.
          </p>
          <div className="flex flex-wrap gap-4">
            <CTA href="/kontakt">Kostenloses Erstgespräch</CTA>
            <Link href="/pakete" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[var(--border)] text-[var(--text)] hover:bg-[var(--surface)] transition-colors">
              Pakete ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="py-5 bg-[var(--surface)] border-y border-[var(--border)]">
        <div className="max-w-[1140px] mx-auto px-6">
          <TrustBar locale="de" />
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

      {/* Recommended Start */}
      <section className="py-12 md:py-16 bg-[var(--surface)]">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--primary-light)] text-[var(--primary)] text-sm font-medium mb-4">
            <ShieldCheck className="w-4 h-4" /> Unsere Empfehlung
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--text)] mb-4">
            Starten Sie mit Security Baseline
          </h2>
          <p className="text-[var(--text-secondary)] mb-6">
            Die meisten KMUs profitieren davon, zuerst Grundlagen zu sichern: MFA, Patching, Backups. Das verhindert 80% der häufigsten Angriffe. Danach wissen Sie, wo Sie stehen.
          </p>
          <CTA href="/leistungen/security-baseline">Mit Security Baseline starten</CTA>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-12 md:py-16 bg-[var(--bg)]">
        <div className="max-w-[1140px] mx-auto px-6">
          <h2 className="text-2xl font-semibold text-[var(--text)] mb-8 text-center">So arbeiten wir</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {processSteps.map((step, i) => (
              <div key={i} className="p-6 rounded-xl bg-[var(--surface)] border border-[var(--border)] text-center">
                <div className="w-12 h-12 rounded-full bg-[var(--primary-light)] flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-6 h-6 text-[var(--primary)]" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--text)] mb-2">{step.name}</h3>
                <p className="text-sm text-[var(--text-secondary)] mb-2">{step.desc}</p>
                <span className="text-xs text-[var(--muted)] flex items-center justify-center gap-1">
                  <Clock className="w-3 h-3" /> {step.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-12 md:py-16 bg-[var(--surface)]">
        <div className="max-w-[1140px] mx-auto px-6">
          <h2 className="text-2xl font-semibold text-[var(--text)] mb-8 text-center">Was Sie immer bekommen</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {deliverables.map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-[var(--bg)] border border-[var(--border)]">
                <item.icon className="w-5 h-5 text-[var(--primary)] mb-3" />
                <h3 className="text-base font-semibold text-[var(--text)] mb-1">{item.name}</h3>
                <p className="text-sm text-[var(--muted)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 bg-[var(--bg)]">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="flex items-center justify-center gap-2 mb-8">
            <HelpCircle className="w-6 h-6 text-[var(--primary)]" />
            <h2 className="text-2xl font-semibold text-[var(--text)]">Häufige Fragen</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="p-5 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
                <h3 className="text-base font-medium text-[var(--text)] mb-2">{faq.q}</h3>
                <p className="text-sm text-[var(--text-secondary)]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-16 bg-[var(--surface)]">
        <div className="max-w-[1140px] mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold text-[var(--text)] mb-4">Bereit für stabile IT?</h2>
          <p className="text-[var(--text-secondary)] mb-6">Lassen Sie uns in 30 Minuten besprechen, was Sie brauchen.</p>
          <CTA href="/kontakt">Kostenloses Erstgespräch</CTA>
          <p className="text-sm text-[var(--muted)] mt-4">Keine Verpflichtung. Kein Verkaufsdruck.</p>
        </div>
      </section>
    </main>
  );
}
