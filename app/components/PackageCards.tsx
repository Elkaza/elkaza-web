import Link from "next/link";
import { siteContent, type Locale } from "@/lib/siteContent";
import { Check, Clock, MinusCircle } from "lucide-react";

interface PackageCardsProps {
    locale: Locale;
}

const cardGuidance: Record<Locale, Record<string, string>> = {
    de: {
        Starter: "Der richtige Einstieg, wenn Sie zuerst Klarheit und Prioritäten brauchen.",
        Growth: "Für Unternehmen, die konkrete Verbesserungen geplant und umgesetzt haben wollen.",
        Managed: "Für laufende Betreuung mit Monitoring, Wartung und planbarer Reaktion.",
    },
    en: {
        Starter: "The right starting point when you need clarity and priorities first.",
        Growth: "For companies that want concrete improvements planned and implemented.",
        Managed: "For ongoing support with monitoring, maintenance, and predictable response.",
    },
};

export default function PackageCards({ locale }: PackageCardsProps) {
    const content = siteContent.packages[locale];
    const contactPath = locale === "de" ? "/kontakt" : "/en/contact";

    return (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {content.items.map((pkg) => (
                <div
                    key={pkg.name}
                    className={`card-enhanced relative flex min-w-0 flex-col overflow-visible rounded-xl p-5 sm:p-6 ${pkg.popular
                        ? "border-[var(--primary)] ring-2 ring-[var(--primary)]/20 shadow-[var(--shadow-md)]"
                        : "border-[var(--border)]"
                        }`}
                >
                    {pkg.popular && (
                        <div className="absolute -top-3 left-5 z-10 rounded-full bg-[var(--primary)] px-3 py-1 text-xs font-semibold text-[var(--primary-foreground)] shadow-[var(--shadow-sm)]">
                            {locale === "de" ? "Am beliebtesten" : "Most Popular"}
                        </div>
                    )}

                    {pkg.best_for && (
                        <span className="mb-2 inline-flex w-fit rounded-full border border-[var(--border)] bg-[var(--bg)] px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--text-secondary)]">
                            {pkg.best_for}
                        </span>
                    )}
                    <h3 className="text-2xl font-bold tracking-tight text-[var(--text)]">{pkg.name}</h3>
                    <p className="mt-1 text-sm font-medium text-[var(--text-secondary)]">{pkg.subtitle}</p>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                        {cardGuidance[locale][pkg.name] ?? pkg.description}
                    </p>

                    <div className="my-5 rounded-xl border border-[var(--border)] bg-[var(--bg)] p-4">
                        <div className="flex flex-wrap items-end gap-x-2 gap-y-1">
                            <span className="text-3xl font-bold tracking-tight text-[var(--text)]">{pkg.price}</span>
                            <span className="pb-1 text-sm font-medium text-[var(--muted)]">{pkg.priceNote}</span>
                        </div>
                        <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-[var(--surface)] px-3 py-1 text-xs font-medium text-[var(--text-secondary)]">
                            <Clock className="h-3.5 w-3.5 text-[var(--primary)]" aria-hidden="true" />
                            {pkg.duration}
                        </div>
                    </div>

                    <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">
                        {locale === "de" ? "Enthalten" : "Included"}
                    </p>
                    <ul className="mb-6 flex-1 space-y-3">
                        {pkg.features.map((feature, i) => {
                            if (feature === "---") {
                                return <li key={i} className="border-t border-[var(--border)] pt-2" aria-hidden="true" role="separator" />;
                            }
                            const isExclusion = feature.includes("Nicht enthalten") || feature.includes("Not included");
                            return (
                                <li
                                    key={i}
                                    className={`flex items-start gap-3 text-sm leading-relaxed ${isExclusion
                                        ? "rounded-lg bg-[var(--bg)] px-3 py-2 text-[var(--muted)]"
                                        : "text-[var(--text-secondary)]"
                                        }`}
                                >
                                    {isExclusion ? (
                                        <MinusCircle className="mt-0.5 h-4 w-4 shrink-0 text-[var(--muted)]" aria-hidden="true" />
                                    ) : (
                                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--primary)]" aria-hidden="true" />
                                    )}
                                    <span>{feature}</span>
                                </li>
                            );
                        })}
                    </ul>
                    <Link
                        href={contactPath}
                        className={`btn-enhanced block rounded-lg px-4 py-3 text-center font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--border-focus)] active:scale-[0.98] ${pkg.popular
                            ? "bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary-hover)]"
                            : "border border-[var(--border)] text-[var(--text)] hover:border-[var(--primary)] hover:bg-[var(--primary-light)] hover:text-[var(--primary)]"
                            }`}
                    >
                        {pkg.cta}
                    </Link>
                </div>
            ))}
        </div>
    );
}
