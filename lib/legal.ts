export const legal = {
  de: {
    title: 'Angaben gemäß § 5 ECG',
    operatorLine: 'Elkaza Consulting (Einzelunternehmen in Gründung)',
    owner: 'Dipl.-Ing. Mohamed Elkaza',
    address: {
      street: '[Straße und Hausnummer]',
      postalCode: '[PLZ]',
      city: 'Wien',
      country: 'Österreich',
    },
    contact: {
      email: '[email@example.com]',
      phone: '[Telefonnummer]',
      contactForm: '/kontakt',
    },
    businessPurpose: 'IT-Infrastruktur, Netzwerk, Security, Automation',
    companyRegister: 'nicht eingetragen',
    vatId: 'nicht vorhanden',
    authority: 'zuständige Gewerbebehörde in Wien',
    regulationsUrl:
      'https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10001122',
  },
  en: {
    title: 'Legal disclosure (Austria)',
    operatorLine: 'Elkaza Consulting (sole proprietorship, forming)',
    owner: 'Dipl.-Ing. Mohamed Elkaza',
    address: {
      street: '[Street and house number]',
      postalCode: '[Postal code]',
      city: 'Vienna',
      country: 'Austria',
    },
    contact: {
      email: '[email@example.com]',
      phone: '[phone number]',
      contactForm: '/en/contact',
    },
    businessPurpose: 'IT infrastructure, networking, security, automation',
    companyRegister: 'not registered',
    vatId: 'not available',
    authority: 'competent trade authority in Vienna',
    regulationsUrl:
      'https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10001122',
  },
};

export type Legal = typeof legal;
