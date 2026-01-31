import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Leistungen - Elkaza Consulting",
    description: "Netzwerk, Security und Managed Operations für KMUs in Wien und Österreich.",
};

export default function LeistungenLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
