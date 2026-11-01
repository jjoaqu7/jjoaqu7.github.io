---
title: Electrowetting device fabrication
summary: The condensation experiments needed chips with gold electrodes buried between thin silicon nitride layers under a water-repellent coating. I designed the photomask and carried out most of the cleanroom process at York University.
period: grad
track: research
start: 2024-09
role: MASc thesis research
org: York University Microfabrication Facility (YMF)
tags: [microfabrication, photolithography, thin films, PECVD, lift-off]
cover: ./completed-chip.jpeg
coverAlt: Completed diced electrowetting chip from the IHTC-18 poster, with annotated contact pads and electrode designs 1a and 1b
coverStyle: diagram
showCover: false
featured: true
order: 2
facts:
  - label: Substrate
    value: Boron-doped Si (500 µm, 0.001 to 0.005 Ω·cm)
  - label: Electrodes
    value: Ti 5 nm adhesion and Au 50 nm via e-beam evaporation and lift-off
  - label: Dielectrics
    value: LPCVD SiNₓ 100 nm (bottom) and PECVD SiNₓ 150 nm (top)
  - label: Hydrophobic layer
    value: Cytonix Fluoropel PFC1601VF-S cured at 180 °C for 30 min
  - label: Coupon size
    value: 25 mm × 15 mm diced chips
links:
  - label: The condensation experiments these chips were built for
    href: /projects/electrowetting-condensation/
  - label: 3D force and energy model
    href: /projects/electrowetting-force-model/
  - label: Drive electronics and switching
    href: /projects/electrowetting-drive-electronics/
status: The fabrication process is described in the IHTC-18 paper. Featured in a York University Microfabrication Facility student research highlight.
---

## The problem

Electrowetting changes how a droplet wets a surface when a voltage is applied to an electrode beneath it, separated from the droplet by a thin insulating (dielectric) layer. For condensation, this has to work on an open surface where droplets form and grow, so the chip has to meet several competing requirements.

The condensing surface must be hydrophobic and continuous everywhere, since droplets that touch exposed metal or a step edge pin to the surface and are harder to shed. The dielectric layers should be thin, because a thinner layer gives a stronger electrowetting response at a given voltage (here, 120 V peak-to-peak). However, thin films (here, 100 nm and 150 nm of silicon nitride) are more vulnerable to pinholes, particles and electrical breakdown, and a single defect in the bottom layer can short an electrode to the grounded silicon substrate. Most of the process also had to be adapted to the tools available at the York University Microfabrication Facility (YMF).

## My contribution

I designed the photomask layout and carried out the photolithography, electron-beam evaporation, lift-off, PECVD and fluoropolymer coating at YMF. The bottom nitride layer was deposited by LPCVD at the University of Waterloo's Quantum-Nano Fabrication and Characterization Facility, and the wafers were diced by a technician.

When some chips showed electrical shorts between the electrodes and the substrate, I measured the affected channels and planned a staged set of leakage tests to find the process step at which the insulation fails. I also used an oxygen plasma ash to strip the fluoropolymer so that chips could be recoated.

## The finished chip

The photo below shows a finished chip. The light rectangles are the gold contact pads, and thin traces connect them to the electrode arrays along the lower edge.

![Completed diced electrowetting chip with annotated contact pads and electrode designs 1a and 1b](./completed-chip.jpeg)
*Completed electrowetting chip, as shown in the IHTC-18 poster. The poster's annotations mark the contact pads and electrode designs 1a and 1b.*

The cross-section shows the layers beneath the surface, and the mask layout shows how ten chips were arranged on one wafer.

![Cross-section schematic of the multi-layer electrowetting device stack](./stack.svg)
*Cross-section of the chip, not to scale. Ti/Au electrodes sit between the LPCVD and PECVD silicon nitride layers, under the fluoropolymer coat. The boron-doped silicon substrate is the grounded reference electrode.*

![Photomask layout for a full wafer](./mask.png)
*Photomask layout for a four-inch wafer, with ten chip designs and rows of circular test patterns of different diameters above and below them.*

## How the chips were made

### Process steps

1. Four-inch boron-doped silicon wafers (500 µm thick, 0.001 to 0.005 Ω·cm) serve as the grounded reference electrode. A 100 nm silicon nitride layer, deposited by low-pressure chemical vapor deposition (LPCVD), insulates the substrate from the electrodes.
2. For photolithography, Shipley S1813 positive photoresist is spin-coated to approximately 1.8 µm, soft-baked, exposed through the photomask for about 14 s on an OAI 800E mask aligner (150 W lamp) and developed in MF-319 for 45 s. This leaves openings in the resist where the electrodes will be.
3. Electron-beam evaporation (Angstrom Engineering Nexdep) deposits a 5 nm titanium adhesion layer and then 50 nm of gold. Gold adheres poorly to nitride, while titanium bonds to both.
4. Lift-off in PG Remover at 80 °C for 45 min, followed by two 10 s sonication pulses, removes the resist and the metal on top of it. The wafer is then inspected under a stereomicroscope for leftover metal, such as raised ridges (fences) along electrode edges or bridges between adjacent electrodes.
5. With the contact pads covered by masking tape, a 150 nm silicon nitride layer is deposited over the electrodes by plasma-enhanced chemical vapor deposition (PECVD, Trion Minilock Phantom Duo). PECVD runs at a lower temperature than LPCVD, which matters once metal is on the wafer; at LPCVD temperatures, titanium and gold could interdiffuse.
6. A dicing saw cuts the wafer into 25 mm × 15 mm coupons that fit the 75 mm × 25 mm floor of the wind-tunnel test section.
7. Cytonix Fluoropel PFC1601VF-S is spin-coated with the same spin settings as the photoresist and baked at 180 °C for 30 min. Removing the tape exposes the pads for wiring.

![Schematic of LPCVD, with reactant gases depositing silicon nitride on wafers in a heated tube furnace](./process-1-lpcvd.svg)
![Schematic of positive-resist photolithography in three stages, UV exposure through a mask, chemical change and development](./process-2-photolithography.svg)
![Schematic of electron-beam evaporation, with an electron beam heating a metal source and the vapor condensing on the substrate above](./process-3-e-beam.svg)
![Schematic of metal lift-off in three stages, patterned resist, metal deposition and resist removal](./process-4-lift-off.svg)
![Schematic of PECVD, with an RF plasma activating precursor gases above the wafer](./process-5-pecvd.svg)
![Schematic of a processed wafer being diced into 25 by 15 mm coupons](./process-6-dicing.svg)
![Schematic of spin coating in three stages, dispensing, spinning and drying](./process-7-spin-coating.svg)
*How each technique works, in process order. The schematics are conceptual and not to scale.*

### Finding where the insulation fails

Some finished chips showed low-resistance paths between an electrode and the silicon substrate, measured on the bare chip before any electrowetting voltage was applied. Such a path means the electrode is no longer insulated from ground, either through the 100 nm bottom nitride or around it. Shorts appeared both in chips whose pads were taped during PECVD and in a later version of the process that opened the pads by reactive ion etching (RIE) after PECVD. A measurement made only at the end, however, cannot show which step caused the failure.

One possible cause is charging during the plasma steps, where metal exposed to the plasma collects charge and puts a voltage across the thin bottom nitride. To separate the steps, I planned the same DC leakage current-voltage (I-V) test between electrode and substrate at three checkpoints, namely (1) after metal deposition and lift-off, (2) after PECVD and (3) after pad-opening RIE. The first checkpoint at which a previously passing structure fails identifies the step to investigate. A resistance check from pad to electrode at each checkpoint separates a broken metal trace from failed insulation.

### Stripping and recoating the fluoropolymer

During condensation testing, the thin fluoropolymer coat can become contaminated or degrade. Wiping it off with solvent and swabs can leave lint and scratches that later become pinholes. Instead, I stripped the coat with an oxygen-only plasma ash on the Trion etch chamber (50 sccm O2, 300 W ICP, 25 W RIE, 30 mTorr, starting at 2 min). Since the recipe contains no fluorine, it removes the fluoropolymer and organic residue without etching the 150 nm silicon nitride. After ashing, water spreads into a film on the surface instead of beading, which shows that the hydrophobic coat is gone. The chip is then recoated promptly with fresh fluoropolymer and cured.
