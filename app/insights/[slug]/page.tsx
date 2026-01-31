const mockPosts: Record<string, { title: string; date: string; content: string; author?: string }> = {
  "ki-strategie-fuer-kmus": {
    title: "KI-Strategie für KMUs: pragmatisch starten",
    date: "2025-11-01",
    content: "Beginnen Sie mit klaren Use-Cases und messbaren Zielen...",
    author: "Elkaza Consulting",
  },
};

export default async function InsightDetail(props: { params: Promise<{ slug: string }> }) {
  const resolved = await props.params;
  const slug = resolved.slug;
  const post = mockPosts[slug] || { title: "Beitrag", date: new Date().toISOString(), content: "Bald verfügbar." };
  return (
    <main className="min-h-screen bg-[var(--bg)]">
      <section className="py-10 md:py-14 hero-gradient">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-[var(--text)] mb-2">{post.title}</h1>
          <div className="text-[var(--muted)]">{new Date(post.date).toLocaleDateString("de-AT")}{post.author ? ` · ${post.author}` : ""}</div>
        </div>
      </section>
      <section className="py-10 md:py-14 bg-[var(--surface)]">
        <article className="max-w-3xl mx-auto px-6 text-[var(--text-secondary)] leading-relaxed">
          <p>{post.content}</p>
        </article>
      </section>
    </main>
  );
}
