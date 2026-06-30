import PackageCards from "@/app/components/PackageCards";
import type { Locale } from "@/lib/siteContent";

export default function PrelaunchPackagesPage({ locale }: { locale: Locale }) {
  const isEnglish = locale === "en";

  return (
    <main>
      <section className="hero-gradient-enhanced py-10 md:py-14">
        <div className="mx-auto max-w-[800px] px-4 text-center sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-[var(--primary)]">
            {isEnglish ? "Non-binding concept" : "Unverbindliches Konzept"}
          </p>
          <h1 className="mt-2 text-4xl font-bold text-[var(--text)]">
            {isEnglish ? "Planned service models" : "Geplante Leistungsmodelle"}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--text-secondary)]">
            {isEnglish
              ? "These models document the current planning status. They are not offers, prices are not yet defined, and no orders are being accepted."
              : "Diese Modelle dokumentieren den aktuellen Planungsstand. Sie sind keine Angebote, Preise stehen noch nicht fest und Aufträge werden noch nicht angenommen."}
          </p>
        </div>
      </section>
      <section className="bg-[var(--surface)] py-10 md:py-14">
        <div className="mx-auto max-w-[1140px] px-4 sm:px-6">
          <PackageCards locale={locale} />
        </div>
      </section>
    </main>
  );
}
