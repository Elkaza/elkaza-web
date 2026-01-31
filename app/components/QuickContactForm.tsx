"use client";

import { useState } from "react";
import { Send } from "lucide-react";

interface QuickContactFormProps {
    locale: "de" | "en";
    serviceName?: string;
}

const content = {
    de: {
        title: "Situation schildern",
        placeholder: "Beschreiben Sie kurz Ihre aktuelle Situation oder Ihr Anliegen...",
        button: "Gespräch anfragen",
        sending: "Wird gesendet...",
        success: "Danke! Wir melden uns innerhalb von 24h.",
    },
    en: {
        title: "Describe your situation",
        placeholder: "Briefly describe your current situation or concern...",
        button: "Request a call",
        sending: "Sending...",
        success: "Thank you! We'll get back to you within 24h.",
    },
};

export default function QuickContactForm({ locale, serviceName }: QuickContactFormProps) {
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");
    const c = content[locale];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!message.trim()) return;

        setStatus("sending");

        // Simulate form submission - replace with actual API call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setStatus("success");
        setMessage("");
    };

    if (status === "success") {
        return (
            <div className="p-6 rounded-xl bg-[var(--surface)] border border-green-500/30 text-center">
                <p className="text-green-500 font-medium">{c.success}</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="p-6 rounded-xl bg-[var(--surface)] border border-[var(--border)]">
            <label htmlFor="quick-message" className="block text-lg font-semibold text-[var(--text)] mb-4">
                {c.title}
            </label>
            <textarea
                id="quick-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={c.placeholder}
                rows={4}
                className="w-full p-4 rounded-lg bg-[var(--bg)] border border-[var(--border)] text-[var(--text)] placeholder-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent resize-none"
                required
            />
            <input type="hidden" name="service" value={serviceName || ""} />
            <button
                type="submit"
                disabled={status === "sending"}
                className="mt-4 w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--primary)] text-white rounded-lg font-medium hover:bg-[var(--primary-dark)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {status === "sending" ? c.sending : c.button}
                <Send className="w-4 h-4" aria-hidden="true" />
            </button>
        </form>
    );
}
