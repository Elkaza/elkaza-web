interface Props { params: { slug: string } }

const mockPosts: Record<string, { title: string; date: string; content: string; author?: string }> = {
  "ki-strategie-fuer-kmus": {
    title: "KI-Strategie für KMUs: pragmatisch starten",
    date: "2025-11-01",
    content: "Beginnen Sie mit klaren Use-Cases und messbaren Zielen...",
    author: "Elkaza Consulting",
  },
};

export default function InsightDetail({ params }: Props) {
  const post = mockPosts[params.slug] || { title: "Beitrag", date: new Date().toISOString(), content: "Bald verfügbar." };
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
      <div className="text-gray-500 mb-8">{new Date(post.date).toLocaleDateString("de-AT")}{post.author ? ` · ${post.author}` : ""}</div>
      <article className="prose prose-blue max-w-none">
        <p>{post.content}</p>
      </article>
    </main>
  );
}

