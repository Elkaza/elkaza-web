import LeistungenClient from "./LeistungenClient";

export const metadata = {
  title: "Unsere Leistungen – Netzwerk & Security aus Wien | Elkaza",
  description: "Von Security Baseline bis Managed Operations: Wir sorgen für stabile Netzwerke und sichere IT-Umgebungen für KMUs in Wien und Umgebung.",
  alternates: { canonical: "/leistungen" },
};

export default function LeistungenPage() {
  return <LeistungenClient />;
}
