import { Laptop } from "lucide-react";
import ServicePageTemplate from "@/app/components/ServicePageTemplate";

export const metadata = {
    title: "Endpoint & Device Security - Elkaza Consulting",
    description: "Jedes Gerät abgesichert. EDR, Verschlüsselung, Patching für Laptops und Mobiles.",
};

export default function EndpointSecurityPage() {
    return (
        <ServicePageTemplate
            locale="de"
            icon={Laptop}
            title="Endpoint & Device Security"
            promise="Sicherheit, die mit Ihren Mitarbeitern reist. Egal ob im Büro oder Home-Office."
            ctaAction="Geräte absichern"
            ctaHref="/kontakt"
            timeline="2-5 Wochen"
            deliverablesCount={5}
            forWhom={[
                "Teams mit vielen mobilen Geräten (Laptops, Smartphones)",
                "Unternehmen, die noch klassische Virenscanner nutzen",
                "Organisationen mit BYOD (Bring Your Own Device) Herausforderungen",
                "Firmen, die Compliance-Nachweise für Endgeräte brauchen",
            ]}
            outcomes={[
                "Voller Schutz gegen Ransomware und Malware (EDR/XDR)",
                "Automatisierte Durchsetzung von Sicherheitsrichtlinien",
                "Verlorene Geräte können ferngetilgt werden",
                "Zentraler Überblick über den Gesundheitsstatus aller Geräte",
            ]}
            included={[
                "Endpoint Detection & Response (EDR) Rollout",
                "Mobile Device Management (MDM / Intune) Setup",
                "Festplattenverschlüsselung (BitLocker/FileVault)",
                "App-Protection-Policies für BYOD",
                "USB-Port-Sicherheit und Web-Filter",
            ]}
            deliverables={[
                "EDR-Konfigurations-Report",
                "Geräte-Inventar-Liste",
                "Compliance-Dashboard-Zugang",
                "BitLocker-Recovery-Key-Datenbank",
                "Onboarding-Anleitung für neue Mitarbeiter",
            ]}
            tools={[
                "Microsoft Defender for Endpoint",
                "Microsoft Intune",
                "CrowdStrike Falcon (optional)",
                "Jamf (für Apple-Umgebungen)",
            ]}
            exampleOutcomes={[
                {
                    context: "Vertriebler verliert Laptop am Flughafen",
                    before: "Daten unverschlüsselt, Panik",
                    after: "Gerät verschlüsselt, per Remote-Wipe gelöscht",
                    result: "Kein Datenverlust, Gerät ist nur Elektroschrott.",
                },
                {
                    context: "Mitarbeiter öffnet verseuchten Anhang",
                    before: "Virenscanner erkennt nichts, PC infiziert",
                    after: "EDR erkennt Verhalten, isoliert PC automatisch",
                    result: "Angriff gestoppt bevor er sich ausbreiten konnte.",
                },
            ]}
            process={[
                { step: "Audit", desc: "Welche Geräte gibt es?", time: "1 Woche" },
                { step: "Pilot", desc: "Konfiguration an Testgruppe.", time: "1-2 Wochen" },
                { step: "Rollout", desc: "Verteilung an alle User.", time: "1-2 Wochen" },
            ]}
            faqs={[
                { q: "Wird mein Laptop dadurch langsam?", a: "Nein. Moderne EDR-Lösungen sind sehr ressourcenschonend, anders als alte Antiviren-Suiten." },
                { q: "Können Sie meine privaten Daten sehen?", a: "Nein. Bei BYOD trennen wir strikt zwischen Firmen- und Privatdaten (Containerisierung)." },
                { q: "Funktioniert das auch für Macs?", a: "Ja. Wir unterstützen Windows, macOS, iOS und Android gleichermaßen." },
            ]}
            trustNote="Wir greifen nicht auf Nutzerdaten zu. Wir sehen nur Sicherheits-Events und technischen Gesundheitsstatus."
            finalCtaText="Machen Sie jedes Gerät zur Festung."
        />
    );
}
