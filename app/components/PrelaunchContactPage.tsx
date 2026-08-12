import Link from "next/link";
import type { Locale } from "@/lib/siteContent";

export default function PrelaunchContactPage({ locale }: { locale: Locale }) {
  const isEnglish = locale === "en";

  return (
    <main>
      <section className="hero-gradient-enhanced py-20 md:py-28">
        <div className="mx-auto max-w-2xl px-6">
          <div className="mb-6 flex items-center gap-2 text-sm font-medium text-[var(--status-text)]">
            <span className="h-2 w-2 rounded-full bg-amber-500" aria-hidden="true" />
            {isEnglish ? "Project in preparation" : "Projekt in Vorbereitung"}
          </div>
          <h1 className="text-[2.25rem] font-bold leading-tight tracking-tight text-[var(--text)] md:text-5xl">
            {isEnglish ? "Contact is not open yet" : "Kontakt ist noch nicht geöffnet"}
          </h1>
          <p className="mt-5 max-w-[62ch] text-lg leading-relaxed text-[var(--text-secondary)]">
            {isEnglish
              ? "Elkaza is currently a project in preparation. No services are offered, and inquiries or orders are not being accepted through this website."
              : "Elkaza ist derzeit ein Projekt in Vorbereitung. Über diese Website werden noch keine Dienstleistungen angeboten und keine Anfragen oder Aufträge angenommen."}
          </p>
          <Link
            href={isEnglish ? "/en" : "/"}
            className="mt-8 inline-flex font-semibold text-[var(--primary)] hover:text-[var(--primary-hover)]"
          >
            {isEnglish ? "Back to homepage →" : "Zurück zur Startseite →"}
          </Link>
        </div>
      </section>
    </main>
  );
}
