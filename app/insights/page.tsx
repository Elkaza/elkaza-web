import Link from "next/link";

export const metadata = {
  title: "Insights – Elkaza Consulting",
  description: "Strategie, KI und digitale Produkte – praxisnah erklärt.",
};

const mockPosts = [
  { slug: "ki-strategie-fuer-kmus", title: "KI-Strategie für KMUs: pragmatisch starten", date: "2025-11-01", excerpt: "Wie Sie mit kleinen Schritten Wirkung erzielen." },
];

export default function InsightsPage() {
  return (
    <main>
      <section className="py-10 md:py-14 hero-gradient-enhanced">
        <div className="max-w-[1140px] mx-auto px-6">
          <h1 className="text-4xl font-bold text-[var(--text)]">Insights</h1>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-[var(--surface)]">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {mockPosts.map((p) => (
              <Link
                key={p.slug}
                href={`/insights/${p.slug}`}
                className="block rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow-sm)] hover:border-[var(--primary)] hover:shadow-[var(--shadow-md)] transition-all duration-200"
              >
                <div className="text-xs text-[var(--muted)] mb-2">{new Date(p.date).toLocaleDateString("de-AT")}</div>
                <h2 className="text-xl font-semibold text-[var(--text)] mb-2">{p.title}</h2>
                <p className="text-[var(--text-secondary)]">{p.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
