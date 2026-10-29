---
title: Electrowetting for faster dropwise condensation
summary: A dual-mechanism electrode design that collects condensate at designated nucleation sites and sweeps it across the surface, bringing droplets to shedding scale in about 46 s under 1 m/s airflow.
period: grad
track: research
start: 2024-09
role: MASc thesis research
org: SEiL, York University
tags: [electrowetting, condensation heat transfer, microfabrication, high-speed imaging]
cover: ./cover.jpg
coverAlt: Condensate droplets on the chip merge as chevron transport electrodes switch on in sequence
video: /media/electrowetting-transport.mp4
featured: true
order: 1
facts:
  - label: Droplet coarsening
    value: Droplets reach ~800 µm in ~46 s
  - label: Prior studies
    value: ~570 to 900 s in three earlier electrowetting papers
  - label: Drive signal
    value: 120 Vpp sine at 250 Hz (60 V peak)
  - label: Test conditions
    value: 60% RH, 1 m/s airflow, 5 °C substrate
links:
  - label: IHTC-18 poster (PDF)
    href: /files/ramirez-medina-ihtc18-poster.pdf
  - label: Cleanroom device fabrication
    href: /projects/electrowetting-device-fabrication/
  - label: 3D force and energy model
    href: /projects/electrowetting-force-model/
  - label: Drive electronics and switching
    href: /projects/electrowetting-drive-electronics/
status: Presented at IHTC-18 (August 2026). Journal manuscript in preparation for the International Journal of Heat and Mass Transfer.
credits: Supervised by Prof. Alidad Amirfazli. The closed-loop mini wind tunnel and its baseline instrumentation were developed during an earlier PhD project in the laboratory. The dual-mechanism active surface strategy, electrode designs, microfabrication, drive electronics, sequencing software and experiments described here are my work.
---

## The problem

When water vapor condenses from humid air onto a cooled surface, accumulating liquid droplets form an insulating thermal blanket that suppresses heat transfer.

In humid air, non-condensable gases such as nitrogen and oxygen cannot cross the liquid-vapor interface and accumulate in a dense near-surface boundary layer. This interfacial buildup lowers the local water vapor partial pressure, creating a strong diffusion barrier that chokes condensation. Dropwise condensation can transfer heat up to an order of magnitude faster than a continuous liquid film, but only if droplets are continuously shed to clear the surface for fresh nucleation.

Passive hydrophobic coatings cannot solve this compromise because their wettability is fixed at fabrication. On horizontal surfaces, droplets must grow passively until gravity or shearing airflow can dislodge them, leaving the surface blanketed in liquid for hundreds of seconds.

## My contribution

While the closed-loop mini wind tunnel was built in an earlier lab doctoral project, I conceived the dual-mechanism active surface strategy to accelerate surface renewal.

I designed the collection and transport electrode geometries, microfabricated the multi-layer chips in the cleanroom, designed and assembled the six-channel high-voltage switching board, wrote the microcontroller firmware and desktop sequencer, and conducted the high-speed condensation experiments under controlled airflow.

## Visual results and coarsening dynamics

![Electrode geometry with star-shaped collection electrodes on the left and chevron transport columns to the right](./electrodes.png)
*Electrode geometry. Star-shaped collection electrodes on the left feed chevron transport columns that widen toward the right.*

The chip couples two complementary active mechanisms to clear condensate rapidly.

- **Collection stage.** Star-shaped electrodes generate strong perimeter electric fields that promote local nucleation and micro-merging. At active star edges, droplets grew from about 20 µm to about 40 µm within 5 s, while droplets over inactive regions remained below 20 µm.
- **Transport stage.** Rows of chevron electrodes switch on in sequence. Each active row pulls nearby droplets across the surface, sweeping them through the collection zone where they coalesce into larger departing drops.

Together, the two stages brought droplets to shedding scale (roughly 800 µm diameter) in approximately 46 s under 1 m/s airflow. Three recent electrowetting condensation studies reported roughly 570 to 900 s for the same stage, while also requiring higher voltage, frequency, airflow velocity or condensation potential.

[![IHTC-18 poster summarizing the collection and transport mechanism, experimental setup and results](./poster.jpg)](/files/ramirez-medina-ihtc18-poster.pdf)
*IHTC-18 conference poster presented in Rio de Janeiro, August 2026. Select the image to view the full PDF.*

## How it works and experimental platform

### Dual-stage actuation mechanism

Electrowetting alters apparent wettability by applying an electric field across a hydrophobic dielectric stack. The design exploits this across two functional zones.

1. In the collection zone, star-shaped geometry creates sharp convex corners and edges where electric field lines concentrate. This localized field enhancement lowers the contact angle at designated sites, drawing condensate into controlled clusters.
2. In the transport zone, chevron electrodes produce an asymmetric contact-line force that pulls droplets forward. As an active row pulls liquid away, it leaves bare hydrophobic surface behind, ready for immediate renewed nucleation.

### Controlled wind-tunnel experiments

Experiments were carried out in a closed-loop mini wind tunnel providing independent control over humidity, airflow velocity and temperature. Operating conditions were held at 60% relative humidity, 1 m/s airflow velocity, and a substrate temperature of 5 °C cooled by a thermoelectric module. High-speed imaging was performed using an overhead Chronos 2.1-HD camera coupled to a Navitar lens stack, capturing a calibrated 3.2 mm × 1.6 mm field of view.

### Drive signal and load handling

The system was energized with a 120 Vpp sine wave at 250 Hz (60 V peak). AC excitation was specifically selected over DC to prevent charge trapping within the dielectric stack and avoid premature dielectric breakdown. High-voltage routing was managed by custom solid-state relay hardware described on the [drive electronics page](/projects/electrowetting-drive-electronics/).

### Thermal metrology and interpretation

These experiments establish accelerated droplet coarsening and rapid surface renewal. Because these measurements track droplet growth and motion optically, they demonstrate the fluidic mechanism that drives thermal improvement rather than a direct calorimetric heat-flux reading. Shortening the droplet residence time directly limits the conductive resistance of large drops and breaks up the gas-side boundary layer, establishing a practical route to higher condensation performance.
