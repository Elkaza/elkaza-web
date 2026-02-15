import Link from "next/link";

interface CTAProps {
    href: string;
    children: React.ReactNode;
    variant?: "primary" | "secondary";
    className?: string;
}

export default function CTA({
    href,
    children,
    variant = "primary",
    className = "",
}: CTAProps) {
    const baseStyles =
        "btn-enhanced inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--border-focus)] active:scale-[0.98]";
    const variants = {
        primary: "bg-[var(--primary)] text-[var(--primary-foreground)] hover:bg-[var(--primary-hover)] shadow-[var(--shadow-sm)]",
        secondary:
            "border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] hover:border-[var(--primary)] hover:text-[var(--primary)] hover:bg-[var(--primary-light)]",
    };

    return (
        <Link href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
            {children}
        </Link>
    );
}
