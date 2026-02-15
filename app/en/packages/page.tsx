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
                <div className="max-w-[1140px] mx-auto px-6 text-center">
                    <h1 className="text-4xl font-bold text-[var(--text)] mb-3">{content.title}</h1>
                    <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">{content.subtitle}</p>
                </div>
            </section>

            <section className="py-10 md:py-14 bg-[var(--surface)]">
                <div className="max-w-[1140px] mx-auto px-6">
                    <PackageCards locale="en" />

                    {/* Custom / Enterprise Callout */}
                    <div className="mt-8 p-8 rounded-2xl bg-[var(--elevated)] border border-[var(--border)] text-center max-w-3xl mx-auto shadow-sm">
                        <h3 className="text-xl font-bold text-[var(--text)] mb-3">{content.custom.title}</h3>
                        <p className="text-[var(--text-secondary)] mb-6">{content.custom.desc}</p>
                        <CTA href={content.custom.href} variant="secondary">{content.custom.cta}</CTA>
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="py-12 md:py-16 bg-[var(--bg)]">
                <div className="max-w-[900px] mx-auto px-6">
                    <h2 className="text-2xl font-bold text-[var(--text)] mb-8 text-center">Deliverables Comparison</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-[var(--text)] border-collapse border border-[var(--border)] bg-[var(--surface)]">
                            <thead>
                                <tr className="bg-[var(--elevated)] text-left">
                                    <th className="p-4 border-b border-r border-[var(--border)] w-1/4">Feature</th>
                                    <th className="p-4 border-b border-r border-[var(--border)] w-1/4 text-center">Starter</th>
                                    <th className="p-4 border-b border-r border-[var(--border)] w-1/4 text-center">Growth</th>
                                    <th className="p-4 border-b border-[var(--border)] w-1/4 text-center">Managed</th>
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
                <div className="max-w-[1140px] mx-auto px-6 text-center">
                    <h2 className="text-2xl font-bold text-[var(--text)] mb-8">Next Steps</h2>
                    <div className="grid md:grid-cols-4 gap-6 text-left max-w-4xl mx-auto">
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-[var(--primary-light)] text-[var(--primary)] flex items-center justify-center font-bold shrink-0">1</div>
                            <div>
                                <h3 className="font-semibold text-[var(--text)]">Inquiry</h3>
                                <p className="text-sm text-[var(--text-secondary)]">Fill out the contact form or give us a call.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-[var(--primary-light)] text-[var(--primary)] flex items-center justify-center font-bold shrink-0">2</div>
                            <div>
                                <h3 className="font-semibold text-[var(--text)]">Quick Call</h3>
                                <p className="text-sm text-[var(--text-secondary)]">15 min. clarification: Is it a fit? Which package?</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-[var(--primary-light)] text-[var(--primary)] flex items-center justify-center font-bold shrink-0">3</div>
                            <div>
                                <h3 className="font-semibold text-[var(--text)]">Proposal</h3>
                                <p className="text-sm text-[var(--text-secondary)]">Transparent, fixed pricing, no surprises.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-[var(--primary-light)] text-[var(--primary)] flex items-center justify-center font-bold shrink-0">4</div>
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
