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
          <h2>Angaben gemäß § 5 ECG</h2>

          <p className="text-[var(--text-secondary)]">
            Betreiber / Anbieter:
          </p>
          <p>
            Elkaza Consulting
            <br />
            Inhaber: Dipl.-Ing. Mohamed Elkaza
          </p>

          <h3>Adresse</h3>
          <p>
            [Straße und Hausnummer]
            <br />
            [PLZ] [Ort]
            <br />
            [Land]
          </p>

          <h3>Kontakt</h3>
          <p>
            E-Mail: <a href="mailto:[email@example.com]">[email@example.com]</a>
            <br />
            Telefon: [Telefonnummer]
          </p>

          <h3>Handelsregister / Unternehmenskennzahlen</h3>
          <p>
            Firmenbuchnummer / Handelsregister: [falls vorhanden]
            <br />
            Umsatzsteuer-Identifikationsnummer (UID): [falls vorhanden]
          </p>

          <p className="text-[var(--text-secondary)]">
            Hinweis: Bitte ergänzen Sie oben die fehlenden Angaben (Adresse, E‑Mail, Telefon und
            ggf. Firmenbuch-/UID-Nummern). Die rechtlich verbindlichen Betreiberangaben dürfen
            nicht entfernt werden; sie wurden hierher vom Footer verschoben.
          </p>
        </div>
      </section>
    </main>
  );
}
