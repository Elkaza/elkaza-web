import { siteContent } from "@/lib/siteContent";
import { notFound } from "next/navigation";
import CTA from "@/app/components/CTA";

const cases = siteContent.caseStudies.en.items;

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export default async function CaseStudyDetailEnPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = cases.find((c) => c.slug === slug);
  if (!cs) notFound();

  return (
    <main>
      <section className="py-10 md:py-14 hero-gradient-enhanced">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-xs font-semibold text-[var(--primary-foreground)] bg-[var(--primary)] px-3 py-1 rounded-full">
            {cs.tag}
          </span>
          <h1 className="text-4xl font-bold text-[var(--text)] mt-4 mb-3">{cs.title}</h1>
          <p className="text-xl text-[var(--text-secondary)]">{cs.result}</p>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-[var(--surface)]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-bold text-[var(--text)] mb-2">Context & Problem</h2>
              <p className="text-[var(--text-secondary)]">{cs.context}</p>
              <p className="text-[var(--text-secondary)] mt-1">{cs.problem}</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[var(--text)] mb-2">Solution</h2>
              <p className="text-[var(--text-secondary)]">{cs.approach}</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-[var(--text)] mb-2">Results</h2>
              <p className="text-[var(--text-secondary)] font-medium text-[var(--primary)]">{cs.result}</p>
            </div>

            <div className="pt-4 border-t border-[var(--border)]">
              <span className="font-bold text-[var(--text)]">Tools Used:</span>
              <span className="ml-2 text-[var(--muted)]">{cs.tools}</span>
            </div>
          </div>

          <p className="text-[var(--muted)] text-sm mb-6">
            More details available on request. Contact us for a conversation.
          </p>

          <CTA href="/en/contact">Get in Touch</CTA>
        </div>
      </section>
    </main>
  );
}
