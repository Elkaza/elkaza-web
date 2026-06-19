import Link from "next/link";

export default function FooterLegalLinks() {
  return (
    <nav className="flex items-center gap-6" aria-label="Legal">
      <span className="locale-de-only inline-flex items-center gap-6">
        <Link href="/impressum" className="hover:text-[var(--link)] transition-colors">
          Impressum
        </Link>
        <span className="hidden md:inline">/</span>
        <Link href="/datenschutz" className="hover:text-[var(--link)] transition-colors">
          Datenschutz
        </Link>
      </span>
      <span className="locale-en-only inline-flex items-center gap-6">
        <Link href="/en/imprint" className="hover:text-[var(--link)] transition-colors">
          Imprint
        </Link>
        <span className="hidden md:inline">/</span>
        <Link href="/en/privacy" className="hover:text-[var(--link)] transition-colors">
          Privacy
        </Link>
      </span>
    </nav>
  );
}
