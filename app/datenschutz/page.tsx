import { legal } from '@/lib/legal';
import { createLocalizedMetadata } from '@/lib/metadata';
export const metadata = createLocalizedMetadata({
  title: "Datenschutzerklärung - Elkaza Consulting",
  description: "Datenschutzerklärung und Informationen zur Datenverarbeitung",
  path: '/datenschutz',
});

export default function DatenschutzPage() {
  const L = legal.de;

  return (
    <main>
      <section className="py-10 md:py-14 hero-gradient-enhanced">
        <div className="max-w-[1140px] mx-auto px-6">
          <h1 className="text-4xl font-bold text-[var(--text)]">Datenschutzerklärung</h1>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-[var(--surface)]">
        <div className="max-w-[1140px] mx-auto px-6 prose prose-lg max-w-3xl">

          <h2 className="text-lg font-semibold">Verantwortliche Stelle</h2>
          <p className="text-[var(--text-secondary)]">Betreiber der privaten Projektwebsite Elkaza (Vorbereitungsphase)</p>
          <p>
            {L.address.street && L.address.street !== 'ADDRESS_LINE' ? (
              <>
                {L.address.street}
                <br />
              </>
            ) : null}
            {L.address.cityLine}
            <br />
            {L.address.country}
          </p>
          <p>Der geschäftliche Kontaktkanal und die vollständige Anbieterkennzeichnung werden vor der kommerziellen Aktivierung ergänzt.</p>

          <h2 className="text-lg font-semibold">Zwecke der Verarbeitung und Rechtsgrundlagen</h2>
          <ul>
            <li>Betrieb der Website und IT-Sicherheit (Server-Logs) – Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.</li>
          </ul>

          <h2 className="text-lg font-semibold">Server- und Betriebsdaten</h2>
          <p>Beim Besuch der Website werden technische Zugriffs- und Nutzungsdaten (z. B. IP-Adresse, Datum/Uhrzeit, User-Agent) in Server-Logs verarbeitet. Diese Daten dienen dem sicheren und stabilen Betrieb der Website und zur Abwehr von Angriffen.</p>

          <h2 className="text-lg font-semibold">Empfänger / Weitergabe</h2>
          <p>Personenbezogene Daten werden nur an Dienstleister weitergegeben, die für den Betrieb der Website erforderlich sind (z. B. Hosting, E‑Mail-Versand). Übermittlungen an Empfänger in Drittländer erfolgen nur, wenn gesetzlich zulässig und mit geeigneten Garantien.</p>

          <h2 className="text-lg font-semibold">Speicherdauer</h2>
          <p>Server-Logs werden nur so lange gespeichert, wie dies für Sicherheits- und Betriebszwecke erforderlich ist. Über diese Website werden derzeit keine Kontaktanfragen verarbeitet.</p>

          <h2 className="text-lg font-semibold">Cookies und Reichweitenmessung</h2>
          <p>Während der Vorbereitungsphase werden keine Analyse- oder Marketing-Cookies gesetzt und keine Reichweitenmessung eingesetzt.</p>

          <h2 className="text-lg font-semibold">Ihre Rechte</h2>
          <p>Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie das Recht, der Verarbeitung zu widersprechen. Ein Kontaktweg zur Ausübung dieser Rechte muss vor öffentlicher kommerzieller Nutzung ergänzt werden.</p>

          <h2 className="text-lg font-semibold">Beschwerderecht</h2>
          <p>Sie haben das Recht, bei der österreichischen Datenschutzbehörde Beschwerde einzulegen: https://www.dsb.gv.at/</p>
        </div>
      </section>
    </main>
  );
}
