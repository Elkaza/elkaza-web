import { Network } from "lucide-react";
import ServicePageTemplate from "@/app/components/ServicePageTemplate";

export const metadata = {
    title: "Network & Infrastructure - Elkaza Consulting",
    description: "Stable connections, clean segmentation, secure remote access for growing teams.",
};

export default function NetworkingPage() {
    return (
        <ServicePageTemplate
            locale="en"
            icon={Network}
            title="Network & Infrastructure"
            promise="Stable connections, clean segmentation, secure remote access for growing teams."
            ctaAction="Request Network Check"
            ctaHref="/en/contact"
            timeline="2-6 weeks"
            deliverablesCount={6}
            forWhom={[
                "Companies with growing teams and network bottlenecks",
                "Offices with poor Wi-Fi coverage",
                "Teams needing secure VPN for home office",
                "Firms with unstructured, 'organic' IT growth",
            ]}
            outcomes={[
                "Stable Wi-Fi in all offices",
                "Secure separation of guest and internal networks",
                "Performant VPN access for remote users",
                "Full visibility of connected devices",
            ]}
            included={[
                "Status quo analysis and site survey",
                "Network design and segmentation (VLANs)",
                "Firewall configuration and hardening",
                "Wi-Fi optimization",
                "VPN / Remote Access setup",
                "Documentation and handover",
            ]}
            deliverables={[
                "Network topology diagram",
                "IP address and VLAN plan",
                "Firewall rule documentation",
                "Wi-Fi coverage report (heatmap)",
                "VPN credentials and guides",
                "Monitoring access",
            ]}
            tools={[
                "Firewalls (Fortinet, Sophos, OPNsense)",
                "Switching & Wi-Fi (Ubiquiti, Aruba, Cisco Meraki)",
                "Monitoring (PRTG, Checkmk, Zabbix)",
                "VPN (WireGuard, OpenVPN, IPsec)",
            ]}
            exampleOutcomes={[
                {
                    context: "Agency, 40 employees, old building",
                    before: "Frequent Wi-Fi drops, slow NAS",
                    after: "Wi-Fi 6 coverage, 10GbE backbone",
                    result: "No more complaints, backups 5x faster.",
                },
                {
                    context: "Service Provider, Hybrid Work",
                    before: "VPN insecure, access to everything for everyone",
                    after: "Segmented VLANs, VPN limited to needs",
                    result: "Security audit passed, risk minimized.",
                },
            ]}
            process={[
                { step: "Assess", desc: "Audit of infrastructure and requirements.", time: "1 week" },
                { step: "Design", desc: "Planning segmentation and hardware.", time: "1-2 weeks" },
                { step: "Implement", desc: "Configuration, migration, testing.", time: "1-3 weeks" },
            ]}
            faqs={[
                { q: "Is there downtime during the transition?", a: "We schedule critical work outside business hours (evenings/weekends)." },
                { q: "Do we need to buy new hardware?", a: "Not necessarily. We optimize existing gear where possible. Replacement only if bottleneck or EOL." },
                { q: "Do you support home office connections?", a: "Yes, we set up secure VPNs or SASE solutions for remote employees." },
            ]}
            trustNote="Network access is sensitive. We document all changes strictly. Passwords are stored in your password manager."
            finalCtaText="Stop struggling with shaky Wi-Fi and insecure networks."
        />
    );
}
