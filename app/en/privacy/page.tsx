export default function PrivacyEn() {
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
          <p>Email: <a href="mailto:contact@elkaza.at">contact@elkaza.at</a></p>

          <h2 className="text-lg font-semibold">Purposes & Legal basis</h2>
          <p>
            We process personal data to handle contact requests and pre-contractual measures.
            Legal bases: Art.6(1)(b) and (f) GDPR (contractual/pre-contractual purpose, legitimate
            interest).
          </p>

          <h2 className="text-lg font-semibold">Server / Hosting logs</h2>
          <p>Technical access and usage data (server logs) are processed for operation and security.</p>

          <h2 className="text-lg font-semibold">Recipients</h2>
          <p>Data is only shared with necessary service providers (e.g. hosting provider).</p>

          <h2 className="text-lg font-semibold">Storage period</h2>
          <p>Contact data is retained as long as required to process the request; otherwise typically up to 12 months.</p>

          <h2 className="text-lg font-semibold">Cookies / Tracking</h2>
          <p>No analytics cookies are used on this site.</p>

          <h2 className="text-lg font-semibold">Your rights</h2>
          <p>
            You have the right to access, rectify, erase, restrict processing, data portability and
            to object. You may lodge a complaint with the Austrian Data Protection Authority
            (www.dsb.gv.at).
          </p>

          <p className="text-[var(--text-secondary)]">
            Note: This is a concise baseline privacy notice for a small service website. Add
            additional technical details (mail provider, exact host) if required.
          </p>
        </div>
      </section>
    </main>
  );
}
