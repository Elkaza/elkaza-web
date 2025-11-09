interface Props { params: { slug: string } }

const mockDb: Record<string, { title: string; client?: string; challenge: string; solution: string; result: string; tech: string[] }> = {
  "sample-project": {
    title: "Automation saves 50 hours/month",
    client: "SME (Manufacturing)",
    challenge: "Manual, error‑prone data prep slowed teams.",
    solution: "AI‑assisted workflow automation with clear approvals.",
    result: "+50 hrs/month saved, improved data quality.",
    tech: ["Next.js", "TypeScript", "Gemini"],
  },
};

export default function CaseStudyDetailEn({ params }: Props) {
  const data = mockDb[params.slug] || {
    title: "Case Study",
    challenge: "Details to be added.",
    solution: "",
    result: "",
    tech: [],
  };

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-2">{data.title}</h1>
      {data.client && <p className="text-gray-600 mb-8">Client: {data.client}</p>}

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Challenge</h2>
        <p className="text-gray-700">{data.challenge}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Solution</h2>
        <p className="text-gray-700">{data.solution}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Result</h2>
        <p className="text-gray-700">{data.result}</p>
      </section>

      {data.tech.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Tech Stack</h2>
          <p className="text-gray-700">{data.tech.join(", ")}</p>
        </section>
      )}
    </main>
  );
}

