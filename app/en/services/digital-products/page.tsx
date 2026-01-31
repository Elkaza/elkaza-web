import CTA from "@/app/components/CTA";

export default function DigitalProductsPage() {
  return (
    <main>
      <section className="py-10 md:py-14 hero-gradient">
        <div className="max-w-[1140px] mx-auto px-6">
          <h1 className="text-4xl font-bold text-[var(--text)]">Digital Products & Platforms</h1>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-[var(--surface)]">
        <div className="max-w-[1140px] mx-auto px-6 space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-[var(--text)] mb-3">Business Value</h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              We build the high‑performance, scalable systems your business runs on.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-[var(--text)] mb-3">Our Approach</h2>
            <ul className="list-disc pl-6 text-[var(--text-secondary)] space-y-2">
              <li>Design: User research → Prototyping</li>
              <li>Development: Full-stack, scalable, maintainable</li>
              <li>Testing: Quality built in from the start</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-[var(--bg)]">
        <div className="max-w-[1140px] mx-auto px-6 text-center">
          <CTA href="/en/contact">Learn More</CTA>
        </div>
      </section>
    </main>
  );
}
