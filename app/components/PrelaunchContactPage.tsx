import Link from "next/link";
import { Clock3 } from "lucide-react";
import type { Locale } from "@/lib/siteContent";

export default function PrelaunchContactPage({ locale }: { locale: Locale }) {
  const isEnglish = locale === "en";

  return (
    <main>
      <section className="hero-gradient-enhanced py-14 md:py-20">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--primary-light)] text-[var(--primary)]">
            <Clock3 className="h-6 w-6" aria-hidden="true" />
          </div>
          <h1 className="text-3xl font-bold text-[var(--text)] md:text-4xl">
            {isEnglish ? "Contact is not open yet" : "Kontakt ist noch nicht geöffnet"}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-[var(--text-secondary)]">
            {isEnglish
              ? "Elkaza is currently a project in preparation. No services are offered, and inquiries or orders are not being accepted through this website."
              : "Elkaza ist derzeit ein Projekt in Vorbereitung. Über diese Website werden noch keine Dienstleistungen angeboten und keine Anfragen oder Aufträge angenommen."}
          </p>
          <Link
            href={isEnglish ? "/en" : "/"}
            className="mt-8 inline-flex rounded-lg bg-[var(--primary)] px-6 py-3 font-semibold text-[var(--primary-foreground)] hover:bg-[var(--primary-hover)]"
          >
            {isEnglish ? "Back to homepage" : "Zurück zur Startseite"}
          </Link>
        </div>
      </section>
    </main>
  );
}
