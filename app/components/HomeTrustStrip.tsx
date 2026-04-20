import { siteContent, type Locale } from "@/lib/siteContent";
import { Check, Clock, Lock, Users } from "lucide-react";

const urgencyBadges = [
  {
    icon: Clock,
    label: "24h Response",
    className:
      "border-indigo-200 bg-indigo-50 text-indigo-950 dark:border-indigo-700/70 dark:bg-indigo-950 dark:text-indigo-100",
  },
  {
    icon: Lock,
    label: "No Lock-in",
    className:
      "border-emerald-200 bg-emerald-50 text-emerald-950 dark:border-emerald-700/70 dark:bg-emerald-950 dark:text-emerald-100",
  },
  {
    icon: Users,
    label: "1:1 Support",
    className:
      "border-sky-200 bg-sky-50 text-sky-950 dark:border-sky-700/70 dark:bg-sky-950 dark:text-sky-100",
  },
];

interface HomeTrustStripProps {
  locale: Locale;
}

export default function HomeTrustStrip({ locale }: HomeTrustStripProps) {
  return (
    <div className="trust-strip bg-[var(--bg)] border-b border-[var(--border)]">
      <div className="max-w-[1140px] mx-auto px-6 py-5">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 text-sm">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            {siteContent.trust[locale].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-[var(--text-secondary)] font-medium"
              >
                <Check className="w-4 h-4 text-[var(--primary)]" aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="hidden h-5 w-px bg-[var(--border)] lg:block" />

          <div className="flex flex-wrap justify-center gap-3">
            {urgencyBadges.map((badge) => (
              <div
                key={badge.label}
                className={`flex items-center gap-2 whitespace-nowrap rounded-md border px-3 py-1.5 text-sm font-semibold leading-none shadow-sm ${badge.className}`}
              >
                <badge.icon className="w-4 h-4" aria-hidden="true" />
                <span>{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
