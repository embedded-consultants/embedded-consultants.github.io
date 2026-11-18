---
title: "Designing Electronics for Medical and Automotive: What Changes"
description: "What changes when electronics move into medical or automotive products: standards, component qualification, safety, documentation and test, explained."
date: 2026-11-23T08:00:00+01:00
category: "medical"
metaTitle: "Medical & Automotive Electronics: What Changes"
ogImage: "/blog/og/medical-automotive.png"
author: "Embedded Consultants Engineering Team"
tags: ["medical", "automotive", "compliance", "safety"]
definition: "Medical and automotive electronics are ordinary circuits plus an evidence system: requirements, risk controls, qualified parts and tests have to be traceable, not only shown to work once."
takeaways:
  - "The circuit skills carry over. The new work is proof, documentation and change control."
  - "Traceability runs from the requirement to the design and then to the test that shows the requirement is met."
  - "Part qualification, safety architecture and the test record are planned with the schematic, not written afterwards."
  - "This note is an engineering overview. It is not regulatory advice."
faq:
  - q: "What changes when electronics move into medical or automotive?"
    a: "Less about how you draw a circuit, and more about how you prove it: traceable requirements, risk management, qualified components and a controlled design history."
  - q: "Is a working prototype enough evidence?"
    a: "No. Both domains expect a record that links what the product must do to the design choices and to the tests that checked them."
  - q: "Does this post replace a regulatory consultant?"
    a: "No. It lists the engineering work to plan for. The applicable standard and the legal path still need the right specialist for the product and the market."
---
A capable team can build a working consumer or industrial electronics product. Moving into medical or automotive changes less about *how* you design circuits and more about how you **prove**, **document**, and **control** them. Teams that underestimate this shift tend to discover it late, when design history files are missing or a component turns out not to be qualified.

This post is an overview of what changes and where to start. It is not a substitute for regulatory advice, but it should help you plan realistically.

## What has to be proved, not only built?

In both domains, the product must not only be safe and reliable; you must be able to show *why* it is. That means:

- **Traceability** from requirements to design to verification
- **Risk management** that drives design decisions, not a document written afterwards
- **Controlled processes** for design changes, suppliers, and production

If your current process is "the design is in the repo and the tests are in someone's head", that is the first thing to address.

## Medical electronics

### Key standards

- **IEC 60601-1:** basic safety and essential performance for medical electrical equipment, covering insulation, creepage and clearance, leakage currents, and protection against electrical shock (MOOP/MOPP)
- **IEC 60601-1-2:** EMC requirements for medical devices, typically stricter in immunity than consumer standards
- **ISO 14971:** risk management throughout the device lifecycle
- **IEC 62304:** software lifecycle processes, with rigor scaled by software safety class (A, B, C)
- **ISO 13485:** quality management system for the manufacturer

Plus the applicable regulation for your market, such as FDA requirements in the US or the MDR in the EU.

### What changes in the hardware

- **Isolation and insulation:** patient-connected parts need defined means of protection, often driving isolated power supplies, isolated data interfaces, and wide creepage distances
- **Leakage current limits:** affect power supply choice and Y-capacitor values
- **Essential performance under fault conditions:** single-fault analysis becomes a design input
- **Component choice:** traceability and supplier stability matter; changing a critical component later can trigger re-verification

### What changes in the firmware

- Architecture documentation and segregation of software items by safety class
- Unit and integration testing with documented evidence
- SOUP (third-party software) identified and assessed, including RTOS and libraries
- Formal change control and problem resolution processes

## Automotive electronics

### Key standards and practices

- **AEC-Q100 / Q101 / Q200:** stress qualification for ICs, discrete semiconductors, and passive components
- **ISO 26262:** functional safety, with requirements scaled by ASIL (A to D)
- **ISO/SAE 21434:** cybersecurity engineering for road vehicles
- **CISPR 25** and OEM-specific EMC requirements
- **Automotive SPICE:** process maturity expected by many OEMs and Tier 1s
- **IATF 16949:** quality management for automotive production

### What changes in the hardware

- **Environmental range:** typically -40 °C to +85 °C, +105 °C or +125 °C depending on location in the vehicle, plus vibration, humidity and thermal cycling
- **Electrical environment:** load dump, cold crank, reverse battery, and transients on the 12 V/24 V supply (ISO 7637, ISO 16750 or OEM specifications)
- **Qualified components:** AEC-Q grades for everything where it is required, which narrows choices and affects cost and lead time
- **Safety mechanisms:** for ASIL-rated functions, diagnostics such as voltage monitoring, watchdogs, redundant measurement paths, and safety MCUs with lockstep cores

### What changes in the firmware

- Coding guidelines such as MISRA C, with static analysis evidence
- Safety analysis (FMEA, FTA) linked to software architecture
- Freedom from interference between software of different criticality
- Defined, often AUTOSAR-based, architecture in many OEM contexts

## Practical advice if you are entering these markets

1. **Decide the classification early.** Software safety class or ASIL determines effort more than any technical choice. Get it wrong and you either over-engineer or have to redo work.
2. **Choose components for the target domain from the first prototype.** Swapping to medical-grade isolation or AEC-Q parts after EVT often means a redesign.
3. **Build the documentation as you go.** Retroactive design history files are expensive and rarely convincing to auditors.
4. **Plan test capacity.** Environmental, EMC and safety testing take time and lab slots; book them early.
5. **Reuse wisely.** A consumer design can be a starting point, but expect insulation, protection, and component changes, and treat it as a new design for verification purposes.

## Where an experienced partner helps

Most of the cost in these domains comes from late discoveries: an insulation distance that cannot be achieved in the enclosure, a non-qualified component on a critical path, or software developed without the required lifecycle evidence. Foresight here is worth far more than speed.

Embedded Consultants has worked on industrial, consumer, automotive and medical electronics for around a decade, covering hardware, firmware, software and mechanical design, from prototype to mass production. We can help you scope the regulatory impact on your design early and build products that are ready for certification.

**[Send a project brief and pick a call window](https://embedded-consultants.com/#contact)**: a free 30-minute call, NDA-first if required, and a reply within one business day.
