import { Cog } from "lucide-react";
import ServicePageTemplate from "@/app/components/ServicePageTemplate";

export const metadata = {
    title: "Automation & Platform Engineering - Elkaza Consulting",
    description: "Less manual work. Fewer errors. Terraform, Ansible, CI/CD.",
};

export default function AutomationPage() {
    return (
        <ServicePageTemplate
            locale="en"
            icon={Cog}
            title="Automation & Platform Engineering"
            promise="Less manual work. Fewer errors. Scalable infrastructure at the push of a button."
            ctaAction="Check Automation Potential"
            ctaHref="/en/contact"
            timeline="3-8 weeks"
            deliverablesCount={4}
            forWhom={[
                "Teams spending too much time on repetitive tasks",
                "Companies with 'Snowflake' servers (each unique)",
                "Developers waiting for infrastructure",
                "Organizations needing fast scalability",
            ]}
            outcomes={[
                "Reproducible environments (Infrastructure as Code)",
                "Faster deployments with zero manual errors",
                "Self-documenting infrastructure",
                "More time for value-adding work",
            ]}
            included={[
                "Analysis of manual processes and pain points",
                "Implementation of Infrastructure as Code (Terraform/OpenTofu)",
                "Configuration Management (Ansible/Intune)",
                "CI/CD pipeline optimization",
                "Containerization (Docker/Kubernetes basics)",
            ]}
            deliverables={[
                "IaC repository (Git) with documentation",
                "Automated playbooks and scripts",
                "CI/CD pipeline definitions",
                "Training: 'How to use the new setup'",
            ]}
            tools={[
                "Terraform / OpenTofu",
                "Ansible",
                "GitLab CI / GitHub Actions",
                "Docker / Kubernetes",
                "PowerShell / Python",
            ]}
            exampleOutcomes={[
                {
                    context: "SaaS Startup, manual deployments",
                    before: "Deployment took 4h, prone to errors",
                    after: "Git push triggers deployment (10 mins)",
                    result: "3x more releases per week possible.",
                },
                {
                    context: "IT Service Provider, 50 servers",
                    before: "Configurations drifting apart",
                    after: "Ansible enforces standard config nightly",
                    result: "Compliance status always green, fewer incidents.",
                },
            ]}
            process={[
                { step: "Discovery", desc: "Identify manual time-wasters.", time: "1 week" },
                { step: "Code", desc: "Develop scripts and templates.", time: "2-5 weeks" },
                { step: "Enable", desc: "Train team and handover.", time: "1-2 weeks" },
            ]}
            faqs={[
                { q: "Is this worth it for small environments?", a: "Yes. Even simple scripts for user onboarding save hours and prevent errors." },
                { q: "Do we need to learn coding?", a: "Basics help, but aren't mandatory. We build self-service solutions." },
                { q: "What if the automation breaks?", a: "We build in error handling and logging. Plus, we offer support during the rollout phase." },
            ]}
            trustNote="Automation requires high privileges. We strictly secure pipelines and credentials (Secrets Management)."
            finalCtaText="Automate the boring stuff."
        />
    );
}
