export const metadata = {
  title: "Datenschutzerklärung - Elkaza Consulting",
  description: "Datenschutzerklärung und Informationen zur Datenverarbeitung",
};

export default function DatenschutzPage() {
  return (
    <main>
      <section className="py-10 md:py-14 hero-gradient">
        <div className="max-w-[1140px] mx-auto px-6">
          <h1 className="text-4xl font-bold text-[var(--text)]">Datenschutzerklärung</h1>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-[var(--surface)]">
        <div className="max-w-[1140px] mx-auto px-6 prose prose-lg max-w-3xl">
          <p className="text-[var(--text-secondary)]">
            Informationen zum Datenschutz folgen. Wir verarbeiten personenbezogene Daten gemäß DSGVO.
          </p>
        </div>
      </section>
    </main>
  );
}
