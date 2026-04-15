"use client";

import { useState } from "react";
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
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section className="py-12 md:py-14 bg-[var(--bg)]">
      <div className="max-w-[900px] mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-2 text-center">
          {locale === "de" ? "Häufig gestellte Fragen" : "Frequently Asked Questions"}
        </h2>
        <p className="text-center text-[var(--text-secondary)] mb-8">
          {locale === "de" 
            ? "Antworten auf Ihre wichtigsten Fragen" 
            : "Answers to your most important questions"}
        </p>

        <div className="space-y-3">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-[var(--border)] bg-[var(--surface)] overflow-hidden hover:border-[var(--primary)] transition-colors"
            >
              <button
                onClick={() => setExpanded(expanded === idx ? null : idx)}
                className="w-full px-5 py-4 flex items-center justify-between hover:bg-[var(--surface-muted)] transition-colors"
              >
                <span className="text-left font-semibold text-[var(--text)]">{item.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[var(--primary)] transition-transform duration-200 shrink-0 ml-4 ${
                    expanded === idx ? "rotate-180" : ""
                  }`}
                />
              </button>
              {expanded === idx && (
                <div className="px-5 pb-4 border-t border-[var(--border)] pt-4">
                  <p className="text-[var(--text-secondary)] leading-relaxed">{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
