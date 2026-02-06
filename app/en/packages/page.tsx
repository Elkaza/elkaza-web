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
            <section className="py-10 md:py-14 hero-gradient">
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

            <section className="py-6 bg-[var(--bg)]">
                <div className="max-w-[1140px] mx-auto px-6 text-center text-sm text-[var(--muted)]">
                    <p>All prices excl. VAT. Custom quotes available on request.</p>
                </div>
            </section>
        </main>
    );
}
