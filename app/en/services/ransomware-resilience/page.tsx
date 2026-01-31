import { ShieldAlert } from "lucide-react";
import ServicePageTemplate from "@/app/components/ServicePageTemplate";

export const metadata = {
    title: "Ransomware Resilience - Elkaza Consulting",
    description: "Not if, but when. Immutable backups, emergency plans, and recovery tests.",
};

export default function RansomwareResiliencePage() {
    return (
        <ServicePageTemplate
            locale="en"
            icon={ShieldAlert}
            title="Ransomware Resilience"
            promise="Not 'if', but 'when'. Be ready for the worst case."
            ctaAction="Book Resilience Review"
            ctaHref="/en/contact"
            timeline="2-4 weeks"
            deliverablesCount={4}
            forWhom={[
                "Executives who want to sleep soundly",
                "Companies with patchy backup concepts",
                "Firms that have never tested a full restore",
                "Organizations without a clear emergency plan",
            ]}
            outcomes={[
                "Guaranteed data recoverability",
                "Clear roadmap for emergencies (who does what)",
                "Protection against backup encryption",
                "Reduced downtime during attacks",
            ]}
            included={[
                "Backup architecture review",
                "Implementation of Immutable Backups (WORM)",
                "Creation of an Incident Response Plan",
                "Execution of an emergency test (Tabletop)",
                "Hardening of backup servers",
            ]}
            deliverables={[
                "Backup configuration report",
                "Incident Response Playbook (PDF & Print version)",
                "Restore test protocol",
                "Risk analysis report",
            ]}
            tools={[
                "Veeam Backup & Replication",
                "Hardened Linux Repositories",
                "S3 Object Lock (Wasabi, AWS)",
                "Offline / Tape Backups",
            ]}
            exampleOutcomes={[
                {
                    context: "Logistics firm, servers encrypted",
                    before: "Backups were also encrypted (same network)",
                    after: "Immutable Linux Repository & Cloud Copy",
                    result: "Data is undeletable even for domain admins.",
                },
                {
                    context: "Law firm, 15 seats",
                    before: "No plan for IT outage",
                    after: "Emergency handbook with contacts & process",
                    result: "Reaction time in test dropped from '?' to 30 minutes.",
                },
            ]}
            process={[
                { step: "Audit", desc: "Check backups and risks.", time: "1 week" },
                { step: "Harden", desc: "Immutable storage and separation.", time: "1-2 weeks" },
                { step: "Test", desc: "Restore test and drill.", time: "1 week" },
            ]}
            faqs={[
                { q: "Is my cloud backup (OneDrive/Dropbox) enough?", a: "No. Synchronization is not backup. Ransomware syncs the encryption immediately." },
                { q: "What does 'Immutable' mean?", a: "Unchangeable. Once written, data cannot be modified or deleted for a set time (e.g., 30 days) – not even by hackers." },
                { q: "How often should we test?", a: "Automated tests daily. Manual full restores at least annually or upon major changes." },
            ]}
            trustNote="Your emergency plan is only useful if it's secure. We create documents accessible even without IT systems."
            finalCtaText="Secure the continuity of your business."
        />
    );
}
