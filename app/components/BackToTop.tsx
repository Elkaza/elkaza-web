import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  return (
    <button
      type="button"
      data-back-to-top
      hidden
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-[var(--primary)] text-[var(--primary-foreground)] shadow-lg hover:bg-[var(--primary-hover)] active:scale-95 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
      aria-label="Nach oben scrollen"
      title="Nach oben"
    >
      <ArrowUp className="w-5 h-5" aria-hidden="true" />
    </button>
  );
}
