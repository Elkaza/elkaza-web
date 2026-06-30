import PrelaunchContactPage from "@/app/components/PrelaunchContactPage";
import { createLocalizedMetadata } from "@/lib/metadata";

export const metadata = createLocalizedMetadata({
  title: "Contact status - Elkaza",
  description: "Elkaza is a project in preparation and is not currently accepting inquiries or orders.",
  path: "/en/contact",
});

export default function ContactPage() {
  return <PrelaunchContactPage locale="en" />;
}
