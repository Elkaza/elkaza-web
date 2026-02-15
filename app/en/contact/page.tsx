import { siteContent } from "@/lib/siteContent";

export const metadata = {
  title: "Contact - Elkaza Consulting",
  description: "Schedule a free initial consultation. We will get back to you within 24 hours.",
};

export default function ContactEnPage() {
  const content = siteContent.contact.en;

  return (
    <main>
      <section className="py-10 md:py-14 hero-gradient-enhanced">
        <div className="max-w-[1140px] mx-auto px-6">
          <h1 className="text-4xl font-bold text-[var(--text)] mb-3">{content.title}</h1>
          <p className="text-lg text-[var(--text-secondary)]">{content.subtitle}</p>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-[var(--surface)]">
        <div className="max-w-xl mx-auto px-6">
          <form className="space-y-5" method="post" action="#">
            <div>
              <label className="block text-sm font-medium text-[var(--text)] mb-2">
                {content.form.name}
              </label>
              <input
                className="w-full border border-[var(--border)] rounded-lg px-4 py-3 bg-[var(--elevated)] text-[var(--text)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--border-focus)] focus:ring-2 focus:ring-[var(--primary)]/20 hover:border-[var(--border-hover)] transition-all"
                name="name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--text)] mb-2">
                {content.form.email}
              </label>
              <input
                type="email"
                className="w-full border border-[var(--border)] rounded-lg px-4 py-3 bg-[var(--elevated)] text-[var(--text)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--border-focus)] focus:ring-2 focus:ring-[var(--primary)]/20 hover:border-[var(--border-hover)] transition-all"
                name="email"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--text)] mb-2">
                {content.form.company}
              </label>
              <input
                className="w-full border border-[var(--border)] rounded-lg px-4 py-3 bg-[var(--elevated)] text-[var(--text)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--border-focus)] focus:ring-2 focus:ring-[var(--primary)]/20 hover:border-[var(--border-hover)] transition-all"
                name="company"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--text)] mb-2">
                {content.form.message}
              </label>
              <textarea
                className="w-full border border-[var(--border)] rounded-lg px-4 py-3 bg-[var(--elevated)] text-[var(--text)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--border-focus)] focus:ring-2 focus:ring-[var(--primary)]/20 hover:border-[var(--border-hover)] transition-all resize-none"
                name="message"
                rows={5}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[var(--primary)] text-[var(--primary-foreground)] px-6 py-3 rounded-lg font-medium hover:bg-[var(--primary-hover)] transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--border-focus)] active:scale-[0.98]"
            >
              {content.form.submit}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
