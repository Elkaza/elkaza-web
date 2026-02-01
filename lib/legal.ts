export const legal = {
  de: {
    title: 'Angaben gemäß § 5 ECG',
    operatorLine: 'Elkaza Consulting (in Gründung)',
    owner: '',
    address: {
      street: 'ADDRESS_LINE',
      cityLine: '1200 Wien',
      country: 'Österreich',
    },
    contact: {
      email: 'contact@elkaza.at',
      phone: '',
      contactForm: '/kontakt',
    },
    businessPurpose: 'IT-Infrastruktur, Netzwerk, Security, Automation',
    companyRegister: '',
    vatId: '',
    authority: 'zuständige Gewerbebehörde in Wien',
    regulationsUrl:
      'https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10001122',
  },
  en: {
    title: 'Legal disclosure (Austria)',
    operatorLine: 'Elkaza Consulting (in formation)',
    owner: '',
    address: {
      street: 'ADDRESS_LINE',
      cityLine: '1200 Vienna',
      country: 'Austria',
    },
    contact: {
      email: 'contact@elkaza.at',
      phone: '',
      contactForm: '/en/contact',
    },
    businessPurpose: 'IT infrastructure, networking, security, automation',
    companyRegister: '',
    vatId: '',
    authority: 'competent trade authority in Vienna',
    regulationsUrl:
      'https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10001122',
  },
};

export type Legal = typeof legal;
