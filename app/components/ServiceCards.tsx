"use client";

import { useState } from "react";
import Link from "next/link";
import { siteContent, type Locale } from "@/lib/siteContent";
import { ShieldCheck } from "lucide-react";

interface ServiceCardsProps {
    locale: Locale;
    basePath?: string;
    category?: string;
}

// Map services to categories
const serviceCategories: Record<string, string[]> = {
    security: ["security-baseline", "zero-trust", "ransomware-resilience", "cloud-saas-security", "endpoint-security"],
    networking: ["networking"],
    cloud: ["cloud-saas-security"],
    automation: ["automation"],
    operations: ["managed-ops"],
    compliance: ["nis2-compliance", "ai-adoption"],
};

export default function ServiceCards({ locale, basePath, category = "all" }: ServiceCardsProps) {
    const content = siteContent.services[locale];
    const path = basePath || (locale === "de" ? "/leistungen" : "/en/services");

    const filteredItems = category === "all"
        ? content.items
        : content.items.filter((service) =>
            serviceCategories[category]?.includes(service.slug)
        );

    const recommendedSlug = "security-baseline";
    const recommendedLabel = locale === "de" ? "Empfohlener Einstieg" : "Recommended start";

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredItems.map((service) => {
                const isRecommended = service.slug === recommendedSlug;
                return (
                    <Link
                        key={service.slug}
                        href={`${path}/${service.slug}`}
                        className={`group p-5 rounded-xl border bg-[var(--surface)] shadow-[var(--shadow-sm)] hover:shadow-lg hover:bg-[var(--elevated)] transition-all duration-200 flex flex-col relative ${isRecommended
                                ? "border-[var(--primary)] ring-1 ring-[var(--primary)]"
                                : "border-[var(--border)] hover:border-[var(--primary)]"
                            }`}
                    >
                        {isRecommended && (
                            <div className="absolute -top-3 left-4 px-2 py-0.5 bg-[var(--primary)] text-white text-xs font-medium rounded-full flex items-center gap-1">
                                <ShieldCheck className="w-3 h-3" aria-hidden="true" />
                                {recommendedLabel}
                            </div>
                        )}
                        <h3 className="text-lg font-semibold text-[var(--text)] mb-2 group-hover:text-[var(--primary)] transition-colors">
                            {service.title}
                        </h3>
                        <p className="text-[var(--muted)] text-sm leading-relaxed flex-1">
                            {service.shortDescription}
                        </p>
                        <span className="mt-4 text-[var(--link)] text-sm font-medium group-hover:text-[var(--link-hover)] transition-colors">
                            {locale === "de" ? "Mehr erfahren →" : "Learn more →"}
                        </span>
                    </Link>
                );
            })}
        </div>
    );
}
