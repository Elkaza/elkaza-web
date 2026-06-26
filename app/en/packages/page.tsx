import { siteContent } from "@/lib/siteContent";
import PackageCards from "@/app/components/PackageCards";
import CTA from "@/app/components/CTA";
import { HelpCircle } from "lucide-react";

export const metadata = {
    title: "Packages - Elkaza Consulting",
    description: "Clear services, fair prices. Assessment, implementation, or ongoing support.",
};

export default function PackagesEnPage() {
    const content = siteContent.packages.en;

    return (
        <main>
            <section className="py-10 md:py-14 hero-gradient-enhanced">
                <div className="max-w-[1140px] mx-auto px-4 text-center sm:px-6">
                    <h1 className="text-4xl font-bold text-[var(--text)] mb-3">{content.title}</h1>
                    <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
                        {content.subtitle} Choose the right entry point: create clarity, implement improvements, or run ongoing support.
                    </p>
                </div>
            </section>

            <section className="py-10 md:py-14 bg-[var(--surface)]">
                <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
                    <div className="mb-8 grid gap-3 rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-4 sm:grid-cols-3 sm:p-5">
                        {[
                            ["Starter", "when the current IT situation is unclear"],
                            ["Growth", "when concrete problems should be solved"],
                            ["Managed", "when operations and maintenance should run continuously"],
                        ].map(([title, copy]) => (
                            <div key={title} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4">
                                <p className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">Best for</p>
                                <h2 className="mt-1 font-semibold text-[var(--text)]">{title}</h2>
                                <p className="mt-1 text-sm leading-relaxed text-[var(--text-secondary)]">{copy}</p>
                            </div>
                        ))}
                    </div>

                    <PackageCards locale="en" />

                    {/* Custom / Enterprise Callout */}
                    <div className="mt-8 rounded-2xl border border-[var(--border)] bg-[var(--elevated)] p-6 text-center shadow-sm sm:p-8">
                        <h3 className="text-xl font-bold text-[var(--text)] mb-3">{content.custom.title}</h3>
                        <p className="text-[var(--text-secondary)] mb-6">{content.custom.desc}</p>
                        <CTA href={content.custom.href} variant="secondary">{content.custom.cta}</CTA>
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="py-12 md:py-16 bg-[var(--bg)]">
                <div className="max-w-[960px] mx-auto px-4 sm:px-6">
                    <div className="mb-8 text-center">
                        <p className="text-sm font-semibold uppercase tracking-wide text-[var(--muted)]">Comparison</p>
                        <h2 className="mt-2 text-2xl font-bold text-[var(--text)]">What you actually get</h2>
                    </div>
                    <div className="overflow-x-auto rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-sm)]">
                        <table className="w-full min-w-[680px] border-collapse text-sm text-[var(--text)]">
                            <thead>
                                <tr className="bg-[var(--elevated)] text-left">
                                    <th className="w-1/4 border-b border-r border-[var(--border)] p-4">Deliverable</th>
                                    <th className="w-1/4 border-b border-r border-[var(--border)] p-4 text-center">Starter</th>
                                    <th className="w-1/4 border-b border-r border-[var(--border)] p-4 text-center">Growth</th>
                                    <th className="w-1/4 border-b border-[var(--border)] p-4 text-center">Managed</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-[var(--border)]">
                                    <td className="p-4 border-r border-[var(--border)] font-medium">Audit & Analysis</td>
                                    <td className="p-4 border-r border-[var(--border)] text-center text-[var(--primary)]">✔</td>
                                    <td className="p-4 border-r border-[var(--border)] text-center text-[var(--primary)]">✔</td>
                                    <td className="p-4 border-[var(--border)] text-center text-[var(--primary)]">✔</td>
                                </tr>
                                <tr className="border-b border-[var(--border)]">
                                    <td className="p-4 border-r border-[var(--border)] font-medium">Documentation</td>
                                    <td className="p-4 border-r border-[var(--border)] text-center text-[var(--primary)]">Status Quo</td>
                                    <td className="p-4 border-r border-[var(--border)] text-center text-[var(--primary)]">Complete</td>
                                    <td className="p-4 border-[var(--border)] text-center text-[var(--primary)]">Ongoing</td>
                                </tr>
                                <tr className="border-b border-[var(--border)]">
                                    <td className="p-4 border-r border-[var(--border)] font-medium">Implementation/Fixes</td>
                                    <td className="p-4 border-r border-[var(--border)] text-center text-[var(--muted)]">–</td>
                                    <td className="p-4 border-r border-[var(--border)] text-center text-[var(--primary)]">✔</td>
                                    <td className="p-4 border-[var(--border)] text-center text-[var(--primary)]">Maintenance</td>
                                </tr>
                                <tr className="border-b border-[var(--border)]">
                                    <td className="p-4 border-r border-[var(--border)] font-medium">Monitoring (24/7)</td>
                                    <td className="p-4 border-r border-[var(--border)] text-center text-[var(--muted)]">–</td>
                                    <td className="p-4 border-r border-[var(--border)] text-center text-[var(--muted)]">–</td>
                                    <td className="p-4 border-[var(--border)] text-center text-[var(--primary)]">✔</td>
                                </tr>
                                <tr>
                                    <td className="p-4 border-r border-[var(--border)] font-medium">Response Time (SLA)</td>
                                    <td className="p-4 border-r border-[var(--border)] text-center text-[var(--muted)]">–</td>
                                    <td className="p-4 border-r border-[var(--border)] text-center text-[var(--muted)]">Project</td>
                                    <td className="p-4 border-[var(--border)] text-center text-[var(--primary)]">&lt; 4h</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-12 md:py-16 bg-[var(--surface)] border-t border-[var(--border)]">
                <div className="max-w-[800px] mx-auto px-6">
                    <div className="flex items-center justify-center gap-2 mb-8">
                        <HelpCircle className="w-6 h-6 text-[var(--primary)]" />
                        <h2 className="text-2xl font-bold text-[var(--text)]">FAQ</h2>
                    </div>
                    <div className="space-y-4">
                        {content.faq.map((item, i) => (
                            <div key={i} className="p-5 rounded-xl bg-[var(--bg)] border border-[var(--border)]">
                                <h3 className="font-semibold text-[var(--text)] mb-2">{item.q}</h3>
                                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Next Steps */}
            <section className="py-12 md:py-16 bg-[var(--surface)] border-y border-[var(--border)]">
                <div className="max-w-[1140px] mx-auto px-4 text-center sm:px-6">
                    <h2 className="text-2xl font-bold text-[var(--text)] mb-8">Next Steps</h2>
                    <div className="grid gap-4 text-left md:grid-cols-4">
                        <div className="rounded-xl border border-[var(--border)] bg-[var(--bg)] p-4">
                            <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--primary)] font-bold text-[var(--primary-foreground)]">1</div>
                            <div>
                                <h3 className="font-semibold text-[var(--text)]">Inquiry</h3>
                                <p className="text-sm text-[var(--text-secondary)]">Fill out the contact form or give us a call.</p>
                            </div>
                        </div>
                        <div className="rounded-xl border border-[var(--border)] bg-[var(--bg)] p-4">
                            <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--primary)] font-bold text-[var(--primary-foreground)]">2</div>
                            <div>
                                <h3 className="font-semibold text-[var(--text)]">Quick Call</h3>
                                <p className="text-sm text-[var(--text-secondary)]">15 min. clarification: Is it a fit? Which package?</p>
                            </div>
                        </div>
                        <div className="rounded-xl border border-[var(--border)] bg-[var(--bg)] p-4">
                            <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--primary)] font-bold text-[var(--primary-foreground)]">3</div>
                            <div>
                                <h3 className="font-semibold text-[var(--text)]">Proposal</h3>
                                <p className="text-sm text-[var(--text-secondary)]">Transparent, fixed pricing, no surprises.</p>
                            </div>
                        </div>
                        <div className="rounded-xl border border-[var(--border)] bg-[var(--bg)] p-4">
                            <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--primary)] font-bold text-[var(--primary-foreground)]">4</div>
                            <div>
                                <h3 className="font-semibold text-[var(--text)]">Kick-off</h3>
                                <p className="text-sm text-[var(--text-secondary)]">Scheduled kick-off and immediate implementation.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-6 bg-[var(--bg)]">
                <div className="max-w-[1140px] mx-auto px-6 text-center text-sm text-[var(--muted)]">
                    <p>All prices excl. VAT. Custom quotes available on request.</p>
                </div>
            </section>
        </main>
    );
}
