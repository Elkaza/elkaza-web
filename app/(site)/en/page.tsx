import Link from "next/link";

export default function Page() {
  return (
    <main className="bg-white text-gray-900">
      {/* =======================
          HERO SECTION
      ======================= */}
      <section className="relative text-center py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-4 text-gray-800 leading-tight">
            Digital Transformation. <br /> IT Expertise. Shaping the Future.
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            I help organizations optimize complex IT systems and develop sustainable,
            scalable solutions for a digital future.
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-800 transition"
          >
            Get in touch
          </a>
        </div>
      </section>

      {/* =======================
          PROFILE SECTION
      ======================= */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Professional Profile</h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Business informatics expert with experience in IT consulting, enterprise architecture,
          software engineering, project management, and digital transformation.
          Focused on efficient, scalable solutions and customer-centered innovation
          in international projects.
        </p>
      </section>

      {/* =======================
          SERVICES SECTION
      ======================= */}
      <section id="services" className="max-w-6xl mx-auto px-6 py-20 bg-gray-50 rounded-2xl shadow-sm">
        <h2 className="text-3xl font-semibold mb-12 text-center">Services</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-xl border hover:shadow-md transition">
            <h3 className="font-semibold text-xl mb-2">IT Project Management</h3>
            <p>
              Certified <strong>IPMA Level D Project Manager</strong> experienced in structured planning,
              stakeholder coordination, and agile delivery. Responsible for successful IT and
              digitalization projects from initiation to implementation.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl border hover:shadow-md transition">
            <h3 className="font-semibold text-xl mb-2">Enterprise Architecture</h3>
            <p>
              Modeling and optimization of enterprise architectures using
              <strong> ArchiMate</strong>, <strong>ADOIT</strong>, and <strong>SparxSystems</strong> to
              ensure a sustainable alignment between business and IT.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl border hover:shadow-md transition">
            <h3 className="font-semibold text-xl mb-2">Software Development</h3>
            <p>
              Full-stack development using <strong>Java</strong>, <strong>Python</strong>, and
              <strong> TypeScript</strong> for scalable, secure, and efficient software solutions.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl border hover:shadow-md transition">
            <h3 className="font-semibold text-xl mb-2">IT Consulting</h3>
            <p>
              Consulting on <strong>IT strategy</strong>, <strong>process automation</strong>, and
              <strong> digital transformation</strong> to improve measurable business outcomes.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl border hover:shadow-md transition">
            <h3 className="font-semibold text-xl mb-2">Networking, Infrastructure & IoT Systems</h3>
            <p>
              Design and administration of <strong>Linux</strong> and <strong>Windows Server</strong> environments,
              network architecture, and virtualization. Experience with <strong>Cisco</strong>,
              <strong>MikroTik</strong>, and IoT system integration for scalable infrastructures.
            </p>
          </div>
        </div>
      </section>

      {/* =======================
          RESEARCH SECTION
      ======================= */}
      <section id="research" className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold mb-4">Research & Publications</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Research focus on digital transformation, IT governance, and enterprise architecture. <br />
          <Link href="/documents/thesis.pdf" className="text-blue-700 hover:underline">
            View Master's Thesis
          </Link>
        </p>
      </section>

      {/* =======================
          CONTACT SECTION
      ======================= */}
      <section id="contact" className="bg-blue-50 py-20 text-center">
        <h2 className="text-3xl font-semibold mb-6">Contact</h2>
        <p className="text-gray-700 mb-4">
          Get in touch for collaboration, consulting, or projects:
        </p>
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
