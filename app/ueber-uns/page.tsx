import Link from "next/link";

export default function UeberUnsPage() {
  return (
    <main>
      <section className="py-10 md:py-14 hero-gradient-enhanced">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-[var(--text)]">Über uns</h1>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-[var(--surface)]">
        <div className="max-w-3xl mx-auto px-6 space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-[var(--text)] mb-3">Mission</h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Wir verwandeln Technologie in einen Wachstumsmotor. Als Partner mit tiefem Verständnis für Business und Enterprise Architecture
              konzipieren und bauen wir die richtigen Lösungen – nicht nur die einfachen.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[var(--text)] mb-3">Ansatz</h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Agil, partnerschaftlich und transparent. Von der Analyse bis zum Rollout arbeiten wir eng mit Ihrem Team zusammen.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[var(--text)] mb-3">Unsere Kernkompetenzen</h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Wirtschaftsinformatik, Enterprise Architecture, Software Engineering und strategisches Projektmanagement. Wir integrieren diese Expertise,
              um nachhaltige Lösungen zu schaffen.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[var(--text)] mb-3">Über den Gründer</h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Elkaza Consulting wird von seinem Gründer, Dipl.-Ing. Mohamed Elkaza, geleitet. Als Absolvent der TU Wien mit Schwerpunkt
              Wirtschaftsinformatik und Enterprise Architecture arbeitet er direkt mit Klienten zusammen, um deren Technologiestrategien zu entwerfen und umzusetzen.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Seine technische Expertise wird durch eine professionelle Projektmanagement‑Zertifizierung (IPMA Level D) ergänzt. Dies stellt sicher,
              dass Ihre Projekte präzise, termingerecht und im Budgetrahmen geliefert werden.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Bei größeren Projekten greifen wir auf ein bewährtes Netzwerk von spezialisierten Partnern in den Bereichen Cloud Engineering und Data Science zurück,
              um eine umfassende Expertenlösung ohne den Overhead einer großen Agentur zu liefern.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[var(--bg)] border-t border-[var(--border)]">
        <div className="max-w-[1140px] mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-[var(--text)] mb-4">Bereit, Ihre IT zu stabilisieren?</h2>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
            Lassen Sie uns in 15 Minuten klären, ob wir der richtige Partner für Sie sind.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/kontakt" className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-90 transition-opacity">
              Erstgespräch buchen
            </Link>
            <Link href="/referenzen" className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] hover:border-[var(--primary)] transition-colors">
              Referenzen ansehen
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
