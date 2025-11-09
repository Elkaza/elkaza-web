import Link from "next/link";

export const metadata = {
  title: "Elkaza Consulting – Digital Transformation Partner",
  description: "We combine AI, modern platforms, and strategic design to future‑proof your business.",
};

export default function HomeEn() {
  return (
    <main>
      <section className="relative text-center py-24 md:py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 leading-tight">
            Partner for Your Digital Transformation.
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            We combine AI, modern platforms and strategic design to future‑proof your business.
          </p>
          <Link href="/en/contact" className="inline-block bg-blue-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-800 transition">
            Book an analysis
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-6">Remove blockers, unlock growth</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-700">
          <div className="p-6 rounded-xl border bg-white">Legacy systems blocking growth?</div>
          <div className="p-6 rounded-xl border bg-white">Manual processes wasting time?</div>
          <div className="p-6 rounded-xl border bg-white">Lack of strategy slowing initiatives?</div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-8">Service pillars</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/en/services/ai-automation" className="p-6 rounded-xl border hover:border-blue-500 transition">
              <h3 className="text-xl font-semibold mb-2">AI & Intelligent Automation</h3>
              <p className="text-gray-700">Accelerate processes, ensure quality, free teams.</p>
            </Link>
            <Link href="/en/services/digital-products" className="p-6 rounded-xl border hover:border-blue-500 transition">
              <h3 className="text-xl font-semibold mb-2">Digital Products & Platforms</h3>
              <p className="text-gray-700">Modern web platforms with Next.js, scalable and fast.</p>
            </Link>
            <Link href="/en/services/digital-strategy" className="p-6 rounded-xl border hover:border-blue-500 transition">
              <h3 className="text-xl font-semibold mb-2">Digital Strategy & Advisory</h3>
              <p className="text-gray-700">From audit and workshop to a pragmatic roadmap.</p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

