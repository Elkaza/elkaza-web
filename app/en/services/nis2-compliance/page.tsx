import { ClipboardCheck } from "lucide-react";
import ServicePageTemplate from "@/app/components/ServicePageTemplate";

export const metadata = {
    title: "NIS2 / Compliance Readiness - Elkaza Consulting",
    description: "Don't fear the audit. Pragmatic compliance, documentation, and processes.",
};

export default function NIS2Page() {
    return (
        <ServicePageTemplate
            locale="en"
            icon={ClipboardCheck}
            title="NIS2 / Compliance Readiness"
            promise="Don't fear the audit. Pragmatic compliance without the paper monster."
            ctaAction="Check Compliance Status"
            ctaHref="/en/contact"
            timeline="4-12 weeks"
            deliverablesCount={6}
            forWhom={[
                "Companies falling under NIS2 or DORA",
                "Suppliers needing to provide security proof",
                "Executives wanting to minimize personal liability",
                "Organizations preparing for ISO 27001",
            ]}
            outcomes={[
                "Clear overview of compliance gaps (Gap Analysis)",
                "Fulfillment of legal reporting obligations",
                "Reduced liability risk for management",
                "Competitive advantage through demonstrable security",
            ]}
            included={[
                "Legal & technical gap analysis (with partner lawyers)",
                "Creation of risk management policy",
                "Setting up incident reporting process",
                "Supply chain security assessment",
                "Implementation of technical measures (MFA, encryption)",
            ]}
            deliverables={[
                "Gap Analysis Report & Action Plan",
                "ISMS Handbook (Light version for SMBs)",
                "Updates to Record of Processing Activities",
                "Emergency contact list and reporting forms",
                "Training records for employees",
            ]}
            tools={[
                "Compliance Manager (Microsoft Purview)",
                "ISMS Tools (or structured wikis)",
                "Vulnerability Scanners",
                "Evidence Collection Repositories",
            ]}
            exampleOutcomes={[
                {
                    context: "Manufacturer, affected by NIS2",
                    before: "Uncertainty about what exactly to do",
                    after: "Clear plan, 80% of measures technically implemented",
                    result: "Management liability minimized.",
                },
                {
                    context: "Software Supplier for Bank",
                    before: "Customer threatening to cancel due to missing certs",
                    after: "Security concept presented, measures proven",
                    result: "Customer satisfied, contract renewed.",
                },
            ]}
            process={[
                { step: "Check", desc: "Gap analysis against standard.", time: "2 weeks" },
                { step: "Fix", desc: "Write policies, harden tech.", time: "4-8 weeks" },
                { step: "Audit", desc: "Internal mock audit.", time: "1-2 weeks" },
            ]}
            faqs={[
                { q: "Do you provide legal advice?", a: "No. We focus on technical/organizational implementation. We refer partner lawyers for legal aspects." },
                { q: "Do we need ISO 27001?", a: "Not always. Often a lean ISMS or following CIS Controls is enough. We advise pragmatically." },
                { q: "How much internal effort is required?", a: "Compliance requires cooperation. Expect weekly jour fixes during the project phase." },
            ]}
            trustNote="Compliance is not a one-time project, but a process. We build structures that remain maintainable."
            finalCtaText="Turn from a risk factor into a trusted partner."
        />
    );
}
