import React from 'react';
import { BrainCircuit, Code, Brush, Rocket } from 'lucide-react';

type Service = {
  icon: React.ElementType;
  title: string;
  description: string;
};

const servicesDataDE: Service[] = [
  {
    icon: BrainCircuit,
    title: 'KI-gestützte Lösungen',
    description:
      'Wir integrieren fortschrittliche KI-Modelle wie Google Gemini, um Prozesse zu automatisieren, Einblicke zu gewinnen und intelligente Benutzererlebnisse zu schaffen.',
  },
  {
    icon: Code,
    title: 'Moderne Webentwicklung',
    description:
      'Erstellung von hochperformanten, skalierbaren Webanwendungen mit Next.js, TypeScript und den neuesten Branchenstandards für eine nahtlose digitale Präsenz.',
  },
  {
    icon: Brush,
    title: 'Intuitives UI/UX Design',
    description:
      'Unser benutzerzentrierter Ansatz stellt sicher, dass Ihr Produkt nicht nur ästhetisch, sondern auch einfach zu bedienen ist, was die Zufriedenheit und das Engagement der Nutzer steigert.',
  },
  {
    icon: Rocket,
    title: 'Performance & SEO',
    description:
      'Wir optimieren für Geschwindigkeit und Suchmaschinen, damit Ihre Website sofort lädt, ein höheres Ranking erreicht und ein breiteres Publikum anspricht.',
  },
];

export default function ServicesSectionDE() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {servicesDataDE.map((service, index) => {
        const Icon = service.icon;
        return (
          <div
            key={index}
            className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:bg-gray-900 dark:border-gray-700"
          >
            <Icon className="h-10 w-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}

