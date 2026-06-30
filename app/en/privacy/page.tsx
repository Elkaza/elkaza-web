import { legal } from '@/lib/legal';
import { createLocalizedMetadata } from '@/lib/metadata';

export const metadata = createLocalizedMetadata({
  title: "Privacy Policy - Elkaza Consulting",
  description: "Privacy policy and data processing information in accordance with GDPR",
  path: '/en/privacy',
});

export default function PrivacyEn() {
  const L = legal.en;

  return (
    <main>
      <section className="py-10 md:py-14 hero-gradient-enhanced">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-[var(--text)]">Privacy Policy</h1>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-[var(--surface)]">
        <div className="max-w-3xl mx-auto px-6 prose prose-lg max-w-3xl">

          <h2 className="text-lg font-semibold">Controller</h2>
          <p>Operator of the private Elkaza project website (preparation phase)</p>
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
          <p>The business contact channel and complete operator identification will be added before commercial activation.</p>

          <h2 className="text-lg font-semibold">Purposes and legal basis</h2>
          <ul>
            <li>Operation, maintenance and security of the website (server logs) – Article 6(1)(f) GDPR.</li>
          </ul>

          <h2 className="text-lg font-semibold">Server / hosting logs</h2>
          <p>Technical access and usage data (e.g. IP address, timestamp, user agent) are processed to operate and secure the website.</p>

          <h2 className="text-lg font-semibold">Recipients</h2>
          <p>Data is shared only with service providers necessary for website operation (hosting, e‑mail). Transfers to third countries occur only with appropriate safeguards.</p>

          <h2 className="text-lg font-semibold">Storage periods</h2>
          <p>Server logs are retained only for operational and security needs. No contact requests are currently processed through this website.</p>

          <h2 className="text-lg font-semibold">Cookies and audience measurement</h2>
          <p>During the preparation phase, this website uses no analytics or marketing cookies and performs no audience measurement.</p>

          <h2 className="text-lg font-semibold">Your rights</h2>
          <p>You have the right to access, rectify, erase, restrict processing, data portability and to object. A contact route for exercising these rights must be added before public commercial use.</p>

          <h2 className="text-lg font-semibold">Complaint</h2>
          <p>You may lodge a complaint with the Austrian Data Protection Authority: https://www.dsb.gv.at/</p>
        </div>
      </section>
    </main>
  );
}
