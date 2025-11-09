export default function DigitalstrategiePage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">Digitale Strategie & Beratung</h1>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Business Value</h2>
        <p className="text-gray-700">Wachstumshebel identifizieren, Investitionen priorisieren, Risiken minimieren.</p>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Unser Ansatz</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Audit: System- und Prozessanalyse</li>
          <li>Workshops: Stakeholder ausrichten, Ziele schärfen</li>
          <li>Roadmap: Maßnahmen priorisieren, Meilensteine definieren</li>
        </ul>
      </section>
      <a href="/kontakt" className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800">Mehr erfahren</a>
    </main>
  );
}

