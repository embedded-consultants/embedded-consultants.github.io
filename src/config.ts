/**
 * Site-wide settings. The three placeholders below are intentional.
 * Replace them before launch. See the pull request description for the
 * exact steps (Formspree, Umami, Cal.com, GitHub Pages source).
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
  /**
   * Formspree form id — the path segment after https://formspree.io/f/.
   * Create the form at https://formspree.io, then replace YOUR_FORM_ID.
   * While this starts with YOUR_, the form asks visitors to email us instead.
   */
  formspreeId: 'YOUR_FORM_ID',
  /**
   * Cal.com event URL for the free 30-minute intro call.
   * Example: https://cal.com/your-team/30min
   * While this contains YOUR_CAL, booking buttons fall back to email.
   */
  calUrl: 'https://cal.com/YOUR_CAL_USERNAME/30min',
  umami: {
    /** Umami script URL. Keep the cloud URL, or point at a self-hosted /script.js. */
    src: 'https://cloud.umami.is/script.js',
    /** Website id from the Umami dashboard. The placeholder disables the script. */
    websiteId: 'YOUR_UMAMI_WEBSITE_ID',
  },
} as const;

export const formspreeReady = !site.formspreeId.startsWith('YOUR_');
export const formAction = `https://formspree.io/f/${site.formspreeId}`;
export const calReady = !site.calUrl.includes('YOUR_CAL');
export const umamiReady = !site.umami.websiteId.startsWith('YOUR_');

export function absolute(path: string): string {
  return new URL(path, site.url).href;
}

export const booking = calReady
  ? {
      href: site.calUrl,
      external: true,
      detail: 'Free, no obligation. Pick a time that suits you.',
    }
  : {
      href: `mailto:${site.email}?subject=${encodeURIComponent('Free 30-min intro call')}`,
      external: false,
      detail: 'Free, no obligation. Email us and we will send times.',
    };

export const mailto = `mailto:${site.email}`;
