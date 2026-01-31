import { siteContent } from "@/lib/siteContent";
import PackageCards from "@/app/components/PackageCards";

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
