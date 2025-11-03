import "../globals.css";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Elkaza Consulting – IT Consulting & Digital Transformation",
  description: "Professional IT consulting, enterprise architecture, and software engineering services in Austria.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body className="min-h-screen flex flex-col bg-white text-gray-900">
        {/* =====================================
            HEADER / NAVIGATION BAR
        ===================================== */}
        <header className="border-b bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
            {/* === Left: Logo === */}
            <Link href="/de" className="flex items-center space-x-2">
              <Image src="/logo.png" alt="Elkaza Consulting" width={40} height={40} />
              <span className="text-2xl font-bold text-gray-800">
                <span className="text-blue-700">Elkaza</span> Consulting
              </span>
            </Link>

            {/* === Center: Navigation Links === */}
            <nav className="hidden md:flex space-x-8 text-sm font-medium">
              <Link href="#services" className="hover:text-blue-700 transition">
                Leistungen
              </Link>
              <Link href="#about" className="hover:text-blue-700 transition">
                Über mich
              </Link>
              <Link href="#research" className="hover:text-blue-700 transition">
                Forschung
              </Link>
              <Link href="#contact" className="hover:text-blue-700 transition">
                Kontakt
              </Link>
            </nav>

            {/* === Right: Search + Languages === */}
            <div className="flex items-center space-x-4">
              <button
                aria-label="Suche"
                className="p-2 rounded-full hover:bg-gray-100 transition"
              >
                🔍
              </button>

              <div className="flex items-center space-x-2">
                <Link href="/de" className="font-semibold text-blue-700">
                  <Image src="/flags/at.svg" alt="Deutsch" width={20} height={20} className="inline mr-1" />
                  DE
                </Link>
                <span className="text-gray-400">|</span>
                <Link href="/en" className="hover:text-blue-700 transition">
                  <Image src="/flags/gb.svg" alt="English" width={20} height={20} className="inline mr-1" />
                  EN
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* === Main page content === */}
        <main className="flex-1">{children}</main>

        {/* === Footer === */}
        <footer className="border-t bg-gray-50 mt-12 py-6 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Elkaza Consulting – Wien, Österreich
        </footer>
      </body>
    </html>
  );
}
