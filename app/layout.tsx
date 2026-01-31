import "./globals.css";
import Header from "@/app/components/Header";
import Link from "next/link";
import { headers } from "next/headers";

export async function generateMetadata() {
  const h = await headers();
  const pathname = h.get("x-pathname") || "/";
  const locale = (h.get("x-locale") || "de") as "de" | "en";
  const base = "https://elkaza.at";
  const { getAlternates } = await import("@/lib/i18nPaths");
  const { dePath, enPath } = getAlternates(pathname);
  const canonical = `${base}${locale === "en" ? enPath : dePath}`;
  const languages: Record<string, string> = {
    "de-AT": `${base}${dePath}`,
    en: `${base}${enPath}`,
  };
  return {
    title:
      locale === "de"
        ? "Elkaza Consulting - Networking, Security & Automation"
        : "Elkaza Consulting - Networking, Security & Automation",
    description:
      locale === "de"
        ? "Stabile IT-Infrastruktur für wachsende Teams: Netzwerk, Sicherheit und Automatisierung aus einer Hand."
        : "Stable IT infrastructure for growing teams: networking, security, and automation from a single source.",
    icons: { icon: "/favicon.svg" },
    alternates: { canonical, languages },
    openGraph: {
      url: canonical,
      siteName: "Elkaza Consulting",
      locale: locale === "de" ? "de_AT" : "en",
      type: "website",
      images: [`${base}/og?path=${encodeURIComponent(pathname)}&lang=${locale}`],
    },
    twitter: { card: "summary_large_image" },
  } as const;
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const h = await headers();
  const locale = (h.get("x-locale") || "de") as "de" | "en";
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
            <p>© {new Date().getFullYear()} Elkaza Consulting | Inh. Dipl.-Ing. Mohamed Elkaza</p>
            <div className="flex items-center gap-6">
              <Link href="/impressum" className="hover:text-[var(--link)] transition-colors">Impressum</Link>
              <Link href="/datenschutz" className="hover:text-[var(--link)] transition-colors">Datenschutz</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
