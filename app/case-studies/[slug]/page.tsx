import CTA from "@/app/components/CTA";

const mockDb: Record<string, { title: string; client?: string; challenge: string; solution: string; result: string; tech: string[] }> = {
  "logistik-automation": {
    title: "Beispiel: Automatisierung in der Logistik",
    client: "Fiktives Logistik-KMU",
    challenge:
      "Ein fiktives Logistikunternehmen verarbeitet viele Frachtrechnungen manuell. Das Beispiel zeigt, wie wiederkehrende Datenerfassung analysiert werden könnte.",
    solution:
      "Ein möglicher Ansatz wäre, PDF-Rechnungen strukturiert auszulesen, relevante Felder zu validieren und den Übergabeprozess an die Buchhaltung zu dokumentieren.",
    result:
      "Zielbild: weniger manuelle Erfassung, nachvollziehbare Validierung und klarere Übergabe zwischen Betrieb und Buchhaltung.",
    tech: ["Next.js", "TypeScript", "Gemini"],
  },
};

export default async function CaseStudyDetail(props: { params: Promise<{ slug: string }> }) {
  const resolved = await props.params;
  const slug = resolved.slug;
  const data = mockDb[slug] || {
    title: "Case Study",
    challenge: "Noch keine Details hinterlegt.",
    solution: "",
    result: "",
    tech: [],
  };

  return (
    <main>
      <section className="py-10 md:py-14 hero-gradient-enhanced">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-[var(--text)] mb-2">{data.title}</h1>
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[var(--primary)]">Illustratives Szenario - keine Kundenreferenz</p>
          {data.client && <p className="text-[var(--muted)]">Kontext: {data.client}</p>}
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
          <CTA href="/kontakt">Projektstatus ansehen</CTA>
        </div>
      </section>
    </main>
  );
}

export function generateStaticParams() {
  return Object.keys(mockDb).map((slug) => ({ slug }));
}
