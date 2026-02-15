"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = (window.scrollY / totalHeight) * 100;
            setProgress(Math.min(100, Math.max(0, scrolled)));
        };

        handleScroll(); // Initial call
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 right-0 h-1 bg-[var(--border)] z-50">
            <div
                className="h-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] transition-all duration-150 ease-out"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
}
