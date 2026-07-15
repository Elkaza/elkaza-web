import Link from "next/link";

export const metadata = {
  title: "Illustrative Szenarien - Elkaza",
  description: "Fiktive technische Szenarien zur Darstellung möglicher Vorgehensweisen. Keine Kundenreferenzen.",
};

const mockCases = [
  { slug: "logistik-automation", title: "Beispiel: Automatisierung in der Logistik", tag: "Illustratives Szenario" },
];

export default function CaseStudiesPage() {
  return (
    <main>
      <section className="py-10 md:py-14 hero-gradient-enhanced">
        <div className="max-w-[1140px] mx-auto px-6">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[var(--primary)]">Keine Kundenreferenzen</p>
          <h1 className="text-4xl font-bold text-[var(--text)]">Illustrative Szenarien</h1>
          <p className="mt-3 max-w-2xl text-lg text-[var(--text-secondary)]">
            Fiktive Beispiele, die mögliche Probleme, Vorgehensweisen und Zielbilder erklären.
          </p>
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
