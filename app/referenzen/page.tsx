import Link from "next/link";
import { siteContent } from "@/lib/siteContent";
import { createLocalizedMetadata } from "@/lib/metadata";

export const metadata = createLocalizedMetadata({
    title: "Beispielszenarien - Elkaza",
    description: "Illustrative Situationen, mögliche Ansätze und Zielbilder. Keine Kundenreferenzen.",
    path: "/referenzen",
});

export default function ReferenzenPage() {
    const content = siteContent.caseStudies.de;

    return (
        <main>
            <section className="hero-gradient-enhanced py-14 md:py-20">
                <div className="max-w-[1140px] mx-auto px-6">
                    <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[var(--primary)]">Illustrativ · keine Kundenreferenzen</p>
                    <h1 className="mb-3 text-[2.5rem] font-bold leading-tight tracking-tight text-[var(--text)] md:text-5xl">Beispielszenarien</h1>
                    <p className="text-lg text-[var(--text-secondary)] max-w-3xl">Fiktive Situationen, mögliche Ansätze und Zielbilder. Keine Kundenreferenzen.</p>
                </div>
            </section>

            <section className="bg-[var(--surface)] py-14 md:py-20">
                <div className="max-w-[1140px] mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {content.items.map((cs) => (
                            <Link
                                key={cs.slug}
                                href={`/referenzen/${cs.slug}`}
                                className="group block rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-colors hover:border-[var(--border-hover)]"
                            >
                                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--primary)]">Beispielszenario · {cs.tag}</p>
                                <p className="mb-3 text-sm text-[var(--text-secondary)]">{cs.context}</p>
                                <h2 className="text-lg font-semibold text-[var(--text)] mb-4 group-hover:text-[var(--primary)] transition-colors">{cs.title}</h2>

                                <div className="space-y-4 text-sm text-[var(--text-secondary)]">
                                    <div className="grid gap-1 sm:grid-cols-[130px_1fr]">
                                        <span className="font-semibold text-[var(--text)]">Situation:</span>
                                        <span>{cs.problem}</span>
                                    </div>
                                    <div className="grid gap-1 sm:grid-cols-[130px_1fr]">
                                        <span className="font-semibold text-[var(--text)]">Möglicher Ansatz:</span>
                                        <span>{cs.approach}</span>
                                    </div>
                                    <div className="grid gap-1 sm:grid-cols-[130px_1fr]">
                                        <span className="font-semibold text-[var(--text)]">Zielbild:</span>
                                        <span>{cs.result}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
