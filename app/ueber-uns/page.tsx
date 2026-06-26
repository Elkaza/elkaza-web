import Link from "next/link";
import { CheckCircle, Compass, GraduationCap, Layers, Network, ShieldCheck } from "lucide-react";

const principles = [
  {
    title: "Erst verstehen, dann bauen",
    text: "Wir starten mit Kontext: Geschäftsprozesse, Risiken, bestehende Systeme und die Menschen, die damit arbeiten.",
    icon: Compass,
  },
  {
    title: "Pragmatisch statt überladen",
    text: "Lösungen müssen wartbar, dokumentiert und im Alltag nutzbar sein. Komplexität kommt nur dort rein, wo sie wirklich hilft.",
    icon: Layers,
  },
  {
    title: "Sicherheit als Basis",
    text: "Backups, Zugriffe, Netzwerk, Geräte und Cloud-Konfiguration werden von Anfang an mitgedacht.",
    icon: ShieldCheck,
  },
];

const capabilities = [
  "IT-Infrastruktur und Netzwerkarchitektur",
  "Security Baselines, MFA, Backup- und Recovery-Konzepte",
  "Microsoft 365, Cloud- und SaaS-Absicherung",
  "Automatisierung, Datenflüsse und interne Tools",
  "Dokumentation, Übergabe und laufende Verbesserung",
];

export default function UeberUnsPage() {
  return (
    <main>
      <section className="hero-gradient-enhanced py-12 md:py-18">
        <div className="mx-auto grid max-w-[1140px] gap-8 px-4 sm:px-6 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-[var(--primary)]">Über Elkaza Consulting</p>
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-[var(--text)] md:text-5xl">
              Technische Klarheit für Unternehmen, die ihre IT verlässlich betreiben wollen.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--text-secondary)]">
              Elkaza Consulting verbindet Business-Verständnis, Infrastruktur, Security und Automatisierung. Der Fokus liegt auf Lösungen, die sauber geplant, nachvollziehbar dokumentiert und langfristig betreibbar sind.
            </p>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow-sm)]">
            <p className="text-sm font-semibold text-[var(--text)]">Wofür wir stehen</p>
            <ul className="mt-4 space-y-3 text-sm text-[var(--text-secondary)]">
              <li className="flex gap-3">
                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[var(--primary)]" />
                klare technische Entscheidungen
              </li>
              <li className="flex gap-3">
                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[var(--primary)]" />
                ruhiger, dokumentierter Betrieb
              </li>
              <li className="flex gap-3">
                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[var(--primary)]" />
                pragmatische Security ohne unnötige Komplexität
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface)] py-12 md:py-16">
        <div className="mx-auto max-w-[1140px] px-4 sm:px-6">
          <div className="grid gap-5 md:grid-cols-3">
            {principles.map((item) => (
              <div key={item.title} className="rounded-xl border border-[var(--border)] bg-[var(--bg)] p-5 shadow-[var(--shadow-sm)]">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--primary-light)] text-[var(--primary)]">
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h2 className="text-lg font-semibold text-[var(--text)]">{item.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--bg)] py-12 md:py-16">
        <div className="mx-auto grid max-w-[1140px] gap-10 px-4 sm:px-6 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-[var(--muted)]">Arbeitsweise</p>
            <h2 className="text-3xl font-bold tracking-tight text-[var(--text)]">Vom ersten Audit bis zum stabilen Betrieb.</h2>
            <p className="mt-4 leading-relaxed text-[var(--text-secondary)]">
              Wir arbeiten in klaren Schritten: analysieren, priorisieren, umsetzen, dokumentieren und übergeben. Dadurch entstehen keine Black Boxes, sondern Systeme, die Ihr Team verstehen und weiterführen kann.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {capabilities.map((item) => (
              <div key={item} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4">
                <CheckCircle className="mb-3 h-5 w-5 text-[var(--primary)]" aria-hidden="true" />
                <p className="text-sm font-medium leading-relaxed text-[var(--text)]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface)] py-12 md:py-16">
        <div className="mx-auto grid max-w-[1140px] gap-8 px-4 sm:px-6 md:grid-cols-[0.85fr_1.15fr] md:items-start">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-6">
            <GraduationCap className="mb-4 h-7 w-7 text-[var(--primary)]" aria-hidden="true" />
            <h2 className="text-2xl font-bold text-[var(--text)]">Über den Gründer</h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
              Dipl.-Ing. Mohamed Elkaza verbindet Wirtschaftsinformatik, Enterprise Architecture und praktische Umsetzung. Projekte werden direkt und nah am Kunden geführt, mit einem starken Fokus auf technische Qualität und klare Kommunikation.
            </p>
          </div>

          <div className="space-y-5">
            <div className="rounded-xl border border-[var(--border)] bg-[var(--bg)] p-5">
              <h3 className="flex items-center gap-2 font-semibold text-[var(--text)]">
                <Network className="h-5 w-5 text-[var(--primary)]" aria-hidden="true" />
                Schlankes Kernteam, spezialisiertes Netzwerk
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                Für größere Vorhaben werden spezialisierte Partner aus Cloud Engineering, Data Science und Softwareentwicklung eingebunden. So bleibt die Zusammenarbeit persönlich, ohne bei Bedarf an Tiefe zu verlieren.
              </p>
            </div>
            <div className="rounded-xl border border-[var(--border)] bg-[var(--bg)] p-5">
              <h3 className="font-semibold text-[var(--text)]">Was Kunden erwarten können</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                Verbindliche Kommunikation, nachvollziehbare Entscheidungen, saubere Dokumentation und technische Lösungen, die nicht nur im Projekt funktionieren, sondern auch danach.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--bg)] py-12 md:py-16">
        <div className="mx-auto max-w-[1140px] px-4 text-center sm:px-6">
          <h2 className="text-2xl font-bold text-[var(--text)]">Bereit, Ihre IT sauberer aufzustellen?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-[var(--text-secondary)]">
            Starten Sie mit einem klaren Blick auf Infrastruktur, Risiken und die nächsten sinnvollen Schritte.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/leistungen" className="inline-flex items-center justify-center rounded-lg bg-[var(--primary)] px-6 py-3 font-medium text-[var(--primary-foreground)] transition-opacity hover:opacity-90">
              Leistungen ansehen
            </Link>
            <Link href="/pakete" className="inline-flex items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] px-6 py-3 font-medium text-[var(--text)] transition-colors hover:border-[var(--primary)]">
              Pakete vergleichen
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
