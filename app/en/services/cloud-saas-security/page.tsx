import { Cloud } from "lucide-react";
import ServicePageTemplate from "@/app/components/ServicePageTemplate";

export const metadata = {
    title: "Cloud & SaaS Security - Elkaza Consulting",
    description: "Secure in the cloud. M365, AWS and SaaS configured correctly. Beat Shadow IT.",
};

export default function CloudSecurityPage() {
    return (
        <ServicePageTemplate
            locale="en"
            icon={Cloud}
            title="Cloud & SaaS Security"
            promise="Use the cloud without losing data. Configuration, Compliance, Control."
            ctaAction="Start Cloud Audit"
            ctaHref="/en/contact"
            timeline="2-4 weeks"
            deliverablesCount={5}
            forWhom={[
                "Companies that migrated quickly (Lift & Shift)",
                "Teams using Microsoft 365 intensively",
                "Firms with unclear 'Shadow IT' usage",
                "Organizations wanting to retain data sovereignty",
            ]}
            outcomes={[
                "Secure standard configuration (Secure Baseline)",
                "Transparency over used cloud services",
                "Prevention of data leakage (DLP)",
                "Cost optimization via license cleanup",
            ]}
            included={[
                "Microsoft 365 Tenant Security Review",
                "AWS / Azure Security Posture Assessment",
                "SaaS App Discovery (Shadow IT)",
                "Data Loss Prevention (DLP) Policies",
                "Hardening external sharing settings",
            ]}
            deliverables={[
                "Cloud Security Audit Report",
                "Hardening Action Plan",
                "DLP Policy Documentation",
                "License Optimization Suggestions",
                "SaaS Usage Report",
            ]}
            tools={[
                "Microsoft Defender for Cloud Apps",
                "Azure Policy / AWS Config",
                "Microsoft Secure Score",
                "Cloud-Native Security Tools",
            ]}
            exampleOutcomes={[
                {
                    context: "Marketing Agency, M365",
                    before: "Everyone could share public links, no logs",
                    after: "Sharing limited to 'Specific People', logging on",
                    result: "Accidental data leakage no longer possible.",
                },
                {
                    context: "Software House, AWS",
                    before: "S3 Buckets public, Root user used",
                    after: "Buckets private, IAM roles strictly separated",
                    result: "Critical vulnerability closed before exploit.",
                },
            ]}
            process={[
                { step: "Audit", desc: "Check configuration and usage.", time: "1 week" },
                { step: "Harden", desc: "Adjust settings, apply policies.", time: "1-2 weeks" },
                { step: "Control", desc: "Setup alerts and reports.", time: "1 week" },
            ]}
            faqs={[
                { q: "Will you slow down our collaboration?", a: "No. We make it secure. Secure sharing is better than blocked sharing." },
                { q: "Do we need expensive licenses?", a: "We often use what's included in Business Premium/Enterprise. We advise on upgrades only if necessary." },
                { q: "Do you only cover Microsoft?", a: "Focus on M365/Azure, but also AWS basics and common SaaS tools." },
            ]}
            trustNote="Cloud security is a shared responsibility model. We ensure you fulfill your part perfectly."
            finalCtaText="Use the cloud securely and efficiently."
        />
    );
}
