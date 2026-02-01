import { legal } from '@/lib/legal';

export const metadata = {
  title: 'Impressum - Elkaza Consulting',
  description: 'Impressum und rechtliche Angaben',
};

export default function ImpressumPage() {
  const L = legal.de;

  return (
    <main>
      <section className="py-10 md:py-14 hero-gradient">
        <div className="max-w-[1140px] mx-auto px-6">
          <h1 className="text-4xl font-bold text-[var(--text)]">Impressum</h1>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-[var(--surface)]">
        <div className="max-w-[1140px] mx-auto px-6 prose prose-lg max-w-3xl">
          <p className="text-sm text-[var(--muted)] font-medium">Placeholders must be replaced before public launch.</p>
          <h2>{L.title}</h2>

          <p className="text-[var(--text-secondary)]">Betreiber / Anbieter:</p>
          <p>
            {L.operatorLine}
            <br />
            Verantwortlich: {L.owner}
          </p>

          <h3>Adresse</h3>
          <p>
            {L.address.street}
            <br />
            {L.address.cityLine}
            <br />
            {L.address.country}
          </p>

          <h3>Kontakt</h3>
          <p>
            E‑Mail:{' '}
            <a href={`mailto:${L.contact.email.replace(/\[|\]/g, '')}`}>{L.contact.email}</a>
            <br />
            Kontaktformular: {L.contact.contactForm}
          </p>

          <h3>Unternehmensgegenstand</h3>
          <p>{L.businessPurpose}</p>

          { (L.companyRegister || L.vatId) && (
            <>
              <h3>Handelsregister / Unternehmenskennzahlen</h3>
              <p>
                {L.companyRegister ? <>Firmenbuch: {L.companyRegister}<br /></> : null}
                {L.vatId ? <>UID: {L.vatId}</> : null}
              </p>
            </>
          ) }

          <h3>Aufsichtsbehörde / Gewerbebehörde</h3>
          <p>{L.authority}</p>

          <h3>Anwendbare Vorschriften</h3>
          <p>
            GewO — <a href={L.regulationsUrl}>Austrian Trade Regulation Act (GewO) on RIS</a>
          </p>
        </div>
      </section>
    </main>
  );
}
