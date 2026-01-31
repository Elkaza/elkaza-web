import { Shield } from "lucide-react";

interface SecurityCalloutProps {
    type: "zero-trust" | "nis2" | "ransomware" | "default";
    locale: "de" | "en";
}

const callouts = {
    "zero-trust": {
        de: "Verify explicitly. Least privilege. Assume breach.",
        en: "Verify explicitly. Least privilege. Assume breach.",
    },
    nis2: {
        de: "Risikomanagement-Maßnahmen. Incident-Bereitschaft. Nachweispaket für Audits.",
        en: "Risk management measures. Incident readiness. Evidence pack for audits.",
    },
    ransomware: {
        de: "Backup-Strategie. Restore-Tests. Incident-Runbooks. Patching-Fokus.",
        en: "Backup strategy. Restore testing. Incident runbooks. Patching focus.",
    },
    default: {
        de: "Least-privilege Zugang. Alle Änderungen geloggt. Dokumentiert für Audits.",
        en: "Least-privilege access. All changes logged. Documented for audits.",
    },
};

export default function SecurityCallout({ type, locale }: SecurityCalloutProps) {
    const text = callouts[type][locale];

    return (
        <div className="flex items-start gap-3 p-4 rounded-lg border border-[var(--border)] bg-[var(--surface)]">
            <Shield className="w-5 h-5 text-[var(--primary)] shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-sm text-[var(--text-secondary)]">{text}</p>
        </div>
    );
}
