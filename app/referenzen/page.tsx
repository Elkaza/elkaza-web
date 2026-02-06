import Link from "next/link";
import { siteContent } from "@/lib/siteContent";

export const metadata = {
    title: "Referenzen & Case Studies – Erfolgreiche IT-Projekte | Elkaza",
    description: "Sehen Sie, wie wir KMUs in Wien geholfen haben: Stabilere Netzwerke, sichere Backups und weniger Ausfälle. Echte Ergebnisse, keine Theorie.",
    alternates: { canonical: "/referenzen" },
};

export default function ReferenzenPage() {
    const content = siteContent.caseStudies.de;

    return (
        <main>
            <section className="py-10 md:py-14 hero-gradient">
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
                                href={`/referenzen/${cs.slug}`}
                                className="group block rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow-sm)] hover:border-[var(--primary)] hover:shadow-[var(--shadow-glow)] hover:bg-[var(--elevated)] transition-all duration-200"
                            >
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-xs font-semibold text-[var(--primary-foreground)] bg-[var(--primary)] px-3 py-1 rounded-full">
                                        {cs.tag}
                                    </span>
                                    <span className="text-xs text-[var(--muted)]">{cs.meta}</span>
                                </div>
                                <h2 className="text-lg font-semibold text-[var(--text)] mb-2 group-hover:text-[var(--primary)] transition-colors">{cs.title}</h2>
                                <p className="text-[var(--muted)] text-sm mb-4 leading-relaxed">{cs.summary}</p>
                                <ul className="text-sm text-[var(--text-secondary)] space-y-1">
                                    {cs.results.map((r, i) => (
                                        <li key={i} className="flex items-center gap-2">
                                            <span className="text-[var(--primary)]">✓</span>
                                            <span>{r}</span>
                                        </li>
                                    ))}
                                </ul>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
