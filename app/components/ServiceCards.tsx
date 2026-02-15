"use client";
import Link from "next/link";
import type { Locale } from "@/lib/siteContent";
import { ShieldCheck, Shield, Network, Cloud, Workflow, LifeBuoy, FileCheck, Laptop, Brain, Scale } from "lucide-react";

type ServiceItem = {
    slug: string;
    title: string;
    shortDescription?: string;
    recommended?: boolean;
    [key: string]: unknown;
};

interface ServiceCardsProps {
    locale: Locale;
    items: ServiceItem[];
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

export default function ServiceCards({ locale, items, basePath, category = "all" }: ServiceCardsProps) {
    const path = basePath || (locale === "de" ? "/leistungen" : "/en/services");

    const filteredItems = category === "all"
        ? items
        : items.filter((service) =>
            serviceCategories[category]?.includes(service.slug)
        );

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

    // Gradient mapping
    const gradientMap: Record<string, string> = {
        "security-baseline": "bg-gradient-to-br from-indigo-500 to-purple-600",
        "zero-trust": "bg-gradient-to-br from-purple-500 to-pink-600",
        "ransomware-resilience": "bg-gradient-to-br from-red-500 to-orange-600",
        "networking": "bg-gradient-to-br from-blue-500 to-cyan-600",
        "cloud-saas-security": "bg-gradient-to-br from-cyan-500 to-teal-600",
        "automation": "bg-gradient-to-br from-green-500 to-emerald-600",
        "managed-ops": "bg-gradient-to-br from-orange-500 to-amber-600",
        "endpoint-security": "bg-gradient-to-br from-violet-500 to-indigo-600",
        "ai-adoption": "bg-gradient-to-br from-pink-500 to-rose-600",
        "nis2-compliance": "bg-gradient-to-br from-slate-500 to-gray-600",
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredItems.map((service) => {
                const isRecommended = service.slug === recommendedSlug || service.recommended;
                const Icon = iconMap[service.slug] || Shield;
                const gradient = gradientMap[service.slug] || "bg-gradient-to-br from-indigo-500 to-purple-600";

                return (
                    <Link
                        key={service.slug}
                        href={`${path}/${service.slug}`}
                        className={`card-enhanced group p-5 flex flex-col relative ${isRecommended
                            ? "border-[var(--primary)] ring-1 ring-[var(--primary)]"
                            : ""
                            }`}
                    >
                        {isRecommended && (
                            <div className="absolute -top-3 left-4 px-2 py-0.5 bg-[var(--primary)] text-white text-xs font-medium rounded-full flex items-center gap-1">
                                <ShieldCheck className="w-3 h-3" aria-hidden="true" />
                                {recommendedLabel}
                            </div>
                        )}

                        {/* Gradient Icon */}
                        <div className={`w-12 h-12 rounded-lg ${gradient} p-2.5 mb-4 shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                            <Icon className="w-full h-full text-white" aria-hidden="true" />
                        </div>

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
