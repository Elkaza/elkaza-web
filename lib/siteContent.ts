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
      "Fokus: KMU (10-200 User)",
      "Microsoft & Open Source",
      "Persönlicher Ansprechpartner",
      "Schnelle Reaktionszeit",
    ],
    en: [
      "Location: Vienna",
      "Focus: SMEs (10-200 Users)",
      "Microsoft & Open Source",
      "Dedicated Contact",
      "Fast Response Time",
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
      { step: 1, title: "Kennenlernen", desc: "15 Min Call: Passen wir zusammen?" },
      { step: 2, title: "Analyse", desc: "Status-Quo Check & Quick-Wins." },
      { step: 3, title: "Konzept", desc: "Roadmap für Sicherheit & Stabilität." },
      { step: 4, title: "Umsetzung", desc: "Wir setzen die Lösungen um." },
      { step: 5, title: "Betrieb", desc: "Laufende Betreuung & Updates." },
    ],
    en: [
      { step: 1, title: "Discovery", desc: "15 min call: Are we a match?" },
      { step: 2, title: "Analysis", desc: "Status quo check & quick wins." },
      { step: 3, title: "Concept", desc: "Roadmap for security & stability." },
      { step: 4, title: "Implementation", desc: "We implement the solutions." },
      { step: 5, title: "Operations", desc: "Ongoing support & updates." },
    ],
  },

  // Homepage hero
  hero: {
    de: {
      headline: "IT-Infrastruktur & Security für KMUs in Wien.",
      subheadline:
        "Netzwerk, Security, Automation. Weniger Ausfälle, sichere Daten und mehr Zeit für Ihr Kerngeschäft.",
      primaryCta: "15-Minuten Erstgespräch",
      primaryCtaHref: "/kontakt",
      secondaryCta: "Fallstudien ansehen",
      secondaryCtaHref: "/referenzen",
    },
    en: {
      headline: "IT Infrastructure & Security for SMEs in Vienna.",
      subheadline:
        "Networking, Security, Automation. Fewer outages, secure data, and more time for your core business.",
      primaryCta: "Book a 15-minute call",
      primaryCtaHref: "/en/contact",
      secondaryCta: "View case studies",
      secondaryCtaHref: "/en/case-studies",
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
      custom: {
        title: "Individuell / Enterprise",
        desc: "Sie brauchen mehr? Dedizierte Teams, 24/7 SLA oder Compliance-Support (ISO, TISAX)?",
        cta: "Individuelles Angebot anfordern",
        href: "/kontakt",
      },
      faq: [
        { q: "Wie wird abgerechnet?", a: "Starter & Growth sind Fixpreis-Projekte. Managed Services werden monatlich abgerechnet, kündbar zum Monatsende." },
        { q: "Wie schnell ist die Reaktion?", a: "Im Managed-Paket garantieren wir < 4 Stunden Reaktionszeit bei kritischen Problemen. Für Projekte gelten vereinbarte Meilensteine." },
        { q: "Was zählt als Notfall?", a: "Ausfall kritischer Systeme (Server, Firewall, komplettes Netzwerk). Einzelne User-Probleme werden priorisiert behandelt." },
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
            "Bestandsaufnahme Ihrer IT-Infrastruktur mit konkreten Handlungsempfehlungen.",
          features: [
            "Netzwerk-Audit (WLAN, LAN, Firewall)",
            "Security-Quickcheck (MFA, Backups)",
            "Dokumentation der Ist-Situation",
            "Konkreter Maßnahmenplan (Roadmap)",
            "Abschluss-Call zur Besprechung",

            "---",

            "Nicht enthalten: Technische Umsetzung / Fixes",
          ],
          cta: "Assessment anfragen",
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
            "Wir setzen die wichtigsten Verbesserungen direkt um (Done-For-You).",
          features: [
            "VLAN-Segmentierung & Firewall-Härtung",
            "Wi-Fi-Optimierung (Abdeckung & Security)",
            "MFA-Rollout & Admin-Absicherung",
            "Backup-Konzept Prüfung & Anpassung",
            "Dokumentation & Übergabe",

            "---",

            "Nicht enthalten: Laufender Support",
          ],
          cta: "15-Min Erstgespräch",
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
            "Wir kümmern uns dauerhaft im Hintergrund um Ihre Infrastruktur.",
          features: [
            "24/7 Monitoring (Netzwerk & Server)",
            "Patch-Management (OS & 3rd Party)",
            "Backup-Verifizierung (Restore-Tests)",
            "Schnelle Reaktion bei Störungen",
            "Monatliches Reporting",

            "---",

            "Nicht enthalten: Hardware-Kosten",
          ],
          cta: "Angebot anfordern",
          popular: false,
        },
      ],
    },
    en: {
      title: "Packages",
      subtitle: "Clear services, fair prices.",
      custom: {
        title: "Custom / Enterprise",
        desc: "Need more? Dedicated teams, 24/7 SLA, or compliance support (ISO, TISAX)?",
        cta: "Request Custom Quote",
        href: "/en/contact",
      },
      faq: [
        { q: "How is billing handled?", a: "Starter & Growth are fixed-price projects. Managed Services are billed monthly, cancelable at month-end." },
        { q: "What is the response time?", a: "In the Managed package, we guarantee < 4 hours response time for critical issues. Projects follow agreed milestones." },
        { q: "What counts as an emergency?", a: "Outage of critical systems (Server, Firewall, complete network). Individual user issues are prioritized." },
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
            "Inventory of your IT infrastructure with concrete recommendations.",
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
          cta: "Request Assessment",
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

            "---",

            "Not included: Ongoing Support",
          ],
          cta: "Discuss Project",
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
            "We take care of your infrastructure continuously.",
          features: [
            "24/7 monitoring",
            "Patch management",
            "Backup verification",
            "Incident response (SLA)",
            "Monthly reporting",
            "Dedicated contact person",
            "Add-on: Endpoint monitoring + patch compliance",

            "---",

            "Not included: Hardware costs",
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
          context: "Handelsunternehmen (Wien), 40 MA, 3 Standorte.",
          problem: "VPN-Verbindungen brachen regelmäßig ab, Wi-Fi-Beschwerden an allen Standorten.",
          approach: "Netzwerk-Audit, VLAN-Segmentierung, Firewall-Bereinigung, neue Access Points.",
          result: "VPN-Ausfälle eliminiert, Wi-Fi-Abdeckung 100%, Netzwerk dokumentiert.",
          tools: "Fortinet Box, Ubiquiti UniFi, Microsoft Azure",
        },
        {
          slug: "security-baseline-dienstleister",
          title: "Security Baseline für IT-Dienstleister",
          tag: "Security",
          context: "IT-Dienstleister (NÖ), 25 MA.",
          problem: "Keine MFA, geteilte Admin-Passwörter, Backups nie getestet.",
          approach: "MFA-Rollout, Patch-Management aufgesetzt, Backup-Restore verifiziert.",
          result: "Security Score von 32% auf 85% erhöht. Audit-Vorbereitung abgeschlossen.",
          tools: "Microsoft 365 Premium, Veeam Backup, Bitwarden",
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
          problem: "VPN connections dropped regularly, Wi-Fi complaints at all locations.",
          approach: "Network audit, VLAN segmentation, firewall cleanup, new access points.",
          result: "VPN outages eliminated, 100% Wi-Fi coverage, network documented.",
          tools: "Fortinet Box, Ubiquiti UniFi, Microsoft Azure",
        },
        {
          slug: "security-baseline-it-service",
          title: "Security Baseline for IT Service Provider",
          tag: "Security",
          context: "IT Service Provider (Lower Austria), 25 employees.",
          problem: "No MFA, shared admin passwords, backups never tested.",
          approach: "MFA rollout, patch management setup, backup restore verified.",
          result: "Security Score increased from 32% to 85%. Audit ready.",
          tools: "Microsoft 365 Premium, Veeam Backup, Bitwarden",
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
