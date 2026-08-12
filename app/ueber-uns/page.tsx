import FounderAbout from "@/app/components/FounderAbout";
import { createLocalizedMetadata } from "@/lib/metadata";

export const metadata = createLocalizedMetadata({
  title: "Wer hinter Elkaza steht",
  description: "Mohamed Elkaza entwickelt Elkaza in Wien als mögliches künftiges IT-Services-Projekt für KMU.",
  path: "/ueber-uns",
});

export default function UeberUnsPage() { return <FounderAbout locale="de" />; }
