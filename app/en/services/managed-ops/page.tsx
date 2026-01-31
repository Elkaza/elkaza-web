import { Headphones } from "lucide-react";
import ServicePageTemplate from "@/app/components/ServicePageTemplate";

export const metadata = {
    title: "Managed Operations - Elkaza Consulting",
    description: "We handle your IT. Proactive monitoring, patching, and incident response.",
};

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
                "24/7 Monitoring of critical services",
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
                { q: "How fast do you respond?", a: "Depends on SLA. Critical usually < 1 hour. Standard requests < 4 hours." },
                { q: "Do you have access to our data?", a: "Technically administrative yes, but we don't look at files. Confidentiality is guaranteed (NDA/DPA)." },
            ]}
            trustNote="We work transparently. You can see what we do and how your systems are doing in our portal at any time."
            finalCtaText="Put your IT in professional hands."
        />
    );
}
