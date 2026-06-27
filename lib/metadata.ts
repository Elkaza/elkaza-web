import { Metadata } from 'next';
import { getAlternates } from '@/lib/i18nPaths';

const BASE_URL = 'https://elkaza.at';

export function createLocalizedMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const { dePath, enPath } = getAlternates(path);

  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: {
        'de-AT': dePath,
        en: enPath,
        'x-default': dePath,
      },
    },
    openGraph: {
      title,
      description,
      url: path,
      locale: path === '/en' || path.startsWith('/en/') ? 'en_US' : 'de_AT',
      type: 'website',
    },
  };
}

export interface ServiceMetadataProps {
  slug: string;
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  locale?: 'de' | 'en';
}

/**
 * Generates comprehensive SEO metadata for service pages
 * Includes Open Graph, structured data, and social sharing optimizations
 */
export function generateServiceMetadata(props: ServiceMetadataProps): Metadata {
  const {
    slug,
    title,
    description,
    keywords = [],
    ogImage = `${BASE_URL}/opengraph-image.png`,
    locale = 'de',
  } = props;

  const url = locale === 'en' ? `${BASE_URL}/en/services/${slug}` : `${BASE_URL}/leistungen/${slug}`;
  const canonicalUrl = url;

  // Combine keywords for SEO
  const allKeywords = [
    ...keywords,
    'Security',
    'IT Infrastructure',
    'Wien',
    'Austria',
    locale === 'en' ? 'Information Security' : 'Informationssicherheit',
  ];

  return {
    title,
    description,
    keywords: allKeywords,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: 'website',
      url: canonicalUrl,
      title,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      siteName: 'Elkaza Consulting',
      locale: locale === 'en' ? 'en_US' : 'de_AT',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  };
}

/**
 * Generates structured data (Schema.org) for service pages
 * Improves search engine understanding and rich snippets
 */
export function generateServiceSchema(props: ServiceMetadataProps) {
  const {
    slug,
    title,
    description,
    locale = 'de',
  } = props;

  const url = locale === 'en' ? `https://elkaza.at/en/services/${slug}` : `https://elkaza.at/leistungen/${slug}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: title,
    description,
    url,
    areaServed: {
      '@type': 'Place',
      name: locale === 'en' ? 'Austria, Vienna' : 'Österreich, Wien',
    },
    provider: {
      '@type': 'Organization',
      name: 'Elkaza Consulting',
      url: 'https://elkaza.at',
      logo: 'https://elkaza.at/logo.png',
    },
    potentialAction: {
      '@type': 'ReserveAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: locale === 'en' ? 'https://elkaza.at/en/contact' : 'https://elkaza.at/kontakt',
      },
    },
  };
}
