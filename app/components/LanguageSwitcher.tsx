import Image from "next/image";
import Link from "next/link";

export default function LanguageSwitcher() {
  const className = "flex items-center space-x-1 hover:opacity-80 transition";

  return (
    <>
      <Link
        href="/en"
        data-language-switch
        className={`locale-de-only ${className}`}
        aria-label="Switch to English"
      >
        <Image src="/flags/gb.svg" alt="" width={22} height={22} aria-hidden="true" />
        <span className="text-xs text-[var(--muted)]">English</span>
      </Link>
      <Link
        href="/"
        data-language-switch
        className={`locale-en-only ${className}`}
        aria-label="Auf Deutsch wechseln"
      >
        <Image src="/flags/at.svg" alt="" width={22} height={22} aria-hidden="true" />
        <span className="text-xs text-[var(--muted)]">Deutsch</span>
      </Link>
    </>
  );
}
