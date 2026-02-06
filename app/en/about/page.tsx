import Link from "next/link";

export default function AboutEn() {
  return (
    <main>
      <section className="py-10 md:py-14 hero-gradient">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-[var(--text)]">About</h1>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-[var(--surface)]">
        <div className="max-w-3xl mx-auto px-6 space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-[var(--text)] mb-3">Mission</h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              We turn technology into a growth engine. As a partner with a deep understanding of both business and
              enterprise architecture, we design and build the right solutions, not just the easy ones.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[var(--text)] mb-3">Approach</h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Agile, partnership-based and transparent. From analysis to rollout, we work closely with your team.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[var(--text)] mb-3">Our Core Expertise</h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Business informatics, enterprise architecture, software engineering, and strategic project management.
              We integrate this expertise to build solutions that last.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[var(--text)] mb-3">About the Founder</h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Elkaza Consulting is led by its founder, Dipl.-Ing. Mohamed Elkaza. As a graduate of TU Wien (Vienna University of Technology) with a focus
              on Business Informatics and Enterprise Architecture, I partner directly with clients to design and execute their technology strategies.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              My technical expertise is complemented by a professional project management certification (IPMA Level D), ensuring your projects are delivered with
              precision, on time, and on budget.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              For larger-scale projects, we leverage a trusted network of specialized partners in cloud engineering and data science to ensure we deliver a complete,
              expert solution without the overhead of a large agency.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[var(--bg)] border-t border-[var(--border)]">
        <div className="max-w-[1140px] mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-[var(--text)] mb-4">Ready to stabilize your IT?</h2>
          <p className="text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
            Let&apos;s find out in 15 minutes if we are the right partner for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/en/contact" className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-90 transition-opacity">
              Book intro call
            </Link>
            <Link href="/en/case-studies" className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] hover:border-[var(--primary)] transition-colors">
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
