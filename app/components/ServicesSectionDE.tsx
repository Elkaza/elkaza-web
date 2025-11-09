import React from 'react';
import { BrainCircuit, Code, Brush, Rocket } from 'lucide-react';

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
}

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

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-gray-50 dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            Unsere Kernkompetenzen
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Technische Exzellenz, Designpräzision und strategische Beratung – vereint in einem modernen IT-Portfolio.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesDataDE.map((service, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-900/50 p-8 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-blue-500 dark:hover:border-blue-500 transform hover:-translate-y-2 transition-all duration-300 ease-in-out"
            >
              <div className="mb-6">
                <div className="inline-block bg-gray-100 dark:bg-gray-800 p-4 rounded-lg group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors duration-300">
                  {(() => {
                    const Icon = service.icon;
                    return (
                      <Icon className="h-8 w-8 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300" />
                    );
                  })()}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

