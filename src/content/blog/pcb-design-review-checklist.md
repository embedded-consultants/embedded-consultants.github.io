---
title: "The PCB Design Review Checklist We Use Before Every Release"
description: "A practical PCB design review checklist covering schematic, power, layout, signal integrity, EMC, DFM and documentation, for catching errors before fab."
date: 2026-11-26T08:00:00+01:00
category: "PCB"
metaTitle: "PCB Design Review Checklist: Schematic to Release"
ogImage: "/blog/og/pcb-review-checklist.png"
author: "Embedded Consultants Engineering Team"
tags: ["PCB", "design review", "hardware"]
definition: "A PCB design review is a staged check of the schematic, power, layout, EMC and manufacturing files before a board is released to fabrication."
takeaways:
  - "Most respins come from small, checkable mistakes, not from unsolved engineering."
  - "Review the schematic before layout, placement before routing, and the full package before release."
  - "The designer should not be the only reviewer, and every finding needs an owner."
  - "Power, pinout, protection, stack-up, EMC and the fabrication package each need their own pass."
faq:
  - q: "What is a PCB design review?"
    a: "It is a structured pass over the schematic and layout, done in stages, to catch pinout, power, routing and manufacturing errors before the board is fabricated."
  - q: "When should the review happen?"
    a: "Schematic review before layout starts, placement review before routing, and a final review before Gerbers and the BOM are released."
  - q: "What does the checklist not replace?"
    a: "It does not replace measurement. A clean review still needs bring-up and, where the product requires it, pre-compliance and lab testing."
---
A board respin costs weeks of calendar time and, in a regulated or high-volume product, a lot more than the fab invoice. Most respins we have seen were not caused by hard engineering problems. They were caused by small, checkable mistakes that nobody checked.

A structured review fixes that. Below is a condensed version of the checklist we run before releasing a board to fabrication. Use it, adapt it, and make it part of your release process.

## How to run the review

- **Review in stages.** Schematic review before layout starts, placement review before routing, and a final review before release. Finding a wrong pinout during placement costs minutes; finding it after fab costs weeks.
- **Use a fresh pair of eyes.** The designer should not be the only reviewer. Familiarity hides errors.
- **Record findings.** Every finding gets an owner and a resolution, even if the resolution is "accepted, rationale: ...".

## 1. Schematic: correctness

- [ ] Every IC pinout verified against the latest datasheet revision, including the exact package variant
- [ ] Unused pins handled per the datasheet (tied, pulled, or left floating only where allowed)
- [ ] Reset, boot-mode, and strapping pins have defined states at power-up
- [ ] Pull-ups/pull-downs present and correctly sized on I²C, open-drain lines, and enables
- [ ] Logic levels compatible across every interface, including during power sequencing
- [ ] Polarized parts (diodes, electrolytics, tantalums) oriented correctly
- [ ] Net names consistent; no accidental shorts through similarly named nets

## 2. Power

- [ ] Power tree documented: every rail, its source, current budget, and margin
- [ ] Regulator stability: output capacitor type, value and ESR within the regulator's requirements
- [ ] Capacitor DC-bias derating applied to MLCCs (a 10 µF 0603 at 5 V may be well under half its nominal value)
- [ ] Inrush current and power sequencing requirements met
- [ ] Reverse-polarity, overvoltage, and ESD/surge protection on external power inputs
- [ ] Thermal dissipation calculated for linear regulators, MOSFETs, and shunts

## 3. Interfaces and protection

- [ ] ESD protection on every connector pin that a user or cable can touch
- [ ] Series termination or common-mode chokes where required by the interface
- [ ] Connector pinout cross-checked against the mating cable or board drawing
- [ ] Debug and programming interfaces accessible on production units

## 4. Layout: placement

- [ ] Decoupling capacitors placed at the pins they serve, with short low-inductance loops
- [ ] Switching regulator hot loops minimized per the reference layout
- [ ] Crystals close to the MCU, guarded, with no high-speed routing underneath
- [ ] Analog and sensitive circuits separated from switching nodes and digital noise
- [ ] Components placed with assembly, inspection and rework clearances in mind
- [ ] Mechanical constraints verified: board outline, mounting holes, keep-outs, connector positions, component heights

## 5. Layout: routing and stack-up

- [ ] Stack-up defined with the fab, including impedance-controlled layers
- [ ] Controlled-impedance traces (USB, Ethernet, LVDS, RF) at the correct width and spacing
- [ ] Differential pairs length-matched within interface tolerances
- [ ] Every high-speed signal has a continuous reference plane; no crossing plane splits
- [ ] Return paths considered for layer transitions (stitching vias near signal vias)
- [ ] Current-carrying traces and vias sized for current and temperature rise (IPC-2152)
- [ ] Creepage and clearance met for any mains or high-voltage section

## 6. EMC considerations

- [ ] Ground strategy reviewed: solid planes, no unintended slots, chassis ground connection defined
- [ ] Clock and fast-edge signals kept short and away from board edges and connectors
- [ ] Filtering on cables leaving the enclosure
- [ ] Space for optional filter components (0 Ω or DNP footprints) where risk is uncertain

## 7. DFM and DFT

- [ ] Fab rules within the chosen manufacturer's standard capability
- [ ] Fiducials present (global and local for fine-pitch parts)
- [ ] Paste mask reviewed for large pads and exposed thermal pads
- [ ] Test points for every rail, clock, reset and programming interface
- [ ] Silkscreen readable: reference designators, polarity marks, pin 1, board revision

## 8. Documentation and release

- [ ] BOM complete, with manufacturer part numbers and approved alternates
- [ ] DNP parts clearly marked in both BOM and assembly drawing
- [ ] Fabrication drawing with stack-up, material, finish, and tolerance notes
- [ ] Revision number on copper and in all output files
- [ ] Release package archived and tagged in version control

## What the checklist will not do for you

A checklist catches omissions. It does not replace engineering judgment on architecture, margins, or trade-offs. The most valuable reviews combine both: a checklist for completeness, and an experienced reviewer asking "what happens when..." questions about temperature extremes, worst-case tolerances, cable faults and production variation.

That is the part that comes from experience. Patterns such as a buck converter that rings at light load, an ESD path that runs through the MCU, or a connector rotated 180° in the mechanical model are easy to spot once you have seen them a few times, and expensive to find any other way.

## How we help

Embedded Consultants offers independent design reviews of schematics and layouts, as well as full hardware, firmware, software and mechanical development from prototype to mass production. If you are a few weeks from releasing a board, a review now is far cheaper than a respin later.

**[Send a project brief and pick a call window](https://embedded-consultants.com/#contact)**: a free 30-minute call, NDA-first on request, and a reply within one business day.
