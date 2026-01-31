import { Cog } from "lucide-react";
import ServicePageTemplate from "@/app/components/ServicePageTemplate";

export const metadata = {
    title: "Automation & Platform Engineering - Elkaza Consulting",
    description: "Weniger manuelle Arbeit. Weniger Fehler. Terraform, Ansible, CI/CD.",
};

export default function AutomationPage() {
    return (
        <ServicePageTemplate
            locale="de"
            icon={Cog}
            title="Automation & Platform Engineering"
            promise="Weniger manuelle Arbeit. Weniger Fehler. Skalierbare Infrastruktur auf Knopfdruck."
            ctaAction="Automatisierungspotenzial prüfen"
            ctaHref="/kontakt"
            timeline="3-8 Wochen"
            deliverablesCount={4}
            forWhom={[
                "Teams, die zu viel Zeit mit wiederkehrenden Tasks verbringen",
                "Unternehmen mit 'Snowflake'-Servern (jeder ist anders)",
                "Entwickler, die auf Infrastruktur warten müssen",
                "Organisationen, die schnelle Skalierung brauchen",
            ]}
            outcomes={[
                "Reproduzierbare Umgebungen (Infrastructure as Code)",
                "Schnellere Deployments ohne manuelle Fehler",
                "Selbstdokumentierende Infrastruktur",
                "Mehr Zeit für wertschöpfende Arbeit",
            ]}
            included={[
                "Analyse manueller Prozesse und Pain-Points",
                "Implementierung von Infrastructure as Code (Terraform/OpenTofu)",
                "Konfigurationsmanagement (Ansible/Intune)",
                "CI/CD-Pipeline-Optimierung",
                "Containerisierung (Docker/Kubernetes Basics)",
            ]}
            deliverables={[
                "IaC-Repository (Git) mit Dokumentation",
                "Automatisierte Playbooks und Skripte",
                "CI/CD-Pipeline-Definitionen",
                "Schulung: 'Wie nutze ich das neue Setup'",
            ]}
            tools={[
                "Terraform / OpenTofu",
                "Ansible",
                "GitLab CI / GitHub Actions",
                "Docker / Kubernetes",
                "PowerShell / Python",
            ]}
            exampleOutcomes={[
                {
                    context: "SaaS-Startup, Deployments manuell",
                    before: "Deployment dauerte 4h, oft Fehler",
                    after: "Git-Push löst Deployment aus (10 Min)",
                    result: "3x so viele Releases pro Woche möglich.",
                },
                {
                    context: "IT-Dienstleister, 50 Server",
                    before: "Konfigurationen 'driften' auseinander",
                    after: "Ansible erzwingt Standard-Config jede Nacht",
                    result: "Compliance-Status immer grün, weniger Incidents.",
                },
            ]}
            process={[
                { step: "Discovery", desc: "Manuelle 'Zeitfresser' identifizieren.", time: "1 Woche" },
                { step: "Code", desc: "Skripte und Templates entwickeln.", time: "2-5 Wochen" },
                { step: "Enable", desc: "Team schulen und Übergabe.", time: "1-2 Wochen" },
            ]}
            faqs={[
                { q: "Lohnt sich das für kleine Umgebungen?", a: "Ja. Schon einfache Skripte für User-Onboarding sparen Stunden und vermeiden Fehler." },
                { q: "Müssen wir Programmieren lernen?", a: "Grundkenntnisse helfen, sind aber kein Muss. Wir bauen Self-Service-Lösungen." },
                { q: "Was ist, wenn die Automation bricht?", a: "Wir bauen Fehlerbehandlung und Logging ein. Zudem gibt es Support in der Anfangsphase." },
            ]}
            trustNote="Automatisierung braucht hohe Rechte. Wir sichern die Pipelines und Credentials strikt ab (Secrets Management)."
            finalCtaText="Automatisieren Sie den langweiligen Kram."
        />
    );
}
