"use client";

import { useEffect, useRef } from "react";

export default function InteractiveHero({ children }: { children: React.ReactNode }) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;

            const { clientX, clientY } = e;
            const { left, top, width, height } = containerRef.current.getBoundingClientRect();

            const x = ((clientX - left) / width) * 100;
            const y = ((clientY - top) / height) * 100;

            containerRef.current.style.setProperty('--mouse-x', `${x}%`);
            containerRef.current.style.setProperty('--mouse-y', `${y}%`);
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener('mousemove', handleMouseMove);
            return () => container.removeEventListener('mousemove', handleMouseMove);
        }
    }, []);

    return (
        <div ref={containerRef} className="interactive-hero relative">
            {children}
        </div>
    );
}
