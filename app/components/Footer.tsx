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
          <div className="flex gap-4">
            <a href="mailto:office@elkaza.at" className="hover:text-[var(--link)] transition-colors">office@elkaza.at</a>
          </div>
          <div className="mt-2 md:mt-0">
            <span>Vienna, Austria</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
