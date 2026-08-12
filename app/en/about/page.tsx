import FounderAbout from "@/app/components/FounderAbout";
import { createLocalizedMetadata } from "@/lib/metadata";

export const metadata = createLocalizedMetadata({
  title: "Who is behind Elkaza",
  description: "Mohamed Elkaza is developing Elkaza in Vienna as a possible future IT-services project for SMEs.",
  path: "/en/about",
});

export default function AboutEn() { return <FounderAbout locale="en" />; }
