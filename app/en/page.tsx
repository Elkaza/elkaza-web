import ProfessionalHome from "@/app/components/ProfessionalHome";
import { createLocalizedMetadata } from "@/lib/metadata";

export const metadata = createLocalizedMetadata({
  title: "Planned IT assessments for SMEs in Vienna",
  description: "Elkaza is an IT-services project in preparation, focused on IT and security baselines, infrastructure, access, and documented automation.",
  path: "/en",
});

export default function HomeEN() {
  return <ProfessionalHome locale="en" />;
}
