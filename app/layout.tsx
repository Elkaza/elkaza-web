import "./globals.css";
import Header from "@/app/components/Header";
import Link from "next/link";

export function generateMetadata() {
  const base = "https://elkaza.at";
  const canonical = base;
  return {
    title: "Elkaza Consulting - Networking, Security & Automation",
    description:
      "Stabile IT-Infrastruktur für wachsende Teams: Netzwerk, Sicherheit und Automatisierung aus einer Hand.",
    icons: { icon: "/favicon.svg" },
    alternates: { canonical, languages: { "de-AT": `${base}/`, en: `${base}/en` } },
    openGraph: {
      url: canonical,
      siteName: "Elkaza Consulting",
      locale: "de_AT",
      type: "website",
      images: [`${base}/opengraph-image.svg`],
    },
    twitter: { card: "summary_large_image" },
  } as const;
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = "de" as "de" | "en";
  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme) {
                    document.documentElement.setAttribute('data-theme', theme);
                  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--text)]">
        <Header />

        <main className="flex-1">{children}</main>

        <footer className="border-t border-[var(--border)] bg-[var(--surface)]">
          <div className="max-w-[1140px] mx-auto px-6 py-8 text-sm text-[var(--muted)] flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
            <p>© 2026 Elkaza Consulting</p>
            <div className="flex items-center gap-6">
              <Link href="/impressum" className="hover:text-[var(--link)] transition-colors">Impressum</Link>
              <Link href="/datenschutz" className="hover:text-[var(--link)] transition-colors">Datenschutz</Link>
              <span className="hidden md:inline">·</span>
              <Link href="/en/imprint" className="hover:text-[var(--link)] transition-colors">Imprint</Link>
              <Link href="/en/privacy" className="hover:text-[var(--link)] transition-colors">Privacy</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
