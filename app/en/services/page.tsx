"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Network, ShieldCheck, Lock, ShieldAlert, Cog, Headphones, Cloud,
  Laptop, Sparkles, ClipboardCheck, FileText, Clock, CheckCircle,
  ArrowRight, Search, Settings, BookOpen, Presentation, MessageSquare, HelpCircle
} from "lucide-react";
import TrustBar from "@/app/components/TrustBar";
import CTA from "@/app/components/CTA";

// Service data with icons and categories
const services = [
  { slug: "networking", icon: Network, title: "Network & Infrastructure", benefit: "Stable connections for growing teams.", bullets: ["Reliable Wi-Fi and VPN", "Clean network segmentation", "Documented topology"], categories: ["networking"] },
  { slug: "security-baseline", icon: ShieldCheck, title: "Security Baseline", benefit: "Get the basics right.", bullets: ["MFA on all accounts", "Patch management in place", "Backups tested"], categories: ["security"], recommended: true },
  { slug: "zero-trust", icon: Lock, title: "Zero Trust & Identity", benefit: "Access only for those who need it.", bullets: ["Identity-based access control", "Conditional Access policies", "Privileged Access Management"], categories: ["security"] },
  { slug: "ransomware-resilience", icon: ShieldAlert, title: "Ransomware Resilience", benefit: "Ready for the worst case.", bullets: ["Immutable backups", "Tested restore processes", "Incident runbooks"], categories: ["security"] },
  { slug: "automation", icon: Cog, title: "Automation & Platform Engineering", benefit: "Less manual work. Fewer errors.", bullets: ["Automated deployments", "Infrastructure as Code", "Self-service for teams"], categories: ["automation"] },
  { slug: "managed-ops", icon: Headphones, title: "Managed Operations", benefit: "We handle IT. You focus on business.", bullets: ["Proactive monitoring", "Incident response", "Regular reviews"], categories: ["operations"] },
  { slug: "cloud-saas-security", icon: Cloud, title: "Cloud & SaaS Security", benefit: "Control over your cloud environment.", bullets: ["Cloud security posture", "Configuration audits", "Shadow IT detection"], categories: ["security", "cloud"] },
  { slug: "endpoint-security", icon: Laptop, title: "Endpoint & Device Security", benefit: "Every device secured.", bullets: ["EDR/XDR rollout", "Device compliance", "Secure device config"], categories: ["security"] },
  { slug: "ai-adoption", icon: Sparkles, title: "Secure AI Adoption", benefit: "Use AI without risking data.", bullets: ["Data classification", "Permissions cleanup", "AI usage policy"], categories: ["compliance"] },
  { slug: "nis2-compliance", icon: ClipboardCheck, title: "NIS2 / Compliance Readiness", benefit: "Audit-ready with clear evidence.", bullets: ["Gap analysis", "Control documentation", "Incident readiness"], categories: ["compliance"] },
];

const categories = [
  { id: "all", label: "All" },
  { id: "security", label: "Security" },
  { id: "networking", label: "Networking" },
  { id: "cloud", label: "Cloud" },
  { id: "automation", label: "Automation" },
  { id: "operations", label: "Operations" },
  { id: "compliance", label: "Compliance" },
];

const entryPaths = [
  {
    title: "I need clarity first",
    label: "Assessment",
    text: "Current state, risks, and prioritized actions before anything gets rebuilt.",
    href: "/en/packages",
  },
  {
    title: "I need concrete improvements",
    label: "Security Baseline",
    text: "Improve MFA, backups, patch status, admin access, and documentation pragmatically.",
    href: "/en/services/security-baseline",
  },
  {
    title: "I need ongoing operations",
    label: "Managed Operations",
    text: "Monitoring, patch rhythm, backup checks, and clear response when something breaks.",
    href: "/en/services/managed-ops",
  },
];

const processSteps = [
  { icon: Search, name: "Assess", desc: "We capture the current state.", time: "1-2 weeks" },
  { icon: Settings, name: "Implement", desc: "We make the changes.", time: "2-6 weeks" },
  { icon: Headphones, name: "Run", desc: "Handover to your team.", time: "Ongoing" },
];

const deliverables = [
  { icon: FileText, name: "Documentation", desc: "Every change documented." },
  { icon: BookOpen, name: "Knowledge Transfer", desc: "Training for your team." },
  { icon: Presentation, name: "Final Report", desc: "Summary and recommendations." },
  { icon: MessageSquare, name: "Support", desc: "Questions after project? Available." },
];

const faqs = [
  { q: "How much downtime will there be?", a: "Most changes run in the background. Planned maintenance windows are coordinated with you." },
  { q: "What access do you need?", a: "Admin access to relevant systems. Temporary, documented, removed after project end." },
  { q: "Do we need to buy specific tools?", a: "We work with what you have. If investments make sense, we discuss upfront." },
  { q: "Who owns the outcome?", a: "You do. All documentation, configs, and scripts belong to your company." },
  { q: "What about confidentiality?", a: "NDA available. All data stays with you. We take no copies." },
];

export default function ServicesEnPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredServices = activeCategory === "all"
    ? services
    : services.filter(s => s.categories.includes(activeCategory));

  return (
    <main className="scroll-smooth">
      {/* Hero */}
      <section className="py-12 md:py-20 hero-gradient-enhanced">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-4">Services</h1>
          <p className="max-w-2xl text-lg leading-relaxed text-[var(--text-secondary)] mb-8 md:text-xl">
            IT infrastructure and security for growing SMBs. Clearly defined projects with measurable outcomes.
          </p>
          <div className="flex flex-wrap gap-4">
            <CTA href="/en/contact">Free Initial Consultation</CTA>
            <Link href="/en/packages" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[var(--border)] text-[var(--text)] hover:bg-[var(--surface)] transition-colors">
              View Packages
            </Link>
          </div>
          <p className="mt-6 text-sm text-[var(--muted)] font-medium">
            Clear deliverables, documented handover, and a roadmap you can execute.
          </p>
        </div>
      </section>

      <section className="bg-[var(--bg)] py-10 md:py-12">
        <div className="mx-auto max-w-[1140px] px-4 sm:px-6">
          <div className="mb-6 max-w-3xl">
            <h2 className="text-2xl font-semibold text-[var(--text)]">Which entry point fits?</h2>
            <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
              If you are not sure which service is right, start here. These three paths cover the most common situations.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {entryPaths.map((path) => (
              <Link
                key={path.title}
                href={path.href}
                className="group flex min-w-0 flex-col rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow-sm)] transition-all hover:border-[var(--primary)] hover:bg-[var(--elevated)]"
              >
                <span className="mb-3 w-fit rounded-md border border-[var(--border)] bg-[var(--elevated)] px-2.5 py-1 text-xs font-bold text-[var(--text)]">
                  {path.label}
                </span>
                <h3 className="text-lg font-semibold text-[var(--text)] group-hover:text-[var(--primary)]">{path.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--text-secondary)]">{path.text}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[var(--primary)]">
                  View <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="py-5 bg-[var(--surface)] border-y border-[var(--border)]">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
          <TrustBar locale="en" />
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-6 bg-[var(--bg)]">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
          <div className="flex gap-2 overflow-x-auto pb-1 md:flex-wrap md:justify-center" role="tablist" aria-label="Categories">
            {categories.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={activeCategory === cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-[var(--primary)] ${activeCategory === cat.id
                  ? "bg-[var(--primary)] text-white"
                  : "bg-[var(--surface)] text-[var(--text-secondary)] hover:bg-[var(--elevated)] hover:text-[var(--text)]"
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Service Cards Grid */}
      <section className="py-10 md:py-14 bg-[var(--bg)]">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredServices.map((service) => (
              <Link
                key={service.slug}
                href={`/en/services/${service.slug}`}
                className={`group relative flex min-w-0 flex-col rounded-xl border bg-[var(--surface)] p-5 transition-all hover:bg-[var(--elevated)] ${service.recommended
                  ? "border-[var(--primary)] ring-1 ring-[var(--primary)]"
                  : "border-[var(--border)] hover:border-[var(--primary)]"
                  }`}
              >
                {service.recommended && (
                  <span className="absolute -top-3 left-4 rounded-full bg-[var(--primary)] px-2.5 py-0.5 text-xs font-semibold text-white">
                    Recommended start
                  </span>
                )}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-[var(--primary-light)]">
                    <service.icon className="w-5 h-5 text-[var(--primary)]" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--text)] group-hover:text-[var(--primary)] transition-colors">
                    {service.title}
                  </h3>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-3">{service.benefit}</p>
                <ul className="mb-4 space-y-1.5">
                  {service.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                      <CheckCircle className="w-3.5 h-3.5 text-[var(--primary)] mt-0.5 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <span className="mt-auto flex items-center gap-1 text-sm font-semibold text-[var(--link)] group-hover:text-[var(--link-hover)]">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Start */}
      <section className="py-12 md:py-16 bg-[var(--surface)]">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--primary-light)] text-[var(--primary)] text-sm font-medium mb-4">
            <ShieldCheck className="w-4 h-4" /> Our Recommendation
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold text-[var(--text)] mb-4">
            Start with Security Baseline
          </h2>
          <p className="text-[var(--text-secondary)] mb-4">
            Most SMBs benefit from securing the basics first: MFA, patching, backups. This closes the most common baseline gaps. After that, you know where you stand.
          </p>
          <p className="text-sm text-[var(--primary)] font-medium mb-6">
            Baseline first → then Zero Trust / Managed Ops / Ransomware Resilience.
          </p>
          <CTA href="/en/services/security-baseline">Start with Security Baseline</CTA>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-12 md:py-16 bg-[var(--bg)]">
        <div className="max-w-[1140px] mx-auto px-6">
          <h2 className="text-2xl font-semibold text-[var(--text)] mb-8 text-center">How We Work</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {processSteps.map((step, i) => (
              <div key={i} className="p-6 rounded-xl bg-[var(--surface)] border border-[var(--border)] text-center">
                <div className="w-12 h-12 rounded-full bg-[var(--primary-light)] flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-6 h-6 text-[var(--primary)]" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--text)] mb-2">{step.name}</h3>
                <p className="text-sm text-[var(--text-secondary)] mb-2">{step.desc}</p>
                <span className="text-xs text-[var(--muted)] flex items-center justify-center gap-1">
                  <Clock className="w-3 h-3" /> {step.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-12 md:py-16 bg-[var(--surface)]">
        <div className="max-w-[1140px] mx-auto px-6">
          <h2 className="text-2xl font-semibold text-[var(--text)] mb-8 text-center">What You Get Every Time</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {deliverables.map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-[var(--bg)] border border-[var(--border)]">
                <item.icon className="w-5 h-5 text-[var(--primary)] mb-3" />
                <h3 className="text-base font-semibold text-[var(--text)] mb-1">{item.name}</h3>
                <p className="text-sm text-[var(--muted)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 bg-[var(--bg)]">
        <div className="max-w-[1140px] mx-auto px-6">
          <div className="flex items-center justify-center gap-2 mb-8">
            <HelpCircle className="w-6 h-6 text-[var(--primary)]" />
            <h2 className="text-2xl font-semibold text-[var(--text)]">Frequently Asked Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="p-5 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
                <h3 className="text-base font-medium text-[var(--text)] mb-2">{faq.q}</h3>
                <p className="text-sm text-[var(--text-secondary)]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-16 bg-[var(--surface)]">
        <div className="max-w-[1140px] mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold text-[var(--text)] mb-4">Ready for stable IT?</h2>
          <p className="text-[var(--text-secondary)] mb-6">Let us discuss what you need in a 30-minute call.</p>
          <CTA href="/en/contact">Free Initial Consultation</CTA>
          <p className="text-sm text-[var(--muted)] mt-4">No obligation. No sales pressure.</p>
        </div>
      </section>
    </main>
  );
}
