---
title: Electrowetting force model for electrode design
summary: A first-order 2D model of the electrocapillary force on a droplet over patterned electrodes, used to choose electrode shapes and spacing before fabrication.
period: grad
track: research
start: 2025
role: MASc thesis research
org: SEiL, York University
tags: [electrowetting, modelling, Python, design]
cover: ./transport-model.svg
coverAlt: Force-model results for zig-zag transport columns, showing how rim coverage, sequenced activation and column spacing decide which droplets move
order: 5
facts:
  - label: Inputs
    value: Electrode geometry, droplet position and size, applied voltage
  - label: Output
    value: Net lateral electrocapillary force on the droplet
  - label: Used for
    value: Electrode shape, column spacing and switching order
  - label: Tools
    value: Python, NumPy, Shapely, Matplotlib
links:
  - label: The condensation experiments
    href: /projects/electrowetting-condensation/
  - label: Device fabrication
    href: /projects/electrowetting-device-fabrication/
---

## Why a model first

The electrode layout had to be fixed before the photomask was made, so designs needed to be compared without fabricating each one. The basic question was this. For a droplet of a given size sitting near a given electrode, will switching that electrode on pull the droplet, and in which direction?

## Approach

Electrowetting lowers the contact angle where a droplet overlaps an energized electrode, following the Young-Lippmann relation. A uniform field only makes the droplet spread in place. Motion needs an imbalance, where more of the droplet's contact line sits over the active electrode on one side than the other. The model represents droplets as circles over 2D electrode polygons, finds the part of each contact line that lies over an energized electrode, and integrates the electrocapillary force along it to get the net lateral force.

Sweeping droplet position, droplet size, voltage and electrode geometry then shows where droplets are pulled, where they stop, and which sizes can be passed from one electrode to the next.

## What it showed

![Force-model figure for zig-zag transport columns, in three panels](./transport-model.svg)
*Model results for chevron (zig-zag) transport columns. (A) One active column pulls every droplet whose rim overlaps it. (B) Switching progressively larger columns in sequence moves droplets along and gathers them. (C) The gap between columns sets the smallest droplet that can be handed on, so smaller droplets must merge first.*

The last result became a design rule. The column gap sets a hand-off radius, so spacing can be chosen to pass along only droplets that are already large and to hold small ones in place until they merge. The fabricated layout follows from these sweeps.
