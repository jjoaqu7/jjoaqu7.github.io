---
title: Electrowetting force model and 3D energy simulation
summary: "Before making a photomask, I needed to know where an electrode layout would move condensing droplets. I used a 2D force model in Python to set the layout, then 3D COMSOL simulations to help explain where droplets collected in the experiments."
period: grad
track: research
start: 2024-09
role: MASc thesis research
org: SEiL, York University
tags: [electrowetting, COMSOL, finite element analysis, electrostatics, Python]
cover: ./d50-energy-landscape.png
coverAlt: Map of the electrical energy of a 50 µm droplet at different positions around the electrodes, from 206 COMSOL calculations
coverStyle: diagram
showCover: false
order: 5
facts:
  - label: Simulation tools
    value: COMSOL Multiphysics 6.3 (AC/DC electro-quasistatics), Python (NumPy, Shapely)
  - label: Operating drive
    value: 120 Vpp sine at 250 Hz (60 V peak)
  - label: Layout design
    value: First-order 2D force model for the chevron columns and the gaps between them
  - label: 3D energy map
    value: 206 positions of a 50 µm droplet
  - label: Mesh check
    value: A ~1.94 pJ mesh shift changed the subtracted energy by ~1.2 × 10⁻⁶ pJ (one paired test)
links:
  - label: The condensation experiments
    href: /projects/electrowetting-condensation/
  - label: Cleanroom device fabrication
    href: /projects/electrowetting-device-fabrication/
  - label: Drive electronics
    href: /projects/electrowetting-drive-electronics/
status: Numerical checks are ongoing. Supporting journal manuscript in preparation.
---

## The problem

In electrowetting, a voltage applied to an electrode beneath a thin insulating (dielectric) layer pulls a water droplet toward that electrode. For my condensation surface, the electrodes had to gather small droplets and then pass them along until they were large enough to be removed by the airflow.

Before making the photomask in the cleanroom, I needed to know whether a given layout would pull a droplet toward an active electrode, pass it on to the next one, or leave it stranded in the gap between them. Each mask revision means another round of fabrication, so I wanted a quick model to set the electrode sizes and spacing first.

After the chips were tested, a second question came up, namely why droplets collected along particular electrode edges. Answering it requires the electric field in 3D, through the dielectric layers and around the droplet, because the field also reaches droplets that do not sit directly over an electrode.

## My contribution

I built one model for each question.

Before fabrication, I wrote a first-order 2D force model in Python (NumPy and Shapely). It treats each droplet as a circular footprint and adds up the electrocapillary pull along the part of its contact line (the droplet's edge on the surface) that lies over an active electrode. This gives the net sideways force as a function of droplet position, size and applied voltage. I used it to set the chevron column sizes and the gaps between columns, which decide the smallest droplet that can be handed from one column to the next.

After the experiments, I built 3D finite-element models in COMSOL Multiphysics 6.3 and computed the stored electrical energy of a 50 µm droplet at 206 positions over the collection electrodes. The computed energy depends on the mesh, which changes whenever the droplet moves, and in direct comparisons this dependence was large enough to flip the sign of a small energy difference. I therefore compared two ways of computing the energy and kept a matched-mesh subtraction, in which the field is solved with the droplet as water and then as air on the same mesh. I also compared the COMSOL results with a capacitor approximation following Pham et al.

## What the models show

![Force-model results for zig-zag transport columns in three panels](./transport-model.svg)
*2D force model for the chevron transport columns. (A) Pull on droplets that partly overlap an active column. (B) Sequenced activation of progressively larger columns. (C) Hand-off radius against the gap between columns.*

The 2D model set the transport layout. An active column pulls a droplet that partly overlaps it, because only the part of the contact line over the electrode is pulled (A). Switching on progressively larger columns one after another moves droplets along and merges them (B). The gap between columns sets a hand-off radius. For the chosen 22 µm gap, a droplet needs a radius of ~60 µm to reach the next column; smaller droplets stay behind until they merge with neighbours (C).

![Spatial electrical-energy landscape computed across an electrowetting electrode cell from 206 independent COMSOL simulations](./d50-energy-landscape.png)
*Electrical energy of a 50 µm droplet (fixed 115° contact angle, 45.32 µm wetted footprint) plotted at the position of its centre, from 206 COMSOL calculations, with mirror symmetry used to fill the remaining positions. Blue is lower (more negative) energy and red is higher, on a nonlinear scale. Grey marks electrode interiors, where no energy is shown.*

The lowest energies lie in a band along the edges of the driven electrode, where the droplet sits over the electrode edge. Near the grounded electrode on the right, the energy is close to zero. Placing the droplet over the tip (apex) of the driven electrode lowers its energy by ~46 pJ compared with the gap between electrodes. This is consistent with the experiments, in which droplets grew along the edges of the active electrode row. The droplet shape is fixed in these calculations, so the map shows where the energy is lowest, not how a droplet spreads, moves or merges.

## How the models work

### 2D force model

The 2D model answers which way, and how strongly, an electrode pulls a droplet at a given position. It samples points around the droplet's contact line and keeps those that lie over an active electrode. The net force follows Berthier et al.:

F = γ B e

Here, γ is the surface tension of water and e = ∮ n̂ dl is the sum of the outward normals along the part of the contact line over the electrode. If the whole contact line is over the electrode, the normals cancel and e is zero. If only part of it is, e points toward the electrode. B is the change in cos θ produced by the voltage, from the Young-Lippmann equation cos θ_V = cos θ_0 + C V² / (2γ), minus a term for contact angle hysteresis (the resistance of the contact line to moving). If B is not positive, the voltage cannot overcome hysteresis and the droplet does not move. Here, θ_0 and θ_V are the contact angles without and with voltage, and C is the effective capacitance per unit area of the dielectric layers under the droplet.

### 3D electrical energy

The 3D model answers how the stored electrical energy changes as the droplet centre moves. The COMSOL domain includes the patterned electrodes, the dielectric layers, the grounded silicon substrate, one water droplet with a fixed spherical-cap shape, and the surrounding air.

The driven electrode receives a 60 V peak (120 Vpp), 250 Hz sine; the other electrodes and the substrate are grounded. Magnetic induction was neglected, and the potential was solved from the generalized Laplace form of Gauss's law, which includes the conductivity of the water. Water was assigned a relative permittivity of 78.4 and a conductivity of 0.0001 S/m, representative of air-exposed deionized water. The cycle-averaged stored electrical energy was integrated over the whole computational domain.

### Matched-mesh water-minus-air subtraction

![Geometry of the three tested energy placements comparing gap, edge, and apex](./positions-and-energy-pairs.png)
*The three droplet placements used in the mesh checks, namely the gap between electrodes (L01), near a sloping edge (P11) and near the facing apex (W38). Gold is the driven electrode and grey a grounded electrode, both beneath the dielectric layers. Solid circles show the 50 µm droplet outline and dashed circles its wetted footprint. Arrows show which energies are subtracted, not droplet paths.*

Comparing two droplet positions means comparing two separate full-domain solutions. Moving the droplet also changes the mesh, and the mesh change alone shifts the computed energy. For the small gap-to-edge difference (~0.2 pJ), the direct difference even changed sign between a coarse and a finer mesh.

For each position A, I therefore solved the field twice on the same mesh:

1. With the droplet region assigned water properties, giving W_water(A).
2. With the same region assigned air properties, giving W_air(A).

The relative electrical energy at A is −[W_water(A) − W_air(A)]. The minus sign follows the capacitor convention, so stronger coupling between the droplet and the driven electrode gives a more negative value. Because the water and air solutions share a mesh, much of the mesh-dependent error cancels. In one paired check at the gap position, refining the mesh locally shifted both the water and air energies by ~1.94 pJ, while the subtracted value changed by only ~1.2 × 10⁻⁶ pJ. Between the medium and fine meshes, the subtracted gap-to-edge difference changed by ~0.0002 pJ, compared with ~0.22 pJ for the direct difference.

### Comparison with a capacitor approximation

As an independent check, I compared the COMSOL energies with a capacitor approximation following Pham et al. The droplet is treated as a floating conductor, i.e., one not connected to any voltage source, coupled to the driven electrode and to the grounded substrate through two capacitors in series. Each capacitor uses the droplet footprint area over that electrode and an equivalent dielectric thickness that accounts for each layer of the stack, which includes 100 nm LPCVD and 150 nm PECVD silicon nitride. In the ideal capacitive limit, the energy is U = −¼ C_eq V_peak², so a larger equivalent capacitance C_eq gives a more negative energy.

For the two comparisons involving the apex, the subtracted COMSOL energy differences agreed with the approximation to within 0.5 %. The approximation predicts no difference between the gap and edge positions, because neither footprint overlaps the driven electrode, whereas COMSOL gives ~0.2 pJ from fringing fields. The approximation therefore supports the size of the apex preference but cannot check the smaller gap-to-edge difference.
