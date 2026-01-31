interface Props { params: { slug: string } }

const mockPosts: Record<string, { title: string; date: string; content: string; author?: string }> = {
  "ai-strategy-for-smes": {
    title: "AI Strategy for SMEs: start pragmatically",
    date: "2025-11-01",
    content: "Start with clear use cases and measurable goals...",
    author: "Elkaza Consulting",
  },
};

export default function InsightDetailEn({ params }: Props) {
  const post = mockPosts[params.slug] || { title: "Post", date: new Date().toISOString(), content: "Coming soon." };
  return (
    <main className="min-h-screen bg-[var(--bg)]">
      <section className="py-10 md:py-14 hero-gradient">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-[var(--text)] mb-2">{post.title}</h1>
          <div className="text-[var(--muted)]">{new Date(post.date).toLocaleDateString("en-GB")}{post.author ? ` · ${post.author}` : ""}</div>
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
