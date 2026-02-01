import { legal } from '@/lib/legal';

export const metadata = {
  title: 'Imprint - Elkaza Consulting',
  description: 'Legal disclosure and operator information',
};

export default function ImprintPage() {
  const L = legal.en;

  return (
    <main>
      <section className="py-10 md:py-14 hero-gradient">
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
            <br />
            Owner: {L.owner}
          </p>

          <h3>Address</h3>
          <p>
            {L.address.street}
            <br />
            {L.address.postalCode} {L.address.city}
            <br />
            {L.address.country}
          </p>

          <h3>Contact</h3>
          <p>
            E-Mail:{' '}
            <a href={`mailto:${L.contact.email.replace(/\[|\]/g, '')}`}>{L.contact.email}</a>
            <br />
            {L.contact.phone ? `Phone: ${L.contact.phone}` : `Contact form: ${L.contact.contactForm}`}
          </p>

          <h3>Business purpose</h3>
          <p>{L.businessPurpose}</p>

          <h3>Company register / Identifiers</h3>
          <p>
            Company register: {L.companyRegister}
            <br />
            VAT ID: {L.vatId}
          </p>

          <h3>Supervisory authority / Trade authority</h3>
          <p>{L.authority}</p>

          <h3>Applicable regulations</h3>
          <p>
            Austrian Trade Regulation Act (GewO) — <a href={L.regulationsUrl}>RIS</a>
          </p>

          <p className="text-[var(--text-secondary)]">
            Note: Please replace the placeholder fields with the final values (complete address,
            e‑mail, phone). If the business is not yet registered, use the values shown above
            (&quot;not registered&quot; / &quot;not available&quot;).
          </p>
        </div>
      </section>
    </main>
  );
}
