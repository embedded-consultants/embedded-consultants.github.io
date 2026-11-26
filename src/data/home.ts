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
    image: '/work/som.webp',
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
    image: '/work/hub.webp',
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
    image: '/work/crypto.webp',
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
  {
    title: 'PCIe USB board',
    kicker: 'Hardware + firmware',
    summary: 'PCIe board with USB and other peripheral interfaces.',
    tags: ['PCIe', 'USB'],
    image: '/work/pcie.webp',
  },
  {
    title: 'ESP32 I/O module',
    kicker: 'Hardware + firmware',
    summary: 'ESP32 module with expanded input and output.',
    tags: ['ESP32', 'I/O'],
    image: '/work/module.webp',
  },
  {
    title: 'Multi-channel power module',
    kicker: 'Hardware',
    summary: 'One module with several power rails.',
    tags: ['Power'],
    image: '/work/power.webp',
  },
  {
    title: 'ESP32 VGA interface',
    kicker: 'Hardware + firmware',
    summary: 'VESA-mounted VGA output driven by an ESP32.',
    tags: ['ESP32', 'VGA'],
    image: '/work/esp-vga.webp',
  },
  {
    title: 'Cube',
    kicker: 'Hardware + firmware',
    summary: 'A compact three-layer IoT device.',
    tags: ['IoT'],
    image: '/work/cube.webp',
  },
  {
    title: 'Water controller',
    kicker: 'Hardware + firmware',
    summary: 'Controller for a water system.',
    tags: ['Control'],
    image: '/work/water.webp',
  },
  {
    title: 'Custom PLC',
    kicker: 'Hardware + firmware',
    summary: 'A small programmable controller for industrial I/O.',
    tags: ['PLC', 'I/O'],
    image: '/work/plc.webp',
  },
  {
    title: 'Light controller',
    kicker: 'Hardware + firmware',
    summary: 'Controller for fixed lighting.',
    tags: ['Lighting'],
    image: '/work/leds.webp',
  },
  {
    title: 'Eurobot robot',
    kicker: 'Hardware + firmware + software',
    summary: 'Competition robot with onboard control and software.',
    tags: ['Robotics'],
    image: '/work/robotics.webp',
  },
  {
    title: 'Parking sensor',
    kicker: 'Hardware + firmware + software',
    summary: 'Sensing system for parking.',
    tags: ['Sensing'],
    image: '/work/parkingsensor.webp',
  },
  {
    title: 'Boxing robot controllers',
    kicker: 'Hardware + firmware + software',
    summary: 'Motor and relay controllers for a boxing robot.',
    tags: ['Motion', 'Relays'],
    image: '/work/boxing.webp',
  },
] as const;

export const services = [
  {
    title: 'Hardware & PCB',
    text: 'PCB design services: architecture, schematic, and layout.',
    tags: ['High-speed', 'Power & isolation', 'CAN · RS485', 'USB · Ethernet'],
    icon: '<rect x="5" y="5" width="14" height="14" rx="2"/><path d="M9 1v4M15 1v4M9 19v4M15 19v4M1 9h4M1 15h4M19 9h4M19 15h4"/><rect x="9" y="9" width="6" height="6"/>',
  },
  {
    title: 'Embedded firmware',
    text: 'Drivers, bring-up, and the application on the board.',
    tags: ['STM32', 'STM32MP1', 'ESP32', 'Embedded Linux'],
    icon: '<path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"/>',
  },
  {
    title: 'Software',
    text: 'Tools, apps, and the link around the product.',
    tags: ['BLE · Wi-Fi', 'NFC', 'Web & mobile', 'Backend'],
    icon: '<rect x="2" y="4" width="20" height="13" rx="2"/><path d="M8 21h8M12 17v4"/>',
  },
  {
    title: 'Mechanical',
    text: 'Enclosures, fit, and the path to assembly.',
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
  { title: 'Clear next step', text: 'Each phase ends with something you can read.' },
  { title: 'Factory-ready files', text: 'BOM, test procedure and production data, ready for assembly.' },
] as const;

export const steps = [
  { n: '01', title: 'Brief', text: 'What the product should do.', out: '', gate: false },
  { n: '02', title: 'Design', text: 'PCB design, firmware, software.', out: '', gate: false },
  { n: '03', title: 'Prototype', text: 'Build it and test it.', out: '', gate: false },
  { n: '04', title: 'Production', text: 'Ready to assemble.', out: '', gate: false },
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
      'A written brief before the work starts',
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
    q: 'What is electronics product development here?',
    a: 'We design the hardware, the PCB, the firmware, the software, and the enclosure, then prepare the product for assembly.',
  },
  {
    q: 'What do PCB design services include?',
    a: 'Schematic, part choice, and board layout, reviewed for power, signals, and assembly.',
  },
  {
    q: 'Do you sign an NDA before the details?',
    a: 'Yes. Send yours, or ask for ours. We sign it before you share anything confidential.',
  },
  {
    q: 'Can you start from a prototype?',
    a: 'Yes. A review, a redesign, or the move toward production.',
  },
  {
    q: 'How do we start?',
    a: 'Send a short project brief. Ask for a written reply or a free 30-minute call. We reply within one business day.',
  },
];
