---
title: "EMC Pre-Compliance Testing: Find Failures Before the Lab Does"
description: "How to run EMC pre-compliance in-house: near-field probes, LISN, ESD and margin targets, so electronics products pass the certification lab first time."
date: 2026-11-27T08:00:00+01:00
category: "EMC"
metaTitle: "EMC Pre-Compliance Testing: A Practical Guide"
ogImage: "/blog/og/emc-precompliance.png"
author: "Embedded Consultants Engineering Team"
tags: ["EMC", "compliance", "testing"]
definition: "EMC pre-compliance is an in-house approximation of official electromagnetic compatibility tests, used to find emission and immunity problems before an accredited laboratory."
takeaways:
  - "Pre-compliance does not replace the certification lab. It finds problems while a change is still cheap."
  - "Identify the applicable standard first. The standard sets the limits and the immunity tests."
  - "Near-field probes and a LISN are for comparison and hunting sources. Absolute readings can be several dB off."
  - "Aim for margin, not a bare pass, because the lab setup will not match the bench exactly."
faq:
  - q: "What is EMC pre-compliance testing?"
    a: "It is a simplified version of radiated and conducted emissions, and of immunity tests such as ESD, run on your own bench so you can compare revisions before booking an accredited lab."
  - q: "Does a pre-compliance pass count as certification?"
    a: "No. The setup is not a calibrated lab. Use it to find sources and to judge relative margin. The legal pass still comes from the accredited test."
  - q: "Which standards should you name before measuring?"
    a: "The product and market decide: examples include CISPR 32 for multimedia, IEC 61326-1 for measurement equipment, IEC 60601-1-2 for medical, CISPR 25 for automotive components, and FCC Part 15 in the United States."
---
Few things stall a hardware launch like an EMC failure at the accredited lab. The product is "done", the launch date is set, and suddenly a 6 dB emissions peak at 150 MHz puts everything on hold. Each lab session costs money, the next free slot may be weeks away, and fixes made under pressure are rarely the best ones.

EMC pre-compliance testing moves that discovery earlier, to your own bench, when changes are still cheap. It does not replace the certification lab, but it dramatically increases the chance of passing the first time.

## What pre-compliance is and is not

Pre-compliance means approximating the official tests with simpler, cheaper equipment, so you can:

- Find the dominant emission sources and susceptibility weak points
- Compare design revisions and fixes relative to each other
- Estimate margin against the applicable limits

It is **not** a calibrated measurement. Absolute numbers from a pre-compliance setup can be off by several dB. That is why the goal is margin, not just a pass.

## Which standards apply before you measure?

Before measuring anything, identify the standards for your product and market: for example the EN 55032/CISPR 32 family for multimedia and IT equipment, EN 61326-1 for measurement and control equipment, IEC 60601-1-2 for medical electrical equipment, CISPR 25 for automotive components, plus FCC Part 15 for the US. The standard defines the limits, test setups, and the immunity tests you need to plan for.

## A practical pre-compliance toolkit

You do not need a semi-anechoic chamber to learn a lot:

- **Spectrum analyzer** with EMI bandwidths and a quasi-peak or average detector (many affordable instruments now offer EMI options)
- **Near-field probe set** (H-field and E-field) to locate sources on the board and cables
- **LISN** for conducted emissions on power inputs
- **Current clamp** to measure common-mode currents on cables, which are often the real antennas
- **ESD simulator gun** for IEC 61000-4-2 style checks
- A **preamplifier**, ferrites, and a stock of filter components to try fixes quickly

## Radiated emissions: hunt the antennas

At most frequencies below a few hundred MHz, the PCB itself is rarely the main radiator. Cables are. A small common-mode current on a 1 m cable can easily exceed Class B limits.

A practical workflow:

1. **Scan with a near-field probe** across the board to find hotspots: switching regulators, clocks, high-speed buses, unfiltered I/O.
2. **Clamp the cables** with a current probe and look for the same frequencies. Common-mode current on a cable is a strong predictor of radiated emissions.
3. **Correlate** the peaks with clock frequencies and harmonics, regulator switching frequencies, and data rates.
4. **Try fixes one at a time** and measure again: ferrites, filter capacitors, slower edges, spread-spectrum clocking, better grounding of cable shields.

If you have access to an open area or a quiet room, a simple antenna at a fixed distance gives a useful relative measurement for comparing revisions.

## Conducted emissions: the LISN is your friend

Conducted emissions (typically 150 kHz to 30 MHz) are mostly about switching power supplies. With a LISN between the supply and your device, you can measure directly against the limit lines with reasonable accuracy.

Common issues and fixes:

- **Differential-mode noise** from the input capacitor ripple: add or improve input filtering (LC or π filter)
- **Common-mode noise** coupled through parasitic capacitance of the switch node: reduce switch-node area, add a common-mode choke, review Y-capacitor placement
- **Harmonics of the switching frequency** right at a limit: consider frequency dithering, or move the switching frequency

## Immunity: don't forget the other half

Products also have to survive ESD, radiated RF fields, fast transients (EFT/burst), surges and conducted RF. Pre-testing immunity is often overlooked, but failures here can be harder to fix because they may require design changes in protection circuits and firmware.

Useful bench checks:

- **ESD** on every user-accessible point, connector shell, and seam. Watch for resets, lock-ups, and corrupted data, not just damage.
- **Firmware robustness:** watchdogs configured, communication stacks recover from errors, and the product returns to a safe state after a disturbance.
- **Burst and surge** on power and long signal lines, if you have the equipment or can borrow lab time.

## Design for EMC from day one

Pre-compliance is most effective when it confirms good design rather than rescuing a bad one. The highest-leverage decisions happen early:

- Solid, uninterrupted ground planes and a defined chassis connection
- Careful layout of switching regulator hot loops
- Filtering at every cable entry point
- Controlled edge rates on fast signals
- Placeholder footprints for optional filtering, so fixes do not require a respin

## Target margin

As a practical rule, aim for at least 6 dB of margin below limits in pre-compliance before booking the accredited lab. Measurement uncertainty, unit-to-unit variation, and setup differences eat into margin quickly.

## How we help

Embedded Consultants designs hardware with EMC in mind from the first schematic, and supports teams in troubleshooting emissions and immunity issues before formal testing. We work across industrial, consumer, automotive and medical products.

**[Send a project brief and pick a call window](https://embedded-consultants.com/#contact)** for a free 30-minute call. NDA-first is available, and we reply within one business day.
