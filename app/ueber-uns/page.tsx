export default function UeberUnsPage() {
  return (
    <main>
      <section className="py-10 md:py-14 hero-gradient">
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
    </main>
  );
}
