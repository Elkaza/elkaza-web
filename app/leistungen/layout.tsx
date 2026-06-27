import type { Metadata } from "next";
import { createLocalizedMetadata } from "@/lib/metadata";

export const metadata: Metadata = createLocalizedMetadata({
    title: "Leistungen - Elkaza Consulting",
    description: "Netzwerk, Security und Managed Operations für KMUs in Wien und Österreich.",
    path: "/leistungen",
});

export default function LeistungenLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
