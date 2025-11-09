import "./globals.css";
import Header from "@/app/components/Header";
import Link from "next/link";

export const metadata = {
  title: "Elkaza Consulting – Partner für digitale Transformation",
  description:
    "Wir verbinden KI, moderne Plattformen und strategisches Design, um Ihr Unternehmen zukunftsfähig zu machen.",
  icons: { icon: "/logo.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="min-h-screen flex flex-col bg-white text-gray-900">
        <Header />

        <main className="flex-1">{children}</main>

        <footer className="border-t bg-gray-50 mt-16">
          <div className="max-w-7xl mx-auto px-6 py-8 text-sm text-gray-600 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} Elkaza Consulting</p>
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
