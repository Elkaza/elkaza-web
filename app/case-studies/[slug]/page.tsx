import CTA from "@/app/components/CTA";

const mockDb: Record<string, { title: string; context?: string; situation: string; approach: string; targetState: string }> = {
  "logistik-automation": {
    title: "Beispiel: Automatisierung in der Logistik",
    context: "Fiktives Logistik-KMU",
    situation:
      "Ein fiktives Logistikunternehmen verarbeitet viele Frachtrechnungen manuell. Das Beispiel zeigt, wie wiederkehrende Datenerfassung analysiert werden könnte.",
    approach:
      "Ein möglicher Ansatz wäre, PDF-Rechnungen strukturiert auszulesen, relevante Felder zu validieren und den Übergabeprozess an die Buchhaltung zu dokumentieren.",
    targetState:
      "Weniger manuelle Erfassung, nachvollziehbare Validierung und klarere Übergabe zwischen Betrieb und Buchhaltung.",
  },
};

export default async function CaseStudyDetail(props: { params: Promise<{ slug: string }> }) {
  const resolved = await props.params;
  const slug = resolved.slug;
  const data = mockDb[slug] || {
    title: "Beispielszenario",
    situation: "Noch keine Details hinterlegt.",
    approach: "",
    targetState: "",
  };

  return (
    <main>
      <section className="py-10 md:py-14 hero-gradient-enhanced">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-[var(--text)] mb-2">{data.title}</h1>
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[var(--primary)]">Beispielszenario · keine Kundenreferenz</p>
          {data.context && <p className="text-[var(--muted)]">Kontext: {data.context}</p>}
        </div>
      </section>

      <section className="py-10 md:py-14 bg-[var(--surface)]">
        <div className="max-w-3xl mx-auto px-6 space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-[var(--text)] mb-3">Situation</h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">{data.situation}</p>
          </div>

          {data.approach && (
            <div>
              <h2 className="text-2xl font-semibold text-[var(--text)] mb-3">Möglicher Ansatz</h2>
              <p className="text-[var(--text-secondary)] leading-relaxed">{data.approach}</p>
            </div>
          )}

          {data.targetState && (
            <div>
              <h2 className="text-2xl font-semibold text-[var(--text)] mb-3">Zielbild</h2>
              <p className="text-[var(--text-secondary)] leading-relaxed">{data.targetState}</p>
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
