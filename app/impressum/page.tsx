import { legal } from '@/lib/legal';
import { createLocalizedMetadata } from '@/lib/metadata';

export const metadata = createLocalizedMetadata({
  title: 'Impressum - Elkaza Consulting',
  description: 'Impressum und rechtliche Angaben',
  path: '/impressum',
});

export default function ImpressumPage() {
  const L = legal.de;

  return (
    <main>
      <section className="py-10 md:py-14 hero-gradient-enhanced">
        <div className="max-w-[1140px] mx-auto px-6">
          <h1 className="text-4xl font-bold text-[var(--text)]">Impressum</h1>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-[var(--surface)]">
        <div className="max-w-[1140px] mx-auto px-6 prose prose-lg max-w-3xl">
          <h2>{L.title}</h2>

          <div className="not-prose my-6 rounded-lg border border-amber-300 bg-amber-50 p-4 text-sm leading-relaxed text-amber-950 dark:border-amber-700 dark:bg-amber-950 dark:text-amber-100">
            Diese Website dokumentiert ein Projekt in Vorbereitung. Derzeit werden keine Dienstleistungen angeboten, keine Aufträge angenommen und keine Verträge über diese Website geschlossen. Vor einer kommerziellen Aktivierung werden vollständiger Name und geografische Anschrift des Betreibers ergänzt.
          </div>

          <p className="text-[var(--text-secondary)]">Betreiber / Anbieter:</p>
          <p>
            {L.operatorLine}
          </p>

          <h3>Adresse</h3>
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

          <h3>Kontakt</h3>
          <p>Während der Vorbereitungsphase ist kein geschäftlicher Kontaktkanal aktiv.</p>

          <h3>Unternehmensgegenstand</h3>
          <p>{L.businessPurpose}</p>

          {(L.companyRegister || L.vatId) && (
            <>
              <h3>Handelsregister / Unternehmenskennzahlen</h3>
              <p>
                {L.companyRegister ? <>Firmenbuch: {L.companyRegister}<br /></> : null}
                {L.vatId ? <>UID: {L.vatId}</> : null}
              </p>
            </>
          )}

          <h3>Gewerblicher Status</h3>
          <p>{L.authority}</p>

          <h3>Anwendbare Vorschriften</h3>
          <p>
            GewO – <a href={L.regulationsUrl}>Austrian Trade Regulation Act (GewO) on RIS</a>
          </p>
        </div>
      </section>
    </main>
  );
}
