export const metadata = {
  title: "Elkaza Consulting – Digital Transformation Partner",
  description: "We combine AI, modern platforms, and strategic design to future‑proof your business.",
};

// Note: Only the root layout (app/layout.tsx) should render <html>/<body>/header/footer>.
// This locale layout just wraps children to avoid nested <html>/<body> hydration errors.
export default function EnLayout({ children }: { children: React.ReactNode }) {
  return children;
}
