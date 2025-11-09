interface Props { params: { slug: string } }

const mockDb: Record<string, { title: string; client?: string; challenge: string; solution: string; result: string; tech: string[] }> = {
  "logistik-automation": {
    title: "Automatisierung spart 50 Stunden/Monat für Logistikunternehmen",
    client: "KMU (Logistik)",
    challenge:
      "Ein österreichisches Logistikunternehmen verarbeitete hunderte Frachtrechnungen jeden Monat manuell. Das Finanzteam verbrachte über 50 Stunden mit einer fehleranfälligen Tätigkeit.",
    solution:
      "Mit unserer Leistung ‚KI & Intelligente Automatisierung‘ entwickelten wir eine Lösung, die PDF‑Rechnungen automatisch ausliest, relevante Felder validiert und die Daten direkt in die Buchhaltungssoftware übergibt – ohne manuelle Eingabe.",
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
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-2">{data.title}</h1>
      {data.client && <p className="text-gray-600 mb-8">Kunde: {data.client}</p>}

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Herausforderung</h2>
        <p className="text-gray-700">{data.challenge}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Lösung</h2>
        <p className="text-gray-700">{data.solution}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Ergebnis</h2>
        <p className="text-gray-700">{data.result}</p>
      </section>

      {data.tech.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Tech Stack</h2>
          <p className="text-gray-700">{data.tech.join(", ")}</p>
        </section>
      )}
    </main>
  );
}
