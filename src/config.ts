/**
 * Site-wide settings. Call requests are collected in the project brief.
 */
export const site = {
  name: 'Embedded Consultants',
  legalName: 'Embedded Consultants LLC',
  url: 'https://embedded-consultants.com',
  email: 'contact@embedded-consultants.com',
  title: 'Embedded Systems Consulting, Novi Sad | Embedded Consultants',
  description:
    'Embedded systems consulting in Novi Sad, Serbia. Hardware, PCB, firmware, software and mechanical design, from idea to production. First call is free.',
  schemaDescription:
    'Embedded systems design consultancy in Novi Sad, Serbia: hardware, PCB, firmware, software and mechanical design, from idea to production.',
  locale: 'en_US',
  twitter: '@embdd_consult',
  linkedin: 'https://www.linkedin.com/company/embedded-consultants/',
  x: 'https://x.com/embdd_consult',
  github: 'https://github.com/embedded-consultants',
  /** Formspree form id. Submissions post to https://formspree.io/f/xqpqqweo */
  formspreeId: 'xqpqqweo',
  umami: {
    /** Umami Cloud script. Loaded with defer. */
    src: 'https://cloud.umami.is/script.js',
    websiteId: '948494fc-c531-4c80-83d3-450637f2a1f0',
  },
} as const;

export const formspreeReady = !site.formspreeId.startsWith('YOUR_');
export const formAction = `https://formspree.io/f/${site.formspreeId}`;
export const umamiReady = site.umami.websiteId.trim().length > 0 && site.umami.src.trim().length > 0;

export function absolute(path: string): string {
  return new URL(path, site.url).href;
}

export const mailto = `mailto:${site.email}`;
