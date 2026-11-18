import { absolute, site } from '../config';
import { services, type FaqItem } from '../data/home';

export function areaServed() {
  return [
    { '@type': 'Country', name: 'United States' },
    { '@type': 'Country', name: 'Canada' },
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'Country', name: 'Serbia' },
    { '@type': 'Country', name: 'India' },
    { '@type': 'Place', name: 'Europe' },
    { '@type': 'Place', name: 'European Union' },
  ];
}

const organization = {
  '@type': ['Organization', 'ProfessionalService'],
  '@id': `${site.url}/#org`,
  name: site.name,
  legalName: site.legalName,
  alternateName: site.legalName,
  url: `${site.url}/`,
  logo: absolute('/brand/ec-logo-full-black.png'),
  image: absolute('/og/og-default-v2.png'),
  description: site.schemaDescription,
  email: site.email,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Novi Sad',
    addressCountry: 'RS',
  },
  areaServed: areaServed(),
  knowsAbout: [
    'Electronics product development',
    'Embedded systems development',
    'Hardware design services',
    'PCB design services',
    'Embedded firmware development',
    'IoT product development',
    'Electronics design consultancy',
    'Design for manufacturing',
    'Prototype to mass production',
    'Nearshore electronics engineering',
    'STM32',
    'ESP32',
    'CAN bus',
    'RS485',
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
  return webPageFor({ title: site.title, description: site.description, path: '/' });
}

export function webPageFor(page: { title: string; description: string; path: string }) {
  const url = absolute(page.path);
  return {
    '@type': 'WebPage',
    '@id': page.path === '/' ? `${site.url}/#webpage` : `${url}#webpage`,
    url,
    name: page.title,
    description: page.description,
    isPartOf: { '@id': `${site.url}/#website` },
    about: { '@id': `${site.url}/#org` },
    inLanguage: 'en',
  };
}

export function serviceNode(service: { name: string; description: string; path: string }) {
  return {
    '@type': 'Service',
    name: service.name,
    serviceType: service.name,
    description: service.description,
    url: absolute(service.path),
    provider: { '@id': `${site.url}/#org` },
    areaServed: areaServed(),
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
  return [
    ...services.map((service) =>
      serviceNode({ name: service.title, description: service.text, path: service.href }),
    ),
    serviceNode({
      name: 'Design for manufacturing and production transfer',
      description:
        'Design for manufacturing and the handover from a prototype to files a factory can build, test and program.',
      path: '/services/dfm/',
    }),
  ];
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
