import Link from "next/link";
import { siteContent } from "@/lib/siteContent";

export const metadata = {
  title: "Case Studies - Elkaza Consulting",
  description: "Projects with measurable impact. Network modernization and security for SMEs.",
};

export default function CaseStudiesEnPage() {
  const content = siteContent.caseStudies.en;

  return (
    <main>
      <section className="py-10 md:py-14 hero-gradient-enhanced">
        <div className="max-w-[1140px] mx-auto px-6">
          <h1 className="text-4xl font-bold text-[var(--text)] mb-3">{content.title}</h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-3xl">{content.subtitle}</p>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-[var(--surface)]">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {content.items.map((cs) => (
              <Link
                key={cs.slug}
                href={`/en/case-studies/${cs.slug}`}
                className="group block rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow-sm)] hover:border-[var(--primary)] hover:shadow-[var(--shadow-glow)] hover:bg-[var(--elevated)] transition-all duration-200"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-[var(--primary-foreground)] bg-[var(--primary)] px-3 py-1 rounded-full">
                    {cs.tag}
                  </span>
                  <span className="text-xs text-[var(--text-secondary)] font-medium">{cs.context}</span>
                </div>
                <h2 className="text-lg font-semibold text-[var(--text)] mb-4 group-hover:text-[var(--primary)] transition-colors">{cs.title}</h2>

                <div className="space-y-2 text-sm text-[var(--text-secondary)]">
                  <div className="flex gap-2">
                    <span className="font-semibold text-[var(--text)] min-w-[70px]">Problem:</span>
                    <span>{cs.problem}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-semibold text-[var(--text)] min-w-[70px]">Solution:</span>
                    <span>{cs.approach}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-semibold text-[var(--text)] min-w-[70px]">Result:</span>
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
