import { siteContent } from "@/lib/siteContent";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import CTA from "@/app/components/CTA";

const cases = siteContent.caseStudies.de.items;

export function generateStaticParams() {
    return cases.map((c) => ({ slug: c.slug }));
}

export default async function ReferenzDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const cs = cases.find((c) => c.slug === slug);
    if (!cs) notFound();

    return (
        <main>
            <section className="py-10 md:py-14 hero-gradient">
                <div className="max-w-4xl mx-auto px-6">
                    <span className="text-xs font-semibold text-[var(--primary-foreground)] bg-[var(--primary)] px-3 py-1 rounded-full">
                        {cs.tag}
                    </span>
                    <h1 className="text-4xl font-bold text-[var(--text)] mt-4 mb-3">{cs.title}</h1>
                    <p className="text-xl text-[var(--text-secondary)]">{cs.summary}</p>
                </div>
            </section>

            <section className="py-10 md:py-14 bg-[var(--surface)]">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-2xl font-semibold text-[var(--text)] mb-5">Ergebnisse</h2>
                    <ul className="space-y-3 mb-8">
                        {cs.results.map((r, i) => (
                            <li key={i} className="flex items-start gap-3 text-[var(--text-secondary)]">
                                <Check className="w-5 h-5 text-[var(--primary)] mt-0.5 shrink-0" />
                                <span>{r}</span>
                            </li>
                        ))}
                    </ul>

                    <p className="text-[var(--muted)] text-sm mb-6">
                        Mehr Details auf Anfrage. Kontaktieren Sie uns für ein Gespräch.
                    </p>

                    <CTA href="/kontakt">Kontakt aufnehmen</CTA>
                </div>
            </section>
        </main>
    );
}
