import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface RelatedService {
    slug: string;
    title: string;
    shortDescription: string;
}

interface RelatedServicesProps {
    locale: "de" | "en";
    services: RelatedService[];
}

export default function RelatedServices({ locale, services }: RelatedServicesProps) {
    const basePath = locale === "de" ? "/leistungen" : "/en/services";
    const title = locale === "de" ? "Verwandte Leistungen" : "Related Services";
    const linkText = locale === "de" ? "Mehr erfahren" : "Learn more";

    return (
        <div>
            <h2 className="text-2xl font-semibold text-[var(--text)] mb-6 text-center">
                {title}
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
                {services.slice(0, 3).map((service) => (
                    <Link
                        key={service.slug}
                        href={`${basePath}/${service.slug}`}
                        className="group p-5 rounded-xl border border-[var(--border)] bg-[var(--surface)] hover:border-[var(--primary)] hover:bg-[var(--elevated)] transition-all duration-200"
                    >
                        <h3 className="text-lg font-semibold text-[var(--text)] mb-2 group-hover:text-[var(--primary)] transition-colors">
                            {service.title}
                        </h3>
                        <p className="text-sm text-[var(--muted)] mb-3 line-clamp-2">
                            {service.shortDescription}
                        </p>
                        <span className="inline-flex items-center gap-1 text-sm text-[var(--link)] group-hover:text-[var(--link-hover)] transition-colors">
                            {linkText}
                            <ArrowRight className="w-4 h-4" aria-hidden="true" />
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    );
}
