import CTA from "@/app/components/CTA";

interface Props { params: { slug: string } }

const mockDb: Record<string, { title: string; client?: string; challenge: string; solution: string; result: string; tech: string[] }> = {
  "logistik-automation": {
    title: "Automatisierung spart 50 Stunden/Monat für Logistikunternehmen",
    client: "KMU (Logistik)",
    challenge:
      "Ein österreichisches Logistikunternehmen verarbeitete hunderte Frachtrechnungen jeden Monat manuell. Das Finanzteam verbrachte über 50 Stunden mit einer fehleranfälligen Tätigkeit.",
    solution:
      "Mit unserer Leistung ‚KI & Intelligente Automatisierung' entwickelten wir eine Lösung, die PDF‑Rechnungen automatisch ausliest, relevante Felder validiert und die Daten direkt in die Buchhaltungssoftware übergibt – ohne manuelle Eingabe.",
    result:
      "Über 50 Stunden pro Monat eingespart, 98% weniger Erfassungsfehler, Fokus des Teams auf Analyse und Budgetsteuerung, ROI in unter 4 Monaten.",
    tech: ["Next.js", "TypeScript", "Gemini"],
  },
};

export default function CaseStudyDetail({ params }: Props) {
  const data = mockDb[params.slug] || {
    title: "Case Study",
    challenge: "Noch keine Details hinterlegt.",
    solution: "",
    result: "",
    tech: [],
  };

  return (
    <main>
      <section className="py-10 md:py-14 hero-gradient">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-[var(--text)] mb-2">{data.title}</h1>
          {data.client && <p className="text-[var(--muted)]">Kunde: {data.client}</p>}
        </div>
      </section>

      <section className="py-10 md:py-14 bg-[var(--surface)]">
        <div className="max-w-3xl mx-auto px-6 space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-[var(--text)] mb-3">Herausforderung</h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">{data.challenge}</p>
          </div>

          {data.solution && (
            <div>
              <h2 className="text-2xl font-semibold text-[var(--text)] mb-3">Lösung</h2>
              <p className="text-[var(--text-secondary)] leading-relaxed">{data.solution}</p>
            </div>
          )}

          {data.result && (
            <div>
              <h2 className="text-2xl font-semibold text-[var(--text)] mb-3">Ergebnis</h2>
              <p className="text-[var(--text-secondary)] leading-relaxed">{data.result}</p>
            </div>
          )}

          {data.tech.length > 0 && (
            <div>
              <h2 className="text-2xl font-semibold text-[var(--text)] mb-3">Tech Stack</h2>
              <p className="text-[var(--text-secondary)]">{data.tech.join(", ")}</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-10 md:py-14 bg-[var(--bg)]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <CTA href="/kontakt">Ähnliches Projekt besprechen</CTA>
        </div>
      </section>
    </main>
  );
}
