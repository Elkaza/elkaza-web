export default function KIAutomatisierungPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">KI & Intelligente Automatisierung</h1>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Business Value</h2>
        <p className="text-gray-700">Zeit sparen, Qualität erhöhen, Skalierung ermöglichen.</p>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Unser Ansatz</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Prozessautomatisierung (RPA/Workflows)</li>
          <li>Gemini-Integration für Wissensarbeit</li>
          <li>Datenanalyse & Assistenzwerkzeuge</li>
        </ul>
      </section>
      <a href="/kontakt" className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800">Mehr erfahren</a>
    </main>
  );
}

