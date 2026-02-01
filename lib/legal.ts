export const legal = {
  de: {
    title: 'Angaben gemäß § 5 ECG',
    operatorLine: 'Elkaza Consulting (in Gründung)',
    owner: 'Mohamed Elkaza',
    // Temporary placeholder: use ONLY "1200 Wien" here in code until full address is available.
    // TODO: Replace with full service address before public launch (vollständige ladungsfähige Anschrift).
    address: {
      street: '1200 Wien (TODO: vollständige ladungsfähige Anschrift ergänzen vor Launch)',
      postalCode: '',
      city: 'Wien',
      country: 'Österreich',
    },
    contact: {
      email: 'contact@elkaza.at',
      // TODO: add a real phone number before public launch, or remove this field.
      phone: 'TODO: add phone before launch',
      contactForm: '/kontakt',
    },
    businessPurpose: 'IT-Infrastruktur, Netzwerk, Security, Automation',
    companyRegister: 'entfällt (derzeit nicht eingetragen)',
    vatId: 'entfällt (derzeit nicht vorhanden)',
    authority: 'zuständige Gewerbebehörde in Wien',
    regulationsUrl:
      'https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10001122',
  },
  en: {
    title: 'Legal disclosure (Austria)',
    operatorLine: 'Elkaza Consulting (in formation)',
    owner: 'Mohamed Elkaza',
    // Temporary placeholder: use ONLY "1200 Wien" here in code until full address is available.
    // TODO: Replace with full service address before public launch.
    address: {
      street: '1200 Wien (TODO: replace with full service address before public launch)',
      postalCode: '',
      city: 'Vienna',
      country: 'Austria',
    },
    contact: {
      email: 'contact@elkaza.at',
      phone: 'TODO: add phone before launch',
      contactForm: '/en/contact',
    },
    businessPurpose: 'IT infrastructure, networking, security, automation',
    companyRegister: 'not registered (currently not registered)',
    vatId: 'not available (currently not available)',
    authority: 'competent trade authority in Vienna',
    regulationsUrl:
      'https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10001122',
  },
};

export type Legal = typeof legal;
