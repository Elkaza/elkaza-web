import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Services - Elkaza Consulting",
    description: "Network, security and managed operations for SMEs in Vienna and Austria.",
};

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
