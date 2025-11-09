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
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">Insights</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockPosts.map((p) => (
          <Link key={p.slug} href={`/insights/${p.slug}`} className="block rounded-xl border bg-white p-6 hover:border-blue-500 transition">
            <div className="text-xs text-gray-500 mb-1">{new Date(p.date).toLocaleDateString("de-AT")}</div>
            <h2 className="text-xl font-semibold mb-1">{p.title}</h2>
            <p className="text-gray-700">{p.excerpt}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
