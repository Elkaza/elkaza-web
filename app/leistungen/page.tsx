import LeistungenClient from "./LeistungenClient";

export const metadata = {
  title: "Geplante Leistungsbereiche – Netzwerk & Security aus Wien | Elkaza",
  description: "Unverbindlicher Überblick über mögliche zukünftige Leistungsbereiche: Security Baseline, Netzwerk, Zugänge, Backups und dokumentierter IT-Betrieb.",
  alternates: { canonical: "/leistungen" },
};

export default function LeistungenPage() {
  return <LeistungenClient />;
}
