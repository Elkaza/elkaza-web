import { ShieldAlert } from "lucide-react";
import ServicePageTemplate from "@/app/components/ServicePageTemplate";

export const metadata = {
    title: "Ransomware Resilience - Elkaza Consulting",
    description: "Nicht ob, sondern wann. Unveränderbare Backups, Notfallpläne und Wiederherstellungstests.",
};

export default function RansomwareResiliencePage() {
    return (
        <ServicePageTemplate
            locale="de"
            icon={ShieldAlert}
            title="Ransomware Resilience"
            promise="Nicht 'ob', sondern 'wann'. Seien Sie bereit für den Ernstfall."
            ctaAction="Resilience-Review buchen"
            ctaHref="/kontakt"
            timeline="2-4 Wochen"
            deliverablesCount={4}
            forWhom={[
                "Geschäftsführer, die ruhig schlafen wollen",
                "Unternehmen mit lückenhaftem Backup-Konzept",
                "Firmen, die noch nie einen Full-Restore getestet haben",
                "Organisationen ohne klaren Notfallplan",
            ]}
            outcomes={[
                "Garantierte Wiederherstellbarkeit der Daten",
                "Klarer Fahrplan für den Ernstfall (wer macht was)",
                "Schutz vor Verschlüsselung der Backups",
                "Reduzierte Ausfallzeit bei Attacken",
            ]}
            included={[
                "Backup-Architektur-Review",
                "Implementierung von Immutable Backups (WORM)",
                "Erstellung eines Incident-Response-Plans",
                "Durchführung eines Ernstfall-Tests (Tabletop)",
                "Härtung der Backup-Server",
            ]}
            deliverables={[
                "Backup-Konfigurations-Report",
                "Incident-Response-Playbook (PDF & Druckversion)",
                "Restore-Test-Protokoll",
                "Risiko-Analyse-Bericht",
            ]}
            tools={[
                "Veeam Backup & Replication",
                "Hardened Linux Repositories",
                "S3 Object Lock (Wasabi, AWS)",
                "Offline / Tape Backups",
            ]}
            exampleOutcomes={[
                {
                    context: "Logistikfirma, Server verschlüsselt",
                    before: "Backups waren auch verschlüsselt (im selben Netz)",
                    after: "Immutable Linux Repository & Cloud Copy",
                    result: "Daten sind selbst für Domain-Admins unlöschbar.",
                },
                {
                    context: "Kanzlei, 15 Plätze",
                    before: "Kein Plan für IT-Ausfall",
                    after: "Notfallhandbuch mit Kontakten & Ablauf",
                    result: "Reaktionszeit im Test von '?' auf 30 Minuten gesenkt.",
                },
            ]}
            process={[
                { step: "Audit", desc: "Backups und Risiken prüfen.", time: "1 Woche" },
                { step: "Härten", desc: "Immutable Storage und Trennung.", time: "1-2 Wochen" },
                { step: "Testen", desc: "Restore-Test und Notfallübung.", time: "1 Woche" },
            ]}
            faqs={[
                { q: "Reicht mein Cloud-Backup (OneDrive/Dropbox) nicht?", a: "Nein. Synchronisation ist kein Backup. Ransomware synchronisiert die Verschlüsselung sofort." },
                { q: "Was bedeutet 'Immutable'?", a: "Unveränderbar. Einmal geschrieben, können Daten für eine festgelegt Zeit (z.B. 30 Tage) nicht geändert oder gelöscht werden – auch nicht von Hackern." },
                { q: "Wie oft sollten wir testen?", a: "Automatische Tests täglich. Manuelle Full-Restores mindestens jährlich oder bei großen Änderungen." },
            ]}
            trustNote="Ihr Notfallplan nützt nur, wenn er sicher ist. Wir erstellen Dokumente, die auch ohne IT-Systeme zugänglich sind."
            finalCtaText="Sichern Sie den Fortbestand Ihres Unternehmens ab."
        />
    );
}
