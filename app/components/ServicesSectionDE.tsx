import Link from "next/link";
import { siteContent } from "@/lib/siteContent";
import { Network, Shield, Settings } from "lucide-react";

const icons = {
  networking: Network,
  "security-baseline": Shield,
  "managed-ops": Settings,
};

export default function ServicesSectionDE() {
  const content = siteContent.services.de;

  return (
    <section className="py-12 md:py-14 bg-[var(--surface)]">
      <div className="max-w-[1140px] mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-2">
          {content.overview.title}
        </h2>
        <p className="text-[var(--text-secondary)] text-lg mb-6">
          {content.overview.subtitle}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {content.items.slice(0, 3).map((service) => {
            const Icon = icons[service.slug as keyof typeof icons] || Settings;
            return (
              <Link
                key={service.slug}
                href={`/leistungen/${service.slug}`}
                className="group p-5 rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-sm)] hover:border-[var(--primary)] hover:shadow-[var(--shadow-glow)] hover:bg-[var(--elevated)] transition-all duration-200"
              >
                <div className="inline-block bg-[var(--elevated)] p-3 rounded-lg mb-4 group-hover:bg-[var(--primary-light)] transition-colors">
                  <Icon className="w-6 h-6 text-[var(--muted)] group-hover:text-[var(--primary)] transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--text)] mb-2 group-hover:text-[var(--primary)] transition-colors">
                  {service.title}
                </h3>
                <p className="text-[var(--muted)] text-sm leading-relaxed">
                  {service.shortDescription}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
