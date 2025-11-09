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
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
      <div className="text-gray-500 mb-8">{new Date(post.date).toLocaleDateString("en-GB")}{post.author ? ` · ${post.author}` : ""}</div>
      <article className="prose prose-blue max-w-none">
        <p>{post.content}</p>
      </article>
    </main>
  );
}

