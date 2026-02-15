import Link from "next/link";
import { siteContent, type Locale } from "@/lib/siteContent";
import { Check } from "lucide-react";

interface PackageCardsProps {
    locale: Locale;
}

export default function PackageCards({ locale }: PackageCardsProps) {
    const content = siteContent.packages[locale];
    const contactPath = locale === "de" ? "/kontakt" : "/en/contact";

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {content.items.map((pkg) => (
                <div
                    key={pkg.name}
                    className={`card-enhanced p-5 flex flex-col relative overflow-visible ${pkg.popular
                        ? "border-[var(--primary)] ring-2 ring-[var(--primary)]/20"
                        : ""
                        }`}
                >
                    {pkg.popular && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm font-semibold rounded-full shadow-lg z-10">
                            {locale === "de" ? "Am beliebtesten" : "Most Popular"}
                        </div>
                    )}

                    {pkg.best_for && (
                        <span className="block text-xs font-bold uppercase tracking-wider text-[var(--primary)] mb-1">
                            {pkg.best_for}
                        </span>
                    )}
                    <h3 className="text-xl font-bold text-[var(--text)]">{pkg.name}</h3>
                    <p className="text-sm text-[var(--muted)] mb-4">{pkg.subtitle}</p>
                    <div className="mb-4 flex items-baseline flex-wrap">
                        <span className="text-3xl font-bold text-[var(--text)]">{pkg.price}</span>
                        <span className="text-sm text-[var(--muted)]">&nbsp;{pkg.priceNote}</span>
                    </div>
                    <p className="text-[var(--text-secondary)] text-sm mb-2">{pkg.description}</p>
                    <p className="text-xs text-[var(--muted)] mb-4">{pkg.duration}</p>
                    <ul className="space-y-3 mb-6 flex-1">
                        {pkg.features.map((feature, i) => {
                            if (feature === "---") {
                                // Valid list item as separator
                                return <li key={i} className="border-t border-[var(--border)] my-2" aria-hidden="true" role="separator" />;
                            }
                            // Simple check for "Not included" or "Nicht enthalten"
                            const isExclusion = feature.includes("Nicht enthalten") || feature.includes("Not included");
                            return (
                                <li key={i} className={`flex items-start gap-3 text-sm ${isExclusion ? "text-[var(--muted)] italic" : "text-[var(--text-secondary)]"}`}>
                                    {isExclusion ? (
                                        <div className="w-5 h-5 flex items-center justify-center shrink-0 text-[var(--muted)] font-bold">x</div>
                                    ) : (
                                        <Check className="w-5 h-5 text-[var(--primary)] mt-0.5 shrink-0" />
                                    )}
                                    <span>{feature}</span>
                                </li>
                            );
                        })}
                    </ul>
                    <Link
                        href={contactPath}
                        className={`btn-enhanced block text-center py-3 px-4 rounded-lg font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--border-focus)] active:scale-[0.98] ${pkg.popular
                            ? "bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary-hover)]"
                            : "border border-[var(--border)] text-[var(--text)] hover:border-[var(--primary)] hover:text-[var(--primary)] hover:bg-[var(--primary-light)]"
                            }`}
                    >
                        {pkg.cta}
                    </Link>
                </div>
            ))}
        </div>
    );
}
