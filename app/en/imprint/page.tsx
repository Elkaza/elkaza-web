import { legal } from '@/lib/legal';
import { createLocalizedMetadata } from '@/lib/metadata';

export const metadata = createLocalizedMetadata({
  title: 'Imprint - Elkaza Consulting',
  description: 'Legal disclosure and operator information',
  path: '/en/imprint',
});

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

          <div className="not-prose my-6 rounded-lg border border-amber-300 bg-amber-50 p-4 text-sm leading-relaxed text-amber-950 dark:border-amber-700 dark:bg-amber-950 dark:text-amber-100">
            This website documents a project in preparation. No services are currently offered, no orders are accepted, and no contracts are concluded through this website. The operator&apos;s full name and geographic address will be added before commercial activation.
          </div>

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
          <p>No business contact channel is active during the preparation phase.</p>

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

          <h3>Commercial status</h3>
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
