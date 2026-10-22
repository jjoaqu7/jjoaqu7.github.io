---
title: Electrowetting device fabrication
summary: Cleanroom fabrication of the electrowetting chips, from photolithography and metal lift-off to PECVD silicon nitride and a spin-coated fluoropolymer, adapted to in-house equipment.
period: grad
track: research
start: 2024-09
role: MASc thesis research
org: York University Microfabrication Facility (YMF)
tags: [microfabrication, photolithography, thin films, PECVD, lift-off]
cover: ./stack.svg
coverAlt: Cross-section of the device stack, from the conductive silicon substrate through the buried gold electrodes to the hydrophobic top coat (not to scale)
featured: true
order: 2
facts:
  - label: Substrate
    value: Boron-doped Si, 500 µm, 0.001 to 0.005 Ω·cm
  - label: Electrodes
    value: Ti 5 nm and Au 50 nm by e-beam evaporation and lift-off
  - label: Dielectrics
    value: LPCVD SiNₓ 100 nm below, PECVD SiNₓ 150 nm above
  - label: Hydrophobic layer
    value: Fluoropel PFC1601VF-S, cured at 180 °C for 30 min
  - label: Chip size
    value: 25 mm × 15 mm
links:
  - label: The condensation experiments these chips were built for
    href: /projects/electrowetting-condensation/
status: Process published in the IHTC-18 paper (Aug 2026).
credits: Fabricated at the York University Microfabrication Facility (YMF), which featured the work in a student research highlight in January 2026.
---

## The device

Each chip is a parallel-plate electrowetting device with an open top surface. The conductive silicon substrate is the reference electrode. Patterned gold electrodes sit between two silicon nitride dielectric layers, and a thin fluoropolymer makes the top surface hydrophobic. When an electrode is driven, the droplets above it see a strong vertical field across the top dielectric, and their contact angle drops locally.

This layout keeps the condensing surface uniform and hydrophobic everywhere, which matters for shedding, while each electrode still controls wetting locally.

## Process

1. **Starting wafer.** Boron-doped silicon (500 µm) with a 100 nm LPCVD silicon nitride bottom dielectric.
2. **Photolithography.** S1813 positive photoresist spun to about 1.8 µm, exposed on an OAI 800E mask aligner (150 W, about 14 s), developed in MF-319 for 45 s.
3. **Metal deposition.** 5 nm titanium adhesion layer and 50 nm gold by electron-beam evaporation (Angstrom Nexdep).
4. **Lift-off.** PG Remover at 80 °C for 45 min with sonication, leaving metal only in the patterned openings.
5. **Top dielectric.** 150 nm silicon nitride by PECVD (Trion Minilock Phantom Duo), deposited over the electrodes.
6. **Dicing.** Wafers cut into 25 mm × 15 mm coupons sized for the wind tunnel test section.
7. **Hydrophobic coat.** Cytonix Fluoropel PFC1601VF-S spin coated and cured at 180 °C for 30 min.

![LPCVD schematic](./process-1-lpcvd.svg)
![Photolithography schematic](./process-2-photolithography.svg)
![Electron-beam evaporation schematic](./process-3-e-beam.svg)
![Lift-off schematic](./process-4-lift-off.svg)
![PECVD schematic](./process-5-pecvd.svg)
![Wafer dicing schematic](./process-6-dicing.svg)
![Spin coating schematic](./process-7-spin-coating.svg)
*The process steps in order. The schematics are conceptual and not to scale.*

## Mask design

![Photomask layout for a full wafer](./mask.png)
*Photomask layout for a full wafer, with ten electrode-array chip designs and rows of circular test structures of several diameters. Each chip routes its electrode rows to contact pads along the edges.*

## Working within the facility

The metal and dielectric deposition steps were adapted to the equipment and budget available in-house while keeping the electrowetting behaviour the design needed. The electrode shapes and spacing were chosen beforehand with a [force model](/projects/electrowetting-force-model/), so the fabricated layout follows from the model.
