import { Headphones } from "lucide-react";
import ServicePageTemplate from "@/app/components/ServicePageTemplate";

export const metadata = {
    title: "Managed Operations - Elkaza Consulting",
    description: "Wir kümmern uns um Ihre IT. Proaktives Monitoring, Patching und Incident Response.",
};

export default function ManagedOpsPage() {
    return (
        <ServicePageTemplate
            locale="de"
            icon={Headphones}
            title="Managed Operations"
            promise="Ihre IT läuft einfach. Wir kümmern uns um den Rest."
            ctaAction="Betrieb anfragen"
            ctaHref="/kontakt"
            timeline="Laufend"
            deliverablesCount={3}
            forWhom={[
                "Unternehmen, die keine interne IT-Abteilung haben",
                "Teams, die sich auf ihr Kerngeschäft konzentrieren wollen",
                "Firmen, die Ausfallzeiten minimieren müssen",
                "Organisationen, die Sicherheit nicht dem Zufall überlassen wollen",
            ]}
            outcomes={[
                "Stabile Systeme und schnelle Reaktion bei Problemen",
                "Sicherheitsupdates immer zeitnah installiert",
                "Transparente Kosten statt Überstunden-Chaos",
                "Ein Ansprechpartner, der Ihre Umgebung kennt",
            ]}
            included={[
                "24/7 Monitoring kritischer Dienste",
                "Patch-Management (OS & 3rd Party)",
                "Backup-Überwachung und regelmäßige Tests",
                "Endpoint Protection Management",
                "User-Support (Level 2/3)",
            ]}
            deliverables={[
                "Monatlicher Status-Bericht (Performance & Security)",
                "Zugang zum Ticket- und Monitoring-System",
                "Vierteljährliches Review-Meeting",
            ]}
            tools={[
                "RMM (Remote Monitoring & Management)",
                "Ticket-System (Jira Service Management)",
                "Dokumentations-Plattform",
                "Endpoint Protection (EDR)",
            ]}
            exampleOutcomes={[
                {
                    context: "Architekturbüro, 25 Arbeitsplätze",
                    before: "Serverausfall erst montags bemerkt",
                    after: "Monitoring meldet Fehler sofort, Fix am Sonntag",
                    result: "Team kann montags direkt arbeiten.",
                },
                {
                    context: "Handelsunternehmen",
                    before: "Patches nur sporadisch, Sicherheitslücken offen",
                    after: "Automatisches Patching jede Woche",
                    result: "Sicherheitsniveau konstant hoch.",
                },
            ]}
            process={[
                { step: "Onboarding", desc: "Agenten installieren, Doku erstellen.", time: "1-2 Wochen" },
                { step: "Betrieb", desc: "Laufende Überwachung und Pflege.", time: "Laufend" },
                { step: "Optimierung", desc: "Regelmäßige Verbesserungen.", time: "Vierteljährlich" },
            ]}
            faqs={[
                { q: "Ersetzen Sie unsere interne IT?", a: "Wir können ergänzen oder ersetzen. Oft übernehmen wir den 'langweiligen' Betrieb, damit interne IT Projekte machen kann." },
                { q: "Wie schnell reagieren Sie?", a: "Je nach SLA. Kritische Fälle meist < 1 Stunde. Standard-Anfragen < 4 Stunden." },
                { q: "Haben Sie Zugriff auf unsere Daten?", a: "Technisch administrativ ja, aber wir schauen nicht in Files. Vertraulichkeit ist vertraglich garantiert (NDA/AVV)." },
            ]}
            trustNote="Wir arbeiten transparent. Sie sehen in unserem Portal jederzeit, was wir tun und wie es Ihren Systemen geht."
            finalCtaText="Geben Sie Ihre IT in professionelle Hände."
        />
    );
}
