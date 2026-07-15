/**
 * Site content configuration
 * Edit this file to update copy across the site
 */

export const siteContent = {
  // Brand
  brand: {
    name: "Elkaza",
    tagline: {
      de: "Networking · Security · Automation",
      en: "Networking · Security · Automation",
    },
  },

  // Hero auxiliary data (Trust Strip)
  trust: {
    de: [
      "Standort: Wien",
      "Geplanter Fokus: KMU",
      "Microsoft & Open Source",
      "Konzeptphase",
      "Noch keine Auftragsannahme",
    ],
    en: [
      "Location: Vienna",
      "Planned focus: SMEs",
      "Microsoft & Open Source",
      "Concept stage",
      "Not accepting orders yet",
    ],
  },

  // Outcomes for Stats Section
  stats: {
    de: [
      { label: "Security-Lücken", value: "Minimiert", sub: "durch Baseline-Härtung" },
      { label: "Wiederherstellung", value: "Schneller", sub: "dank getesteter Backups" },
      { label: "VPN-Ausfälle", value: "Reduziert", sub: "durch Standardisierung" },
    ],
    en: [
      { label: "Security Gaps", value: "Minimized", sub: "via baseline hardening" },
      { label: "Recovery Time", value: "Faster", sub: "thanks to tested backups" },
      { label: "VPN Outages", value: "Reduced", sub: "through standardization" },
    ],
  },

  // Process Steps
  process: {
    de: [
      { step: 1, title: "Status", desc: "Derzeit Projekt in Vorbereitung." },
      { step: 2, title: "Analyse", desc: "Geplanter Blick auf Ist-Stand, Risiken und Quick-Wins." },
      { step: 3, title: "Konzept", desc: "Mögliche Roadmap für Sicherheit und Stabilität." },
      { step: 4, title: "Umsetzung", desc: "Später nur nach rechtlich klarem Angebot." },
      { step: 5, title: "Betrieb", desc: "Laufende Betreuung ist als mögliches Modell skizziert." },
    ],
    en: [
      { step: 1, title: "Status", desc: "Project currently in preparation." },
      { step: 2, title: "Analysis", desc: "Planned review of current state, risks, and quick wins." },
      { step: 3, title: "Concept", desc: "Possible roadmap for security and stability." },
      { step: 4, title: "Implementation", desc: "Later only after a clear legal offer." },
      { step: 5, title: "Operations", desc: "Ongoing support is sketched as a possible model." },
    ],
  },

  // Homepage hero
  hero: {
    de: {
      headline: "Ein Konzept für stabile IT-Infrastruktur in wachsenden Teams.",
      subheadline:
        "Elkaza wird als mögliches zukünftiges Angebot für Netzwerk, Zugänge, Backups und dokumentierten IT-Betrieb entwickelt.",
      primaryCta: "Projektstatus ansehen",
      primaryCtaHref: "/kontakt",
      secondaryCta: "Security Baseline ansehen",
      secondaryCtaHref: "/leistungen/security-baseline",
    },
    en: {
      headline: "A concept for stable IT infrastructure in growing teams.",
      subheadline:
        "Elkaza is being developed as a possible future offering for networks, access, backups, and documented IT operations.",
      primaryCta: "View project status",
      primaryCtaHref: "/en/contact",
      secondaryCta: "View Security Baseline",
      secondaryCtaHref: "/en/services/security-baseline",
    },
  },

  // Pain point cards
  painPoints: {
    de: [
      {
        title: "VPN bricht ab",
        description:
          "Homeoffice-Ausfälle, Beschwerden vom Team, Produktivitätsverlust.",
      },
      {
        title: "Firewall-Wildwuchs",
        description:
          "Keiner weiß mehr, welche Regeln aktiv sind und warum.",
      },
      {
        title: "Keine Runbooks",
        description:
          "Incidents dauern zu lange. Jeder Ausfall ist Improvisation.",
      },
      {
        title: "Zugriffsrechte unklar",
        description:
          "Ex-Mitarbeiter haben noch Zugang. Wer darf was, ist nicht dokumentiert.",
      },
      {
        title: "Backups nie getestet",
        description:
          "Sicherung läuft, aber ob Restore funktioniert, weiß keiner.",
      },
    ],
    en: [
      {
        title: "VPN keeps dropping",
        description:
          "Home office outages, team complaints, lost productivity.",
      },
      {
        title: "Firewall sprawl",
        description:
          "No one knows which rules are active or why.",
      },
      {
        title: "No runbooks",
        description:
          "Incidents take too long. Every outage is improvisation.",
      },
      {
        title: "Access rights unclear",
        description:
          "Former employees still have access. Who can do what is not documented.",
      },
      {
        title: "Backups never tested",
        description:
          "Backup runs, but no one knows if restore actually works.",
      },
    ],
  },

  // Services
  services: {
    de: {
      overview: {
        title: "Geplante Leistungsbereiche",
        subtitle: "Zehn mögliche Bereiche, ein Ziel: verlässliche IT-Infrastruktur.",
      },
      items: [
        {
          slug: "networking",
          title: "Netzwerk & Infrastruktur",
          shortDescription:
            "Stabile Verbindungen, saubere Segmentierung, sichere Remote-Zugänge.",
          forWhom: [
            "KMUs mit 10-200 Mitarbeitern",
            "Büros mit wachsenden Teams",
            "Remote- und Hybrid-Arbeitsplätze",
          ],
          outcomes: [
            "Zuverlässiges Wi-Fi in allen Bereichen",
            "Saubere Netzwerksegmentierung mit VLANs",
            "Sichere Remote-Zugänge für Homeoffice",
            "Dokumentierte Netzwerktopologie",
          ],
          included: [
            "Netzwerk-Audit und Bestandsaufnahme",
            "Topologie-Review und Optimierung",
            "VLAN-Konzept und Umsetzung",
            "Firewall-Regeln prüfen und bereinigen",
            "Wi-Fi-Ausleuchtung und Verbesserungen",
            "Monitoring-Grundlagen einrichten",
          ],
        },
        {
          slug: "security-baseline",
          title: "Security Baseline",
          shortDescription:
            "Start hier: MFA, Patchen, Backups – die Basis für alles Weitere.",
          forWhom: [
            "Unternehmen ohne dediziertes Security-Team",
            "Teams, die Grundlagen absichern wollen",
            "Firmen vor Audits oder Zertifizierungen",
          ],
          outcomes: [
            "MFA für alle kritischen Systeme",
            "Automatisiertes Patch-Management",
            "Funktionierende Backup-Strategie",
            "Least-Privilege-Zugriffskonzept",
            "Zentrale Protokollierung",
          ],
          included: [
            "Security-Assessment aktueller Stand",
            "MFA-Rollout planen und umsetzen",
            "Patch-Zyklen definieren",
            "Backup-Konzept prüfen oder erstellen",
            "Zugriffsrechte bereinigen",
            "Logging zentralisieren",
          ],
        },
        {
          slug: "zero-trust",
          title: "Zero Trust & Identity",
          shortDescription:
            "Moderne Zugangskontrolle: MFA, Conditional Access, rollenbasierte Berechtigungen.",
          forWhom: [
            "Unternehmen mit hybriden Arbeitsmodellen",
            "Teams mit externen Dienstleistern",
            "Firmen mit sensiblen Daten",
          ],
          outcomes: [
            "Conditional Access für alle Anwendungen",
            "Rollenbasierte Zugriffssteuerung (RBAC)",
            "Single Sign-On (SSO) wo möglich",
            "Gerätecompliance-Prüfung",
          ],
          included: [
            "Identity-Audit (Benutzer, Gruppen, Rollen)",
            "Conditional-Access-Policies definieren",
            "MFA für externe Zugriffe",
            "Privileged Access Management",
            "Session-Timeout und Gerätebindung",
            "Dokumentation der Zugriffsmatrix",
          ],
        },
        {
          slug: "ransomware-resilience",
          title: "Ransomware Resilience",
          shortDescription:
            "Immutable Backups, Recovery-Übungen, Incident-Runbooks für den Ernstfall.",
          forWhom: [
            "Unternehmen mit geschäftskritischen Daten",
            "Firmen ohne getestete Recovery-Pläne",
            "Teams, die Incident-Readiness verbessern wollen",
          ],
          outcomes: [
            "Immutable Backups außerhalb der Produktivumgebung",
            "Dokumentierte Recovery-Prozeduren",
            "Regelmäßige Wiederherstellungstests",
            "Runbooks für Incident-Response",
          ],
          included: [
            "Backup-Architektur-Review",
            "Immutable-Storage-Konzept umsetzen",
            "Recovery-Drills planen und durchführen",
            "Incident-Response-Runbooks erstellen",
            "Kommunikationspläne für den Ernstfall",
            "Lessons Learned dokumentieren",
          ],
        },
        {
          slug: "automation",
          title: "Automation & Platform Engineering",
          shortDescription:
            "Infrastructure as Code, Config-Automatisierung, standardisierte Deployments.",
          forWhom: [
            "Wachsende Teams mit wiederkehrenden Aufgaben",
            "Firmen, die Konsistenz über Umgebungen benötigen",
            "IT-Abteilungen mit Automatisierungsbedarf",
          ],
          outcomes: [
            "Wiederholbare, versionierte Infrastruktur",
            "Reduzierte manuelle Konfiguration",
            "Schnellere Bereitstellung neuer Systeme",
            "Bessere Nachvollziehbarkeit von Änderungen",
          ],
          included: [
            "IaC-Assessment (Terraform, Ansible, o.ä.)",
            "Automatisierte Server-Konfiguration",
            "Standardisierte Deployment-Pipelines",
            "Secrets Management einrichten",
            "Dokumentation der Automatisierung",
            "Schulung des Teams",
          ],
        },
        {
          slug: "managed-ops",
          title: "Managed Operations",
          shortDescription:
            "Laufende Betreuung: Monitoring, Patching, Backup-Prüfung, Incident-Response.",
          forWhom: [
            "Unternehmen ohne eigene IT-Abteilung",
            "Teams, die Entlastung brauchen",
            "Betriebe mit kritischen Systemen",
          ],
          outcomes: [
            "Geplantes Monitoring Ihrer Systeme",
            "Regelmäßige Sicherheits-Updates",
            "Geprüfte Backups",
            "Schnelle Reaktion bei Störungen",
            "Monatliche Reports",
          ],
          included: [
            "Einrichtung Monitoring-Plattform",
            "Definierte Patch-Zyklen",
            "Backup-Verifizierung",
            "Incident-Response-Runbooks",
            "Monatliches Reporting",
            "Fester Ansprechpartner",
          ],
        },
        {
          slug: "cloud-saas-security",
          title: "Cloud & SaaS Security",
          shortDescription:
            "Microsoft 365 / Google Workspace sicher betreiben – von Baseline bis Monitoring.",
          forWhom: [
            "Unternehmen mit M365 oder Google Workspace",
            "Teams, die Collaboration sicher gestalten wollen",
            "Firmen mit Compliance-Anforderungen (DSGVO, ISO)",
          ],
          outcomes: [
            "Gehärteter Tenant nach Best Practices",
            "Conditional Access und MFA für alle Benutzer",
            "Sichere Mail-, Share- und Teams-Policies",
            "Zentrales Logging und Alerting",
            "Dokumentierte Security-Baseline",
          ],
          included: [
            "Security Baseline / Tenant Hardening",
            "Conditional Access, MFA, Rollen-Konzept",
            "Secure Mail/Share/Teams Policies",
            "Zentralisiertes Logging (Audit, Sign-in, Alerts)",
            "Geräte-/Endpoint-Anbindung (falls vorhanden)",
            "Secure Copilot/LLM Adoption (Policies, Data Boundaries, Audit)",
            "Dokumentation und Übergabe",
          ],
        },
        {
          slug: "endpoint-security",
          title: "Endpoint & Device Security",
          shortDescription:
            "Sichere Endgeräte durch Hardening, Device Management und Bedrohungserkennung.",
          forWhom: [
            "KMUs ohne zentrale Geräteverwaltung",
            "Hybrid- und Remote-Teams",
            "Unternehmen mit häufigen Phishing- oder Credential-Problemen",
          ],
          outcomes: [
            "Standardisierte Geräte-Baseline",
            "Verwaltetes Patch-Management",
            "EDR-Abdeckung auf allen Endpunkten",
            "Klare Device-Compliance-Regeln",
          ],
          included: [
            "Geräte-Inventar erstellen",
            "Baseline-Policies (Verschlüsselung, Updates)",
            "MDM-Rollout (Intune, Jamf o.ä.)",
            "EDR-Deployment und Konfiguration",
            "Patch-Automatisierung einrichten",
            "Reporting und Übergabe",
          ],
        },
        {
          slug: "ai-adoption",
          title: "Secure AI Adoption",
          shortDescription:
            "KI-Tools nutzen, ohne sensible Daten zu gefährden.",
          forWhom: [
            "Microsoft 365 Tenants mit Copilot-Plänen",
            "Teams, die ChatGPT oder andere LLMs nutzen",
            "Organisationen mit sensiblen Kundendaten",
          ],
          outcomes: [
            "Bereinigte Zugriffs- und Berechtigungsstruktur",
            "Grundlegende Datenklassifizierung",
            "Sichere Sharing-Defaults",
            "KI-Nutzungsrichtlinien",
          ],
          included: [
            "Zugriffsrechte-Review (Information Access)",
            "SharePoint/Drive-Berechtigungen verschärfen",
            "Conditional Access abstimmen",
            "DLP/Retention-Grundlagen (wo sinnvoll)",
            "KI-Acceptable-Use-Policy erstellen",
            "Pilot-Rollout-Plan",
          ],
        },
        {
          slug: "nis2-compliance",
          title: "NIS2 / Compliance Readiness",
          shortDescription:
            "Audit-fähige Sicherheitsbasis: Policies, Nachweise und Incident-Bereitschaft (keine Garantie).",
          forWhom: [
            "Zulieferer kritischer Sektoren",
            "Firmen, die von Partnern Nachweise benötigen",
            "Organisationen vor Audits oder Zertifizierungen",
          ],
          outcomes: [
            "Risikobasierter Maßnahmenplan",
            "Dokumentierte Kontrollen",
            "Incident-Response-Grundlagen",
            "Nachweispaket für Audits",
          ],
          included: [
            "Gap-Assessment durchführen",
            "Kontroll-Roadmap erstellen",
            "Logging/Monitoring-Baseline einrichten",
            "Backup- und Recovery-Nachweise",
            "Incident-Runbooks und Tabletop-Übung",
            "Dokumentationspaket zusammenstellen",
          ],
        },
      ],
    },
    en: {
      overview: {
        title: "Planned service areas",
        subtitle: "Ten possible areas, one goal: reliable IT infrastructure.",
      },
      items: [
        {
          slug: "networking",
          title: "Network & Infrastructure",
          shortDescription:
            "Stable connections, clean segmentation, secure remote access.",
          forWhom: [
            "SMEs with 10-200 employees",
            "Offices with growing teams",
            "Remote and hybrid workplaces",
          ],
          outcomes: [
            "Reliable Wi-Fi in all areas",
            "Clean network segmentation with VLANs",
            "Secure remote access for home office",
            "Documented network topology",
          ],
          included: [
            "Network audit and inventory",
            "Topology review and optimization",
            "VLAN concept and implementation",
            "Firewall rules review and cleanup",
            "Wi-Fi coverage and improvements",
            "Basic monitoring setup",
          ],
        },
        {
          slug: "security-baseline",
          title: "Security Baseline",
          shortDescription:
            "Start here: Practical security for SMEs (MFA, patching, backups) – the foundation.",
          forWhom: [
            "Companies without dedicated security teams",
            "Teams looking to secure the basics",
            "Firms preparing for audits or certifications",
          ],
          outcomes: [
            "MFA for all critical systems",
            "Automated patch management",
            "Working backup strategy",
            "Least-privilege access concept",
            "Centralized logging",
          ],
          included: [
            "Security assessment of current state",
            "MFA rollout planning and execution",
            "Define patch cycles",
            "Review or create backup concept",
            "Clean up access rights",
            "Centralize logging",
          ],
        },
        {
          slug: "zero-trust",
          title: "Zero Trust & Identity",
          shortDescription:
            "Modern access control: MFA, conditional access, role-based permissions.",
          forWhom: [
            "Companies with hybrid work models",
            "Teams with external contractors",
            "Firms with sensitive data",
          ],
          outcomes: [
            "Conditional access for all applications",
            "Role-based access control (RBAC)",
            "Single sign-on (SSO) where possible",
            "Device compliance verification",
          ],
          included: [
            "Identity audit (users, groups, roles)",
            "Define conditional access policies",
            "MFA for external access",
            "Privileged access management",
            "Session timeout and device binding",
            "Access matrix documentation",
          ],
        },
        {
          slug: "ransomware-resilience",
          title: "Ransomware Resilience",
          shortDescription:
            "Immutable backups, recovery drills, incident runbooks for emergencies.",
          forWhom: [
            "Companies with business-critical data",
            "Firms without tested recovery plans",
            "Teams looking to improve incident readiness",
          ],
          outcomes: [
            "Immutable backups outside production environment",
            "Documented recovery procedures",
            "Regular restore tests",
            "Incident response runbooks",
          ],
          included: [
            "Backup architecture review",
            "Implement immutable storage concept",
            "Plan and execute recovery drills",
            "Create incident response runbooks",
            "Emergency communication plans",
            "Document lessons learned",
          ],
        },
        {
          slug: "automation",
          title: "Automation & Platform Engineering",
          shortDescription:
            "Infrastructure as Code, config automation, standardized deployments.",
          forWhom: [
            "Growing teams with recurring tasks",
            "Firms needing consistency across environments",
            "IT departments with automation needs",
          ],
          outcomes: [
            "Repeatable, versioned infrastructure",
            "Reduced manual configuration",
            "Faster provisioning of new systems",
            "Better traceability of changes",
          ],
          included: [
            "IaC assessment (Terraform, Ansible, etc.)",
            "Automated server configuration",
            "Standardized deployment pipelines",
            "Set up secrets management",
            "Automation documentation",
            "Team training",
          ],
        },
        {
          slug: "managed-ops",
          title: "Managed Operations",
          shortDescription:
            "Ongoing support: monitoring, patching, backup verification, incident response.",
          forWhom: [
            "Companies without in-house IT department",
            "Teams that need relief",
            "Businesses with critical systems",
          ],
          outcomes: [
            "Planned monitoring of your systems",
            "Regular security updates",
            "Verified backups",
            "Fast response to incidents",
            "Monthly reports",
          ],
          included: [
            "Monitoring platform setup",
            "Defined patch cycles",
            "Backup verification",
            "Incident response runbooks",
            "Monthly reporting",
            "Defined responsibility model",
          ],
        },
        {
          slug: "cloud-saas-security",
          title: "Cloud & SaaS Security",
          shortDescription:
            "Operate Microsoft 365 / Google Workspace securely – from baseline to monitoring.",
          forWhom: [
            "Companies using M365 or Google Workspace",
            "Teams looking to secure collaboration",
            "Firms with compliance requirements (GDPR, ISO)",
          ],
          outcomes: [
            "Hardened tenant following best practices",
            "Conditional access and MFA for all users",
            "Secure mail, share, and Teams policies",
            "Centralized logging and alerting",
            "Documented security baseline",
          ],
          included: [
            "Security baseline / tenant hardening",
            "Conditional access, MFA, role concept",
            "Secure mail/share/Teams policies",
            "Centralized logging (audit, sign-in, alerts)",
            "Device/endpoint integration (if applicable)",
            "Secure Copilot/LLM adoption (policies, data boundaries, audit)",
            "Documentation and handover",
          ],
        },
        {
          slug: "endpoint-security",
          title: "Endpoint & Device Security",
          shortDescription:
            "Secure endpoints with hardening, device management, and threat detection.",
          forWhom: [
            "SMEs without centralized device control",
            "Hybrid and remote teams",
            "Companies with frequent phishing or credential issues",
          ],
          outcomes: [
            "Standardized device baseline",
            "Managed patching",
            "EDR coverage on all endpoints",
            "Clear device compliance rules",
          ],
          included: [
            "Device inventory",
            "Baseline policies (encryption, updates)",
            "MDM rollout (Intune, Jamf, etc.)",
            "EDR deployment and configuration",
            "Patch automation setup",
            "Reporting and handover",
          ],
        },
        {
          slug: "ai-adoption",
          title: "Secure AI Adoption",
          shortDescription:
            "Enable AI tools without exposing sensitive data.",
          forWhom: [
            "Microsoft 365 tenants planning Copilot",
            "Teams using ChatGPT or other LLMs",
            "Organizations with sensitive client data",
          ],
          outcomes: [
            "Access and permission cleanup",
            "Data classification basics",
            "Safe sharing defaults",
            "AI usage guidelines",
          ],
          included: [
            "Information access review",
            "SharePoint/Drive permission tightening",
            "Conditional access alignment",
            "DLP/retention basics where applicable",
            "AI acceptable use policy",
            "Pilot rollout plan",
          ],
        },
        {
          slug: "nis2-compliance",
          title: "NIS2 / Compliance Readiness",
          shortDescription:
            "Build audit-ready security basics: policies, evidence, and incident readiness (no guarantees).",
          forWhom: [
            "Suppliers of critical sectors",
            "Firms asked by partners for evidence",
            "Organizations preparing for audits",
          ],
          outcomes: [
            "Risk-based action plan",
            "Documented controls",
            "Incident response basics",
            "Evidence pack for audits",
          ],
          included: [
            "Gap assessment",
            "Control roadmap",
            "Logging/monitoring baseline",
            "Backup and recovery proof points",
            "Incident runbooks and tabletop exercise",
            "Documentation pack",
          ],
        },
      ],
    },
  },

  // Packages
  packages: {
    de: {
      title: "Pakete",
      subtitle: "Geplante Modelle ohne aktuelles Angebot.",
      custom: {
        title: "Individuell / Enterprise",
        desc: "Mögliche spätere Erweiterungen könnten dedizierte Betreuung, Compliance-Unterstützung oder größere Infrastrukturprojekte umfassen.",
        cta: "Projektstatus ansehen",
        href: "/kontakt",
      },
      faq: [
        { q: "Sind Preise und Pakete bereits verbindlich?", a: "Nein. Die Pakete zeigen nur eine mögliche spätere Struktur. Preise, Umfang und Vertragsbedingungen sind noch nicht festgelegt." },
        { q: "Gibt es schon Reaktionszeiten?", a: "Nein. Reaktionszeiten und Servicezeiten werden derzeit nicht zugesichert und würden erst in einem späteren Angebot definiert." },
        { q: "Kann ich aktuell ein Paket buchen?", a: "Nein. Während der Vorbereitungsphase werden über diese Website keine Aufträge angenommen." },
      ],
      items: [
        {
          name: "Starter",
          subtitle: "Assessment",

          best_for: "Status Quo Check",
          price: "ab 490 €",
          priceNote: "einmalig",
          duration: "1-2 Wochen",
          description:
            "Mögliches Modell für eine strukturierte Bestandsaufnahme mit priorisierten Empfehlungen.",
          features: [
            "Netzwerk-Audit (WLAN, LAN, Firewall)",
            "Security-Quickcheck (MFA, Backups)",
            "Dokumentation der Ist-Situation",
            "Konkreter Maßnahmenplan (Roadmap)",
            "Abschluss-Call zur Besprechung",

            "---",

            "Nicht enthalten: Technische Umsetzung / Fixes",
          ],
          cta: "Konzept ansehen",
          popular: false,
        },
        {
          name: "Growth",
          subtitle: "Umsetzung",

          best_for: "Problemlösung & Modernisierung",
          price: "ab 2.900 €",
          priceNote: "projektbasiert",
          duration: "2-6 Wochen",
          description:
            "Mögliches Modell für spätere Umsetzung klar priorisierter Verbesserungen.",
          features: [
            "VLAN-Segmentierung & Firewall-Härtung",
            "Wi-Fi-Optimierung (Abdeckung & Security)",
            "MFA-Rollout & Admin-Absicherung",
            "Backup-Konzept Prüfung & Anpassung",
            "Dokumentation & Übergabe",

            "---",

            "Nicht enthalten: Laufender Support",
          ],
          cta: "Konzept ansehen",
          popular: true,
        },
        {
          name: "Managed",
          subtitle: "Laufende Betreuung",

          best_for: "Sicherheit & Ruhe",
          price: "ab 890 €",
          priceNote: "pro Monat",
          duration: "fortlaufend (mtl. kündbar)",
          description:
            "Mögliches Modell für laufende Betreuung mit klaren Abläufen und Dokumentation.",
          features: [
            "Monitoring-Konzept (Netzwerk & Server)",
            "Patch-Management (OS & 3rd Party)",
            "Backup-Verifizierung (Restore-Tests)",
            "Schnelle Reaktion bei Störungen",
            "Monatliches Reporting",

            "---",

            "Nicht enthalten: Hardware-Kosten",
          ],
          cta: "Konzept ansehen",
          popular: false,
        },
      ],
    },
    en: {
      title: "Packages",
      subtitle: "Planned models without a current offer.",
      custom: {
        title: "Custom / Enterprise",
        desc: "Possible later extensions could include dedicated support, compliance assistance, or larger infrastructure projects.",
        cta: "View project status",
        href: "/en/contact",
      },
      faq: [
        { q: "Are packages and prices already binding?", a: "No. The packages only show a possible later structure. Prices, scope, and contract terms are not fixed yet." },
        { q: "Are response times defined already?", a: "No. Response and service hours are not currently guaranteed and would only be defined in a later offer." },
        { q: "Can I order a package now?", a: "No. During the preparation phase, no orders are accepted through this website." },
      ],
      items: [
        {
          name: "Starter",
          subtitle: "Assessment",

          best_for: "Status Quo Check",
          price: "from €490",
          priceNote: "one-time",
          duration: "1-2 weeks",
          description:
            "Possible model for a structured current-state review with prioritized recommendations.",
          features: [
            "Network audit",
            "Security quick check",
            "Endpoint baseline check (optional)",
            "M365 permissions quick scan (optional)",
            "Current state documentation",
            "Prioritized action list",
            "Final meeting",

            "---",

            "Not included: Implementation / Fixes",
          ],
          cta: "View concept",
          popular: false,
        },
        {
          name: "Growth",
          subtitle: "Implementation",

          best_for: "Problem Solving & Modernization",
          price: "from €2,900",
          priceNote: "project-based",
          duration: "2-6 weeks",
          description:
            "Possible model for later implementation of clearly prioritized improvements.",
          features: [
            "Everything from Starter",
            "VLAN segmentation",
            "Firewall optimization",
            "Wi-Fi improvements",
            "MFA rollout",
            "Backup concept",
            "MDM/EDR rollout or Copilot readiness pilot (selectable)",
            "Handover and documentation",

            "---",

            "Not included: Ongoing Support",
          ],
          cta: "View concept",
          popular: true,
        },
        {
          name: "Managed",
          subtitle: "Ongoing Support",

          best_for: "Security & Peace of Mind",
          price: "from €890",
          priceNote: "per month",
          duration: "ongoing",
          description:
            "Possible model for ongoing support with clear routines and documentation.",
          features: [
            "Monitoring concept",
            "Patch management",
            "Backup verification",
            "Incident response model",
            "Monthly reporting",
            "Defined responsibility model",
            "Add-on: Endpoint monitoring + patch compliance",

            "---",

            "Not included: Hardware costs",
          ],
          cta: "View concept",
          popular: false,
        },
      ],
    },
  },

  // Case studies / Referenzen
  caseStudies: {
    de: {
      title: "Referenzen",
      subtitle: "Projekte mit messbarer Wirkung.",
      items: [
        {
          slug: "netzwerk-modernisierung-handelsunternehmen",
          title: "Netzwerk-Modernisierung für Handelsunternehmen",
          tag: "Networking",
          context: "Handelsunternehmen (Wien), 40 MA, 3 Standorte.",
          problem: "VPN-Verbindungen brachen regelmäßig ab (ca. 3-4x täglich), Wi-Fi-Beschwerden an allen Standorten, ständige Support-Anfragen.",
          approach: "Netzwerk-Audit, VLAN-Segmentierung, Firewall-Bereinigung, neue Access Points, Monitoring eingerichtet.",
          result: "VPN-Ausfälle eliminiert, Wi-Fi-Abdeckung 100%, Netzwerk vollständig dokumentiert. Support-Tickets um 85% reduziert.",
          metrics: "0 VPN-Ausfälle, 98% Verfügbarkeit, -85% Support-Anfragen",
          tools: "Fortinet Box, Ubiquiti UniFi, Microsoft Azure",
        },
        {
          slug: "security-baseline-dienstleister",
          title: "Security Baseline für IT-Dienstleister",
          tag: "Security",
          context: "IT-Dienstleister (NÖ), 25 MA.",
          problem: "Keine MFA, geteilte Admin-Passwörter, Backups nie getestet, Security Score nur 32%, Audit-Vorbereitung erforderlich.",
          approach: "MFA-Rollout für alle User, Patch-Management automatisiert, Backup-Restore-Tests durchgeführt, Access Rights bereinigt.",
          result: "Security Score von 32% auf 85% erhöht, Audit-Vorbereitung abgeschlossen, Patch-Compliance auf 95% verbessert.",
          metrics: "Security Score: 32% → 85%, Patch-Compliance: 45% → 95%, MFA: 0% → 100%",
          tools: "Microsoft 365 Premium, Veeam Backup, Bitwarden",
        },
        {
          slug: "zero-trust-finanzberatung",
          title: "Zero Trust Migration für Finanzberatung",
          tag: "Security",
          context: "Finanzberatung (Wien), 35 MA, hybrid work.",
          problem: "Hybrid-Work verursachte Sicherheitslücken, keine Conditional Access, externe Partner mit zu breiten Rechten.",
          approach: "Identitäts-Audit, Conditional Access Policies, rollenbasierte Berechtigungen, privileged Access Management.",
          result: "Risky sign-ins blockiert (98%), Compliance mit Datenschutzanforderungen, externe Zugriffe kontrolliert.",
          metrics: "98% risky sign-ins blockiert, external access hits: 68 → 8, role coverage: 40% → 92%",
          tools: "Microsoft Entra ID, Conditional Access, Azure PIM",
        },
        {
          slug: "ransomware-resilience-produktion",
          title: "Ransomware Resilience für Produktion",
          tag: "Resilience",
          context: "Produktionsbetrieb (OÖ), 60 MA, geschäftskritische Daten.",
          problem: "Wenig Backup-Redundanz, Recovery-Strategie untestet, keine Incident-Runbooks.",
          approach: "Immutable Backups auf separater Infrastruktur, Recovery Drills durchgeführt, Incident Response Runbooks erstellt.",
          result: "RPO < 1h, RTO < 4h, Recovery erfolgreich in Simulationen getestet, Team trainiert.",
          metrics: "RPO: < 1h, RTO: < 4h, Recovery-Tests: 3x erfolgreich durchgeführt",
          tools: "Veeam, Air-gapped backup storage, Azure Backup",
        },
        {
          slug: "m365-sicherheit-compliance",
          title: "M365 Security & Compliance für Steuerberatung",
          tag: "Cloud Security",
          context: "Steuerberatung (Wien), 20 MA, DSGVO-relevant.",
          problem: "Unsichere Sharing-Defaults in SharePoint, keine DLP, Teams-Policies nicht gehärtet.",
          approach: "Security Baseline im M365 Tenant, Conditional Access, DLP-Regeln, Audit-Logging aktiviert.",
          result: "Sharing-Berechtigungen auf Least-Privilege reduziert, externe Shares blockiert, Audit-Trail vollständig.",
          metrics: "External shares: 340 → 12, DLP incidents detected: 1st month 8, Audit coverage: 100%",
          tools: "Microsoft 365, Purview, Conditional Access",
        },
      ],
    },
    en: {
      title: "Case Studies",
      subtitle: "Projects with measurable impact.",
      items: [
        {
          slug: "network-modernization-retail",
          title: "Network Modernization for Retail Company",
          tag: "Networking",
          context: "Retail Company (Vienna), 40 employees, 3 locations.",
          problem: "VPN connections dropped regularly (3-4x daily), Wi-Fi complaints at all locations, constant support tickets.",
          approach: "Network audit, VLAN segmentation, firewall cleanup, new access points, monitoring setup.",
          result: "VPN outages eliminated, 100% Wi-Fi coverage, network fully documented. Support tickets reduced by 85%.",
          metrics: "0 VPN outages, 98% uptime, -85% support tickets",
          tools: "Fortinet Box, Ubiquiti UniFi, Microsoft Azure",
        },
        {
          slug: "security-baseline-it-service",
          title: "Security Baseline for IT Service Provider",
          tag: "Security",
          context: "IT Service Provider (Lower Austria), 25 employees.",
          problem: "No MFA, shared admin passwords, untested backups, Security Score only 32%, audit prep needed.",
          approach: "MFA rollout for all users, automated patch management, backup restore tests, access rights cleanup.",
          result: "Security Score increased from 32% to 85%, audit ready, patch compliance improved to 95%.",
          metrics: "Security Score: 32% → 85%, Patch Compliance: 45% → 95%, MFA: 0% → 100%",
          tools: "Microsoft 365 Premium, Veeam Backup, Bitwarden",
        },
        {
          slug: "zero-trust-fintech",
          title: "Zero Trust Implementation for Financial Advisory",
          tag: "Security",
          context: "Financial Advisory (Vienna), 35 employees, hybrid work.",
          problem: "Hybrid work created security gaps, no Conditional Access, external partners with overly broad permissions.",
          approach: "Identity audit, Conditional Access policies, role-based permissions, privileged access management.",
          result: "Risky sign-ins blocked (98%), compliance with data protection requirements, external access controlled.",
          metrics: "98% risky sign-ins blocked, risky access: 68 → 8, role coverage: 40% → 92%",
          tools: "Microsoft Entra ID, Conditional Access, Azure PIM",
        },
        {
          slug: "ransomware-recovery-manufacturing",
          title: "Ransomware Resilience for Manufacturing",
          tag: "Resilience",
          context: "Manufacturing Company (Upper Austria), 60 employees, business-critical data.",
          problem: "Limited backup redundancy, untested recovery strategy, no incident runbooks.",
          approach: "Immutable backups on separate infrastructure, recovery drills, incident response runbooks.",
          result: "RPO < 1h, RTO < 4h, recovery successfully tested, team trained.",
          metrics: "RPO: < 1h, RTO: < 4h, recovery tests: 3x successful",
          tools: "Veeam, air-gapped backup, Azure Backup",
        },
        {
          slug: "m365-security-audit",
          title: "M365 Security & Compliance for Tax Advisory",
          tag: "Cloud Security",
          context: "Tax Advisory (Vienna), 20 employees, GDPR-relevant.",
          problem: "Unsafe SharePoint sharing defaults, no DLP, Teams policies not hardened.",
          approach: "Security baseline in M365 tenant, Conditional Access, DLP rules, audit logging enabled.",
          result: "Sharing permissions reduced to least-privilege, external shares blocked, full audit trail.",
          metrics: "External shares: 340 → 12, DLP incidents detected: 8 in first month, Audit coverage: 100%",
          tools: "Microsoft 365, Purview, Conditional Access",
        },
      ],
    },
  },

  // FAQs
  faqs: {
    de: {
      title: "Häufig gestellte Fragen",
      items: [
        { q: "Wie lange dauert ein Projekt?", a: "Das hängt vom Umfang ab. Das Security Baseline Assessment dauert 1-2 Wochen, die Umsetzung typischerweise 2-6 Wochen. Managed Services laufen fortlaufend." },
        { q: "Wird die Umsetzung unseren Betrieb stören?", a: "Nein, wir planen Änderungen außerhalb der Betriebszeiten und testen alles gründlich. Bei kritischen Systemen machen wir Rollbacks möglich." },
        { q: "Was passiert nach dem Projekt?", a: "Sie erhalten vollständige Dokumentation, Runbooks und Training. Sie können uns dann für Managed Services engagieren oder eigenständig weiterarbeiten." },
        { q: "Sind die Modelle bereits buchbar?", a: "Nein. Die dargestellten Modelle dokumentieren nur den aktuellen Planungsstand und sind noch keine Angebote." },
        { q: "Stehen die Preise bereits fest?", a: "Nein. Preise, Leistungsumfang und Vertragsbedingungen werden erst vor einem späteren Marktstart verbindlich festgelegt." },
        { q: "Garantiert ihr 100% Security?", a: "Niemand kann das. Wir bauen eine solid Security Baseline nach Best Practices, regelmäßige Updates und Monitoring." },
        { q: "Welche Reaktionszeit ist vorgesehen?", a: "Reaktionszeiten und Servicezeiten sind noch nicht festgelegt und werden derzeit nicht zugesichert." },
        { q: "Helft ihr auch bei Compliance (ISO, DSGVO)?", a: "Ja, wir bieten NIS2/Compliance Readiness. Das ist kein Audit-Siegel, aber eine audit-fähige Sicherheitsbasis." },
      ],
    },
    en: {
      title: "Frequently Asked Questions",
      items: [
        { q: "How long does a project take?", a: "It depends on scope. The Security Baseline Assessment takes 1-2 weeks, implementation typically 2-6 weeks. Managed Services run continuously." },
        { q: "Will implementation disrupt our operations?", a: "No, we schedule changes outside business hours and test thoroughly. For critical systems, we ensure rollback capability." },
        { q: "What happens after the project?", a: "You receive full documentation, runbooks, and training. You can then engage us for Managed Services or continue independently." },
        { q: "Can these models be ordered already?", a: "No. The models shown only document the current planning stage and are not offers." },
        { q: "Are prices already fixed?", a: "No. Prices, scope, and contract terms will only be defined before a future market launch." },
        { q: "Do you guarantee 100% security?", a: "No one can. We build a solid security baseline per best practices, with regular updates and monitoring." },
        { q: "What response time is planned?", a: "Response and service hours are not yet defined and are not currently guaranteed." },
        { q: "Do you help with compliance (ISO, GDPR)?", a: "Yes, we offer NIS2/Compliance Readiness. It's not an audit seal, but audit-ready security fundamentals." },
      ],
    },
  },

  // Contact page
  contact: {
    de: {
      title: "Kostenloses Erstgespräch vereinbaren",
      subtitle:
        "Erzählen Sie uns von Ihrer Situation. Wir melden uns innerhalb von 24 Stunden.",
      form: {
        name: "Name",
        email: "E-Mail",
        company: "Unternehmen",
        message: "Wie können wir helfen?",
        submit: "Nachricht senden",
      },
    },
    en: {
      title: "Schedule a Free Initial Consultation",
      subtitle:
        "Tell us about your situation. We will get back to you within 24 hours.",
      form: {
        name: "Name",
        email: "Email",
        company: "Company",
        message: "How can we help?",
        submit: "Send Message",
      },
    },
  },

  // Why us section
  whyUs: {
    de: {
      title: "Warum Elkaza?",
      lead: "Pragmatisch, partnerschaftlich, technisch fundiert.",
      bullets: [
        "Übergabepaket: Dokumentation, Runbooks, Zugangsliste",
        "Baseline-Metriken: Patch-Stand, Backup-Status, MFA-Quote",
        "Saubere Segmentierung statt Flat Network",
        "Monitoring ab Tag 1, Alerting bei kritischen Events",
        "Fester Ansprechpartner, klare Kommunikation",
        "Ergebnisse messbar, wo möglich",
      ],
    },
    en: {
      title: "Why Elkaza?",
      lead: "Pragmatic, partnership-oriented, technically sound.",
      bullets: [
        "Handover pack: documentation, runbooks, access list",
        "Baseline metrics: patch status, backup health, MFA coverage",
        "Clean segmentation instead of flat network",
        "Monitoring from day 1, alerting on critical events",
        "Dedicated contact, clear communication",
        "Measurable results where possible",
      ],
    },
  },
};

export type Locale = "de" | "en";
