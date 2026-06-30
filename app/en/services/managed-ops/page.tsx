import { Headphones } from "lucide-react";
import ServicePageTemplate from "@/app/components/ServicePageTemplate";
import { createLocalizedMetadata } from "@/lib/metadata";

export const metadata = createLocalizedMetadata({
    title: "Managed Operations - Elkaza Consulting",
    description: "We handle your IT. Proactive monitoring, patching, and incident response.",
    path: "/en/services/managed-ops",
});

export default function ManagedOpsPage() {
    return (
        <ServicePageTemplate
            locale="en"
            icon={Headphones}
            title="Managed Operations"
            promise="Your IT just works. We handle the rest."
            ctaAction="Request Operations"
            ctaHref="/en/contact"
            timeline="Ongoing"
            deliverablesCount={3}
            forWhom={[
                "Companies without an internal IT department",
                "Teams wanting to focus on core business",
                "Firms needing to minimize downtime",
                "Organizations that don't want to leave security to chance",
            ]}
            outcomes={[
                "Stable systems and fast response to issues",
                "Security updates always installed promptly",
                "Transparent costs instead of overtime chaos",
                "One contact who knows your environment",
            ]}
            included={[
                "Monitoring concept for critical services",
                "Patch Management (OS & 3rd Party)",
                "Backup monitoring and regular tests",
                "Endpoint Protection Management",
                "User Support (Level 2/3)",
            ]}
            deliverables={[
                "Monthly Status Report (Performance & Security)",
                "Access to Ticket and Monitoring System",
                "Quarterly Review Meeting",
            ]}
            tools={[
                "RMM (Remote Monitoring & Management)",
                "Ticket System (Jira Service Management)",
                "Documentation Platform",
                "Endpoint Protection (EDR)",
            ]}
            exampleOutcomes={[
                {
                    context: "Architecture Firm, 25 seats",
                    before: "Server outage only noticed on Monday",
                    after: "Monitoring alerts immediately, fixed on Sunday",
                    result: "Team can work instantly on Monday.",
                },
                {
                    context: "Trading Company",
                    before: "Patches sporadic, security holes open",
                    after: "Automatic patching every week",
                    result: "Security level consistently high.",
                },
            ]}
            process={[
                { step: "Onboarding", desc: "Install agents, create docs.", time: "1-2 weeks" },
                { step: "Run", desc: "Ongoing monitoring and maintenance.", time: "Ongoing" },
                { step: "Optimize", desc: "Regular improvements.", time: "Quarterly" },
            ]}
            faqs={[
                { q: "Do you replace our internal IT?", a: "We can complement or replace. We often handle 'boring' ops so internal IT can focus on projects." },
                { q: "What response times are planned?", a: "Response and service hours are not yet defined and would only be specified in a later binding offer." },
                { q: "How would data access be handled?", a: "A future offer would define roles, logging, confidentiality, and data-processing terms before any access occurs." },
            ]}
            trustNote="We work transparently. You can see what we do and how your systems are doing in our portal at any time."
            finalCtaText="Put your IT in professional hands."
        />
    );
}
