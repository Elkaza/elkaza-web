import Link from "next/link";

export const metadata = {
  title: "Services – Elkaza Consulting",
  description: "AI automation, digital products & platforms, digital strategy & advisory.",
};

export default function ServicesEn() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <section className="mb-10">
        <h1 className="text-4xl font-bold mb-3">Solutions for Your Growth</h1>
        <p className="text-gray-700 max-w-3xl">Three pillars, one goal: business impact through technology.</p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link href="/en/services/ai-automation" className="p-6 rounded-xl border hover:border-blue-500 transition">
          <h2 className="text-xl font-semibold mb-2">AI & Intelligent Automation</h2>
          <p className="text-gray-700">Process automation, Gemini integration, data analysis.</p>
        </Link>
        <Link href="/en/services/digital-products" className="p-6 rounded-xl border hover:border-blue-500 transition">
          <h2 className="text-xl font-semibold mb-2">Digital Products & Platforms</h2>
          <p className="text-gray-700">Web platforms, UI/UX design, performance optimization.</p>
        </Link>
        <Link href="/en/services/digital-strategy" className="p-6 rounded-xl border hover:border-blue-500 transition">
          <h2 className="text-xl font-semibold mb-2">Digital Strategy & Advisory</h2>
          <p className="text-gray-700">Audit, workshops, roadmap — measurable and pragmatic.</p>
        </Link>
      </div>
    </main>
  );
}

