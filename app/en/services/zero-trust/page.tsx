import { Lock } from "lucide-react";
import ServicePageTemplate from "@/app/components/ServicePageTemplate";

export const metadata = {
    title: "Zero Trust & Identity - Elkaza Consulting",
    description: "Modern access protection: MFA, SSO, Conditional Access. Trust no device blindly.",
};

export default function ZeroTrustPage() {
    return (
        <ServicePageTemplate
            locale="en"
            icon={Lock}
            title="Zero Trust & Identity"
            promise="Verify every access. No more trusted zones."
            ctaAction="Start Identity Check"
            ctaHref="/en/contact"
            timeline="4-8 weeks"
            deliverablesCount={5}
            forWhom={[
                "Companies using cloud services (M365, SaaS)",
                "Teams with many remote employees",
                "Firms needing to meet compliance requirements",
                "Organizations wanting to end password chaos",
            ]}
            outcomes={[
                "Single Sign-On (SSO) for all key apps",
                "Automated onboarding and offboarding",
                "Access only from secure, compliant devices",
                "No more shared passwords",
            ]}
            included={[
                "Identity Provider Configuration (IdP)",
                "Conditional Access Policy definition",
                "SSO integration for SaaS apps",
                "Device compliance policies",
                "Admin rights concept (PIM/PAM)",
            ]}
            deliverables={[
                "Identity architecture concept",
                "Documented access policies",
                "Emergency access concept (Break Glass)",
                "User guides for MFA/SSO",
                "Admin role matrix",
            ]}
            tools={[
                "Microsoft Entra ID (Azure AD)",
                "Okta / Auth0",
                "Google Workspace Identity",
                "YubiKeys / Hardware Tokens",
            ]}
            exampleOutcomes={[
                {
                    context: "Financial Services, 20 employees",
                    before: "Passwords in Excel, ex-employees still had access",
                    after: "Central SSO, automated offboarding",
                    result: "Access security instantly at 100%, audit passed.",
                },
                {
                    context: "Tech Startup, Remote-First",
                    before: "VPN needed for everything, clumsy",
                    after: "Zero Trust Network Access (ZTNA)",
                    result: "VPN retired, secure direct app access.",
                },
            ]}
            process={[
                { step: "Assess", desc: "Inventory identities and apps.", time: "1-2 weeks" },
                { step: "Design", desc: "Design policies and SSO flows.", time: "2 weeks" },
                { step: "Rollout", desc: "Phased transition with user support.", time: "2-4 weeks" },
            ]}
            faqs={[
                { q: "Do we need Microsoft 365 for this?", a: "Often yes (Entra ID), but we also support Okta or Google Workspace." },
                { q: "Will login become more complicated?", a: "No, often simpler thanks to SSO (only 1 login) and passwordless (Windows Hello / TouchID)." },
                { q: "What if a phone is lost?", a: "Thanks to Conditional Access, we block access immediately and wipe corporate data remotely." },
            ]}
            trustNote="Identities are the new perimeter. We rely on strict principles: Verify explicitly, Use least privilege, Assume breach."
            finalCtaText="Turn your identities into your strongest line of defense."
        />
    );
}
