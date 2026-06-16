import { siteContent } from "@/lib/siteContent";

export const metadata = {
  title: "Contact - Elkaza Consulting",
  description: "Schedule a free initial consultation. We will get back to you within 24 hours.",
};

const fieldClass = "w-full border border-[var(--border)] rounded-lg px-4 py-3 bg-[var(--elevated)] text-[var(--text)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--border-focus)] focus:ring-2 focus:ring-[var(--primary)]/20 hover:border-[var(--border-hover)] transition-all";

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
          <p className="text-sm text-[var(--muted)] mb-6 text-center">
            For SMEs in Vienna and the surrounding area. Remote by agreement.
          </p>
          <form className="space-y-5" method="post" action="mailto:office@elkaza.at" encType="text/plain">
            <input type="hidden" name="Subject" value="Consultation request via elkaza.at" />
            <div>
              <label htmlFor="contact-name" className="block text-sm font-medium text-[var(--text)] mb-2">
                {content.form.name}
              </label>
              <input
                id="contact-name"
                className={fieldClass}
                name="Name"
                autoComplete="name"
                required
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-sm font-medium text-[var(--text)] mb-2">
                {content.form.email}
              </label>
              <input
                id="contact-email"
                type="email"
                className={fieldClass}
                name="Email"
                autoComplete="email"
                required
              />
            </div>
            <div>
              <label htmlFor="contact-company" className="block text-sm font-medium text-[var(--text)] mb-2">
                {content.form.company}
              </label>
              <input
                id="contact-company"
                className={fieldClass}
                name="Company"
                autoComplete="organization"
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="block text-sm font-medium text-[var(--text)] mb-2">
                {content.form.message}
              </label>
              <textarea
                id="contact-message"
                className={`${fieldClass} resize-none`}
                name="Message"
                rows={5}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[var(--primary)] text-[var(--primary-foreground)] px-6 py-3 rounded-lg font-medium hover:bg-[var(--primary-hover)] transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--border-focus)] active:scale-[0.98]"
            >
              {content.form.submit}
            </button>
          </form>
          <p className="mt-5 text-center text-sm text-[var(--muted)]">
            Direct contact: <a className="font-medium text-[var(--primary)] hover:underline" href="mailto:office@elkaza.at">office@elkaza.at</a>
          </p>
        </div>
      </section>
    </main>
  );
}
