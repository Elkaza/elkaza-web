import { ClipboardCheck } from "lucide-react";
import ServicePageTemplate from "@/app/components/ServicePageTemplate";

export const metadata = {
    title: "NIS2 / Compliance Readiness - Elkaza Consulting",
    description: "Keine Angst vor dem Audit. Pragmatische Compliance, Dokumentation und Prozesse.",
};

export default function NIS2Page() {
    return (
        <ServicePageTemplate
            locale="de"
            icon={ClipboardCheck}
            title="NIS2 / Compliance Readiness"
            promise="Keine Angst vor dem Audit. Pragmatische Compliance ohne Papier-Monster."
            ctaAction="Compliance-Status prüfen"
            ctaHref="/kontakt"
            timeline="4-12 Wochen"
            deliverablesCount={6}
            forWhom={[
                "Unternehmen, die unter NIS2 oder DORA fallen",
                "Zulieferer, die Sicherheitsnachweise erbringen müssen",
                "Geschäftsführer, die persönliche Haftung minimieren wollen",
                "Organisationen, die sich auf ISO 27001 vorbereiten",
            ]}
            outcomes={[
                "Klarer Überblick über Compliance-Lücken (Gap-Analyse)",
                "Erfüllung der gesetzlichen Meldepflichten",
                "Reduziertes Haftungsrisiko für die Geschäftsführung",
                "Wettbewerbsvorteil durch nachweisbare Sicherheit",
            ]}
            included={[
                "Rechtliche & technische Gap-Analyse (mit Partner-Anwälten)",
                "Erstellung der Risiko-Management-Richtlinie",
                "Incident-Reporting-Prozess aufsetzen",
                "Lieferketten-Sicherheitsbewertung",
                "Implementierung technischer Maßnahmen (MFA, Verschlüsselung)",
            ]}
            deliverables={[
                "Vollständiges Asset-Register",
                "Risikoanalyse nach NIS-2",
                "ISMS-Handbuch (Light-Version für KMUs)",
                "Schulungsplan für Mitarbeiter",
                "Meldeprozess für Vorfälle",
                "Notfall-Kontaktliste und Meldeformulare",
                "Schulungsnachweise für Mitarbeiter",
            ]}
            tools={[
                "Compliance Manager (Microsoft Purview)",
                "ISMS-Tools (oder strukturierte Wikis)",
                "Vulnerability Scanners",
                "Evidence Collection Repositories",
            ]}
            exampleOutcomes={[
                {
                    context: "Maschinenbauer, NIS2-betroffen",
                    before: "Unsicherheit, was genau zu tun ist",
                    after: "Klarer Plan, 80% der Maßnahmen technisch umgesetzt",
                    result: "Geschäftsführung haftungsrechtlich abgesichert.",
                },
                {
                    context: "Software-Zulieferer für Bank",
                    before: "Kunde droht mit Auftragsentzug wegen fehlender Zertifizierung",
                    after: "Sicherheitskonzept vorgelegt, Maßnahmen nachgewiesen",
                    result: "Kunde zufrieden, Vertrag verlängert.",
                },
            ]}
            process={[
                { step: "Check", desc: "Gap-Analyse gegen Norm.", time: "2 Wochen" },
                { step: "Fix", desc: "Policies schreiben, Technik härten.", time: "4-8 Wochen" },
                { step: "Audit", desc: "Internes Probe-Audit.", time: "1-2 Wochen" },
            ]}
            faqs={[
                { q: "Machen Sie Rechtsberatung?", a: "Nein. Wir fokussieren uns auf die technisch-organisatorische Umsetzung. Für Rechtliches vermitteln wir Partner-Anwälte." },
                { q: "Brauchen wir ISO 27001?", a: "Nicht immer. Oft reicht ein schlankes ISMS oder Anlehnung an CIS Controls. Wir beraten pragmatisch." },
                { q: "Wie viel Aufwand ist das intern?", a: "Compliance braucht Mitwirkung. Rechnen Sie mit wöchentlichen Jour-Fixes während der Projektphase." },
            ]}
            trustNote="Compliance ist kein einmaliges Projekt, sondern ein Prozess. Wir bauen Strukturen, die lebbar bleiben."
            finalCtaText="Werden Sie vom Risikofaktor zum vertrauenswürdigen Partner."
        />
    );
}
