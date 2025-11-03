// ======================================
// Elkaza Consulting - German Main Page
// ======================================

import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <main className="bg-white text-gray-900">
      {/* =======================
          HERO SECTION
          (Landing banner with gradient + CTA)
      ======================= */}
      <section className="relative text-center py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4 text-gray-800 leading-tight">
            Digitale Transformation. <br /> IT-Kompetenz. Zukunft gestalten.
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            Ich unterstütze Unternehmen dabei, komplexe IT-Systeme zu optimieren
            und nachhaltige, skalierbare Lösungen für die digitale Zukunft zu entwickeln.
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-800 transition"
          >
            Kontakt aufnehmen
          </a>
        </div>

        {/* Optional background image (like HBSN) */}
        <div className="absolute inset-0 -z-10 opacity-10 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center"></div>
      </section>

      {/* =======================
          NAVIGATION BAR (like HBSN)
      ======================= */}
      <nav className="border-b bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* LOGO */}
          <Link href="/de" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="Elkaza Consulting" width={40} height={40} />
            <span className="text-2xl font-bold text-gray-800">Elkaza Consulting</span>
          </Link>

          {/* NAV LINKS */}
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <Link href="#about" className="hover:text-blue-700 transition">
              Über mich
            </Link>
            <Link href="#services" className="hover:text-blue-700 transition">
              Leistungen
            </Link>
            <Link href="#research" className="hover:text-blue-700 transition">
              Forschung
            </Link>
            <Link href="#contact" className="hover:text-blue-700 transition">
              Kontakt
            </Link>
          </div>

          {/* SEARCH + LANGUAGE SWITCHER */}
          <div className="flex items-center space-x-4">
            {/* Search button (placeholder for future modal) */}
            <button
              aria-label="Suche"
              className="p-2 rounded-full hover:bg-gray-100 transition"
            >
              🔍
            </button>

            {/* Languages side by side */}
            <div className="flex items-center space-x-2">
              <Link href="/de" className="font-semibold text-blue-700">
                DE
              </Link>
              <span className="text-gray-400">|</span>
              <Link href="/en" className="hover:text-blue-700 transition">
                EN
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* =======================
          PROFESSIONAL PROFILE
      ======================= */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Professionelles Profil</h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Wirtschaftsinformatiker mit Erfahrung in IT-Consulting, Unternehmensarchitektur,
          Softwareentwicklung, Projektmanagement und digitaler Transformation.
          Fokus auf effiziente, skalierbare Lösungen und kundenorientierte Innovation
          in internationalen Projekten.
        </p>
      </section>

      {/* =======================
          SERVICES SECTION
      ======================= */}
      <section id="services" className="max-w-6xl mx-auto px-6 py-20 bg-gray-50 rounded-2xl shadow-sm">
        <h2 className="text-3xl font-semibold mb-12 text-center">Leistungen</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* IT Project Management */}
          <div className="p-6 bg-white rounded-xl border hover:shadow-md transition">
            <h3 className="font-semibold text-xl mb-2">IT-Projektmanagement</h3>
            <p>
              Zertifizierter <strong>IPMA Level D Projektmanager</strong> mit Erfahrung in
              strukturierter Planung, Stakeholder-Koordination und agiler Umsetzung.
              Verantwortlich für erfolgreiche IT- und Digitalisierungsprojekte von der
              Initiierung bis zur Implementierung.
            </p>
          </div>

          {/* Enterprise Architecture */}
          <div className="p-6 bg-white rounded-xl border hover:shadow-md transition">
            <h3 className="font-semibold text-xl mb-2">Enterprise Architecture</h3>
            <p>
              Modellierung und Optimierung von Unternehmensarchitekturen mit
              <strong> ArchiMate</strong>, <strong>ADOIT</strong> und <strong>SparxSystems</strong>,
              um eine nachhaltige Ausrichtung zwischen Business und IT zu gewährleisten.
            </p>
          </div>

          {/* Software Development */}
          <div className="p-6 bg-white rounded-xl border hover:shadow-md transition">
            <h3 className="font-semibold text-xl mb-2">Softwareentwicklung</h3>
            <p>
              Full-Stack-Entwicklung mit <strong>Java</strong>, <strong>Python</strong> und
              <strong> TypeScript</strong> für skalierbare, sichere und effiziente Softwarelösungen.
            </p>
          </div>

          {/* IT Consulting */}
          <div className="p-6 bg-white rounded-xl border hover:shadow-md transition">
            <h3 className="font-semibold text-xl mb-2">IT-Consulting</h3>
            <p>
              Beratung bei <strong>IT-Strategie</strong>, <strong>Prozessautomatisierung</strong> und
              <strong> digitaler Transformation</strong> zur Steigerung messbarer Unternehmensergebnisse.
            </p>
          </div>

          {/* Networking & IoT */}
          <div className="p-6 bg-white rounded-xl border hover:shadow-md transition">
            <h3 className="font-semibold text-xl mb-2">
              Netzwerk-, Infrastruktur- & IoT-Systeme
            </h3>
            <p>
              Design und Administration von <strong>Linux</strong>- und <strong>Windows Server</strong>-Umgebungen,
              Netzwerkarchitektur und Virtualisierung. Erfahrung mit <strong>Cisco</strong>,
              <strong>MikroTik</strong> und IoT-Systemintegration für skalierbare Infrastrukturen.
            </p>
          </div>
        </div>
      </section>

      {/* =======================
          FUTURE SECTIONS (optional)
          Research / Contact / Footer
      ======================= */}
      <section id="research" className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold mb-4">Forschung & Publikationen</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Forschungsschwerpunkte in digitaler Transformation, IT-Governance und
          Unternehmensarchitektur. <br />
          <Link href="/documents/thesis.pdf" className="text-blue-700 hover:underline">
            Masterarbeit ansehen
          </Link>
        </p>
      </section>

      <section id="contact" className="bg-blue-50 py-20 text-center">
        <h2 className="text-3xl font-semibold mb-6">Kontakt</h2>
        <p className="text-gray-700 mb-4">Kontaktieren Sie mich für Projekte, Beratung oder Kooperationen:</p>
        <p>
          <a
            href="mailto:contact@elkaza.at"
            className="text-blue-700 font-medium hover:underline"
          >
            contact@elkaza.at
          </a>
        </p>
      </section>
    </main>
  );
}
