import PrelaunchPackagesPage from "@/app/components/PrelaunchPackagesPage";
import { createLocalizedMetadata } from "@/lib/metadata";

export const metadata = createLocalizedMetadata({
  title: "Planned service models - Elkaza",
  description: "A non-binding planning view of possible future IT service models. No offer is currently made and no orders are accepted.",
  path: "/en/packages",
});

export default function PackagesPage() {
  return <PrelaunchPackagesPage locale="en" />;
}
