export interface FaqItem {
  q: string;
  a: string;
}

const chip = '#161A21';
const trace = '#2A303A';
const copper = '#D9702B';

export const projects = [
  {
    title: 'Industrial controller',
    kicker: 'Industrial',
    summary:
      'Raspberry Pi Compute Module controller with isolated power, UPS backup and industrial I/O.',
    tags: ['CM4', 'CAN · RS485', 'Isolated PSU'],
    art: `<svg viewBox="0 0 640 280" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g fill="none" stroke="${trace}" stroke-width="1.5">
        <path d="M24 70h150l26 26h420"/><path d="M24 200h110l22-22h460"/>
        <path d="M24 136h590"/><path d="M250 36v210"/>
      </g>
      <rect x="48" y="96" width="120" height="78" rx="8" fill="${chip}" stroke="${copper}" stroke-width="1.6"/>
      <path d="M66 122h84M66 138h58M66 154h72" stroke="${copper}" stroke-width="1.4"/>
      <rect x="230" y="78" width="168" height="116" rx="10" fill="${chip}" stroke="${copper}" stroke-width="1.8"/>
      <rect x="250" y="98" width="128" height="76" rx="4" fill="none" stroke="${copper}" opacity=".55"/>
      <g fill="${copper}">
        <circle cx="174" cy="70" r="3.5"/><circle cx="134" cy="200" r="3.5"/><circle cx="398" cy="136" r="3.5"/>
      </g>
      <g fill="${chip}" stroke="${trace}">
        <rect x="500" y="104" width="92" height="18" rx="2"/>
        <rect x="500" y="132" width="92" height="18" rx="2"/>
        <rect x="500" y="160" width="92" height="18" rx="2"/>
      </g>
    </svg>`,
  },
  {
    title: 'STM32 system-on-module',
    kicker: 'Module',
    summary: 'Compact STM32MP1 module with SDRAM, eMMC, CAN and Ethernet.',
    tags: ['STM32MP1', 'eMMC', 'Ethernet'],
    art: `<svg viewBox="0 0 640 280" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect x="150" y="36" width="340" height="208" rx="14" fill="${chip}" stroke="${copper}" stroke-width="1.8"/>
      <g fill="${copper}">
        ${Array.from({ length: 12 }, (_, i) => `<rect x="168" y="${52 + i * 15}" width="8" height="5" rx="1"/>`).join('')}
        ${Array.from({ length: 12 }, (_, i) => `<rect x="464" y="${52 + i * 15}" width="8" height="5" rx="1"/>`).join('')}
      </g>
      <rect x="210" y="78" width="150" height="110" rx="6" fill="#0E1116" stroke="${copper}"/>
      <g fill="${copper}" opacity=".85">
        ${Array.from({ length: 6 }, (_, row) =>
          Array.from({ length: 8 }, (_, col) => `<circle cx="${228 + col * 16}" cy="${96 + row * 14}" r="2.2"/>`).join(''),
        ).join('')}
      </g>
      <rect x="380" y="86" width="62" height="40" rx="4" fill="none" stroke="${trace}" stroke-width="1.5"/>
      <rect x="380" y="140" width="62" height="40" rx="4" fill="none" stroke="${copper}" stroke-width="1.5"/>
      <path d="M40 90h110M40 190h110M490 90h110M490 190h110" stroke="${trace}" stroke-width="1.5"/>
    </svg>`,
  },
  {
    title: 'Automotive hub',
    kicker: 'Automotive',
    summary: 'USB 3.1 upstream, distributed to USB, Ethernet and RS485.',
    tags: ['USB 3.1', 'Ethernet', 'RS485'],
    art: `<svg viewBox="0 0 640 280" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <path d="M70 140h150" stroke="${copper}" stroke-width="2" fill="none"/>
      <rect x="36" y="118" width="36" height="44" rx="4" fill="${chip}" stroke="${copper}"/>
      <circle cx="250" cy="140" r="46" fill="${chip}" stroke="${copper}" stroke-width="1.8"/>
      <circle cx="250" cy="140" r="8" fill="${copper}"/>
      <path d="M292 140h90l40-70h150M292 140h280M292 140h90l40 70h150" fill="none" stroke="${trace}" stroke-width="1.6"/>
      <g fill="${copper}">
        <circle cx="382" cy="70" r="3.5"/><circle cx="382" cy="140" r="3.5"/><circle cx="382" cy="210" r="3.5"/>
      </g>
      <g fill="${chip}" stroke="${copper}">
        <rect x="540" y="52" width="64" height="36" rx="6"/>
        <rect x="540" y="122" width="64" height="36" rx="6"/>
        <rect x="540" y="192" width="64" height="36" rx="6"/>
      </g>
    </svg>`,
  },
  {
    title: 'RFID/NFC crypto dev kit',
    kicker: 'Security',
    summary: 'NFC plus cryptographic hardware, for a secure application.',
    tags: ['NFC', 'Secure element', 'Dev kit'],
    art: `<svg viewBox="0 0 640 280" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g fill="none" stroke="${copper}" stroke-width="1.6">
        <rect x="168" y="40" width="200" height="200" rx="28"/>
        <rect x="196" y="68" width="144" height="144" rx="22" opacity=".75"/>
        <rect x="224" y="96" width="88" height="88" rx="16" opacity=".55"/>
      </g>
      <rect x="248" y="120" width="40" height="40" rx="6" fill="${chip}" stroke="${copper}" stroke-width="1.6"/>
      <path d="M40 80h90M40 210h120M430 60h170M470 220h130" stroke="${trace}" stroke-width="1.5"/>
      <circle cx="130" cy="80" r="3.5" fill="${copper}"/>
      <path d="M470 150h90l28 28" fill="none" stroke="${copper}" stroke-width="1.6"/>
      <rect x="548" y="150" width="52" height="36" rx="4" fill="${chip}" stroke="${copper}"/>
    </svg>`,
  },
  {
    title: 'High-voltage controller',
    kicker: 'Power',
    summary: 'Main controller for high-voltage equipment on RS485 and CAN.',
    tags: ['HV safety', 'CAN', 'RS485'],
    art: `<svg viewBox="0 0 640 280" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <path d="M40 70h560M40 210h560" stroke="${trace}" stroke-width="1.5"/>
      <path d="M48 150h80l28-48 28 96 28-64 24 16h70" fill="none" stroke="${copper}" stroke-width="2"/>
      <path d="M320 48v184" stroke="${copper}" stroke-dasharray="4 7" stroke-width="1.6"/>
      <rect x="360" y="96" width="150" height="88" rx="8" fill="${chip}" stroke="${copper}" stroke-width="1.7"/>
      <path d="M382 128h106M382 148h78M382 164h92" stroke="${copper}" stroke-width="1.3"/>
      <path d="M530 140h70" stroke="${trace}" stroke-width="1.5"/>
      <circle cx="306" cy="150" r="4" fill="${copper}"/>
      <path d="M250 118l16 32h-32z" fill="none" stroke="${copper}" stroke-width="1.6"/>
    </svg>`,
  },
  {
    title: 'Inductive keyboard dev kit',
    kicker: 'Consumer',
    summary: 'A hardware platform for evaluating inductive keyboard sensing.',
    tags: ['Sensing', 'Analog front-end', 'Eval kit'],
    art: `<svg viewBox="0 0 640 280" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g>
        ${[0, 1, 2, 3, 4]
          .map((col) =>
            [0, 1, 2]
              .map((row) => {
                const x = 70 + col * 78 + (row === 1 ? 28 : 0);
                const y = 48 + row * 70;
                const hot = col === 2 && row === 1;
                return `<g>
                  <rect x="${x}" y="${y}" width="64" height="48" rx="8" fill="${chip}" stroke="${hot ? copper : trace}" stroke-width="${hot ? 1.8 : 1.2}"/>
                  <ellipse cx="${x + 32}" cy="${y + 24}" rx="14" ry="9" fill="none" stroke="${hot ? copper : trace}" stroke-width="1.3"/>
                  <ellipse cx="${x + 32}" cy="${y + 24}" rx="7" ry="4" fill="none" stroke="${hot ? copper : trace}" opacity=".7"/>
                </g>`;
              })
              .join(''),
          )
          .join('')}
      </g>
      <path d="M250 188v36h240" fill="none" stroke="${copper}" stroke-width="1.5"/>
      <rect x="478" y="208" width="70" height="28" rx="4" fill="${chip}" stroke="${copper}"/>
    </svg>`,
  },
] as const;

export const services = [
  {
    title: 'Hardware & PCB',
    href: '/services/hardware-pcb/',
    text: 'Architecture, parts, schematic and multilayer PCB design, shaped for cost, certification and assembly.',
    tags: ['High-speed', 'Power & isolation', 'CAN · RS485', 'USB · Ethernet'],
    icon: '<rect x="5" y="5" width="14" height="14" rx="2"/><path d="M9 1v4M15 1v4M9 19v4M15 19v4M1 9h4M1 15h4M19 9h4M19 15h4"/><rect x="9" y="9" width="6" height="6"/>',
  },
  {
    title: 'Embedded firmware',
    href: '/services/firmware/',
    text: 'Firmware development for drivers, bring-up, RTOS and bare-metal applications, bootloaders and production programming.',
    tags: ['STM32', 'STM32MP1', 'ESP32', 'Embedded Linux'],
    icon: '<path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"/>',
  },
  {
    title: 'Software & connectivity',
    href: '/services/software/',
    text: 'The software around the device: tools, dashboards, mobile, backend and the factory test.',
    tags: ['BLE · Wi-Fi', 'NFC', 'Web & mobile', 'Backend'],
    icon: '<rect x="2" y="4" width="20" height="13" rx="2"/><path d="M8 21h8M12 17v4"/>',
  },
  {
    title: 'Mechanical & production',
    href: '/services/mechanical/',
    text: 'Enclosures, mounting, design for manufacture, test fixtures and the handover to assembly.',
    tags: ['Enclosures', 'DFM / DFT', 'Cost-down', 'Series build'],
    icon: '<path d="M12 2l9 5v10l-9 5-9-5V7z"/><path d="M12 22V12M21 7l-9 5-9-5"/>',
  },
] as const;

export const industries = ['Industrial', 'Automotive', 'Medical', 'Consumer & IoT'] as const;

export const principles = [
  {
    n: '01',
    title: 'A shortcut to experience',
    text: 'A decade of product work, applied to yours, without you hiring a team first.',
  },
  {
    n: '02',
    title: 'Fewer surprises later',
    text: 'Supply, test, certification and assembly are planned before the layout is frozen.',
  },
  {
    n: '03',
    title: 'You talk to the engineers',
    text: 'A small team means the people on the call are the people doing the work.',
  },
] as const;

export const outcomes = [
  { title: 'Fewer board spins', text: 'Reviews and pre-compliance before the layout is frozen.' },
  { title: 'A plan you can budget', text: 'Each phase has a scope and a gate before the next one.' },
  { title: 'You own the IP', text: 'Schematics, layouts, source and docs are yours once paid.' },
  { title: 'Factory-ready files', text: 'BOM, test procedure and production data, ready for assembly.' },
] as const;

export const steps = [
  {
    n: '01',
    title: 'Discovery call',
    text: 'What it must do, who it is for, target cost and volume. NDA first if you want it.',
    out: 'An honest view on fit',
    gate: false,
  },
  {
    n: '02',
    title: 'Feasibility',
    text: 'Technical, cost and manufacturing risks, written down before any layout.',
    out: 'Notes, a rough BOM, a plan',
    gate: true,
  },
  {
    n: '03',
    title: 'Architecture',
    text: 'Block diagram and the key parts, agreed with you before the board starts.',
    out: 'System design document',
    gate: true,
  },
  {
    n: '04',
    title: 'Schematic & PCB',
    text: 'Capture and layout, reviewed for power, signals and assembly.',
    out: 'Schematic, layout, BOM',
    gate: false,
  },
  {
    n: '05',
    title: 'Firmware & software',
    text: 'Started on dev kits, so the code is ready when the first boards arrive.',
    out: 'Source and docs',
    gate: false,
  },
  {
    n: '06',
    title: 'Prototype',
    text: 'Build, bring-up and a round of changes until it matches the spec.',
    out: 'Working prototypes',
    gate: false,
  },
  {
    n: '07',
    title: 'Validation',
    text: 'Functional tests and pre-compliance for the certifications your market needs.',
    out: 'Test report, lab readiness',
    gate: true,
  },
  {
    n: '08',
    title: 'Production transfer',
    text: 'DFM, test fixtures and handover to an assembly partner, ours or yours.',
    out: 'Production package',
    gate: false,
  },
] as const;

export const plans = [
  {
    kind: 'Fixed scope',
    title: 'Feasibility review',
    text: 'A written answer on whether and how to build it, before you fund development.',
    points: ['Requirements and risks', 'Concept and key parts', 'Rough BOM at your volumes', 'A development plan'],
    featured: false,
  },
  {
    kind: 'Milestone based',
    title: 'Full product development',
    text: 'We run the engineering from concept to the factory: hardware, firmware, software and mechanics.',
    points: [
      'The eight steps, with a gate on each phase',
      'Weekly progress',
      'Certification support through the lab',
      'You own the IP and design files once paid',
    ],
    featured: true,
    badge: 'Most common',
  },
  {
    kind: 'Flexible',
    title: 'Engineering support',
    text: 'Senior help for your own team: reviews, layout, firmware, cost-down or a production issue.',
    points: ['Design and code reviews', 'Layout or firmware tasks', 'Redesign for cost or obsolete parts', 'Production and test support'],
    featured: false,
  },
] as const;

export const faq: FaqItem[] = [
  {
    q: 'What does Embedded Consultants do?',
    a: 'Embedded Consultants is an electronics product-development consultancy. We design the hardware and PCB, embedded firmware, the software around the device, and the mechanical parts, then hand over the files a factory needs to build it.',
  },
  {
    q: 'Which industries do you work in?',
    a: 'Industrial equipment, automotive electronics, medical devices, and consumer and IoT products. The engineering is the same set of disciplines. Regulated products add traceability, qualified parts and a test record.',
  },
  {
    q: 'How does an engagement work?',
    a: 'Three shapes. A fixed-scope feasibility review answers whether and how to build it. Milestone-based development runs the eight phases from discovery to production transfer, with a written gate between phases. Flexible support is senior help for a team that already exists: reviews, layout, firmware or a production problem. You own the schematics, layout, source and documents once the work is paid.',
  },
  {
    q: 'Do you sign an NDA before the details?',
    a: 'Yes. Send yours, or ask for the mutual NDA. It is signed before you share anything confidential. The project brief can request that as the first step.',
  },
  {
    q: 'Can you take a prototype through to mass production?',
    a: 'Yes. We join at a working prototype as often as at a blank page. The work is a design review, then the changes for test, certification and assembly, then the production package: BOM, test procedure and programming instructions. We design for the standards the market needs, run pre-compliance, and support the accredited lab. The lab, not us, issues the certificate.',
  },
  {
    q: 'How long does a project usually take?',
    a: 'A feasibility review is a short written study. Full development is phased and usually measured in months, longer when tooling or certification is on the path. We do not quote one duration for every product. We reply to a new brief within one business day.',
  },
  {
    q: 'Where is Embedded Consultants based?',
    a: 'Headquarters are in Novi Sad, Serbia. Clients are mostly in the United States, Canada, Europe and India. Calls are set in the visitor’s time zone. We do not publish any other office.',
  },
  {
    q: 'How do we start?',
    a: 'Send a project brief at embedded-consultants.com. Say what the product should do, the stage it is at, and whether you want a written reply or a free 30-minute call. The first call and the initial research are free. These are requests, not bookings.',
  },
];
