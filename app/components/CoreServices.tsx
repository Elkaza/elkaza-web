"use client";

import { useState } from "react";
import Link from "next/link";
import type { Locale } from "@/lib/siteContent";
import { ShieldCheck, Shield, Network, Cloud, Workflow, LifeBuoy, Laptop, Brain, Scale } from "lucide-react";

type ServiceItem = {
    slug: string;
    title: string;
    shortDescription?: string;
    recommended?: boolean;
    [key: string]: unknown;
};

interface CoreServicesProps {
    locale: Locale;
    items: ServiceItem[];
    basePath?: string;
}

// Define core 4 services for initial view
const CORE_SERVICES = ["security-baseline", "networking", "zero-trust", "automation"];

export default function CoreServices({ locale, items, basePath }: CoreServicesProps) {
    const [showAll, setShowAll] = useState(false);
    const path = basePath || (locale === "de" ? "/leistungen" : "/en/services");

    const coreItems = items.filter(s => CORE_SERVICES.includes(s.slug));
    const additionalItems = items.filter(s => !CORE_SERVICES.includes(s.slug));
    
    const displayedItems = showAll ? items : coreItems;

    const recommendedSlug = "security-baseline";
    const recommendedLabel = locale === "de" ? "Empfohlener Einstieg" : "Recommended start";

    // Icon mapping
    const iconMap: Record<string, React.ElementType> = {
        "security-baseline": Shield,
        "zero-trust": ShieldCheck,
        "ransomware-resilience": Shield,
        "networking": Network,
        "cloud-saas-security": Cloud,
        "automation": Workflow,
        "managed-ops": LifeBuoy,
        "endpoint-security": Laptop,
        "ai-adoption": Brain,
        "nis2-compliance": Scale,
    };

    // Category color mapping
    const categoryMap: Record<string, string> = {
        "security-baseline": "text-indigo-600",
        "zero-trust": "text-purple-600",
        "ransomware-resilience": "text-red-600",
        "networking": "text-blue-600",
        "cloud-saas-security": "text-cyan-600",
        "automation": "text-green-600",
        "managed-ops": "text-orange-600",
        "endpoint-security": "text-violet-600",
        "ai-adoption": "text-pink-600",
        "nis2-compliance": "text-slate-600",
    };

    const categoryBgMap: Record<string, string> = {
        "security-baseline": "bg-indigo-50 dark:bg-indigo-950/30",
        "zero-trust": "bg-purple-50 dark:bg-purple-950/30",
        "ransomware-resilience": "bg-red-50 dark:bg-red-950/30",
        "networking": "bg-blue-50 dark:bg-blue-950/30",
        "cloud-saas-security": "bg-cyan-50 dark:bg-cyan-950/30",
        "automation": "bg-green-50 dark:bg-green-950/30",
        "managed-ops": "bg-orange-50 dark:bg-orange-950/30",
        "endpoint-security": "bg-violet-50 dark:bg-violet-950/30",
        "ai-adoption": "bg-pink-50 dark:bg-pink-950/30",
        "nis2-compliance": "bg-slate-50 dark:bg-slate-950/30",
    };

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {displayedItems.map((service) => {
                    const isRecommended = service.slug === recommendedSlug || service.recommended;
                    const Icon = iconMap[service.slug] || Shield;
                    const colorClass = categoryMap[service.slug] || "text-indigo-600";
                    const bgClass = categoryBgMap[service.slug] || "bg-indigo-50 dark:bg-indigo-950/30";

                    return (
                        <Link
                            key={service.slug}
                            href={`${path}/${service.slug}`}
                            className={`group flex flex-col rounded-xl border-2 p-5 transition-all duration-200 ${
                                isRecommended
                                    ? `border-[var(--primary)] ${bgClass} ring-2 ring-[var(--primary)]/20 shadow-md hover:shadow-lg hover:ring-[var(--primary)]/30`
                                    : `border-[var(--border)] bg-[var(--surface)] hover:border-[var(--primary)] hover:shadow-[var(--shadow-lg)]`
                            }`}
                        >
                            {isRecommended && (
                                <div className="mb-3">
                                    <span className="inline-block text-xs font-bold uppercase tracking-wider text-[var(--primary)] bg-[var(--primary-light)] px-2 py-1 rounded">
                                        {recommendedLabel}
                                    </span>
                                </div>
                            )}
                            
                            <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${bgClass}`}>
                                <Icon className={`w-6 h-6 ${colorClass}`} />
                            </div>

                            <h3 className="text-sm font-bold text-[var(--text)] mb-2 group-hover:text-[var(--primary)] transition-colors">
                                {service.title}
                            </h3>

                            {service.shortDescription && (
                                <p className="text-xs text-[var(--text-secondary)] leading-relaxed flex-1 mb-3">
                                    {service.shortDescription}
                                </p>
                            )}

                            <div className="pt-3 border-t border-[var(--border)] group-hover:border-[var(--primary)] transition-colors">
                                <span className="text-xs font-medium text-[var(--primary)] group-hover:underline">
                                    {locale === "de" ? "Mehr erfahren →" : "Learn more →"}
                                </span>
                            </div>
                        </Link>
                    );
                })}
            </div>

            {!showAll && additionalItems.length > 0 && (
                <div className="mt-8 text-center">
                    <button
                        onClick={() => setShowAll(true)}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-[var(--primary)] text-[var(--primary)] font-semibold hover:bg-[var(--primary-light)] transition-colors"
                    >
                        {locale === "de" ? "Alle Services anzeigen" : "View all services"} ({items.length})
                    </button>
                </div>
            )}

            {showAll && (
                <div className="mt-8 text-center">
                    <button
                        onClick={() => setShowAll(false)}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-[var(--border)] text-[var(--text-secondary)] font-semibold hover:border-[var(--primary)] transition-colors"
                    >
                        {locale === "de" ? "Wichtigste anzeigen" : "Show essentials"}
                    </button>
                </div>
            )}
        </>
    );
}
