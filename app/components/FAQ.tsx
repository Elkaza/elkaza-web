import { ChevronDown } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQProps {
  items: FAQItem[];
  locale: string;
}

export default function FAQ({ items, locale }: FAQProps) {
  return (
    <section className="bg-[var(--bg)] py-16 md:py-24">
      <div className="max-w-[900px] mx-auto px-6">
        <h2 className="mb-2 text-3xl font-bold tracking-tight text-[var(--text)]">
          {locale === "de" ? "Häufig gestellte Fragen" : "Frequently Asked Questions"}
        </h2>
        <div className="mt-8 border-t border-[var(--border)]">
          {items.map((item, idx) => (
            <details
              key={item.q}
              className="group border-b border-[var(--border)]"
              open={idx === 0}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between py-5 marker:hidden">
                <span className="text-left font-semibold text-[var(--text)]">{item.q}</span>
                <ChevronDown
                  className="w-5 h-5 text-[var(--primary)] transition-transform duration-200 shrink-0 ml-4 group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <div className="max-w-[70ch] pb-6 pr-10">
                <p className="leading-relaxed text-[var(--text-secondary)]">{item.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
