import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export function generateMetadata() {
  const base = "https://elkaza.at";
  const canonical = base;
  return {
    metadataBase: new URL(base),
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
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--text)]">
        <a href="#content" className="skip-link">Skip to content</a>
        <Header />

        <main id="content" className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
