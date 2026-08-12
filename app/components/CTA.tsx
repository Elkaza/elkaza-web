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
        "inline-flex items-center justify-center rounded-lg px-5 py-3 font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--border-focus)]";
    const variants = {
        primary: "bg-[var(--primary)] hover:bg-[var(--primary-hover)] shadow-[var(--shadow-sm)]",
        secondary:
            "border border-[var(--border)] bg-[var(--surface)] text-[var(--text)] hover:border-[var(--primary)] hover:text-[var(--primary)] hover:bg-[var(--primary-light)]",
    };

    return (
        <Link
            href={href}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            style={variant === "primary" ? { color: "var(--primary-foreground)" } : undefined}
        >
            {children}
        </Link>
    );
}
