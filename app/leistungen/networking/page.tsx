import { Network } from "lucide-react";
import ServicePageTemplate from "@/app/components/ServicePageTemplate";

export const metadata = {
    title: "Netzwerk & Infrastruktur - Elkaza Consulting",
    description: "Stabile Verbindungen, saubere Segmentierung, sichere Remote-Zugänge für wachsende Teams.",
};

export default function NetworkingPage() {
    return (
        <ServicePageTemplate
            locale="de"
            icon={Network}
            title="Netzwerk & Infrastruktur"
            promise="Stabile Verbindungen, saubere Segmentierung, sichere Remote-Zugänge für wachsende Teams."
            ctaAction="Netzwerk-Check anfragen"
            ctaHref="/kontakt"
            timeline="2-6 Wochen"
            deliverablesCount={6}
            forWhom={[
                "Unternehmen mit wachsendem Team und Netzwerk-Engpässen",
                "Büros mit schlechter Wi-Fi-Abdeckung",
                "Teams, die sicheres VPN für Home-Office brauchen",
                "Firmen mit unstrukturierter, 'gewachsener' IT",
            ]}
            outcomes={[
                "Stabiles Wi-Fi in allen Büros",
                "Sichere Trennung von Gäste- und Internes-Netz",
                "Performanter VPN-Zugang für Remote-User",
                "Volle Transparenz über verbundene Geräte",
            ]}
            included={[
                "Status-Quo-Analyse und Site Survey",
                "Netzwerk-Design und Segmentierung (VLANs)",
                "Firewall-Konfiguration und Härtung",
                "Wi-Fi-Optimierung",
                "VPN / Remote Access Einrichtung",
                "Dokumentation und Übergabe",
            ]}
            deliverables={[
                "Netzwerk-Topologie-Diagramm",
                "IP-Adress- und VLAN-Plan",
                "Firewall-Regelwerk-Dokumentation",
                "Wi-Fi-Ausleuchtungsbericht (Heatmap)",
                "VPN-Zugangsdaten und Anleitungen",
                "Monitoring-Zugriff",
            ]}
            tools={[
                "Firewalls (Fortinet, Sophos, OPNsense)",
                "Switching & Wi-Fi (Ubiquiti, Aruba, Cisco Meraki)",
                "Monitoring (PRTG, Checkmk, Zabbix)",
                "VPN (WireGuard, OpenVPN, IPsec)",
            ]}
            exampleOutcomes={[
                {
                    context: "Agentur, 40 Mitarbeiter, Altbau",
                    before: "Häufige Wi-Fi-Abbrüche, langsames NAS",
                    after: "Wi-Fi 6 Abdeckung, 10GbE Backbone",
                    result: "Keine Beschwerden mehr, Backups 5x schneller.",
                },
                {
                    context: "Dienstleister, Hybrid-Work",
                    before: "VPN unsicher, Zugriff auf alles für jeden",
                    after: "Segmentierte VLANs, VPN nur für Nötiges",
                    result: "Sicherheitsaudit bestanden, Risiko minimiert.",
                },
            ]}
            process={[
                { step: "Analyse", desc: "Audit der Infrastruktur und Anforderungen.", time: "1 Woche" },
                { step: "Design", desc: "Planung der Segmentierung und Hardware.", time: "1-2 Wochen" },
                { step: "Umsetzung", desc: "Konfiguration, Umbau, Test.", time: "1-3 Wochen" },
            ]}
            faqs={[
                { q: "Gibt es Ausfallzeiten während der Umstellung?", a: "Wir planen kritische Arbeiten außerhalb der Geschäftszeiten (Abends/Wochenende)." },
                { q: "Müssen wir neue Hardware kaufen?", a: "Nicht zwingend. Wir nutzen vorhandene Geräte, wo es sinnvoll ist. Austausch nur bei Engpässen oder EOL." },
                { q: "Unterstützen Sie auch Home-Office-Anbindungen?", a: "Ja, wir richten sichere VPNs oder SASE-Lösungen für Remote-Mitarbeiter ein." },
            ]}
            trustNote="Netzwerkzugriff ist sensibel. Wir dokumentieren alle Änderungen lückenlos. Passwörter werden in Ihrem Passwort-Manager hinterlegt."
            finalCtaText="Schluss mit wackeligem WLAN und unsicheren Netzen."
        />
    );
}
