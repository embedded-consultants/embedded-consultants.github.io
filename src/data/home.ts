export interface FaqItem {
  q: string;
  a: string;
}

export const projects = [
  {
    title: 'Industrial controller',
    kicker: 'Industrial',
    summary: 'One board that runs a machine.',
    image: '/work/board-01.webp',
  },
  {
    title: 'Processor module',
    kicker: 'Module',
    summary: 'A small module with memory and a network link.',
    image: '/work/board-02.webp',
  },
  {
    title: 'Interface hub',
    kicker: 'Interface',
    summary: 'Shares one link out to several ports.',
    image: '/work/board-03.webp',
  },
  {
    title: 'Protected link',
    kicker: 'Security',
    summary: 'A link with a protected part on the same board.',
    image: '/work/board-04.webp',
  },
  {
    title: 'Power controller',
    kicker: 'Power',
    summary: 'Controls equipment over an isolated link.',
    image: '/work/board-05.webp',
  },
  {
    title: 'Sensing board',
    kicker: 'Sensing',
    summary: 'Reads a row of sensors and passes the result on.',
    image: '/work/board-06.webp',
  },
  {
    title: 'Expansion card',
    kicker: 'Expansion',
    summary: 'Adds ports to a host.',
    image: '/work/board-07.webp',
  },
  {
    title: 'Wireless module',
    kicker: 'Wireless',
    summary: 'A small radio module with extra inputs and outputs.',
    image: '/work/board-08.webp',
  },
  {
    title: 'Power module',
    kicker: 'Power',
    summary: 'Several supply rails on one board.',
    image: '/work/board-09.webp',
  },
  {
    title: 'Display board',
    kicker: 'Display',
    summary: 'Drives a screen from a small controller.',
    image: '/work/board-10.webp',
  },
  {
    title: 'Compact device',
    kicker: 'Product',
    summary: 'The electronics for a small enclosed product.',
    image: '/work/board-11.webp',
  },
  {
    title: 'Fluid controller',
    kicker: 'Control',
    summary: 'Switches pumps and reads a sensor.',
    image: '/work/board-12.webp',
  },
  {
    title: 'Programmable controller',
    kicker: 'Industrial',
    summary: 'Industrial inputs and outputs on a small board.',
    image: '/work/board-13.webp',
  },
  {
    title: 'Lighting controller',
    kicker: 'Lighting',
    summary: 'Drives a set of lights from one board.',
    image: '/work/board-14.webp',
  },
  {
    title: 'Robot controller',
    kicker: 'Motion',
    summary: 'Onboard control for a small mobile machine.',
    image: '/work/board-15.webp',
  },
  {
    title: 'Proximity sensor',
    kicker: 'Sensing',
    summary: 'Measures how close something is.',
    image: '/work/board-16.webp',
  },
  {
    title: 'Motion controller',
    kicker: 'Motion',
    summary: 'Drives motors and switches larger loads.',
    image: '/work/board-17.webp',
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

export const steps = [
  { n: '01', title: 'Brief', text: 'Agree what the product should do.', out: '', gate: false },
  { n: '02', title: 'Design', text: 'Schematic, layout, and code.', out: '', gate: false },
  { n: '03', title: 'Prototype', text: 'Build one and test it.', out: '', gate: false },
  { n: '04', title: 'Production', text: 'Files ready to assemble.', out: '', gate: false },
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
