import Link from "next/link";
import { siteContent, type Locale } from "@/lib/siteContent";

interface ServicesSectionProps {
  locale: Locale;
}

export default function ServicesSection({ locale }: ServicesSectionProps) {
  const content = siteContent.services[locale];
  const basePath = locale === "de" ? "/leistungen" : "/en/services";

  return (
    <section className="py-12 md:py-14 bg-[var(--surface)]">
      <div className="max-w-[1140px] mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-6">
          {content.overview.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {content.items.map((service) => (
            <Link
              key={service.slug}
              href={`${basePath}/${service.slug}`}
              className="group p-5 rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-sm)] hover:border-[var(--primary)] hover:shadow-[var(--shadow-glow)] hover:bg-[var(--elevated)] transition-all duration-200"
            >
              <h3 className="text-lg font-semibold text-[var(--text)] mb-2 group-hover:text-[var(--primary)] transition-colors">
                {service.title}
              </h3>
              <p className="text-[var(--muted)] text-sm leading-relaxed">
                {service.shortDescription}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
