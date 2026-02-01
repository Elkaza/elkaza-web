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
          <h2 className="text-lg font-semibold">Verantwortlicher</h2>
          <p className="text-[var(--text-secondary)]">Elkaza Consulting (in Gründung)</p>
          <p>E-Mail: <a href="mailto:contact@elkaza.at">contact@elkaza.at</a></p>

          <h2 className="text-lg font-semibold">Zwecke und Rechtsgrundlagen</h2>
          <p>
            Wir verarbeiten personenbezogene Daten zur Beantwortung von Kontaktanfragen und zur
            Durchführung vorvertraglicher Maßnahmen. Rechtsgrundlagen sind Art.6 Abs.1 lit.b und lit.f
            DSGVO (Erfüllung von Anfragen, berechtigte Interessen).
          </p>

          <h2 className="text-lg font-semibold">Server- und Hosting-Logdaten</h2>
          <p>
            Beim Besuch der Website werden technische Zugriffs- und Nutzungsdaten (Server-Logs)
            verarbeitet. Diese Daten dienen dem Betrieb und der Sicherung des Angebots.
          </p>

          <h2 className="text-lg font-semibold">Weitergabe / Empfänger</h2>
          <p>
            Daten werden nur an notwendige Dienstleister weitergegeben (z. B. Hosting-Provider).
          </p>

          <h2 className="text-lg font-semibold">Speicherdauer</h2>
          <p>
            Kontaktdaten werden so lange gespeichert, wie es zur Bearbeitung der Anfrage oder zur
            Erfüllung rechtlicher Pflichten erforderlich ist; ansonsten in der Regel nicht länger
            als 12 Monate.
          </p>

          <h2 className="text-lg font-semibold">Cookies / Tracking</h2>
          <p>Auf dieser Website werden keine Analytics-Cookies verwendet.</p>

          <h2 className="text-lg font-semibold">Ihre Rechte</h2>
          <p>
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
            Datenübertragbarkeit und Widerspruch sowie das Beschwerderecht bei der österreichischen
            Datenschutzbehörde (www.dsb.gv.at).
          </p>

          <p className="text-[var(--text-secondary)]">
            Hinweis: Dies ist eine kurze, rechtskonforme Grundlage für eine kleine Dienstleister-Website.
            Ergänzen Sie bei Bedarf technische Details (z. B. Mail-Provider, konkreten Hosting-Partner).
          </p>
        </div>
      </section>
    </main>
  );
}
