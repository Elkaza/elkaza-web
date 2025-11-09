export default function DigitaleProduktePage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">Digitale Produkte & Plattformen</h1>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Business Value</h2>
        <p className="text-gray-700">Neue Erlösmodelle erschließen und Nutzer begeistern.</p>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Unser Ansatz</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Web-Plattformen und Services (Next.js)</li>
          <li>UI/UX Design & Prototyping</li>
          <li>Performance-Optimierung & SEO</li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Technologien</h2>
        <p className="text-gray-700">Next.js, TypeScript, Tailwind CSS, Vercel.</p>
      </section>
      <a href="/kontakt" className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800">Mehr erfahren</a>
    </main>
  );
}

