import { Lock } from "lucide-react";
import ServicePageTemplate from "@/app/components/ServicePageTemplate";

export const metadata = {
    title: "Zero Trust & Identity - Elkaza Consulting",
    description: "Moderner Zugriffsschutz: MFA, SSO, Conditional Access. Vertrauen Sie keinem Gerät blind.",
};

export default function ZeroTrustPage() {
    return (
        <ServicePageTemplate
            locale="de"
            icon={Lock}
            title="Zero Trust & Identity"
            promise="Jeder Zugriff verifiziert. Keine vertrauenswürdigen Zonen mehr."
            ctaAction="Identity-Check starten"
            ctaHref="/kontakt"
            timeline="4-8 Wochen"
            deliverablesCount={5}
            forWhom={[
                "Unternehmen, die Cloud-Dienste (M365, SaaS) nutzen",
                "Teams mit vielen Remote-Mitarbeitern",
                "Firmen, die Compliance-Anforderungen erfüllen müssen",
                "Organisationen, die Passwort-Chaos beenden wollen",
            ]}
            outcomes={[
                "Single Sign-On (SSO) für alle wichtigen Apps",
                "Automatisiertes Onboarding und Offboarding",
                "Zugriff nur von sicheren, konformen Geräten",
                "Keine geteilten Passwörter mehr",
            ]}
            included={[
                "Identity-Provider-Konfiguration (IdP)",
                "Conditional Access Policies Definition",
                "SSO-Integration für SaaS-Apps",
                "Device-Compliance-Richtlinien",
                "Admin-Rechte-Konzept (PIM/PAM)",
            ]}
            deliverables={[
                "Identity-Architektur-Konzept",
                "Dokumentierte Zugriffsrichtlinien (Policies)",
                "Notfall-Zugriffskonzept (Break Glass)",
                "Benutzer-Anleitungen für MFA/SSO",
                "Admin-Rollen-Matrix",
            ]}
            tools={[
                "Microsoft Entra ID (Azure AD)",
                "Okta / Auth0",
                "Google Workspace Identity",
                "YubiKeys / Hardware Token",
            ]}
            exampleOutcomes={[
                {
                    context: "Finanzdienstleister, 20 Mitarbeiter",
                    before: "Passwörter in Excel, Ex-Mitarbeiter hatten noch Zugriff",
                    after: "Zentrales SSO, automatisches Offboarding",
                    result: "Zugriffssicherheit sofort auf 100%, Audit bestanden.",
                },
                {
                    context: "Tech-Startup, Remote-First",
                    before: "VPN für alles notwendig, umständlich",
                    after: "Zero Trust Network Access (ZTNA)",
                    result: "VPN abgeschafft, sicherer direkter App-Zugriff.",
                },
            ]}
            process={[
                { step: "Analyse", desc: "Identitäten und Apps inventarisieren.", time: "1-2 Wochen" },
                { step: "Design", desc: "Policies und SSO-Flows entwerfen.", time: "2 Wochen" },
                { step: "Rollout", desc: "Schrittweise Umstellung mit User-Support.", time: "2-4 Wochen" },
            ]}
            faqs={[
                { q: "Brauchen wir Microsoft 365 dafür?", a: "Oft ja (Entra ID), aber wir unterstützen auch Okta oder Google Workspace." },
                { q: "Wird das Anmelden komplizierter?", a: "Nein, oft einfacher dank SSO (nur noch 1 Login) und passwortloser Anmeldung (Windows Hello / TouchID)." },
                { q: "Was passiert, wenn das Handy weg ist?", a: "Dank Conditional Access sperren wir den Zugriff sofort und löschen Firmendaten remote." },
            ]}
            trustNote="Identitäten sind der neue Perimeter. Wir setzen auf strikte Prinzipien: Verify explicitly, Use least privilege, Assume breach."
            finalCtaText="Machen Sie Ihre Identitäten zur stärksten Verteidigungslinie."
        />
    );
}
