import { site } from '../config';
import { faq, industries, plans, services, steps } from '../data/home';
import { publishedPosts } from './posts';

function link(title: string, url: string, note: string): string {
  return `- [${title}](${url}): ${note}`;
}

export async function llmsText(): Promise<string> {
  const posts = await publishedPosts();
  const lines = [
    `# ${site.name}`,
    '',
    `> ${site.name} is an embedded systems consultancy in Novi Sad, Serbia. It designs hardware, PCBs, firmware, software and enclosures for product teams, from an idea or a prototype through to files a factory can build. The first call and the initial research are free.`,
    '',
    `${site.name} is the public name. The legal entity is ${site.legalName}. Headquarters: Novi Sad, Serbia. No other office is listed. Email: ${site.email}.`,
    '',
    '## Company',
    link('Home', `${site.url}/`, 'Who Embedded Consultants is, what it designs, and how to start.'),
    link('Contact', `${site.url}/#contact`, 'Project brief: scope, details, a written reply or up to three call windows, then name and work email. Requests, not bookings.'),
    link('Privacy', `${site.url}/privacy/`, 'What the brief collects, Formspree, and cookieless Umami analytics.'),
    '',
    '## Services',
    ...services.map((service) =>
      link(service.title, `${site.url}/#services`, service.text),
    ),
    '',
    '## Industries',
    link('Industries', `${site.url}/#services`, industries.join(', ') + '.'),
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
    `> Full description of ${site.name} for answer engines. Only posts whose publish time has passed are listed.`,
    '',
    `${site.name} (${site.legalName}) designs electronics products from Novi Sad, Serbia, for teams in industrial, automotive, medical, and consumer and IoT markets. The work covers hardware and PCB design, embedded firmware, the software around the device, and mechanical design through production transfer.`,
    '',
    `Contact is a project brief on ${site.url}/#contact. The visitor chooses disciplines, describes the product, and asks for a written reply or a free 30-minute call. A call request includes up to three time windows and can ask for a mutual NDA first. These are requests, not bookings. The first call and the initial research are free. The client owns the IP and the design files once the work is paid. A reply is due within one business day.`,
    '',
    `Same profiles: ${site.linkedin} and ${site.x} (${site.twitter}).`,
    '',
    '## Services',
    ...services.map((service) => `### ${service.title}\n\n${service.text} Topics: ${service.tags.join(', ')}.`),
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
