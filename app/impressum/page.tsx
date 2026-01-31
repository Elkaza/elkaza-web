export const metadata = {
  title: "Impressum - Elkaza Consulting",
  description: "Impressum und rechtliche Angaben",
};

export default function ImpressumPage() {
  return (
    <main>
      <section className="py-10 md:py-14 hero-gradient">
        <div className="max-w-[1140px] mx-auto px-6">
          <h1 className="text-4xl font-bold text-[var(--text)]">Impressum</h1>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-[var(--surface)]">
        <div className="max-w-[1140px] mx-auto px-6 prose prose-lg max-w-3xl">
          <p className="text-[var(--text-secondary)]">
            Angaben gemäß § 5 ECG. Inhalte werden bald ergänzt.
          </p>
        </div>
      </section>
    </main>
  );
}
