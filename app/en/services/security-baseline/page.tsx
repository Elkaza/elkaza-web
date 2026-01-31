import { ShieldCheck } from "lucide-react";
import ServicePageTemplate from "@/app/components/ServicePageTemplate";

export const metadata = {
    title: "Security Baseline - Elkaza Consulting",
    description: "Practical security for SMBs: MFA, patching, backups, clear access rights.",
};

export default function SecurityBaselinePage() {
    return (
        <ServicePageTemplate
            locale="en"
            icon={ShieldCheck}
            title="Security Baseline"
            promise="Get the basics right: MFA, patching, backups, access control."
            ctaAction="Start Security Assessment"
            ctaHref="/en/contact"
            timeline="3-6 weeks"
            deliverablesCount={6}
            forWhom={[
                "SMBs without a dedicated security team",
                "Companies after a security incident",
                "Growing teams with ad-hoc IT",
                "Executives with compliance concerns",
            ]}
            outcomes={[
                "MFA active on all accounts",
                "Patch status documented and current",
                "Backups tested and verified",
                "Access rights cleaned up",
                "Central logging established",
            ]}
            included={[
                "Security posture review",
                "MFA rollout and configuration",
                "Patch management setup",
                "Backup configuration and test run",
                "Access rights audit",
                "Documentation and handover",
            ]}
            deliverables={[
                "Security assessment report with prioritized findings",
                "MFA deployment documentation",
                "Patch management policy and schedule",
                "Backup verification report",
                "Access rights cleanup summary",
                "Central logging configuration",
            ]}
            tools={[
                "Identity Provider (Entra ID, Google Workspace, Okta)",
                "Patch Management (WSUS, Intune, Automox)",
                "Backup Solutions (Veeam, Acronis, Cloud-native)",
                "SIEM or Log Aggregation (Microsoft Sentinel, Graylog)",
            ]}
            exampleOutcomes={[
                {
                    context: "SMB, 35 employees, financial sector",
                    before: "No MFA, shared admin passwords",
                    after: "MFA on all accounts, individual credentials",
                    result: "First phishing attack blocked.",
                },
                {
                    context: "Manufacturing, 50 employees",
                    before: "Backups existed but never tested",
                    after: "Monthly restore tests established",
                    result: "Restore in 4h instead of estimated 4 days.",
                },
            ]}
            process={[
                { step: "Assess", desc: "Security posture review and gap analysis.", time: "1 week" },
                { step: "Implement", desc: "MFA, patching, backups, access cleanup.", time: "2-4 weeks" },
                { step: "Run", desc: "Handover, training, optional managed support.", time: "Ongoing" },
            ]}
            faqs={[
                { q: "What if we already have some security measures?", a: "We assess what you have and fill the gaps. Working systems won't be rebuilt." },
                { q: "How do you prioritize what to fix first?", a: "We rank by risk and impact. Quick wins first, then deeper fixes." },
                { q: "Will this disrupt our users?", a: "MFA rollout requires user action. We provide clear guides and support." },
                { q: "Is this a one-time project or ongoing?", a: "Baseline is a project. We offer optional managed support for ongoing protection." },
            ]}
            trustNote="We follow the least-privilege principle. Admin access is temporary, documented, and removed after project end. All configurations belong to your company."
            finalCtaText="Stop guessing about security. Build a clear baseline."
        />
    );
}
