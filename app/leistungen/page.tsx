import Link from "next/link";

export const metadata = {
  title: "Leistungen – Elkaza Consulting",
  description: "KI-Automatisierung, digitale Produkte & Plattformen, digitale Strategie & Beratung.",
};

export default function LeistungenPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <section className="mb-10">
        <h1 className="text-4xl font-bold mb-3">Unsere Lösungen für Ihr Wachstum</h1>
        <p className="text-gray-700 max-w-3xl">Drei Säulen, ein Ziel: geschäftliche Wirkung durch Technologie.</p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link href="/leistungen/ki-automatisierung" className="p-6 rounded-xl border hover:border-blue-500 transition">
          <h2 className="text-xl font-semibold mb-2">KI & Intelligente Automatisierung</h2>
          <p className="text-gray-700">Prozessautomatisierung, Gemini-Integration, Datenanalyse.</p>
        </Link>
        <Link href="/leistungen/digitale-produkte" className="p-6 rounded-xl border hover:border-blue-500 transition">
          <h2 className="text-xl font-semibold mb-2">Digitale Produkte & Plattformen</h2>
          <p className="text-gray-700">Web-Plattformen, UI/UX Design, Performance-Optimierung.</p>
        </Link>
        <Link href="/leistungen/digitalstrategie" className="p-6 rounded-xl border hover:border-blue-500 transition">
          <h2 className="text-xl font-semibold mb-2">Digitale Strategie & Beratung</h2>
          <p className="text-gray-700">Audit, Workshop, Roadmap – messbar und pragmatisch.</p>
        </Link>
      </div>
    </main>
  );
}
