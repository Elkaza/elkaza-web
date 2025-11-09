import Link from "next/link";

export const metadata = {
  title: "Insights – Elkaza Consulting",
  description: "Strategy, AI and digital products — explained pragmatically.",
};

const mockPosts = [
  { slug: "ai-strategy-for-smes", title: "AI Strategy for SMEs: start pragmatically", date: "2025-11-01", excerpt: "How to create impact with small steps." },
];

export default function InsightsEn() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">Insights</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mockPosts.map((p) => (
          <Link key={p.slug} href={`/en/insights/${p.slug}`} className="block rounded-xl border bg-white p-6 hover:border-blue-500 transition">
            <div className="text-xs text-gray-500 mb-1">{new Date(p.date).toLocaleDateString("en-GB")}</div>
            <h2 className="text-xl font-semibold mb-1">{p.title}</h2>
            <p className="text-gray-700">{p.excerpt}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}

