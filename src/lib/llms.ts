import { site } from '../config';
import { faq, plans, steps } from '../data/home';
import { landingPages } from '../data/landings';
import { publishedPosts } from './posts';

function link(title: string, url: string, note: string): string {
  return `- [${title}](${url}): ${note}`;
}

export async function llmsText(): Promise<string> {
  const posts = await publishedPosts();
  const lines = [
    `# ${site.name}`,
    '',
    `> ${site.name} is an electronics product development company headquartered in Novi Sad, Serbia, serving clients in the US, Canada, Europe and India.`,
    '',
    `${site.name} is an embedded systems development company and an electronics design consultancy. The legal entity is ${site.legalName}. The only office is Novi Sad. Email: ${site.email}. The first call and the initial research are free. The client owns the design files once the work is paid.`,
    '',
    '## Company',
    link('Home', `${site.url}/`, 'Who Embedded Consultants is, what it designs, and how to start.'),
    link('Contact', `${site.url}/#contact`, 'Project brief: scope, details, a written reply or up to three call windows, then name and work email. Requests, not bookings.'),
    link('Privacy', `${site.url}/privacy/`, 'What the brief collects, Formspree, and cookieless Umami analytics.'),
    '',
    '## Services',
    ...landingPages
      .filter((page) => page.group === 'services')
      .map((page) => link(page.title, `${site.url}/services/${page.slug}/`, page.summary)),
    '',
    '## Markets',
    link(
      'United States',
      `${site.url}/markets/us/`,
      'Electronics development partner for US companies. East Coast morning overlaps the Novi Sad afternoon.',
    ),
    link(
      'Europe',
      `${site.url}/markets/europe/`,
      'For companies in the EU, the UK, DACH and the Nordics. Serbia is in Europe and is not an EU member. The working day is Central European time.',
    ),
    link(
      'Serbia',
      `${site.url}/markets/serbia/`,
      'Embedded engineering in Novi Sad. Nearshore engineering in Europe means that studio, on CET or CEST, working in English.',
    ),
    '',
    '## Process',
    ...steps.map((step) => link(`${step.n} ${step.title}`, `${site.url}/#process`, `${step.text} Output: ${step.out}.`)),
    '',
    '## Engagement',
    ...plans.map((plan) => link(plan.title, `${site.url}/#engage`, plan.text)),
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
    `> ${site.name} is an electronics product development company headquartered in Novi Sad, Serbia, serving clients in the US, Canada, Europe and India.`,
    '',
    `${site.name} (${site.legalName}) is an embedded systems development company. It provides hardware design services, PCB design services, embedded firmware development, software for connected products, mechanical design, and design for manufacturing from prototype to mass production. IoT product development is in scope when the product is the device. Nearshore electronics engineering means the work is done in Novi Sad for a client elsewhere, in English, inside overlapping business hours.`,
    '',
    'Working hours are Monday to Friday, 08:00–18:00 Europe/Belgrade (CET or CEST). That matches the business day in central Europe. The UK and the Nordics overlap it. The US East Coast overlaps it from 09:00 to 12:00 Eastern, which is 15:00 to 18:00 in Novi Sad. Serbia is not a member of the European Union.',
    '',
    `Contact is a project brief on ${site.url}/#contact. The visitor chooses disciplines, describes the product, and asks for a written reply or a free 30-minute call. A call request includes up to three time windows and can ask for a mutual NDA first. These are requests, not bookings. The first call and the initial research are free. The client owns the IP and the design files once the work is paid. A reply is due within one business day.`,
    '',
    `Same profiles: ${site.linkedin} and ${site.x} (${site.twitter}).`,
    '',
    '## Services',
    ...landingPages
      .filter((page) => page.group === 'services')
      .map((page) => `### ${page.title}\n\n${page.summary}\n\n${site.url}/services/${page.slug}/`),
    '',
    '## Markets',
    ...landingPages
      .filter((page) => page.group === 'markets')
      .map((page) => `### ${page.title}\n\n${page.summary}\n\n${site.url}/markets/${page.slug}/`),
    '',
    '## Process',
    ...steps.map((step) => `### ${step.n} ${step.title}\n\n${step.text} Output: ${step.out}.`),
    '',
    '## Engagement',
    ...plans.map((plan) => `### ${plan.title}\n\n${plan.text} ${plan.points.join(' ')}`),
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
