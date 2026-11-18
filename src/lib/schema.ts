import { absolute, site } from '../config';
import { services, type FaqItem } from '../data/home';

const organization = {
  '@type': ['Organization', 'ProfessionalService'],
  '@id': `${site.url}/#org`,
  name: site.name,
  legalName: site.legalName,
  alternateName: site.legalName,
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
    itemListElement: services.map((service) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: service.title, description: service.text },
    })),
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

export function faqPage(items: FaqItem[], id = `${site.url}/#faq`) {
  return {
    '@type': 'FAQPage',
    '@id': id,
    isPartOf: { '@id': `${site.url}/#website` },
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

export function breadcrumb(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absolute(item.path),
    })),
  };
}

export function serviceList() {
  return services.map((service) => ({
    '@type': 'Service',
    name: service.title,
    serviceType: service.title,
    description: service.text,
    url: `${site.url}/#services`,
    provider: { '@id': `${site.url}/#org` },
    areaServed: [
      { '@type': 'Country', name: 'US' },
      { '@type': 'Country', name: 'CA' },
      { '@type': 'Country', name: 'IN' },
      { '@type': 'Place', name: 'Europe' },
    ],
  }));
}

export function blogPosting(post: {
  title: string;
  description: string;
  date: Date;
  modified: Date;
  path: string;
  image: string;
}) {
  return {
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date.toISOString(),
    dateModified: post.modified.toISOString(),
    image: absolute(post.image),
    mainEntityOfPage: absolute(post.path),
    url: absolute(post.path),
    author: {
      '@type': 'Organization',
      name: 'Embedded Consultants',
      url: `${site.url}/`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Embedded Consultants',
      url: `${site.url}/`,
      logo: {
        '@type': 'ImageObject',
        url: absolute('/brand/ec-logo-full-black.png'),
      },
    },
    inLanguage: 'en',
  };
}
