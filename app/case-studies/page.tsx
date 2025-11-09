import Link from "next/link";

export const metadata = {
  title: "Case Studies – Elkaza Consulting",
  description: "Ergebnisse und Projekte mit messbarer Wirkung.",
};
const mockCases = [
  { slug: "beispiel-projekt", title: "Automatisierung spart 50 Stunden/Monat", tag: "KI-Automatisierung" },
  { slug: "plattform-redesign", title: "+40% Conversion durch UX-Redesign", tag: "Digitale Produkte" },
];

export default function CaseStudiesPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">Case Studies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockCases.map((c) => (
          <Link key={c.slug} href={`/case-studies/${c.slug}`} className="block rounded-xl border bg-white p-6 hover:border-blue-500 transition">
            <div className="text-xs text-blue-700 font-medium mb-2">{c.tag}</div>
            <h2 className="text-xl font-semibold">{c.title}</h2>
          </Link>
        ))}
      </div>
    </main>
  );
}
