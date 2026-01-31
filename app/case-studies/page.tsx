import Link from "next/link";

export const metadata = {
  title: "Case Studies – Elkaza Consulting",
  description: "Ergebnisse und Projekte mit messbarer Wirkung.",
};

const mockCases = [
  { slug: "logistik-automation", title: "Automatisierung spart 50 Stunden/Monat für Logistikunternehmen", tag: "KI-Automatisierung" },
];

export default function CaseStudiesPage() {
  return (
    <main>
      <section className="py-10 md:py-14 hero-gradient">
        <div className="max-w-[1140px] mx-auto px-6">
          <h1 className="text-4xl font-bold text-[var(--text)]">Case Studies</h1>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-[var(--surface)]">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {mockCases.map((c) => (
              <Link
                key={c.slug}
                href={`/case-studies/${c.slug}`}
                className="block rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow-sm)] hover:border-[var(--primary)] hover:shadow-[var(--shadow-md)] transition-all duration-200"
              >
                <span className="text-xs font-semibold text-white bg-[var(--primary)] px-3 py-1 rounded-full">
                  {c.tag}
                </span>
                <h2 className="text-xl font-semibold text-[var(--text)] mt-3">{c.title}</h2>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
