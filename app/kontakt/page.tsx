import PrelaunchContactPage from "@/app/components/PrelaunchContactPage";
import { createLocalizedMetadata } from "@/lib/metadata";

export const metadata = createLocalizedMetadata({
  title: "Kontaktstatus - Elkaza",
  description: "Elkaza ist ein Projekt in Vorbereitung und nimmt derzeit keine Anfragen oder Aufträge an.",
  path: "/kontakt",
});

export default function KontaktPage() {
  return <PrelaunchContactPage locale="de" />;
}
