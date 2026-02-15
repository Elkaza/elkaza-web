import CTA from "@/app/components/CTA";

export default function KIAutomatisierungPage() {
  return (
    <main>
      <section className="py-10 md:py-14 hero-gradient-enhanced">
        <div className="max-w-[1140px] mx-auto px-6">
          <h1 className="text-4xl font-bold text-[var(--text)]">KI & Automatisierung</h1>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-[var(--surface)]">
        <div className="max-w-[1140px] mx-auto px-6 space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-[var(--text)] mb-3">Business Value</h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Zeit sparen, Qualität erhöhen, Skalierung ermöglichen.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-[var(--text)] mb-3">Unser Ansatz</h2>
            <ul className="list-disc pl-6 text-[var(--text-secondary)] space-y-2">
              <li>Use-Cases identifizieren & priorisieren</li>
              <li>PoC: Schnell zeigen, was möglich ist</li>
              <li>Rollout: Stabil, dokumentiert, skalierbar</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-[var(--bg)]">
        <div className="max-w-[1140px] mx-auto px-6 text-center">
          <CTA href="/kontakt">Mehr erfahren</CTA>
        </div>
      </section>
    </main>
  );
}
