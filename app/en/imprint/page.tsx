import { legal } from '@/lib/legal';

export const metadata = {
  title: 'Imprint - Elkaza Consulting',
  description: 'Legal disclosure and operator information',
};

export default function ImprintPage() {
  const L = legal.en;

  return (
    <main>
      <section className="py-10 md:py-14 hero-gradient-enhanced">
        <div className="max-w-[1140px] mx-auto px-6">
          <h1 className="text-4xl font-bold text-[var(--text)]">Imprint</h1>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-[var(--surface)]">
        <div className="max-w-[1140px] mx-auto px-6 prose prose-lg max-w-3xl">
          <h2>{L.title}</h2>

          <p className="text-[var(--text-secondary)]">Operator / Provider:</p>
          <p>
            {L.operatorLine}
          </p>

          <h3>Address</h3>
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

          <h3>Contact</h3>
          <p>
            E‑mail:{' '}
            <a href={`mailto:${L.contact.email.replace(/\[|\]/g, '')}`}>{L.contact.email}</a>
            <br />
            Contact form: {L.contact.contactForm}
          </p>

          <h3>Business purpose</h3>
          <p>{L.businessPurpose}</p>

          {(L.companyRegister || L.vatId) && (
            <>
              <h3>Company register / Identifiers</h3>
              <p>
                {L.companyRegister ? <>Company register: {L.companyRegister}<br /></> : null}
                {L.vatId ? <>VAT ID: {L.vatId}</> : null}
              </p>
            </>
          )}

          <h3>Supervisory authority / Trade authority</h3>
          <p>{L.authority}</p>

          <h3>Applicable regulations</h3>
          <p>
            Austrian Trade Regulation Act (GewO) – <a href={L.regulationsUrl}>RIS</a>
          </p>
        </div>
      </section>
    </main>
  );
}
