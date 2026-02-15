import Link from "next/link";
import CTA from "@/app/components/CTA";

export const metadata = {
    title: "404 - Seite nicht gefunden | Elkaza",
    description: "Die angeforderte Seite wurde nicht gefunden.",
};

export default function NotFound() {
    return (
        <main>
            <section className="py-20 md:py-28 hero-gradient-enhanced min-h-[60vh] flex items-center">
                <div className="max-w-[800px] mx-auto px-6 text-center">
                    <div className="text-7xl md:text-9xl font-bold text-[var(--primary)] mb-6 opacity-20">
                        404
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4">
                        Seite nicht gefunden
                    </h1>
                    <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-md mx-auto">
                        Die Seite, die Sie suchen, existiert leider nicht oder wurde verschoben.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <CTA href="/">Zur Startseite</CTA>
                        <CTA href="/leistungen" variant="secondary">
                            Unsere Leistungen
                        </CTA>
                    </div>
                    <div className="mt-12 pt-8 border-t border-[var(--border)]">
                        <p className="text-sm text-[var(--muted)] mb-4">
                            Hilfreiche Links:
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 text-sm">
                            <Link
                                href="/kontakt"
                                className="text-[var(--primary)] hover:underline"
                            >
                                Kontakt
                            </Link>
                            <Link
                                href="/pakete"
                                className="text-[var(--primary)] hover:underline"
                            >
                                Pakete
                            </Link>
                            <Link
                                href="/referenzen"
                                className="text-[var(--primary)] hover:underline"
                            >
                                Referenzen
                            </Link>
                            <Link
                                href="/ueber-uns"
                                className="text-[var(--primary)] hover:underline"
                            >
                                Über uns
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
