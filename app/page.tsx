import ProfessionalHome from "@/app/components/ProfessionalHome";
import { createLocalizedMetadata } from "@/lib/metadata";

export const metadata = createLocalizedMetadata({
  title: "Geplante IT-Assessments für KMU in Wien",
  description: "Elkaza ist ein IT-Services-Projekt in Vorbereitung. Geplanter Fokus: IT- und Security-Baseline, Infrastruktur, Zugänge und dokumentierte Automatisierung.",
  path: "/",
});

export default function Home() {
  return <ProfessionalHome locale="de" />;
}
