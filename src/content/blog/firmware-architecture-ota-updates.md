---
title: "Firmware Architecture for Reliable OTA Updates"
description: "How to design embedded firmware for safe over-the-air updates: bootloader, A/B slots, signing, rollback, power-fail safety and fleet rollout strategy."
date: 2026-11-28T08:00:00+01:00
category: "firmware"
metaTitle: "Firmware Architecture for Reliable OTA Updates"
ogImage: "/blog/og/ota-architecture.png"
author: "Embedded Consultants Engineering Team"
tags: ["firmware", "OTA", "security", "IoT"]
definition: "An over-the-air (OTA) update replaces the firmware in a device that is already in the field, over a network, without a programmer attached."
takeaways:
  - "The device must always be able to boot a known-good image, including after power loss mid-write."
  - "Keep the bootloader small and rarely changed. Put the network stack in the application."
  - "Check integrity and authenticity of every image, and confirm the new image works before retiring the old one."
  - "Roll a fleet out in stages. A bad image should stop at a small group, not every unit."
faq:
  - q: "What is an OTA update?"
    a: "OTA means over the air: the device downloads a new firmware image and installs it in the field. A safe design can recover if power or the network fails during that install."
  - q: "Why use two firmware slots?"
    a: "One slot keeps the image that is known to boot. The other receives the new image. The bootloader switches only after the new image has been checked and, preferably, after it has run."
  - q: "What should the bootloader not do?"
    a: "It should not contain the product's network stack or features you expect to change often. If the bootloader itself fails, you cannot fix it with an update."
---
Over-the-air (OTA) updates turn a shipped product into one you can keep improving. They also create a new way to break thousands of devices at once. The difference between the two outcomes is almost entirely architecture, decided long before the first update is ever pushed.

Here is how we approach OTA-capable firmware on microcontroller-based products.

## Why must the device always boot a valid image?

Every design decision follows from this. Power can fail mid-download, mid-write or mid-reboot. Connectivity can drop. An image can be corrupted or malicious. In every case, the device must come back up in a known-good state and be able to try again.

## The bootloader: small, stable, and rarely updated

The bootloader is the foundation. Keep it:

- **Minimal:** verify, select, and boot an image. Nothing more. Networking stacks belong in the application, not in the bootloader.
- **Immutable or nearly so:** ideally write-protected after production. If it must be updatable, use a two-stage design with an immutable first stage.
- **Well-tested:** it is the one piece of code you cannot easily fix in the field.

Open-source options such as MCUboot (used with Zephyr, among others) provide a solid, reviewed starting point. Vendor bootloaders are another option; just evaluate their security and recovery behavior carefully.

## Image layout: A/B slots versus swap

The two common layouts on MCUs:

**Dual-slot (A/B) execution.** Two complete application slots; the device runs from one while the update is written to the other. Switching is just a pointer change. Fast and robust, but it needs either two times the application flash or execute-in-place support for both slots.

**Primary + staging with swap.** The new image is downloaded to a secondary slot (internal or external flash), then swapped into the primary slot by the bootloader. A swap that can resume after power loss, with a scratch area or move-based algorithm, allows reverting if the new image fails.

**Rule of thumb:** if you can afford the flash, A/B is simpler to reason about. If memory is tight, a swap-based scheme with external flash for staging is common and reliable when done properly.

## Verify everything: integrity and authenticity

A checksum confirms an image was not corrupted. It does not confirm who made it. Every OTA image should be:

- **Signed** with a private key kept off the device (ECDSA P-256 or Ed25519 are common choices)
- **Verified** by the bootloader with the public key or a key hash stored in protected memory, before every boot, not just after download
- **Optionally encrypted**, if the firmware contains IP or secrets worth protecting

Pair this with secure boot and debug port locking, or an attacker can simply bypass the update path through the debug interface.

## Rollback protection and test-and-confirm

Two separate concepts, both important:

**Revert on failure.** After an update, the new image boots in a "test" state. Only after it passes a self-check, such as peripherals initialized, the network reachable, and the application healthy, does it mark itself as confirmed. If it crashes or the watchdog fires before confirmation, the bootloader reverts to the previous image.

**Anti-rollback.** A security version counter (in OTP or protected flash) prevents an attacker from installing an older, signed but vulnerable image. Bump it deliberately, only for security-relevant releases.

## Power-fail and download robustness

- Download in chunks with resume support; do not restart a 1 MB download because of one dropped packet
- Verify the complete image before marking it as pending
- Check battery or supply state before starting a long flash operation
- Make every bootloader state transition atomic, and test it by cutting power at random points (automate this; it finds real bugs)

## Separate what changes from what doesn't

Not everything needs to be in the main image:

- **Configuration and calibration data** live in their own region with versioned schemas, so an update does not wipe them
- **Radio co-processor or modem firmware** may need its own update path, coordinated with the application
- **Large assets** (UI graphics, ML models) can be versioned and updated independently to keep images small

## Delta updates: worth it, with care

On low-bandwidth or metered links (cellular, LPWAN), delta updates can cut transfer size dramatically. They add complexity: the device must reconstruct the full image reliably, and you need to manage which base versions each delta applies to. For most Wi-Fi or Ethernet devices, full images are simpler and adequate.

## Fleet rollout: the server side matters too

The best device architecture can still be undone by an aggressive rollout. Build in:

- **Staged rollouts:** internal devices first, then a small percentage of the fleet, then everyone
- **Health telemetry:** boot success, confirm rate, crash reasons, per version
- **A pause button:** stop a rollout automatically when error rates rise
- **Device-side backoff:** to avoid every device hitting the server at the same moment

## Plan for regulation

Connected products increasingly need a documented update and vulnerability handling process, for example under the EU Cyber Resilience Act. An OTA architecture with signed images, secure boot, and version tracking is a strong foundation for meeting those obligations.

## A minimal checklist

- [ ] Bootloader minimal, protected, and tested under power loss
- [ ] Image signing with keys managed off-device
- [ ] Verification on every boot
- [ ] Test-and-confirm with automatic revert
- [ ] Anti-rollback counter
- [ ] Config and calibration data survive updates
- [ ] Staged rollout with health telemetry

## How we help

Embedded Consultants develops firmware and the surrounding hardware and software for connected products, from bootloader and OTA design to production programming and fleet tooling. If you are planning a connected product, or retrofitting updates to an existing one, we can help get the architecture right before it is in thousands of devices.

**[Send a project brief and pick a call window](https://embedded-consultants.com/#contact)** for a free 30-minute call. NDA-first on request, with a reply within one business day.
