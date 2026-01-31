import { Laptop } from "lucide-react";
import ServicePageTemplate from "@/app/components/ServicePageTemplate";

export const metadata = {
    title: "Endpoint & Device Security - Elkaza Consulting",
    description: "Every device secured. EDR, encryption, patching for laptops and mobiles.",
};

export default function EndpointSecurityPage() {
    return (
        <ServicePageTemplate
            locale="en"
            icon={Laptop}
            title="Endpoint & Device Security"
            promise="Security that travels with your employees. In the office or at home."
            ctaAction="Secure Devices"
            ctaHref="/en/contact"
            timeline="2-5 weeks"
            deliverablesCount={5}
            forWhom={[
                "Teams with many mobile devices (laptops, smartphones)",
                "Companies still using classic antivirus",
                "Organizations with BYOD (Bring Your Own Device) challenges",
                "Firms needing compliance proof for endpoints",
            ]}
            outcomes={[
                "Full protection against ransomware and malware (EDR/XDR)",
                "Automated enforcement of security policies",
                "Lost devices can be remotely wiped",
                "Central overview of health status for all devices",
            ]}
            included={[
                "Endpoint Detection & Response (EDR) rollout",
                "Mobile Device Management (MDM / Intune) setup",
                "Disk encryption (BitLocker/FileVault)",
                "App Protection Policies for BYOD",
                "USB port security and web filtering",
            ]}
            deliverables={[
                "EDR configuration report",
                "Device inventory list",
                "Compliance dashboard access",
                "BitLocker recovery key database",
                "Onboarding guide for new employees",
            ]}
            tools={[
                "Microsoft Defender for Endpoint",
                "Microsoft Intune",
                "CrowdStrike Falcon (optional)",
                "Jamf (for Apple environments)",
            ]}
            exampleOutcomes={[
                {
                    context: "Sales rep loses laptop at airport",
                    before: "Data unencrypted, panic",
                    after: "Device encrypted, remotely wiped",
                    result: "No data loss, device is just e-waste.",
                },
                {
                    context: "Employee opens infected attachment",
                    before: "Antivirus misses it, PC infected",
                    after: "EDR detects behavior, isolates PC automatically",
                    result: "Attack stopped before lateral movement.",
                },
            ]}
            process={[
                { step: "Audit", desc: "Inventory of devices.", time: "1 week" },
                { step: "Pilot", desc: "Configuration on test group.", time: "1-2 weeks" },
                { step: "Rollout", desc: "Distribution to all users.", time: "1-2 weeks" },
            ]}
            faqs={[
                { q: "Will this slow down my laptop?", a: "No. Modern EDR solutions are very lightweight, unlike old antivirus suites." },
                { q: "Can you see my private data?", a: "No. For BYOD, we strictly separate corporate and private data (containerization)." },
                { q: "Does this work for Macs?", a: "Yes. We support Windows, macOS, iOS, and Android equally." },
            ]}
            trustNote="We do not access user data. We only see security events and technical health status."
            finalCtaText="Make every device a fortress."
        />
    );
}
