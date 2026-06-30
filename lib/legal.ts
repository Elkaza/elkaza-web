export const legal = {
  de: {
    title: 'Impressum und Projektstatus',
    operatorLine: 'Elkaza ist eine private Projektwebsite in Vorbereitung.',
    owner: '',
    address: {
      street: 'ADDRESS_LINE',
      cityLine: '1200 Wien',
      country: 'Österreich',
    },
    contact: {
      email: '',
      phone: '',
      contactForm: '/kontakt',
    },
    businessPurpose: 'Konzeption einer möglichen zukünftigen Tätigkeit in den Bereichen IT-Infrastruktur, Netzwerk, Security und Automation. Derzeit kein Dienstleistungsangebot und keine Auftragsannahme.',
    companyRegister: '',
    vatId: '',
    authority: 'Derzeit keine gewerbliche Leistungserbringung über diese Website.',
    regulationsUrl:
      'https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10001122',
  },
  en: {
    title: 'Legal notice and project status',
    operatorLine: 'Elkaza is a private project website in preparation.',
    owner: '',
    address: {
      street: 'ADDRESS_LINE',
      cityLine: '1200 Vienna',
      country: 'Austria',
    },
    contact: {
      email: '',
      phone: '',
      contactForm: '/en/contact',
    },
    businessPurpose: 'Planning a possible future activity in IT infrastructure, networking, security, and automation. No services are currently offered and no orders are accepted.',
    companyRegister: '',
    vatId: '',
    authority: 'No commercial services are currently provided through this website.',
    regulationsUrl:
      'https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10001122',
  },
};

export type Legal = typeof legal;
