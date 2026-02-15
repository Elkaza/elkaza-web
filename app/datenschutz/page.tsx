import { legal } from '@/lib/legal';
export const metadata = {
  title: "Datenschutzerklärung - Elkaza Consulting",
  description: "Datenschutzerklärung und Informationen zur Datenverarbeitung",
};

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
          <p className="text-[var(--text-secondary)]">Elkaza Consulting (in Gründung)</p>
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
          <p>E‑Mail: <a href="mailto:contact@elkaza.at">contact@elkaza.at</a></p>

          <h2 className="text-lg font-semibold">Zwecke der Verarbeitung und Rechtsgrundlagen</h2>
          <ul>
            <li>Bearbeitung von Kontaktanfragen und Kommunikation – Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).</li>
            <li>Betrieb der Website und IT-Sicherheit (Server-Logs) – Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.</li>
          </ul>

          <h2 className="text-lg font-semibold">Server- und Betriebsdaten</h2>
          <p>Beim Besuch der Website werden technische Zugriffs- und Nutzungsdaten (z. B. IP-Adresse, Datum/Uhrzeit, User-Agent) in Server-Logs verarbeitet. Diese Daten dienen dem sicheren und stabilen Betrieb der Website und zur Abwehr von Angriffen.</p>

          <h2 className="text-lg font-semibold">Empfänger / Weitergabe</h2>
          <p>Personenbezogene Daten werden nur an Dienstleister weitergegeben, die für den Betrieb der Website erforderlich sind (z. B. Hosting, E‑Mail-Versand). Übermittlungen an Empfänger in Drittländer erfolgen nur, wenn gesetzlich zulässig und mit geeigneten Garantien.</p>

          <h2 className="text-lg font-semibold">Speicherdauer</h2>
          <p>Kontaktdaten werden so lange gespeichert, wie es zur Bearbeitung der Anfrage oder zur Erfüllung gesetzlicher Pflichten erforderlich ist. Server-Logs werden nur so lange gespeichert, wie dies für Sicherheits- und Betriebszwecke erforderlich ist.</p>

          <h2 className="text-lg font-semibold">Cookies / Tracking</h2>
          <p>Diese Website verwendet keine Analyse- oder Marketing-Cookies. Es werden nur technisch notwendige Cookies eingesetzt, soweit erforderlich.</p>

          <h2 className="text-lg font-semibold">Ihre Rechte</h2>
          <p>Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie das Recht, der Verarbeitung zu widersprechen. Zur Ausübung Ihrer Rechte kontaktieren Sie uns bitte per E‑Mail an <a href="mailto:contact@elkaza.at">contact@elkaza.at</a> oder über das Kontaktformular unter <code>/kontakt</code>.</p>

          <h2 className="text-lg font-semibold">Beschwerderecht</h2>
          <p>Sie haben das Recht, bei der österreichischen Datenschutzbehörde Beschwerde einzulegen: https://www.dsb.gv.at/</p>
        </div>
      </section>
    </main>
  );
}
