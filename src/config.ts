/**
 * Site-wide settings. The booking URL stays empty until the
 * Google Calendar appointment schedule link is ready.
 */
export const site = {
  name: 'Embedded Consultants',
  legalName: 'Embedded Consultants LLC',
  url: 'https://embedded-consultants.com',
  email: 'contact@embedded-consultants.com',
  title: 'Embedded Systems Design Consultancy | Embedded Consultants',
  description:
    'Electronics product development in Novi Sad. Hardware, PCB, firmware, software and mechanical design, from idea to production. The first call is free.',
  schemaDescription:
    'Embedded systems design consultancy in Novi Sad, Serbia: hardware, PCB, firmware, software and mechanical design, from idea to production.',
  locale: 'en_US',
  twitter: '@embdd_consult',
  linkedin: 'https://www.linkedin.com/company/embedded-consultants/',
  x: 'https://x.com/embdd_consult',
  github: 'https://github.com/embedded-consultants',
  /** Formspree form id. Submissions post to https://formspree.io/f/xqpqqweo */
  formspreeId: 'xqpqqweo',
  /**
   * Google Calendar appointment-schedule URL for the free 30-minute intro call.
   * Leave this empty until the link is ready. Booking buttons then open email.
   */
  bookingUrl: '',
  umami: {
    /** Umami Cloud script. Loaded with defer. */
    src: 'https://cloud.umami.is/script.js',
    websiteId: '948494fc-c531-4c80-83d3-450637f2a1f0',
  },
} as const;

export const formspreeReady = !site.formspreeId.startsWith('YOUR_');
export const formAction = `https://formspree.io/f/${site.formspreeId}`;
export const bookingReady = site.bookingUrl.trim().length > 0;
export const umamiReady = site.umami.websiteId.trim().length > 0 && site.umami.src.trim().length > 0;

export function absolute(path: string): string {
  return new URL(path, site.url).href;
}

export const booking = bookingReady
  ? {
      href: site.bookingUrl,
      external: true,
      detail: 'Free, no obligation. Pick a time that suits you.',
    }
  : {
      href: `mailto:${site.email}?subject=${encodeURIComponent('Free 30-min intro call')}`,
      external: false,
      detail: 'Free, no obligation. Email us and we will send times.',
    };

export const mailto = `mailto:${site.email}`;
