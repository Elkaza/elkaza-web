import Link from "next/link";
import { CheckCircle, Compass, GraduationCap, Layers, Network, ShieldCheck } from "lucide-react";

const principles = [
  {
    title: "Understand first, then build",
    text: "We start with context: business processes, risks, existing systems, and the people who work with them.",
    icon: Compass,
  },
  {
    title: "Pragmatic, not overloaded",
    text: "Solutions need to be maintainable, documented, and usable in daily operations. Complexity only belongs where it helps.",
    icon: Layers,
  },
  {
    title: "Security as a baseline",
    text: "Backups, access, networks, devices, and cloud configuration are considered from the beginning.",
    icon: ShieldCheck,
  },
];

const capabilities = [
  "IT infrastructure and network architecture",
  "Security baselines, MFA, backup, and recovery concepts",
  "Microsoft 365, cloud, and SaaS security",
  "Automation, data flows, and internal tools",
  "Documentation, handover, and continuous improvement",
];

export default function AboutEn() {
  return (
    <main>
      <section className="hero-gradient-enhanced py-12 md:py-18">
        <div className="mx-auto grid max-w-[1140px] gap-8 px-4 sm:px-6 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-[var(--primary)]">About Elkaza Consulting</p>
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-[var(--text)] md:text-5xl">
              Technical clarity for companies that need reliable IT operations.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--text-secondary)]">
              Elkaza Consulting combines business understanding, infrastructure, security, and automation. The focus is on solutions that are well planned, clearly documented, and sustainable to operate.
            </p>
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow-sm)]">
            <p className="text-sm font-semibold text-[var(--text)]">What we stand for</p>
            <ul className="mt-4 space-y-3 text-sm text-[var(--text-secondary)]">
              <li className="flex gap-3">
                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[var(--primary)]" />
                clear technical decisions
              </li>
              <li className="flex gap-3">
                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[var(--primary)]" />
                calm, documented operations
              </li>
              <li className="flex gap-3">
                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[var(--primary)]" />
                pragmatic security without unnecessary complexity
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface)] py-12 md:py-16">
        <div className="mx-auto max-w-[1140px] px-4 sm:px-6">
          <div className="grid gap-5 md:grid-cols-3">
            {principles.map((item) => (
              <div key={item.title} className="rounded-xl border border-[var(--border)] bg-[var(--bg)] p-5 shadow-[var(--shadow-sm)]">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--primary-light)] text-[var(--primary)]">
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h2 className="text-lg font-semibold text-[var(--text)]">{item.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--bg)] py-12 md:py-16">
        <div className="mx-auto grid max-w-[1140px] gap-10 px-4 sm:px-6 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-[var(--muted)]">How we work</p>
            <h2 className="text-3xl font-bold tracking-tight text-[var(--text)]">From first audit to stable operations.</h2>
            <p className="mt-4 leading-relaxed text-[var(--text-secondary)]">
              We work in clear steps: analyze, prioritize, implement, document, and hand over. The result is not a black box, but systems your team can understand and continue to operate.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {capabilities.map((item) => (
              <div key={item} className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4">
                <CheckCircle className="mb-3 h-5 w-5 text-[var(--primary)]" aria-hidden="true" />
                <p className="text-sm font-medium leading-relaxed text-[var(--text)]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface)] py-12 md:py-16">
        <div className="mx-auto grid max-w-[1140px] gap-8 px-4 sm:px-6 md:grid-cols-[0.85fr_1.15fr] md:items-start">
          <div className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-6">
            <GraduationCap className="mb-4 h-7 w-7 text-[var(--primary)]" aria-hidden="true" />
            <h2 className="text-2xl font-bold text-[var(--text)]">About the founder</h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
              Dipl.-Ing. Mohamed Elkaza combines business informatics, enterprise architecture, and practical implementation. Projects are led directly and close to the client, with a strong focus on technical quality and clear communication.
            </p>
          </div>

          <div className="space-y-5">
            <div className="rounded-xl border border-[var(--border)] bg-[var(--bg)] p-5">
              <h3 className="flex items-center gap-2 font-semibold text-[var(--text)]">
                <Network className="h-5 w-5 text-[var(--primary)]" aria-hidden="true" />
                Lean core, specialized network
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                For larger initiatives, specialized partners in cloud engineering, data science, and software development can be involved. The collaboration stays personal while still allowing deeper expertise when needed.
              </p>
            </div>
            <div className="rounded-xl border border-[var(--border)] bg-[var(--bg)] p-5">
              <h3 className="font-semibold text-[var(--text)]">What clients can expect</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                Reliable communication, understandable decisions, clean documentation, and technical solutions that work beyond the project itself.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--border)] bg-[var(--bg)] py-12 md:py-16">
        <div className="mx-auto max-w-[1140px] px-4 text-center sm:px-6">
          <h2 className="text-2xl font-bold text-[var(--text)]">Ready to make your IT cleaner and easier to operate?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-[var(--text-secondary)]">
            Start with a clear view of infrastructure, risks, and the next useful steps.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/en/services" className="inline-flex items-center justify-center rounded-lg bg-[var(--primary)] px-6 py-3 font-medium text-[var(--primary-foreground)] transition-opacity hover:opacity-90">
              View services
            </Link>
            <Link href="/en/packages" className="inline-flex items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] px-6 py-3 font-medium text-[var(--text)] transition-colors hover:border-[var(--primary)]">
              Compare packages
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
