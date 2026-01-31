import { Building2 } from "lucide-react";

interface TypicalOutcomesProps {
    locale: "de" | "en";
}

const outcomes = {
    de: [
        {
            context: "KMU, 35 Mitarbeiter, Finanzbranche",
            before: "Keine MFA, geteilte Admin-Passwörter, Backups nie getestet",
            after: "MFA auf allen Konten, individuelle Zugangsdaten, monatliche Restore-Tests",
            result: "Erste Phishing-Attacke abgewehrt. Backup-Restore in 4h statt geschätzten 4 Tagen.",
        },
        {
            context: "Produktionsbetrieb, 80 Mitarbeiter",
            before: "IT-Probleme erst nach User-Beschwerden bekannt",
            after: "Proaktives Monitoring auf kritischen Systemen",
            result: "70% der Störungen behoben bevor jemand es bemerkt.",
        },
        {
            context: "Agentur, 25 Mitarbeiter, Remote-First",
            before: "Unstrukturiertes Netzwerk, kein VPN-Konzept",
            after: "Segmentiertes Netzwerk, sicherer Remote-Zugang",
            result: "Stabile Verbindungen, weniger Support-Tickets.",
        },
    ],
    en: [
        {
            context: "SMB, 35 employees, financial sector",
            before: "No MFA, shared admin passwords, backups never tested",
            after: "MFA on all accounts, individual credentials, monthly restore tests",
            result: "First phishing attack blocked. Backup restore in 4h instead of estimated 4 days.",
        },
        {
            context: "Manufacturing, 80 employees",
            before: "IT issues only known after user complaints",
            after: "Proactive monitoring on critical systems",
            result: "70% of issues fixed before anyone notices.",
        },
        {
            context: "Agency, 25 employees, remote-first",
            before: "Unstructured network, no VPN concept",
            after: "Segmented network, secure remote access",
            result: "Stable connections, fewer support tickets.",
        },
    ],
};

export default function TypicalOutcomes({ locale }: TypicalOutcomesProps) {
    const items = outcomes[locale];
    const title = locale === "de" ? "Typische Ergebnisse" : "Typical Outcomes";
    const labels = locale === "de"
        ? { before: "Vorher", after: "Nachher", result: "Ergebnis" }
        : { before: "Before", after: "After", result: "Result" };

    return (
        <div>
            <h2 className="text-2xl font-semibold text-[var(--text)] mb-8 text-center">{title}</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {items.map((item, i) => (
                    <div key={i} className="p-6 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
                        <div className="flex items-center gap-2 mb-4 text-[var(--muted)]">
                            <Building2 className="w-4 h-4" aria-hidden="true" />
                            <span className="text-sm">{item.context}</span>
                        </div>
                        <div className="space-y-3 text-sm">
                            <div>
                                <span className="text-red-400 font-medium">{labels.before}:</span>{" "}
                                <span className="text-[var(--text-secondary)]">{item.before}</span>
                            </div>
                            <div>
                                <span className="text-green-400 font-medium">{labels.after}:</span>{" "}
                                <span className="text-[var(--text-secondary)]">{item.after}</span>
                            </div>
                            <div>
                                <span className="text-[var(--primary)] font-medium">{labels.result}:</span>{" "}
                                <span className="text-[var(--text)]">{item.result}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
