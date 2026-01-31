import { Sparkles } from "lucide-react";
import ServicePageTemplate from "@/app/components/ServicePageTemplate";

export const metadata = {
    title: "Secure AI Adoption - Elkaza Consulting",
    description: "Use AI safely in business. Copilot readiness, data classification, and policies.",
};

export default function AIAdoptionPage() {
    return (
        <ServicePageTemplate
            locale="en"
            icon={Sparkles}
            title="Secure AI Adoption"
            promise="Use AI without leaking trade secrets. Copilot-Ready in 4 weeks."
            ctaAction="Check AI Readiness"
            ctaHref="/en/contact"
            timeline="3-6 weeks"
            deliverablesCount={4}
            forWhom={[
                "Companies wanting to introduce Microsoft 365 Copilot",
                "Teams using ChatGPT but unsure about risks",
                "Firms with sensitive data (HR, Finance, R&D)",
                "Executives wanting to minimize AI risks",
            ]}
            outcomes={[
                "Secure use of AI tools in daily work",
                "No 'Oversharing' of sensitive data via AI",
                "Clear guidelines for employees",
                "Technical prerequisites for Copilot met",
            ]}
            included={[
                "Microsoft 365 Copilot Readiness Check",
                "Data classification and labeling (Sensitivity Labels)",
                "Permissions cleanup (Oversharing check)",
                "Creation of an 'Acceptable Use Policy' for AI",
                "Data Loss Prevention (DLP) for AI prompts",
            ]}
            deliverables={[
                "AI Readiness Report",
                "Data classification concept",
                "AI Usage Policy (Template)",
                "Training material 'Secure Prompting'",
            ]}
            tools={[
                "Microsoft Purview (Information Protection)",
                "SharePoint Advanced Management",
                "M365 Copilot Admin Center",
                "Private AI Gateways (optional)",
            ]}
            exampleOutcomes={[
                {
                    context: "HR Department testing Copilot",
                    before: "Copilot showed salary lists to all employees",
                    after: "Permissions cleaned up, HR site protected",
                    result: "AI only answers with data the user is allowed to see.",
                },
                {
                    context: "Marketing using ChatGPT",
                    before: "Customer data pasted into public AI",
                    after: "DLP blocks paste of data, Enterprise Chat active",
                    result: "Innovation enabled, data leakage stopped.",
                },
            ]}
            process={[
                { step: "Scan", desc: "Where is sensitive data?", time: "1-2 weeks" },
                { step: "Clean", desc: "Cleanup permissions.", time: "2-3 weeks" },
                { step: "Policy", desc: "Set rules and train.", time: "1 week" },
            ]}
            faqs={[
                { q: "Do AIs learn from our data?", a: "With Enterprise versions (Copilot, ChatGPT Enterprise) contractually no. We ensure you use these." },
                { q: "Do you prevent AI usage?", a: "No, we enable it safely. Prohibition usually fails anyway (Shadow AI)." },
                { q: "Do we need E5 licenses?", a: "Helpful for full automation, but we also find ways with Business Premium or add-ons." },
            ]}
            trustNote="AI amplifies existing weaknesses in data protection. We fix these weaknesses at the root (data & identities)."
            finalCtaText="Get your company ready for the AI era."
        />
    );
}
