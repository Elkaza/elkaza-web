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
        ? "Elkaza Consulting – Partner für digitale Transformation"
        : "Elkaza Consulting – Digital Transformation Partner",
    description:
      locale === "de"
        ? "Wir verbinden KI, moderne Plattformen und strategisches Design, um Ihr Unternehmen zukunftsfähig zu machen."
        : "We combine AI, modern platforms, and strategic design to future‑proof your business.",
    icons: { icon: "/logo.png" },
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
    <html lang={locale}>
      <body className="min-h-screen flex flex-col bg-white text-gray-900">
        <Header />

        <main className="flex-1">{children}</main>

        <footer className="border-t bg-gray-50 mt-16">
          <div className="max-w-7xl mx-auto px-6 py-8 text-sm text-gray-600 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} Elkaza Consulting | Inh. Dipl.-Ing. Mohamed Elkaza</p>
            <div className="flex items-center gap-4">
              <Link href="/impressum" className="hover:text-blue-700">Impressum</Link>
              <Link href="/datenschutz" className="hover:text-blue-700">Datenschutz</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

