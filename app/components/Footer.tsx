import FooterLegalLinks from "@/app/components/FooterLegalLinks";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]">
      <div className="max-w-[1140px] mx-auto px-6 py-8 text-sm text-[var(--muted)] flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <p>© 2026 Elkaza Consulting</p>
        <FooterLegalLinks />
      </div>

      {/* Contact Info Row */}
      <div className="border-t border-[var(--border)] bg-[var(--bg)]">
        <div className="max-w-[1140px] mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-xs text-[var(--muted)]">
          <div>
            <span className="locale-de-only">Projekt in Vorbereitung</span>
            <span className="locale-en-only">Project in preparation</span>
          </div>
          <div className="mt-2 md:mt-0">
            <span className="locale-de-only">Wien, Österreich</span>
            <span className="locale-en-only">Vienna, Austria</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
