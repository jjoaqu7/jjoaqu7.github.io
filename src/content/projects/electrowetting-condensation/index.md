---
title: Electrowetting for faster dropwise condensation
summary: Droplets that stay on a cooled surface slow condensation heat transfer. I designed electrowetting electrodes that collect the condensate and sweep it across the surface, bringing droplets to shedding size in about 46 s under 1 m/s airflow.
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
status: Presented at IHTC-18. Journal manuscript in preparation for the International Journal of Heat and Mass Transfer.
---

## The problem

When water condenses from humid air onto a cooled surface, it forms either a continuous liquid film (filmwise condensation) or separate droplets (dropwise condensation). Dropwise condensation can transfer heat up to an order of magnitude faster, but only if droplets keep growing, merging and leaving so that fresh surface is exposed for new droplets to form. Dropwise condensation is therefore a cycle, and the shorter the cycle, the better the heat transfer.

A droplet has to reach a critical size before an external force can remove it. On a vertical surface, gravity does this. On a horizontal surface, a shearing airflow has to drag the droplet off, so droplets stay on the surface while they grow. Passive coatings are also limited because the stages of the cycle need different wettability. Nucleation and growth favor hydrophilic (water-attracting) sites, while shedding needs a hydrophobic, low-adhesion surface, and a coating's wettability is fixed when it is made.

Electrowetting changes wettability on demand. Applying a voltage across a thin insulating (dielectric) layer under a droplet lowers its contact angle, i.e., the angle its edge makes with the surface. Selected regions of one surface can then be switched to favor growth or movement.

## My contribution

For my MASc thesis, I designed an electrowetting surface that shortens the dropwise condensation cycle in two stages. A collection stage gathers condensate at chosen sites, and a transport stage sweeps the droplets across the surface so that they merge into larger ones.

I designed the collection and transport electrode layouts, fabricated the chips in the cleanroom, designed and assembled the six-channel relay board that switches the electrode rows, wrote the Arduino firmware and the Python control interface, and ran the condensation experiments. The closed-loop mini wind tunnel and its instrumentation were built in an earlier PhD project in the lab.

## Results

The video at the top of the page shows the transport stage. The figure below shows the electrode layout.

![Electrode geometry with star-shaped collection electrodes on the left and chevron transport columns to the right](./electrodes.png)
*Electrode geometry. Star-shaped collection electrodes on the left feed chevron transport columns that widen toward the right.*

- **Collection.** When the first electrode row was switched on, droplets along its edges grew from ~20 µm to ~40 µm in diameter within ~5 s, mainly through repeated small-scale merging (micro-coalescence). Droplets over the inactive rows stayed below 20 µm.
- **Transport.** Switching the chevron rows on one after another moved droplets away from the collection zone. The droplets merged repeatedly as they moved (macro-coalescence) and reached shedding sizes of ~800 µm in diameter within ~46 s. The rows they left behind were cleared, exposing the surface for new nucleation.

Three earlier electrowetting condensation studies took ~570 to 900 s for droplets to reach a comparable size. Those studies used a higher voltage (~424 Vpp), a higher frequency (1 to 10 kHz) and a higher condensation potential, i.e., conditions that drive condensation more strongly. It should be noted that these results come from different setups, not a matched control. In the closest study, which used a similar wind tunnel, droplets reached the same shedding radius (~400 µm) after ~56 s, but at 15 m/s airflow and 424 Vpp at 10 kHz.

These experiments track droplet growth and movement on video and do not measure heat transfer directly. However, the much shorter growth time to shedding size strongly suggests a higher effective heat transfer coefficient (HTC). Shedding and HTC measurements are needed to confirm the thermal improvement.

[![IHTC-18 poster summarizing the collection and transport mechanism, experimental setup and results](./poster.jpg)](/files/ramirez-medina-ihtc18-poster.pdf)
*IHTC-18 poster with the electrode design, experimental setup, collection and transport image sequences, and comparison with earlier studies. Select the image to open the PDF.*

## How it works

### Collection and transport

The chip uses an open-surface, parallel-plate configuration. Gold electrodes sit between two silicon nitride dielectric layers under a hydrophobic top coating, and the conductive silicon substrate acts as the reference electrode. This produces strong vertical electric fields concentrated along the electrode edges. The [fabrication page](/projects/electrowetting-device-fabrication/) describes how the chips were made.

1. In the collection zone, the active electrode edges act as preferred sites for nucleation and growth. Because the signal is AC, the droplet contact lines oscillate, and neighboring droplets along the active edges merge repeatedly.
2. In the transport zone, the chevron shape makes the electrocapillary force on a droplet asymmetric, so a droplet next to an active row is pulled toward it. Switching the rows on in sequence moves droplets away from the collection zone.

I laid out the electrodes using a first-order force model that predicts the net sideways force on a droplet as a function of its position and the applied voltage. The [force model page](/projects/electrowetting-force-model/) has the details.

### Wind tunnel experiments

The experiments ran in a closed-loop mini wind tunnel with independent control of relative humidity (RH), air velocity and substrate temperature. The chip sat flush with the floor of the test section, and a thermoelectric (Peltier) module cooled it to 5 °C. The air was held at 60% RH, which is enough for condensation but low enough to avoid fog on the tunnel walls that would block the camera view. At 1 m/s, the airflow brings fresh humid air over the surface without shedding droplets, so their growth can be followed without interference from shedding. An overhead high-speed camera (Chronos 2.1-HD with a Navitar lens stack) imaged a ~3.2 mm × 1.6 mm field of view.

### Drive signal

The electrodes were driven with a 120 Vpp sine wave at 250 Hz (60 V peak) from a function generator and a high-voltage amplifier. AC was chosen over DC to limit charge build-up in the dielectric and extend device life. Solid-state relays on the switching board route the signal to each electrode row, and the control interface sets the switching sequence. The [drive electronics page](/projects/electrowetting-drive-electronics/) has the details.
