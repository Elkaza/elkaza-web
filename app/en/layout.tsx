export const metadata = {
  title: "Elkaza Consulting - Networking, Security & Automation",
  description: "Stable IT infrastructure for growing teams: networking, security, and automation from a single source.",
  alternates: {
    canonical: "https://elkaza.at/en/",
    languages: {
      "de-AT": "https://elkaza.at/",
      en: "https://elkaza.at/en/",
    },
  },
};

// Note: Only the root layout (app/layout.tsx) should render <html>/<body>/header/footer>.
// This locale layout just wraps children to avoid nested <html>/<body> hydration errors.
export default function EnLayout({ children }: { children: React.ReactNode }) {
  return children;
}
