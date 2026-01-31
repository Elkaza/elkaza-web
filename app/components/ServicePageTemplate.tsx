import Link from "next/link";
import {
    Check, Clock, FileText, Wrench, Users, HelpCircle, Shield,
    ArrowRight, Building2, Search, Settings, Headphones, LucideIcon
} from "lucide-react";
import CTA from "@/app/components/CTA";

interface ServicePageTemplateProps {
    locale: "de" | "en";
    icon: LucideIcon;
    title: string;
    promise: string;
    ctaAction: string;
    ctaHref: string;
    timeline: string;
    deliverablesCount: number;
    forWhom: string[];
    outcomes: string[];
    included: string[];
    deliverables: string[];
    tools?: string[];
    exampleOutcomes: { context: string; before: string; after: string; result: string }[];
    process: { step: string; desc: string; time: string }[];
    faqs: { q: string; a: string }[];
    trustNote: string;
    finalCtaText: string;
}

const labels = {
    de: {
        forWhom: "Für wen?",
        whatYouGet: "Was Sie bekommen",
        whatWeDo: "Was wir tun",
        deliverables: "Ergebnisse",
        tools: "Tools & Stack",
        exampleOutcomes: "Beispiel-Ergebnisse (illustrativ)",
        before: "Vorher",
        after: "Nachher",
        result: "Ergebnis",
        process: "Prozess",
        faq: "Häufige Fragen",
        timeline: "Typische Dauer",
        deliverablesLabel: "Ergebnisse",
    },
    en: {
        forWhom: "Who it's for",
        whatYouGet: "What you get",
        whatWeDo: "What we do",
        deliverables: "Deliverables",
        tools: "Tools & Stack",
        exampleOutcomes: "Example outcomes (illustrative)",
        before: "Before",
        after: "After",
        result: "Result",
        process: "Process",
        faq: "FAQ",
        timeline: "Typical timeline",
        deliverablesLabel: "Deliverables",
    },
};

export default function ServicePageTemplate({
    locale,
    icon: Icon,
    title,
    promise,
    ctaAction,
    ctaHref,
    timeline,
    deliverablesCount,
    forWhom,
    outcomes,
    included,
    deliverables,
    tools,
    exampleOutcomes,
    process,
    faqs,
    trustNote,
    finalCtaText,
}: ServicePageTemplateProps) {
    const l = labels[locale];

    return (
        <main className="scroll-smooth">
            {/* Hero */}
            <section className="py-12 md:py-20 hero-gradient">
                <div className="max-w-[1140px] mx-auto px-6">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 rounded-xl bg-[var(--primary-light)]">
                            <Icon className="w-6 h-6 text-[var(--primary)]" />
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-[var(--text)] mb-4">{title}</h1>
                    <p className="text-xl text-[var(--text-secondary)] max-w-2xl mb-4">{promise}</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--muted)] mb-6">
                        <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" /> {l.timeline}: {timeline}
                        </span>
                        <span className="flex items-center gap-1">
                            <FileText className="w-4 h-4" /> {deliverablesCount} {l.deliverablesLabel}
                        </span>
                    </div>
                    <CTA href={ctaHref}>{ctaAction}</CTA>
                </div>
            </section>

            {/* 3 Columns: For Whom / Outcomes / What We Do */}
            <section className="py-12 md:py-16 bg-[var(--surface)]">
                <div className="max-w-[1140px] mx-auto px-6 grid md:grid-cols-3 gap-8">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Users className="w-5 h-5 text-[var(--primary)]" />
                            <h2 className="text-xl font-semibold text-[var(--text)]">{l.forWhom}</h2>
                        </div>
                        <ul className="space-y-3">
                            {forWhom.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-[var(--text-secondary)] text-sm">
                                    <Check className="w-4 h-4 text-[var(--primary)] mt-0.5 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Check className="w-5 h-5 text-[var(--primary)]" />
                            <h2 className="text-xl font-semibold text-[var(--text)]">{l.whatYouGet}</h2>
                        </div>
                        <ul className="space-y-3">
                            {outcomes.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-[var(--text-secondary)] text-sm">
                                    <Check className="w-4 h-4 text-[var(--primary)] mt-0.5 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Wrench className="w-5 h-5 text-[var(--primary)]" />
                            <h2 className="text-xl font-semibold text-[var(--text)]">{l.whatWeDo}</h2>
                        </div>
                        <ul className="space-y-3">
                            {included.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-[var(--text-secondary)] text-sm">
                                    <Check className="w-4 h-4 text-[var(--primary)] mt-0.5 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Deliverables & Tools */}
            <section className="py-12 md:py-16 bg-[var(--bg)]">
                <div className="max-w-[1140px] mx-auto px-6 grid md:grid-cols-2 gap-12">
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <FileText className="w-5 h-5 text-[var(--primary)]" />
                            <h2 className="text-2xl font-semibold text-[var(--text)]">{l.deliverables}</h2>
                        </div>
                        <ul className="space-y-3">
                            {deliverables.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-[var(--text-secondary)] text-sm">
                                    <Check className="w-4 h-4 text-[var(--primary)] mt-0.5 shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {tools && tools.length > 0 && (
                        <div>
                            <div className="flex items-center gap-2 mb-6">
                                <Wrench className="w-5 h-5 text-[var(--primary)]" />
                                <h2 className="text-2xl font-semibold text-[var(--text)]">{l.tools}</h2>
                            </div>
                            <ul className="space-y-3">
                                {tools.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-[var(--text-secondary)] text-sm">
                                        <Check className="w-4 h-4 text-[var(--primary)] mt-0.5 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </section>

            {/* Example Outcomes */}
            <section className="py-12 md:py-16 bg-[var(--surface)]">
                <div className="max-w-[1140px] mx-auto px-6">
                    <h2 className="text-2xl font-semibold text-[var(--text)] mb-2 text-center">{l.exampleOutcomes}</h2>
                    <p className="text-sm text-[var(--muted)] mb-8 text-center">
                        {locale === "de" ? "Basierend auf typischen Projektverläufen." : "Based on typical project scenarios."}
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        {exampleOutcomes.map((ex, i) => (
                            <div key={i} className="p-6 rounded-xl bg-[var(--elevated)] border border-[var(--border)]">
                                <div className="flex items-center gap-2 mb-4 text-[var(--muted)]">
                                    <Building2 className="w-4 h-4" />
                                    <span className="text-sm">{ex.context}</span>
                                </div>
                                <div className="space-y-3 text-sm">
                                    <div>
                                        <span className="text-red-400 font-medium">{l.before}:</span>{" "}
                                        <span className="text-[var(--text-secondary)]">{ex.before}</span>
                                    </div>
                                    <div>
                                        <span className="text-green-400 font-medium">{l.after}:</span>{" "}
                                        <span className="text-[var(--text-secondary)]">{ex.after}</span>
                                    </div>
                                    <div>
                                        <span className="text-[var(--primary)] font-medium">{l.result}:</span>{" "}
                                        <span className="text-[var(--text)]">{ex.result}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-12 md:py-16 bg-[var(--bg)]">
                <div className="max-w-[1140px] mx-auto px-6">
                    <h2 className="text-2xl font-semibold text-[var(--text)] mb-8 text-center">{l.process}</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {process.map((step, i) => (
                            <div key={i} className="p-6 rounded-xl bg-[var(--surface)] border border-[var(--border)] text-center">
                                <div className="w-10 h-10 rounded-full bg-[var(--primary)] text-white flex items-center justify-center mx-auto mb-4 font-bold">
                                    {i + 1}
                                </div>
                                <h3 className="text-lg font-semibold text-[var(--text)] mb-2">{step.step}</h3>
                                <p className="text-sm text-[var(--text-secondary)] mb-2">{step.desc}</p>
                                <span className="text-xs text-[var(--muted)] flex items-center justify-center gap-1">
                                    <Clock className="w-3 h-3" /> {step.time}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-12 md:py-16 bg-[var(--surface)]">
                <div className="max-w-[1140px] mx-auto px-6">
                    <div className="flex items-center justify-center gap-2 mb-8">
                        <HelpCircle className="w-6 h-6 text-[var(--primary)]" />
                        <h2 className="text-2xl font-semibold text-[var(--text)]">{l.faq}</h2>
                    </div>
                    <div className="max-w-3xl mx-auto space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="p-5 rounded-xl bg-[var(--bg)] border border-[var(--border)]">
                                <h3 className="text-base font-medium text-[var(--text)] mb-2">{faq.q}</h3>
                                <p className="text-sm text-[var(--text-secondary)]">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust Note */}
            <section className="py-8 bg-[var(--bg)]">
                <div className="max-w-[1140px] mx-auto px-6">
                    <div className="flex items-start gap-3 p-4 rounded-lg border border-[var(--border)] bg-[var(--surface)]">
                        <Shield className="w-5 h-5 text-[var(--primary)] shrink-0 mt-0.5" />
                        <p className="text-sm text-[var(--text-secondary)]">{trustNote}</p>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-12 md:py-16 bg-[var(--surface)]">
                <div className="max-w-[1140px] mx-auto px-6 text-center">
                    <h2 className="text-2xl font-semibold text-[var(--text)] mb-6">{finalCtaText}</h2>
                    <CTA href={ctaHref}>{ctaAction}</CTA>
                </div>
            </section>
        </main>
    );
}
