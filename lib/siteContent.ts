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
      "Dokumentation: hoch",
      "Security by Design",
      "Standort: Wien",
      "Fokus: KMU",
      "Stack: M365 / OPNsense / Veeam",
    ],
    en: [
      "Documentation Level: High",
      "Security-by-Design",
      "Based in Vienna",
      "Focus: SMEs",
      "Stack: M365 / OPNsense / Veeam",
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

  // Homepage hero
  hero: {
    de: {
      headline: "Netzwerke, die laufen. Security, die mitdenkt.",
      subheadline:
        "Wir bauen stabile IT-Infrastruktur für wachsende Teams: Netzwerk, Sicherheit und Automatisierung aus einer Hand.",
      primaryCta: "Kostenloses Erstgespräch",
      primaryCtaHref: "/kontakt",
      secondaryCta: "Pakete ansehen",
      secondaryCtaHref: "/pakete",
    },
    en: {
      headline: "Networks that run. Security that thinks ahead.",
      subheadline:
        "We build stable IT infrastructure for growing teams: networking, security, and automation from a single source.",
      primaryCta: "Free Initial Consultation",
      primaryCtaHref: "/en/contact",
      secondaryCta: "View Packages",
      secondaryCtaHref: "/en/packages",
    },
  },

  // Pain point cards
  painPoints: {
    de: [
      {
        title: "Netzwerk instabil?",
        description:
          "Wi-Fi-Ausfälle, langsame VPN-Verbindungen, ständige Beschwerden vom Team.",
      },
      {
        title: "Security unübersichtlich?",
        description:
          "Firewall-Regeln gewachsen, VLANs unklar, Zugriffsrechte schwer nachvollziehbar.",
      },
      {
        title: "Kein Überblick bei Störungen?",
        description:
          "Fehlende Überwachung, keine Runbooks, Incidents dauern zu lange.",
      },
    ],
    en: [
      {
        title: "Unstable network?",
        description:
          "Wi-Fi outages, slow VPN connections, constant complaints from the team.",
      },
      {
        title: "Security unclear?",
        description:
          "Firewall rules grown over time, VLANs unclear, access rights hard to track.",
      },
      {
        title: "No incident overview?",
        description:
          "Missing monitoring, no runbooks, incidents take too long to resolve.",
      },
    ],
  },

  // Services
  services: {
    de: {
      overview: {
        title: "Unsere Leistungen",
        subtitle: "Zehn Bereiche, ein Ziel: verlässliche IT-Infrastruktur.",
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
            "24/7 Monitoring Ihrer Systeme",
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
        title: "Our Services",
        subtitle: "Ten areas, one goal: reliable IT infrastructure.",
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
            "24/7 monitoring of your systems",
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
            "Dedicated contact person",
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
      subtitle: "Klare Leistungen, faire Preise.",
      items: [
        {
          name: "Starter",
          subtitle: "Assessment",
          price: "ab 490 €",
          priceNote: "einmalig",
          duration: "1-2 Wochen",
          description:
            "Bestandsaufnahme Ihrer IT-Infrastruktur mit konkreten Handlungsempfehlungen.",
          features: [
            "Netzwerk-Audit",
            "Security-Quickcheck",
            "Endpoint-Baseline-Check (optional)",
            "M365-Berechtigungen Quickscan (optional)",
            "Dokumentation des Ist-Zustands",
            "Priorisierte Maßnahmenliste",
            "Abschlussbesprechung",
          ],
          cta: "Assessment anfragen",
          popular: false,
        },
        {
          name: "Growth",
          subtitle: "Umsetzung",
          price: "ab 2.900 €",
          priceNote: "projektbasiert",
          duration: "2-6 Wochen",
          description:
            "Wir setzen die wichtigsten Verbesserungen direkt um.",
          features: [
            "Alles aus Starter",
            "VLAN-Segmentierung",
            "Firewall-Optimierung",
            "Wi-Fi-Verbesserungen",
            "MFA-Rollout",
            "Backup-Konzept",
            "MDM/EDR-Rollout oder Copilot-Readiness-Pilot (wählbar)",
            "Übergabe und Dokumentation",
          ],
          cta: "Projekt besprechen",
          popular: true,
        },
        {
          name: "Managed",
          subtitle: "Laufende Betreuung",
          price: "ab 890 €",
          priceNote: "pro Monat",
          duration: "fortlaufend",
          description:
            "Wir kümmern uns dauerhaft um Ihre Infrastruktur.",
          features: [
            "24/7 Monitoring",
            "Patch-Management",
            "Backup-Verifizierung",
            "Incident-Response (SLA)",
            "Monatliches Reporting",
            "Fester Ansprechpartner",
            "Add-on: Endpoint-Monitoring + Patch-Compliance",
          ],
          cta: "Angebot anfordern",
          popular: false,
        },
      ],
    },
    en: {
      title: "Packages",
      subtitle: "Clear services, fair prices.",
      items: [
        {
          name: "Starter",
          subtitle: "Assessment",
          price: "from €490",
          priceNote: "one-time",
          duration: "1-2 weeks",
          description:
            "Inventory of your IT infrastructure with concrete recommendations.",
          features: [
            "Network audit",
            "Security quick check",
            "Endpoint baseline check (optional)",
            "M365 permissions quick scan (optional)",
            "Current state documentation",
            "Prioritized action list",
            "Final meeting",
          ],
          cta: "Request Assessment",
          popular: false,
        },
        {
          name: "Growth",
          subtitle: "Implementation",
          price: "from €2,900",
          priceNote: "project-based",
          duration: "2-6 weeks",
          description:
            "We implement the most important improvements directly.",
          features: [
            "Everything from Starter",
            "VLAN segmentation",
            "Firewall optimization",
            "Wi-Fi improvements",
            "MFA rollout",
            "Backup concept",
            "MDM/EDR rollout or Copilot readiness pilot (selectable)",
            "Handover and documentation",
          ],
          cta: "Discuss Project",
          popular: true,
        },
        {
          name: "Managed",
          subtitle: "Ongoing Support",
          price: "from €890",
          priceNote: "per month",
          duration: "ongoing",
          description:
            "We take care of your infrastructure continuously.",
          features: [
            "24/7 monitoring",
            "Patch management",
            "Backup verification",
            "Incident response (SLA)",
            "Monthly reporting",
            "Dedicated contact person",
            "Add-on: Endpoint monitoring + patch compliance",
          ],
          cta: "Request Quote",
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
          meta: "KMU · ca. 40 Mitarbeitende · 3 Standorte",
          summary:
            "Stabile Verbindungen für 3 Standorte, Wi-Fi-Abdeckung optimiert, VPN-Ausfälle eliminiert.",
          results: [
            "Keine VPN-Ausfälle mehr im Tagesgeschäft",
            "Deutlich weniger Wi-Fi-Beschwerden",
            "Dokumentierte Netzwerktopologie",
          ],
        },
        {
          slug: "security-baseline-dienstleister",
          title: "Security Baseline für IT-Dienstleister",
          tag: "Security",
          meta: "KMU · ca. 25 Mitarbeitende · 1 Standort",
          summary:
            "Grundlegende Absicherung: MFA, Patching, Backups und klare Zugriffsrechte.",
          results: [
            "MFA für alle Mitarbeiter aktiv",
            "Patch-Zyklen automatisiert",
            "Backup-Konzept geprüft und dokumentiert",
          ],
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
          meta: "SME · ~40 employees · 3 locations",
          summary:
            "Stable connections for 3 locations, optimized Wi-Fi coverage, eliminated VPN outages.",
          results: [
            "No more VPN outages during daily operations",
            "Significantly fewer Wi-Fi complaints",
            "Documented network topology",
          ],
        },
        {
          slug: "security-baseline-it-service",
          title: "Security Baseline for IT Service Provider",
          tag: "Security",
          meta: "SME · ~25 employees · 1 location",
          summary:
            "Basic security: MFA, patching, backups, and clear access rights.",
          results: [
            "MFA active for all employees",
            "Automated patch cycles",
            "Backup concept verified and documented",
          ],
        },
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
        "Dokumentation und Übergabe inklusive",
        "Saubere Segmentierung (VLANs) statt Flat Network",
        "Monitoring und klare Runbooks für Störungen",
        "Security-Baseline: MFA, Patch, Backup, Logging",
        "Klare Kommunikation, feste Ansprechpartner",
        "Messbare Ergebnisse, wo möglich",
      ],
    },
    en: {
      title: "Why Elkaza?",
      lead: "Pragmatic, partnership-oriented, technically sound.",
      bullets: [
        "Documentation and handover included",
        "Clean segmentation (VLANs) instead of flat network",
        "Monitoring and clear runbooks for incidents",
        "Security baseline: MFA, patching, backup, logging",
        "Clear communication, dedicated contacts",
        "Measurable results where possible",
      ],
    },
  },
};

export type Locale = "de" | "en";
