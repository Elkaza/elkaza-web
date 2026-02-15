import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import BackToTop from "@/app/components/BackToTop";
import ScrollProgress from "@/app/components/ScrollProgress";

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
      images: [{ url: `${base}/opengraph-image.svg`, width: 1200, height: 630, alt: "Elkaza Consulting" }],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://elkaza.at/#organization",
                  name: "Elkaza Consulting",
                  url: "https://elkaza.at",
                  logo: "https://elkaza.at/logo.png",
                  description: "IT-Infrastruktur, Sicherheit und Automatisierung für KMU in Wien und Österreich.",
                  email: "office@elkaza.at",
                  areaServed: { "@type": "Country", name: "Austria" },
                  sameAs: [],
                },
                {
                  "@type": "LocalBusiness",
                  "@id": "https://elkaza.at/#localbusiness",
                  name: "Elkaza Consulting",
                  url: "https://elkaza.at",
                  email: "office@elkaza.at",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Vienna",
                    addressCountry: "AT",
                  },
                  priceRange: "€€",
                  openingHours: "Mo-Fr 09:00-18:00",
                },
                {
                  "@type": "WebSite",
                  "@id": "https://elkaza.at/#website",
                  url: "https://elkaza.at",
                  name: "Elkaza Consulting",
                  publisher: { "@id": "https://elkaza.at/#organization" },
                  inLanguage: ["de-AT", "en"],
                },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--text)]">
        <a href="#content" className="skip-link">Skip to content</a>
        <Header />

        <main id="content" className="flex-1">{children}</main>

        <Footer />
        <BackToTop />
        <ScrollProgress />
      </body>
    </html>
  );
}
