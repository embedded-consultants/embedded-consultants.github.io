export interface LandingFaq {
  q: string;
  a: string;
}

export interface LandingSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface LandingPage {
  slug: string;
  group: 'services' | 'markets';
  title: string;
  metaTitle: string;
  description: string;
  eyebrow: string;
  summary: string;
  sections: LandingSection[];
  faq: LandingFaq[];
  related: { href: string; label: string }[];
  serviceName?: string;
}

const contact = { href: '/#contact', label: 'Send a project brief' };
const hours =
  'The working window is Monday to Friday, 08:00–18:00 Europe/Belgrade. That is CET in winter and CEST in summer.';

export const servicePages: LandingPage[] = [
  {
    slug: 'hardware-pcb',
    group: 'services',
    serviceName: 'Hardware and PCB design',
    title: 'Hardware and PCB design',
    metaTitle: 'Hardware design and PCB design services',
    description:
      'Hardware design services and PCB design services from Embedded Consultants in Novi Sad: architecture, parts, schematic and layout shaped for cost, certification and assembly.',
    eyebrow: 'Services',
    summary:
      'Hardware design services here mean the electronics of the product: the architecture, the parts, the schematic and the printed circuit board. PCB design services are the layout of that board so it can be fabricated and assembled, not only simulated.',
    sections: [
      {
        heading: 'What the work includes',
        paragraphs: [
          'A hardware task starts from what the product must do, the target cost and the volume. From that we choose the architecture and the parts, then capture the schematic and lay out a multilayer board.',
        ],
        bullets: [
          'Power, including isolation where the environment needs it',
          'Interfaces such as CAN, RS485, USB and Ethernet',
          'High-speed layout where the signals require it',
          'A bill of materials checked for supply, not only for function',
          'Files a fabricator and an assembler can use',
        ],
      },
      {
        heading: 'What is decided before the layout is frozen',
        paragraphs: [
          'The expensive board spins come from parts that cannot be bought, footprints that fail in reflow, and a missing plan for test. Those are settled in the schematic and in a review, before copper is poured.',
          'Certification is treated as a constraint on the design. We do not issue certificates. An accredited laboratory does. We design for the tests the market requires and stay through the lab.',
        ],
      },
      {
        heading: 'What you receive',
        paragraphs: [
          'Schematic, layout, a controlled bill of materials, and the notes from the reviews. You own those files once the work is paid. Firmware, software and the enclosure are available from the same team when the product needs them.',
        ],
      },
    ],
    faq: [
      {
        q: 'What is included in PCB design services?',
        a: 'The board stack-up, placement, routing, and the outputs the fabricator needs, reviewed for power, signals and assembly. The schematic and the part choices come with it. A bare layout of someone else’s unfinished schematic is a poor place to start.',
      },
      {
        q: 'Do you only design new hardware?',
        a: 'No. A common start is a prototype that already runs. We review it, then change the parts, the test access or the layout so it can be built in volume.',
      },
      {
        q: 'Who is the hardware work for?',
        a: 'Product teams in industrial, automotive, medical, and consumer and IoT markets. The studio is in Novi Sad, Serbia. Clients are in the US, Canada, Europe and India.',
      },
    ],
    related: [
      { href: '/services/firmware/', label: 'Embedded firmware' },
      { href: '/services/dfm/', label: 'DFM and production transfer' },
      { href: '/blog/dfm-pitfalls-prototype-to-mass-production/', label: 'Nine DFM pitfalls' },
      contact,
    ],
  },
  {
    slug: 'firmware',
    group: 'services',
    serviceName: 'Embedded firmware development',
    title: 'Embedded firmware development',
    metaTitle: 'Embedded firmware development',
    description:
      'Embedded firmware development for product teams: drivers, bring-up, RTOS and bare-metal applications, bootloaders and production programming. Studio in Novi Sad.',
    eyebrow: 'Services',
    summary:
      'Embedded firmware development is the software that runs on the product’s microcontroller or module: drivers, bring-up, the application, the bootloader and the way each unit is programmed on the line.',
    sections: [
      {
        heading: 'What the work includes',
        paragraphs: [
          'Firmware is started against the real interfaces of the product, often on a development kit, so it is moving before the first custom board arrives.',
        ],
        bullets: [
          'Board bring-up and peripheral drivers',
          'Bare-metal and RTOS applications',
          'Embedded Linux on modules such as STM32MP1, where the product needs it',
          'Bootloaders and a defined way to program units in production',
          'Radio and IoT behaviour when the product uses BLE, Wi-Fi or a similar link',
        ],
      },
      {
        heading: 'What makes firmware production-ready',
        paragraphs: [
          'A demo that runs on a bench is not a release. Production firmware has a repeatable build, a way to put a unique identity on each unit, and a recovery path if an update fails. Those are designed with the hardware, because the programming connector and the test points are part of the board.',
        ],
      },
      {
        heading: 'What you receive',
        paragraphs: [
          'Source, a build that someone else can reproduce, and the notes a second engineer needs. You own the source once the work is paid.',
        ],
      },
    ],
    faq: [
      {
        q: 'Which devices do you write firmware for?',
        a: 'Microcontrollers and modules used in products, including STM32, STM32MP1 and ESP32, plus the radios and buses around them. The part is chosen for the product, not the other way round.',
      },
      {
        q: 'Is IoT product development part of the firmware work?',
        a: 'When the product has to connect, yes. The firmware, the link, and the software on the other side are scoped together. A radio added at the end is how schedules slip.',
      },
      {
        q: 'Can you take over firmware someone else started?',
        a: 'Yes, after a review of the source, the tools and what the hardware actually does. We say so if the base is not worth extending.',
      },
    ],
    related: [
      { href: '/services/hardware-pcb/', label: 'Hardware and PCB design' },
      { href: '/services/software/', label: 'Software and connectivity' },
      contact,
    ],
  },
  {
    slug: 'software',
    group: 'services',
    serviceName: 'Software and connectivity',
    title: 'Software and connectivity',
    metaTitle: 'Software for connected electronics products',
    description:
      'Software around an electronics product: tools, dashboards, mobile, backend and factory test. IoT product development from Embedded Consultants in Novi Sad.',
    eyebrow: 'Services',
    summary:
      'The software work is the part around the device: the tool a technician uses, the phone or web view, the backend, and the test station on the assembly line. It is not general application development with a board attached at the end.',
    sections: [
      {
        heading: 'What the work includes',
        paragraphs: [
          'IoT product development, when that is what the product is, means the device and the software agree on the same data and the same failure behaviour.',
        ],
        bullets: [
          'BLE, Wi-Fi and NFC, on the device and on the other side of the link',
          'Desktop or web tools for setup, logs and service',
          'A small backend when the product reports or is updated',
          'The factory test software that decides pass or fail',
        ],
      },
      {
        heading: 'What we do not pretend to be',
        paragraphs: [
          'We are an electronics design consultancy. A consumer app with no device, or a cloud platform with no hardware, is outside this work. If the product is the electronics, the software is in scope.',
        ],
      },
    ],
    faq: [
      {
        q: 'Do you build mobile apps?',
        a: 'When the product needs one to be set up, read or updated. The app is scoped with the firmware, so the protocol is not invented twice.',
      },
      {
        q: 'Who writes the factory test?',
        a: 'We do, with the test points and the programming fixture. A test no one can run on the line is not a test.',
      },
      {
        q: 'How does this relate to firmware?',
        a: 'Firmware is what runs on the board. This service is everything that talks to it. On a small product the same people often do both.',
      },
    ],
    related: [
      { href: '/services/firmware/', label: 'Embedded firmware development' },
      { href: '/services/dfm/', label: 'DFM and production transfer' },
      contact,
    ],
  },
  {
    slug: 'mechanical',
    group: 'services',
    serviceName: 'Mechanical design',
    title: 'Mechanical design for electronics',
    metaTitle: 'Mechanical design for electronics products',
    description:
      'Enclosures, mounting and the fit between the board and the housing. Mechanical design at Embedded Consultants, beside the electronics, in Novi Sad.',
    eyebrow: 'Services',
    summary:
      'Mechanical design here is the housing and the mounting of an electronics product: how the board, the connectors, the buttons and the fasteners meet the enclosure, within real tolerances.',
    sections: [
      {
        heading: 'What the work includes',
        paragraphs: [
          'The mechanical model and the board have to share one outline. A connector that is a fraction of a millimetre off is fine on three hand-built samples and a problem on a tooled housing.',
        ],
        bullets: [
          'Enclosure and mounting for the board',
          'Connector, button and light positions checked against the PCB',
          'A tolerance check where the board meets the plastic or the metal',
          'Notes for the toolmaker and for assembly',
        ],
      },
      {
        heading: 'What this is not',
        paragraphs: [
          'We are not a consumer-product styling studio. The work is the fit, the assembly and the path to a tool. Design for manufacturing of the whole product, including the board, is the production-transfer service.',
        ],
      },
    ],
    faq: [
      {
        q: 'Do you design the enclosure and the board together?',
        a: 'Yes. That is the point. The outline, the keep-outs and the connector positions are one set of numbers, used by both.',
      },
      {
        q: 'Can you join after the electronics exist?',
        a: 'Yes. Bring the board model and the current housing. The first job is usually the stack-up of tolerances, not a new shape.',
      },
      {
        q: 'Where is the work done?',
        a: 'In Novi Sad, Serbia, for clients in the US, Canada, Europe and India. You own the files once the work is paid.',
      },
    ],
    related: [
      { href: '/services/hardware-pcb/', label: 'Hardware and PCB design' },
      { href: '/services/dfm/', label: 'DFM and production transfer' },
      contact,
    ],
  },
  {
    slug: 'dfm',
    group: 'services',
    serviceName: 'Design for manufacturing and production transfer',
    title: 'Design for manufacturing and production transfer',
    metaTitle: 'Design for manufacturing, prototype to mass production',
    description:
      'Design for manufacturing and the move from prototype to mass production: test, programming, documentation and the handover to assembly. Embedded Consultants, Novi Sad.',
    eyebrow: 'Services',
    summary:
      'Design for manufacturing is the work that makes a working prototype buildable in volume. Production transfer is the package the factory uses: a controlled bill of materials, assembly drawings, a test, and programming instructions.',
    sections: [
      {
        heading: 'What usually blocks the jump to volume',
        paragraphs: [
          'The prototype proved the circuit can work. Volume has to work the same way on a line. The failures we keep seeing are ordinary: parts that cannot be bought, footprints that reflow will not forgive, no way to test the board, and programming treated as a laptop on a bench.',
        ],
        bullets: [
          'A lifecycle check on the bill of materials',
          'Footprints and panelization a contract manufacturer can assemble',
          'Test points and a pass-fail procedure',
          'A fixture and a process for programming each unit',
          'Documents with revisions, not a folder of Gerbers',
        ],
      },
      {
        heading: 'How a transfer runs',
        paragraphs: [
          'We review the design with the constraints of assembly, then change what has to change, then write the package. A short pilot on the real line is the check before a large order. We can use an assembly partner you already have, or help you find one. We do not operate a factory.',
        ],
      },
    ],
    faq: [
      {
        q: 'What is the difference between a prototype and a production package?',
        a: 'A prototype shows the function. A production package tells a factory how to build, test and program every unit, with alternates for parts and a revision the line can follow.',
      },
      {
        q: 'When should design for manufacturing start?',
        a: 'Before the layout is frozen, not after the first production lot. A review at schematic time is cheaper than a change after tooling.',
      },
      {
        q: 'Do you certify the product?',
        a: 'No. We design for the tests and support the accredited laboratory. The laboratory issues the certificate.',
      },
    ],
    related: [
      { href: '/services/hardware-pcb/', label: 'Hardware and PCB design' },
      { href: '/services/firmware/', label: 'Embedded firmware' },
      { href: '/blog/dfm-pitfalls-prototype-to-mass-production/', label: 'Nine DFM pitfalls' },
      contact,
    ],
  },
];

export const marketPages: LandingPage[] = [
  {
    slug: 'us',
    group: 'markets',
    title: 'Electronics development for US companies',
    metaTitle: 'Electronics development partner for US companies',
    description:
      'Embedded Consultants is an electronics development partner for US companies. The studio is in Novi Sad, Serbia. Shared hours are the US East Coast morning.',
    eyebrow: 'United States',
    summary:
      'Embedded Consultants is an electronics development partner for US companies. The engineering is done in Novi Sad, Serbia. You work in English, on a written brief, and the files are yours once the work is paid.',
    sections: [
      {
        heading: 'Time zones',
        paragraphs: [
          hours,
          'Novi Sad is six hours ahead of the US East Coast, in both winter and summer. A Belgrade afternoon is an East Coast morning: 15:00–18:00 in Novi Sad is 09:00–12:00 in New York. That is the overlap for a live call. The Pacific coast meets the window only at the end of the Belgrade day, around 09:00 Pacific. Outside those hours we answer in writing. A new brief gets a reply within one business day.',
        ],
      },
      {
        heading: 'How an engagement runs',
        paragraphs: [
          'Start with a project brief: what the product should do, the stage it is at, and whether you want a written reply or a free 30-minute call. The call is a request, not a booking. Ask for a mutual NDA before you share detail, and we sign it first.',
          'After the first look, the work is a fixed-scope feasibility review, milestone development through to production transfer, or support for a team you already have. There is no price until the product is understood. The first call and the initial research are free.',
        ],
      },
      {
        heading: 'IP and confidentiality',
        paragraphs: [
          'You own the schematics, the layout, the source and the documents once the work is paid. We do not put client names on this site beyond the partner marks already on the homepage.',
        ],
      },
    ],
    faq: [
      {
        q: 'Can a US company work with a studio in Serbia?',
        a: 'Yes. The project language is English. Calls are placed in the overlap with the US East Coast morning, or handled in writing. The contract and the files are what the engagement runs on, not a shared office.',
      },
      {
        q: 'What are your hours for the East Coast?',
        a: 'Monday to Friday, 08:00–18:00 in Novi Sad. That is 02:00–12:00 on the US East Coast. Live calls fit in the last three of those hours, 09:00–12:00 Eastern.',
      },
      {
        q: 'Do you sign an NDA?',
        a: 'Yes. Send yours or ask for ours. It is signed before confidential detail is shared.',
      },
      {
        q: 'Who owns the design?',
        a: 'You do, once the work is paid. That includes the schematic, the PCB files, the firmware, the software and the documentation.',
      },
    ],
    related: [
      { href: '/markets/europe/', label: 'Work with European companies' },
      { href: '/markets/serbia/', label: 'The Novi Sad studio' },
      { href: '/services/hardware-pcb/', label: 'Hardware and PCB design' },
      contact,
    ],
  },
  {
    slug: 'europe',
    group: 'markets',
    title: 'Electronics development for European companies',
    metaTitle: 'Electronics development for European companies',
    description:
      'An electronics design consultancy for companies in the EU, the UK, DACH and the Nordics. Embedded Consultants is in Novi Sad, Serbia, on Central European time.',
    eyebrow: 'Europe',
    summary:
      'Embedded Consultants works with European companies in the EU, the UK, DACH and the Nordics. The studio is in Novi Sad, Serbia. Serbia is in Europe. It is not a member of the European Union. The working day is Central European time.',
    sections: [
      {
        heading: 'Time zones',
        paragraphs: [
          hours,
          'Germany, Austria, Switzerland and the other Central European countries share that clock, so a Novi Sad day is their day. The UK is one hour behind in winter and on the same clock in summer, and a 09:00–17:00 UK day still sits inside the window. Sweden and Norway match Central European time. Finland is an hour ahead, and a Finnish business day still overlaps the Novi Sad window. We do not ask a European team to take calls at night.',
        ],
      },
      {
        heading: 'Nearshore, in plain words',
        paragraphs: [
          'Nearshore engineering in Europe means the work is done in Novi Sad for a company elsewhere in Europe, inside the same business day, in English, with the files delivered to you. It is not a claim that the company is inside the EU, and it is not a claim about price.',
        ],
      },
      {
        heading: 'How an engagement runs',
        paragraphs: [
          'The same three shapes as everywhere: a feasibility review, full development in phases, or support for your own team. NDA first if you want it. You own the IP once the work is paid. A reply to a new brief comes within one business day.',
        ],
      },
    ],
    faq: [
      {
        q: 'Do you work with EU companies from outside the EU?',
        a: 'Yes. The studio is in Serbia, which is not an EU member. The work product is the design files and the engineering, delivered in English. Any import, tax or contracting step that your company requires is yours to confirm with your own advisors. We do not give legal advice.',
      },
      {
        q: 'Which European regions do you mean?',
        a: 'Companies in the European Union, the United Kingdom, the DACH countries and the Nordics. The hours above are why those regions are a practical fit.',
      },
      {
        q: 'What language are the files and the calls in?',
        a: 'English. Drawings follow the usual electronics formats. We do not run the project in another language.',
      },
    ],
    related: [
      { href: '/markets/us/', label: 'Work with US companies' },
      { href: '/markets/serbia/', label: 'Why Novi Sad' },
      { href: '/services/dfm/', label: 'Prototype to mass production' },
      contact,
    ],
  },
  {
    slug: 'serbia',
    group: 'markets',
    title: 'Embedded engineering in Novi Sad, Serbia',
    metaTitle: 'Embedded engineering in Serbia, Novi Sad',
    description:
      'Embedded engineering in Serbia: Embedded Consultants is headquartered in Novi Sad. Nearshore electronics engineering for clients in Europe and the United States.',
    eyebrow: 'Serbia',
    summary:
      'Embedded engineering in Serbia, for this company, means one studio in Novi Sad. There is no second office. Nearshore engineering in Europe is that studio doing the electronics for a client in another country, on Central European time.',
    sections: [
      {
        heading: 'Why the location matters',
        paragraphs: [
          'Novi Sad is in Serbia, and Serbia is in Europe. The clock is Europe/Belgrade. ' + hours + ' A company in central Europe shares that day. A company in the UK or the Nordics overlaps it. A company on the US East Coast overlaps it in the morning there.',
          'That is the practical reason to place the work here. We do not publish headcount, rankings or cost comparisons. Those would be invented numbers.',
        ],
      },
      {
        heading: 'What is done in Novi Sad',
        paragraphs: [
          'Hardware and PCB design, embedded firmware, the software around the device, mechanical fit, and the transfer from prototype to mass production. Clients are in the US, Canada, Europe and India. The project language is English.',
        ],
      },
      {
        heading: 'How to start',
        paragraphs: [
          'Send a project brief and say whether you want a written reply or a free 30-minute call. The NDA can come first. You own the design files once the work is paid.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is Embedded Consultants based in Serbia?',
        a: 'Yes. Headquarters are in Novi Sad, Serbia. That is the only location we state.',
      },
      {
        q: 'What does nearshore engineering in Europe mean here?',
        a: 'Engineering done in Novi Sad for a client in another country, inside overlapping business hours, in English. It does not mean a local sales office in that country.',
      },
      {
        q: 'Do you work for Serbian companies as well?',
        a: 'Yes, on the same terms as any other client: a brief, an NDA if you want one, and files you own once the work is paid.',
      },
    ],
    related: [
      { href: '/markets/europe/', label: 'European companies' },
      { href: '/markets/us/', label: 'US companies' },
      { href: '/services/firmware/', label: 'Embedded firmware development' },
      contact,
    ],
  },
];

export const landingPages = [...servicePages, ...marketPages];
