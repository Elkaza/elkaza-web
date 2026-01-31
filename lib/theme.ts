/**
 * Design Tokens - Elkaza Brand System
 * 
 * A unified design system for consistent visual harmony.
 * Import these tokens to maintain consistency across components.
 */

export const colors = {
    // Brand colors
    brand: {
        primary: "#1D4ED8",      // Blue 700 - main brand color
        primaryDark: "#1E40AF",  // Blue 800 - hover states
        primaryLight: "#DBEAFE", // Blue 100 - backgrounds
        accent: "#22D3EE",       // Cyan 400 - sparingly for highlights
    },

    // Text colors
    text: {
        ink: "#0B1220",          // Near-black for headings
        body: "#1E293B",         // Slate 800 for body text
        muted: "#475569",        // Slate 600 for secondary text
        subtle: "#64748B",       // Slate 500 for captions
    },

    // Surface colors
    surface: {
        white: "#FFFFFF",
        background: "#F8FAFC",   // Slate 50 - page background
        elevated: "#FFFFFF",     // Cards, modals
        muted: "#F1F5F9",        // Slate 100 - alternate sections
    },

    // Border colors
    border: {
        default: "#E2E8F0",      // Slate 200
        hover: "#CBD5E1",        // Slate 300
        active: "#1D4ED8",       // Brand primary
    },

    // Dark surface (for accent sections, not full dark mode)
    darkSurface: {
        background: "#0F172A",   // Slate 900
        text: "#F8FAFC",         // Slate 50
        muted: "#94A3B8",        // Slate 400
    },
} as const;

export const spacing = {
    section: {
        py: "py-16 md:py-20",
        px: "px-6",
    },
    container: "max-w-6xl mx-auto",
} as const;

export const shadows = {
    card: "shadow-sm",
    cardHover: "shadow-md",
    elevated: "shadow-lg",
} as const;

export const radii = {
    card: "rounded-xl",
    button: "rounded-lg",
    badge: "rounded-full",
} as const;

export const transitions = {
    default: "transition-all duration-200",
} as const;

// Tailwind class presets for common patterns
export const presets = {
    // Card styles
    card: `${radii.card} border border-[#E2E8F0] bg-white ${shadows.card} hover:border-[#1D4ED8] hover:${shadows.cardHover} ${transitions.default}`,

    // Section heading
    sectionHeading: "text-2xl md:text-3xl font-bold text-[#0B1220]",

    // Body text
    bodyText: "text-[#1E293B]",
    mutedText: "text-[#475569]",

    // Container
    container: `${spacing.container} ${spacing.section.px}`,
} as const;

export type Colors = typeof colors;
export type Spacing = typeof spacing;
