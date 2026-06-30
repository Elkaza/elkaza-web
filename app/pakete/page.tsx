import PrelaunchPackagesPage from "@/app/components/PrelaunchPackagesPage";
import { createLocalizedMetadata } from "@/lib/metadata";

export const metadata = createLocalizedMetadata({
  title: "Geplante Leistungsmodelle - Elkaza",
  description: "Unverbindlicher Planungsstand möglicher zukünftiger IT-Leistungsmodelle. Derzeit kein Angebot und keine Auftragsannahme.",
  path: "/pakete",
});

export default function PaketePage() {
  return <PrelaunchPackagesPage locale="de" />;
}
