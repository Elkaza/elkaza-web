interface Props { params: { slug: string } }

const mockDb: Record<string, { title: string; client?: string; challenge: string; solution: string; result: string; tech: string[] }> = {
  "automation-50h-logistics": {
    title: "Automation Saves 50 Hours/Month for Logistics Firm",
    client: "Austrian SME (Logistics)",
    challenge:
      "A mid-sized logistics company processed hundreds of freight invoices manually each month. The finance team spent over 50 hours on this, with frequent data entry errors that prevented higher‑value analysis.",
    solution:
      "Using our AI & Intelligent Automation service, we deployed a system that reads, extracts, and validates key data (invoice numbers, amounts, dates) from incoming PDF invoices and feeds it directly into accounting — no manual entry.",
    result:
      "Saved over 50 hours per month, reduced data entry errors by 98%, freed the finance team for strategic analysis, and achieved ROI in under 4 months.",
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
