import Link from "next/link";

export const metadata = {
  title: "Elkaza Consulting – Partner für digitale Transformation",
  description:
    "Wir verbinden KI, moderne Plattformen und strategisches Design, um Ihr Unternehmen zukunftsfähig zu machen.",
};

export default function Home() {
  return (
    <main>
      {/* Page metadata is defined via app/layout.tsx for now */}
      <section className="relative text-center py-24 md:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 leading-tight">
            Partner für Ihre digitale Transformation.
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            Wir verbinden KI, moderne Plattformen und strategisches Design, um Ihr Unternehmen zukunftsfähig zu machen.
          </p>
          <Link
            href="/kontakt"
            className="inline-block bg-blue-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-800 transition"
          >
            Jetzt Analyse buchen
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-6">Blockaden erkennen, Wachstum freisetzen</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-700">
          <div className="p-6 rounded-xl border bg-white">Veraltete Systeme blockieren Wachstum?</div>
          <div className="p-6 rounded-xl border bg-white">Manuelle Prozesse kosten Zeit und Geld?</div>
          <div className="p-6 rounded-xl border bg-white">Fehlende Strategie bremst digitale Initiativen?</div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-8">Unsere Leistungssäulen</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/leistungen/ki-automatisierung" className="p-6 rounded-xl border hover:border-blue-500 transition">
              <h3 className="text-xl font-semibold mb-2">KI & Intelligente Automatisierung</h3>
              <p className="text-gray-700">Prozesse beschleunigen, Qualität sichern, Teams entlasten.</p>
            </Link>
            <Link href="/leistungen/digitale-produkte" className="p-6 rounded-xl border hover:border-blue-500 transition">
              <h3 className="text-xl font-semibold mb-2">Digitale Produkte & Plattformen</h3>
              <p className="text-gray-700">Moderne Web-Plattformen mit Next.js, skalierbar und performant.</p>
            </Link>
            <Link href="/leistungen/digitalstrategie" className="p-6 rounded-xl border hover:border-blue-500 transition">
              <h3 className="text-xl font-semibold mb-2">Digitale Strategie & Beratung</h3>
              <p className="text-gray-700">Von Audit und Workshop zur Roadmap – messbar und pragmatisch.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-4">Warum Elkaza?</h2>
        <p className="text-gray-700 max-w-3xl">
          Agil. Partnerschaftlich. Technologie-fokussiert. Wir liefern strategische Wirkung mit sauberer Umsetzung – von der Analyse bis zum Launch.
        </p>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-6">Featured Case Study</h2>
          <Link href="/case-studies/beispiel-projekt" className="block rounded-xl border bg-white p-6 hover:border-blue-500 transition">
            <h3 className="text-xl font-semibold mb-2">Automatisierung spart 50 Stunden/Monat</h3>
            <p className="text-gray-700">Wie wir mit KI und Prozessdesign deutliche Effizienzgewinne erzielt haben.</p>
          </Link>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-4">Starten Sie Ihre Transformation</h2>
          <Link href="/kontakt" className="inline-block bg-blue-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-800 transition">Kostenlose 30-Minuten-Analyse</Link>
        </div>
      </section>
    </main>
  );
}
