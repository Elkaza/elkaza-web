import { ShieldCheck } from "lucide-react";
import ServicePageTemplate from "@/app/components/ServicePageTemplate";

export const metadata = {
    title: "Security Baseline - Elkaza Consulting",
    description: "Praktische Sicherheit für KMUs: MFA, Patching, Backups, klare Zugriffsrechte.",
};

export default function SecurityBaselinePage() {
    return (
        <ServicePageTemplate
            locale="de"
            icon={ShieldCheck}
            title="Security Baseline"
            promise="Die Grundlagen richtig machen: MFA, Patching, Backups, Zugriffskontrolle."
            ctaAction="Security Assessment starten"
            ctaHref="/kontakt"
            timeline="3-6 Wochen"
            deliverablesCount={6}
            forWhom={[
                "KMUs ohne dediziertes Security-Team",
                "Unternehmen nach einem Sicherheitsvorfall",
                "Wachsende Teams mit Ad-hoc-IT",
                "Geschäftsführer mit Compliance-Bedenken",
            ]}
            outcomes={[
                "MFA auf allen Konten aktiv",
                "Patch-Status dokumentiert und aktuell",
                "Backups getestet und verifiziert",
                "Zugriffsrechte bereinigt",
                "Zentrales Logging eingerichtet",
            ]}
            included={[
                "Security-Posture-Review",
                "MFA-Rollout und Konfiguration",
                "Patch-Management-Setup",
                "Backup-Konfiguration und Testlauf",
                "Zugriffsrechte-Audit",
                "Dokumentation und Übergabe",
            ]}
            deliverables={[
                "Security-Assessment-Bericht mit priorisierten Ergebnissen",
                "MFA-Deployment-Dokumentation",
                "Patch-Management-Policy und Zeitplan",
                "Backup-Verifizierungsbericht",
                "Zugriffsrechte-Bereinigung Zusammenfassung",
                "Zentrales Logging Konfiguration",
            ]}
            tools={[
                "Identity Provider (Entra ID, Google Workspace, Okta)",
                "Patch-Management (WSUS, Intune, Automox)",
                "Backup-Lösungen (Veeam, Acronis, Cloud-native)",
                "SIEM oder Log-Aggregation (Microsoft Sentinel, Graylog)",
            ]}
            exampleOutcomes={[
                {
                    context: "KMU, 35 Mitarbeiter, Finanzbranche",
                    before: "Keine MFA, geteilte Admin-Passwörter",
                    after: "MFA auf allen Konten, individuelle Zugangsdaten",
                    result: "Erste Phishing-Attacke abgewehrt.",
                },
                {
                    context: "Produktionsbetrieb, 50 Mitarbeiter",
                    before: "Backups existierten, aber nie getestet",
                    after: "Monatliche Restore-Tests etabliert",
                    result: "Restore in 4h statt geschätzten 4 Tagen.",
                },
            ]}
            process={[
                { step: "Analyse", desc: "Security-Posture-Review und Gap-Analyse.", time: "1 Woche" },
                { step: "Umsetzung", desc: "MFA, Patching, Backups, Access-Cleanup.", time: "2-4 Wochen" },
                { step: "Betrieb", desc: "Übergabe, Schulung, optionaler Managed Support.", time: "Laufend" },
            ]}
            faqs={[
                { q: "Was, wenn wir schon einige Sicherheitsmaßnahmen haben?", a: "Wir bewerten, was Sie haben, und füllen die Lücken. Funktionierende Systeme werden nicht neu gemacht." },
                { q: "Wie priorisieren Sie, was zuerst behoben wird?", a: "Wir ordnen nach Risiko und Auswirkung. Schnelle Erfolge zuerst, dann tiefere Korrekturen." },
                { q: "Wird das unsere Benutzer stören?", a: "MFA-Rollout erfordert Benutzeraktion. Wir liefern klare Anleitungen und Support." },
                { q: "Ist das ein einmaliges Projekt oder laufend?", a: "Baseline ist ein Projekt. Wir bieten optionalen Managed Support für laufenden Schutz." },
            ]}
            trustNote="Wir arbeiten nach dem Least-Privilege-Prinzip. Admin-Zugänge sind temporär, dokumentiert und werden nach Projektende entfernt. Alle Konfigurationen gehören Ihrem Unternehmen."
            finalCtaText="Schluss mit Raten bei der Sicherheit. Klare Baseline schaffen."
        />
    );
}
