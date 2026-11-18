import { absolute, site } from '../config';
import type { FaqItem } from '../data/home';

const organization = {
  '@type': ['Organization', 'ProfessionalService'],
  '@id': `${site.url}/#org`,
  name: site.legalName,
  alternateName: site.name,
  url: `${site.url}/`,
  logo: absolute('/brand/ec-logo-full-black.png'),
  image: absolute('/og/og-default.png'),
  description: site.schemaDescription,
  email: site.email,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Novi Sad',
    addressCountry: 'RS',
  },
  areaServed: [
    { '@type': 'Country', name: 'US' },
    { '@type': 'Country', name: 'CA' },
    { '@type': 'Country', name: 'IN' },
    { '@type': 'Place', name: 'Europe' },
  ],
  knowsAbout: [
    'Embedded systems',
    'Electronics product development',
    'PCB design',
    'Embedded firmware',
    'STM32',
    'ESP32',
    'CAN bus',
    'RS485',
    'Design for manufacturing',
    'EMC pre-compliance',
  ],
  sameAs: [site.linkedin, site.x, site.github],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    email: site.email,
    availableLanguage: ['English'],
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Engineering services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hardware and PCB design' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Embedded firmware development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Software and connectivity' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mechanical design and production transfer' } },
    ],
  },
};

const website = {
  '@type': 'WebSite',
  '@id': `${site.url}/#website`,
  url: `${site.url}/`,
  name: site.name,
  description: site.description,
  publisher: { '@id': `${site.url}/#org` },
  inLanguage: 'en',
};

export function webPage() {
  return {
    '@type': 'WebPage',
    '@id': `${site.url}/#webpage`,
    url: `${site.url}/`,
    name: site.title,
    description: site.description,
    isPartOf: { '@id': `${site.url}/#website` },
    about: { '@id': `${site.url}/#org` },
    inLanguage: 'en',
  };
}

export function graph(...nodes: Record<string, unknown>[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': [organization, website, ...nodes],
  };
}

export function faqPage(items: FaqItem[]) {
  return {
    '@type': 'FAQPage',
    '@id': `${site.url}/#faq`,
    isPartOf: { '@id': `${site.url}/#website` },
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

export function blogPosting(post: {
  title: string;
  description: string;
  date: Date;
  path: string;
  image: string;
}) {
  return {
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date.toISOString(),
    dateModified: post.date.toISOString(),
    image: absolute(post.image),
    mainEntityOfPage: absolute(post.path),
    url: absolute(post.path),
    author: { '@id': `${site.url}/#org` },
    publisher: { '@id': `${site.url}/#org` },
    inLanguage: 'en',
  };
}
