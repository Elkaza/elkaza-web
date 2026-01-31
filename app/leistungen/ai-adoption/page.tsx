import { Sparkles } from "lucide-react";
import ServicePageTemplate from "@/app/components/ServicePageTemplate";

export const metadata = {
    title: "Secure AI Adoption - Elkaza Consulting",
    description: "KI im Unternehmen sicher nutzen. Copilot Readiness, Datenklassifizierung und Policies.",
};

export default function AIAdoptionPage() {
    return (
        <ServicePageTemplate
            locale="de"
            icon={Sparkles}
            title="Secure AI Adoption"
            promise="KI nutzen, ohne Firmengeheimnisse zu leaken. Copilot-Ready in 4 Wochen."
            ctaAction="AI-Readiness checken"
            ctaHref="/kontakt"
            timeline="3-6 Wochen"
            deliverablesCount={4}
            forWhom={[
                "Unternehmen, die Microsoft 365 Copilot einführen wollen",
                "Teams, die ChatGPT nutzen, aber unsicher sind",
                "Firmen mit sensiblen Daten (HR, Finanzen, F&E)",
                "Geschäftsführer, die KI-Risiken minimieren wollen",
            ]}
            outcomes={[
                "Sichere Nutzung von KI-Tools im Arbeitsalltag",
                "Kein 'Oversharing' von sensiblen Daten durch KI",
                "Klare Richtlinien für Mitarbeiter",
                "Technische Voraussetzungen für Copilot erfüllt",
            ]}
            included={[
                "Microsoft 365 Copilot Readiness Check",
                "Datenklassifizierung und Labeling (Sensitivity Labels)",
                "Berechtigungs-Cleanup (Oversharing-Prüfung)",
                "Erstellung einer 'Acceptable Use Policy' für KI",
                "Data Loss Prevention (DLP) für KI-Prompts",
            ]}
            deliverables={[
                "AI-Readiness-Report",
                "Datenklassifizierungs-Konzept",
                "KI-Nutzungsrichtlinie (Muster)",
                "Schulungsunterlage 'Sicheres Prompting'",
            ]}
            tools={[
                "Microsoft Purview (Information Protection)",
                "SharePoint Advanced Management",
                "M365 Copilot Admin Center",
                "Private AI-Gateways (optional)",
            ]}
            exampleOutcomes={[
                {
                    context: "HR-Abteilung testet Copilot",
                    before: "Copilot zeigt Gehaltslisten allen Mitarbeitern",
                    after: "Berechtigungen bereinigt, HR-Site geschützt",
                    result: "KI antwortet nur mit Daten, die der User sehen darf.",
                },
                {
                    context: "Marketing nutzt ChatGPT",
                    before: "Kundendaten in öffentliche KI kopiert",
                    after: "DLP blockiert Paste von Daten, Enterprise-Chat aktiv",
                    result: "Innovation genutzt, Datenabfluss gestoppt.",
                },
            ]}
            process={[
                { step: "Scan", desc: "Wo liegen sensitive Daten?", time: "1-2 Wochen" },
                { step: "Clean", desc: "Berechtigungen aufräumen.", time: "2-3 Wochen" },
                { step: "Policy", desc: "Regeln setzen und schulen.", time: "1 Woche" },
            ]}
            faqs={[
                { q: "Lernen KIs von unseren Daten?", a: "Bei Enterprise-Versionen (Copilot, ChatGPT Enterprise) vertraglich nein. Wir stellen sicher, dass Sie diese nutzen." },
                { q: "Verhindern Sie KI-Nutzung?", a: "Nein, wir ermöglichen sie sicher. Verbot funktioniert meist eh nicht (Shadow AI)." },
                { q: "Brauchen wir E5-Lizenzen?", a: "Für volle Automatisierung oft hilfreich, aber wir finden auch Wege mit Business Premium oder Add-ons." },
            ]}
            trustNote="KI verstärkt bestehende Schwächen im Datenschutz. Wir beheben diese Schwächen an der Wurzel (Daten & Identitäten)."
            finalCtaText="Machen Sie Ihr Unternehmen bereit für die KI-Ära."
        />
    );
}
