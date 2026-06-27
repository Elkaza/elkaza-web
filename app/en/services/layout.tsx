import type { Metadata } from "next";
import { createLocalizedMetadata } from "@/lib/metadata";

export const metadata: Metadata = createLocalizedMetadata({
    title: "Services - Elkaza Consulting",
    description: "Network, security and managed operations for SMEs in Vienna and Austria.",
    path: "/en/services",
});

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
