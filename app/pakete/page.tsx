import { siteContent } from "@/lib/siteContent";
import PackageCards from "@/app/components/PackageCards";

export const metadata = {
    title: "Preise & Pakete – IT-Support & Security für KMUs | Elkaza",
    description: "Transparente IT-Pakete für Unternehmen in Wien: Assessment, Umsetzung oder laufende Betreuung. Starten Sie ab 490 € mit unserem Basis-Check.",
    alternates: { canonical: "/pakete" },
};

export default function PaketePage() {
    const content = siteContent.packages.de;

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
                    <PackageCards locale="de" />
                </div>
            </section>

            <section className="py-6 bg-[var(--bg)]">
                <div className="max-w-[1140px] mx-auto px-6 text-center text-sm text-[var(--muted)]">
                    <p>Alle Preise zzgl. USt. Individuelle Angebote auf Anfrage.</p>
                </div>
            </section>
        </main>
    );
}
