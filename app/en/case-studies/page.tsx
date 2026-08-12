import Link from "next/link";
import { siteContent } from "@/lib/siteContent";
import { createLocalizedMetadata } from "@/lib/metadata";

export const metadata = createLocalizedMetadata({
  title: "Illustrative Scenarios - Elkaza",
  description: "Illustrative situations, possible approaches, and target states. These are not customer references.",
  path: "/en/case-studies",
});

export default function CaseStudiesEnPage() {
  const content = siteContent.caseStudies.en;

  return (
    <main>
      <section className="hero-gradient-enhanced py-14 md:py-20">
        <div className="max-w-[1140px] mx-auto px-6">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[var(--primary)]">Illustrative · not customer references</p>
          <h1 className="mb-3 text-[2.5rem] font-bold leading-tight tracking-tight text-[var(--text)] md:text-5xl">Illustrative Scenarios</h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-3xl">Fictional situations explaining a possible future working model.</p>
        </div>
      </section>

      <section className="bg-[var(--surface)] py-14 md:py-20">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {content.items.map((cs) => (
              <Link
                key={cs.slug}
                href={`/en/case-studies/${cs.slug}`}
                className="group block rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-colors hover:border-[var(--border-hover)]"
              >
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--primary)]">Illustrative scenario · {cs.tag}</p>
                <p className="mb-3 text-sm text-[var(--text-secondary)]">{cs.context}</p>
                <h2 className="text-lg font-semibold text-[var(--text)] mb-4 group-hover:text-[var(--primary)] transition-colors">{cs.title}</h2>

                <div className="space-y-4 text-sm text-[var(--text-secondary)]">
                  <div className="grid gap-1 sm:grid-cols-[130px_1fr]">
                    <span className="font-semibold text-[var(--text)]">Situation:</span>
                    <span>{cs.problem}</span>
                  </div>
                  <div className="grid gap-1 sm:grid-cols-[130px_1fr]">
                    <span className="font-semibold text-[var(--text)]">Possible approach:</span>
                    <span>{cs.approach}</span>
                  </div>
                  <div className="grid gap-1 sm:grid-cols-[130px_1fr]">
                    <span className="font-semibold text-[var(--text)]">Target state:</span>
                    <span>{cs.result}</span>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-[var(--border)] text-xs text-[var(--muted)]">
                  <span className="font-medium">Tools:</span> {cs.tools}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
