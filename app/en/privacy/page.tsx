import { legal } from '@/lib/legal';

export const metadata = {
  title: "Privacy Policy - Elkaza Consulting",
  description: "Privacy policy and data processing information in accordance with GDPR",
};

export default function PrivacyEn() {
  const L = legal.en;

  return (
    <main>
      <section className="py-10 md:py-14 hero-gradient">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-[var(--text)]">Privacy Policy</h1>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-[var(--surface)]">
        <div className="max-w-3xl mx-auto px-6 prose prose-lg max-w-3xl">

          <h2 className="text-lg font-semibold">Controller</h2>
          <p>Elkaza Consulting (in formation)</p>
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
          <p>Email: <a href="mailto:contact@elkaza.at">contact@elkaza.at</a></p>

          <h2 className="text-lg font-semibold">Purposes and legal basis</h2>
          <ul>
            <li>Handling contact requests and pre-contractual measures – Article 6(1)(b) GDPR or, where applicable, Article 6(1)(f) GDPR (legitimate interest).</li>
            <li>Operation, maintenance and security of the website (server logs) – Article 6(1)(f) GDPR.</li>
          </ul>

          <h2 className="text-lg font-semibold">Server / hosting logs</h2>
          <p>Technical access and usage data (e.g. IP address, timestamp, user agent) are processed to operate and secure the website.</p>

          <h2 className="text-lg font-semibold">Recipients</h2>
          <p>Data is shared only with service providers necessary for website operation (hosting, e‑mail). Transfers to third countries occur only with appropriate safeguards.</p>

          <h2 className="text-lg font-semibold">Storage periods</h2>
          <p>Contact information is retained as long as needed to handle the inquiry and to meet legal obligations. Server logs are retained only for operational and security needs.</p>

          <h2 className="text-lg font-semibold">Cookies / tracking</h2>
          <p>This website does not use analytics or marketing cookies.</p>

          <h2 className="text-lg font-semibold">Your rights</h2>
          <p>You have the right to access, rectify, erase, restrict processing, data portability and to object. To exercise your rights contact: <a href="mailto:contact@elkaza.at">contact@elkaza.at</a> or use the contact form at <code>/en/contact</code>.</p>

          <h2 className="text-lg font-semibold">Complaint</h2>
          <p>You may lodge a complaint with the Austrian Data Protection Authority: https://www.dsb.gv.at/</p>
        </div>
      </section>
    </main>
  );
}
