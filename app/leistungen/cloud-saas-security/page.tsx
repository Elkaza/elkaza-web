import { Cloud } from "lucide-react";
import ServicePageTemplate from "@/app/components/ServicePageTemplate";

export const metadata = {
    title: "Cloud & SaaS Security - Elkaza Consulting",
    description: "Sicher in der Cloud. M365, AWS und SaaS richtig konfiguriert. Gegen Shadow-IT.",
};

export default function CloudSecurityPage() {
    return (
        <ServicePageTemplate
            locale="de"
            icon={Cloud}
            title="Cloud & SaaS Security"
            promise="Cloud nutzen, ohne Daten zu verlieren. Konfiguration, Compliance, Kontrolle."
            ctaAction="Cloud-Audit starten"
            ctaHref="/kontakt"
            timeline="2-4 Wochen"
            deliverablesCount={5}
            forWhom={[
                "Unternehmen, die schnell in die Cloud migriert sind (Lift & Shift)",
                "Teams, die Microsoft 365 intensiv nutzen",
                "Firmen mit unklarer 'Shadow IT' Nutzung",
                "Organisationen, die ihre Datenhoheit behalten wollen",
            ]}
            outcomes={[
                "Sichere Standard-Konfiguration (Secure Baseline)",
                "Transparenz über genutzte Cloud-Dienste",
                "Verhinderung von Datenabfluss (DLP)",
                "Kostenoptimierung durch Lizenz-Bereinigung",
            ]}
            included={[
                "Microsoft 365 Tenant Security Review",
                "AWS / Azure Security Posture Assessment",
                "SaaS-App Discovery (Shadow IT)",
                "Data Loss Prevention (DLP) Policies",
                "Externe Sharing-Einstellungen härten",
            ]}
            deliverables={[
                "Cloud Security Audit Bericht",
                "Hardening-Maßnahmen-Plan",
                "DLP-Richtlinien-Dokumentation",
                "Lizenz-Optimierungs-Vorschläge",
                "SaaS-Nutzungs-Report",
            ]}
            tools={[
                "Microsoft Defender for Cloud Apps",
                "Azure Policy / AWS Config",
                "Microsoft Secure Score",
                "Cloud-Native Security Tools",
            ]}
            exampleOutcomes={[
                {
                    context: "Marketing-Agentur, M365",
                    before: "Jeder konnte Links öffentlich teilen, keine Logs",
                    after: "Sharing auf 'Specific People' beschränkt, Logging an",
                    result: "Kein versehentlicher Datenabfluss mehr möglich.",
                },
                {
                    context: "Software-Haus, AWS",
                    before: "S3 Buckets öffentlich, Root-User genutzt",
                    after: "Buckets private, IAM-Rollen strikt getrennt",
                    result: "Kritische Sicherheitslücke vor Exploit geschlossen.",
                },
            ]}
            process={[
                { step: "Audit", desc: "Konfiguration und Nutzung prüfen.", time: "1 Woche" },
                { step: "Härten", desc: "Einstellungen anpassen, Policies.", time: "1-2 Wochen" },
                { step: "Kontrolle", desc: "Alerts und Reports einrichten.", time: "1 Woche" },
            ]}
            faqs={[
                { q: "Bremsen Sie unsere Zusammenarbeit?", a: "Nein. Wir machen sie sicher. Sicheres Teilen ist besser als blockiertes Teilen." },
                { q: "Brauchen wir teure Lizenzen?", a: "Wir nutzen oft, was in Business Premium/Enterprise schon drin ist. Wir beraten zu Upgrades nur wenn nötig." },
                { q: "Decken Sie nur Microsoft ab?", a: "Schwerpunkt M365/Azure, aber auch AWS Grundlagen und gängige SaaS-Tools." },
            ]}
            trustNote="Cloud-Security ist ein geteiltes Modell. Wir sorgen dafür, dass Sie Ihren Teil der Verantwortung perfekt erfüllen."
            finalCtaText="Nutzen Sie die Cloud sicher und effizient."
        />
    );
}
