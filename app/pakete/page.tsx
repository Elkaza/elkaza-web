import { siteContent } from "@/lib/siteContent";
import PackageCards from "@/app/components/PackageCards";
import CTA from "@/app/components/CTA";
import { HelpCircle } from "lucide-react";

export const metadata = {
    title: "Preise & Pakete – IT-Support & Security für KMUs | Elkaza",
    description: "Transparente IT-Pakete für Unternehmen in Wien: Assessment, Umsetzung oder laufende Betreuung. Starten Sie ab 490 € mit unserem Basis-Check.",
    alternates: { canonical: "/pakete" },
};

export default function PaketePage() {
    const content = siteContent.packages.de;

    return (
        <main>
            <section className="py-10 md:py-14 hero-gradient-enhanced">
                <div className="max-w-[1140px] mx-auto px-4 text-center sm:px-6">
                    <h1 className="text-4xl font-bold text-[var(--text)] mb-3">{content.title}</h1>
                    <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
                        {content.subtitle} Wählen Sie den Einstieg nach Situation: Klarheit schaffen, Verbesserung umsetzen oder laufend betreuen lassen.
                    </p>
                </div>
            </section>

            <section className="py-10 md:py-14 bg-[var(--surface)]">
                <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
                    <div className="mb-8 grid gap-3 rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-4 sm:grid-cols-3 sm:p-5">
                        {[
                            ["Starter", "wenn die aktuelle IT-Lage unklar ist"],
                            ["Growth", "wenn konkrete Probleme gelöst werden sollen"],
                            ["Managed", "wenn Betrieb und Wartung dauerhaft laufen sollen"],
                        ].map(([title, copy]) => (
                            <div key={title} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4">
                                <p className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">Passend für</p>
                                <h2 className="mt-1 font-semibold text-[var(--text)]">{title}</h2>
                                <p className="mt-1 text-sm leading-relaxed text-[var(--text-secondary)]">{copy}</p>
                            </div>
                        ))}
                    </div>

                    <PackageCards locale="de" />

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
                        <p className="text-sm font-semibold uppercase tracking-wide text-[var(--muted)]">Vergleich</p>
                        <h2 className="mt-2 text-2xl font-bold text-[var(--text)]">Was Sie konkret bekommen</h2>
                    </div>
                    <div className="overflow-x-auto rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-sm)]">
                        <table className="w-full min-w-[680px] border-collapse text-sm text-[var(--text)]">
                            <thead>
                                <tr className="bg-[var(--elevated)] text-left">
                                    <th className="w-1/4 border-b border-r border-[var(--border)] p-4">Lieferobjekt</th>
                                    <th className="w-1/4 border-b border-r border-[var(--border)] p-4 text-center">Starter</th>
                                    <th className="w-1/4 border-b border-r border-[var(--border)] p-4 text-center">Growth</th>
                                    <th className="w-1/4 border-b border-[var(--border)] p-4 text-center">Managed</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-[var(--border)]">
                                    <td className="p-4 border-r border-[var(--border)] font-medium">Audit & Analyse</td>
                                    <td className="p-4 border-r border-[var(--border)] text-center text-[var(--primary)]">✔</td>
                                    <td className="p-4 border-r border-[var(--border)] text-center text-[var(--primary)]">✔</td>
                                    <td className="p-4 border-[var(--border)] text-center text-[var(--primary)]">✔</td>
                                </tr>
                                <tr className="border-b border-[var(--border)]">
                                    <td className="p-4 border-r border-[var(--border)] font-medium">Dokumentation</td>
                                    <td className="p-4 border-r border-[var(--border)] text-center text-[var(--primary)]">Status Quo</td>
                                    <td className="p-4 border-r border-[var(--border)] text-center text-[var(--primary)]">Vollständig</td>
                                    <td className="p-4 border-[var(--border)] text-center text-[var(--primary)]">Laufend</td>
                                </tr>
                                <tr className="border-b border-[var(--border)]">
                                    <td className="p-4 border-r border-[var(--border)] font-medium">Umsetzung/Fixes</td>
                                    <td className="p-4 border-r border-[var(--border)] text-center text-[var(--muted)]">–</td>
                                    <td className="p-4 border-r border-[var(--border)] text-center text-[var(--primary)]">✔</td>
                                    <td className="p-4 border-[var(--border)] text-center text-[var(--primary)]">Wartung</td>
                                </tr>
                                <tr className="border-b border-[var(--border)]">
                                    <td className="p-4 border-r border-[var(--border)] font-medium">Monitoring (24/7)</td>
                                    <td className="p-4 border-r border-[var(--border)] text-center text-[var(--muted)]">–</td>
                                    <td className="p-4 border-r border-[var(--border)] text-center text-[var(--muted)]">–</td>
                                    <td className="p-4 border-[var(--border)] text-center text-[var(--primary)]">✔</td>
                                </tr>
                                <tr>
                                    <td className="p-4 border-r border-[var(--border)] font-medium">Reaktionszeit (SLA)</td>
                                    <td className="p-4 border-r border-[var(--border)] text-center text-[var(--muted)]">–</td>
                                    <td className="p-4 border-r border-[var(--border)] text-center text-[var(--muted)]">Projekt</td>
                                    <td className="p-4 border-[var(--border)] text-center text-[var(--primary)]">&lt; 4h</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-12 md:py-16 bg-[var(--surface)]">
                <div className="max-w-[800px] mx-auto px-6">
                    <div className="flex items-center justify-center gap-2 mb-8">
                        <HelpCircle className="w-6 h-6 text-[var(--primary)]" />
                        <h2 className="text-2xl font-bold text-[var(--text)]">Häufige Fragen</h2>
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
                    <h2 className="text-2xl font-bold text-[var(--text)] mb-8">Nächste Schritte</h2>
                    <div className="grid gap-4 text-left md:grid-cols-4">
                        <div className="rounded-xl border border-[var(--border)] bg-[var(--bg)] p-4">
                            <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--primary)] font-bold text-[var(--primary-foreground)]">1</div>
                            <div>
                                <h3 className="font-semibold text-[var(--text)]">Anfrage</h3>
                                <p className="text-sm text-[var(--text-secondary)]">Kontaktformular ausfüllen oder anrufen.</p>
                            </div>
                        </div>
                        <div className="rounded-xl border border-[var(--border)] bg-[var(--bg)] p-4">
                            <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--primary)] font-bold text-[var(--primary-foreground)]">2</div>
                            <div>
                                <h3 className="font-semibold text-[var(--text)]">Kurz-Call</h3>
                                <p className="text-sm text-[var(--text-secondary)]">15 Min. Klärung: Passt es? Welches Paket?</p>
                            </div>
                        </div>
                        <div className="rounded-xl border border-[var(--border)] bg-[var(--bg)] p-4">
                            <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--primary)] font-bold text-[var(--primary-foreground)]">3</div>
                            <div>
                                <h3 className="font-semibold text-[var(--text)]">Angebot</h3>
                                <p className="text-sm text-[var(--text-secondary)]">Transparent, fixiert, keine Überraschungen.</p>
                            </div>
                        </div>
                        <div className="rounded-xl border border-[var(--border)] bg-[var(--bg)] p-4">
                            <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--primary)] font-bold text-[var(--primary-foreground)]">4</div>
                            <div>
                                <h3 className="font-semibold text-[var(--text)]">Start</h3>
                                <p className="text-sm text-[var(--text-secondary)]">Kick-off Termin und sofortige Umsetzung.</p>
                            </div>
                        </div>
                    </div>
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
