import { site } from '../config';
import { faq, services, steps } from '../data/home';
import { publishedPosts } from './posts';

function link(title: string, url: string, note: string): string {
  return `- [${title}](${url}): ${note}`;
}

export async function llmsText(): Promise<string> {
  const posts = await publishedPosts();
  const lines = [
    `# ${site.name}`,
    '',
    `> ${site.name} is an electronics product development company. PCB design services, firmware, software, and mechanical design, from idea to production.`,
    '',
    `${site.name} is an embedded systems development company. The legal entity is ${site.legalName}. Email: ${site.email}. The first call and the initial research are free.`,
    '',
    '## Company',
    link('Home', `${site.url}/`, 'Who Embedded Consultants is, what it designs, and how to start.'),
    link('Contact', `${site.url}/#contact`, 'Project brief: scope, details, a written reply or up to three call windows, then name and work email. Requests, not bookings.'),
    link('Privacy', `${site.url}/privacy/`, 'What the brief collects, Formspree, and cookieless Umami analytics.'),
    '',
    '## Services',
    ...services.map((service) => link(service.title, `${site.url}/#services`, service.text)),
    link('PCB design services', `${site.url}/#services`, 'Schematic, part choice, and board layout.'),
    '',
    '## Process',
    ...steps.map((step) => link(`${step.n} ${step.title}`, `${site.url}/#process`, step.text)),
    '',
    '## Questions',
    ...faq.map((item) => link(item.q, `${site.url}/#faq`, item.a)),
    '',
    '## Blog',
    link('Engineering notes', `${site.url}/blog/`, 'Published notes, newest first. Later notes appear on their publish date.'),
    ...posts.map((post) => link(post.data.title, `${site.url}/blog/${post.id}/`, post.data.description)),
    '',
  ];
  return lines.join('\n');
}

export async function llmsFullText(): Promise<string> {
  const posts = await publishedPosts();
  const lines = [
    `# ${site.name}`,
    '',
    `> ${site.name} is an electronics product development company. PCB design services, firmware, software, and mechanical design, from idea to production.`,
    '',
    `${site.name} (${site.legalName}) provides hardware design, PCB design services, embedded firmware development, software for connected products, mechanical design, and design for manufacturing. IoT product development is in scope when the product is the device.`,
    '',
    'Working hours for calls are Monday to Friday, 08:00–18:00 Central European time.',
    '',
    `Contact is a project brief on ${site.url}/#contact. The visitor chooses disciplines, describes the product, and asks for a written reply or a free 30-minute call. A call request includes up to three time windows and can ask for a mutual NDA first. These are requests, not bookings. The first call and the initial research are free. A reply is due within one business day.`,
    '',
    `Same profiles: ${site.linkedin} and ${site.x} (${site.twitter}).`,
    '',
    '## Services',
    ...services.map((service) => `### ${service.title}\n\n${service.text}\n\n${site.url}/#services`),
    '',
    '## Process',
    ...steps.map((step) => `### ${step.n} ${step.title}\n\n${step.text}`),
    '',
    '## Questions',
    ...faq.map((item) => `### ${item.q}\n\n${item.a}`),
    '',
    '## Published notes',
    ...posts.flatMap((post) => [
      `### ${post.data.title}`,
      '',
      post.data.definition,
      '',
      ...post.data.takeaways.map((item) => `- ${item}`),
      '',
      `URL: ${site.url}/blog/${post.id}/`,
      '',
    ]),
    '',
  ];
  return lines.join('\n');
}
