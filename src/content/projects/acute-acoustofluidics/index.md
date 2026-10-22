---
title: Acoustofluidic manipulation and Drosophila assays
summary: Undergraduate research on microfluidic devices that use sound to rotate fruit-fly embryos and focus particles, plus microfluidic cardiac assays in Drosophila larvae.
period: undergrad
track: research
start: 2021-07
end: 2023-05
role: Undergraduate research associate
org: ACuTE microfluidics lab, York University
tags: [microfluidics, acoustofluidics, soft lithography, MATLAB]
cover: ./embryo-device.jpeg
coverAlt: Microfluidic embryo-rotation device and microscopy image from our co-authored paper
coverStyle: diagram
showCover: false
order: 8
facts:
  - label: Embryo rotation
    value: Oscillating microbubbles, swept up to 150 kHz and 20 Vpp
  - label: Fabrication
    value: PDMS soft lithography, plasma bonded to glass
  - label: ORF3a contribution
    value: Study concept, data curation and analysis using existing MATLAB software
  - label: Paper
    value: IEEE EMBS MNM 2022
status: A co-authored manuscript on the ORF3a cardiac work is under review at PLOS ONE.
credits: Work in the Advanced Centre for Microfluidic Technology and Engineering (ACuTE) with A. Zabihihesari and Prof. Pouya Rezai.
---

## Rotating embryos with sound

Drosophila embryos are a standard model for developmental genetics, and imaging them from several sides usually means turning each one by hand. We built a microfluidic chip that traps an embryo, releases it into a channel, and rotates it about its long axis using microbubbles held in side cavities and driven by a piezoelectric transducer.

The chip combined a pneumatic trap-and-release valve (PDMS membranes opened by vacuum), a 280 µm wide channel with 90 µm bubble cavities, and a transducer bonded to the glass substrate. We swept frequency and voltage to find where the oscillating bubbles produced strong out-of-plane vortices. The clearest rotation appeared at 5 kHz and 90 kHz, and rotation speed rose linearly with drive voltage. The work was published at IEEE EMBS Micro and Nanotechnology in Medicine in 2022.

![Device schematic and microscopy showing an embryo beside trapped microbubbles](./embryo-device.jpeg)
*Device schematic and microscopy from our co-authored IEEE EMBS MNM 2022 paper. Side cavities hold bubbles beside the embryo. Driving the bubbles generates local streaming flows that turn the embryo, allowing different sides to be imaged.*

![Rotation speed plotted against drive voltage at 5 kHz](./rotation-response.png)
*The paper's measured rotation response at 5 kHz. This connects the device to its purpose: controlling rotation by changing the drive signal. Figures show the collaborative research, rather than work attributed solely to me.*

### Pneumatic valve deflection

The trap-and-release module uses two flexible PDMS sidewalls. Applying vacuum draws the walls outward and opens the channel so that an embryo can pass to the rotation region. The conference paper reports an initial opening of 150 µm, increasing to approximately 180 µm at −60 kPa.

The valve calculations used the elastic sidewall model of [Shorr et al. (2019), equations 5–6](https://doi.org/10.1039/C8LC01055B), which includes bending and shear deformation. The maximum displacement magnitude of one wall is

<div class="sidewall-equation">
<math display="block" aria-label="u max equals absolute pressure difference times h to the fourth times one minus nu squared, divided by 32 E t cubed, multiplied by one plus four t squared times twelve plus eleven nu divided by five h squared">
  <msub><mi>u</mi><mtext>max</mtext></msub><mo>=</mo>
  <mfrac><mrow><mo>|</mo><mi>ΔP</mi><mo>|</mo><msup><mi>h</mi><mn>4</mn></msup><mo>(</mo><mn>1</mn><mo>−</mo><msup><mi>ν</mi><mn>2</mn></msup><mo>)</mo></mrow><mrow><mn>32</mn><mi>E</mi><msup><mi>t</mi><mn>3</mn></msup></mrow></mfrac>
  <mrow><mo>[</mo><mn>1</mn><mo>+</mo><mfrac><mrow><mn>4</mn><msup><mi>t</mi><mn>2</mn></msup><mo>(</mo><mn>12</mn><mo>+</mo><mn>11</mn><mi>ν</mi><mo>)</mo></mrow><mrow><mn>5</mn><msup><mi>h</mi><mn>2</mn></msup></mrow></mfrac><mo>]</mo></mrow>
</math>
</div>

Here ΔP is the pressure difference across the wall, *h* is wall height, *t* is wall thickness, *E* is Young's modulus, and ν is Poisson's ratio. With pressure in pascals, lengths in metres and *E* in pascals, the predicted displacement is in metres. For two identical walls opening symmetrically under vacuum, the channel opening is

<div class="sidewall-equation">
<math display="block" aria-label="W open equals W zero plus twice u max"><msub><mi>W</mi><mtext>open</mtext></msub><mo>=</mo><msub><mi>W</mi><mn>0</mn></msub><mo>+</mo><mn>2</mn><msub><mi>u</mi><mtext>max</mtext></msub></math>
</div>

where *W*₀ is the initial channel width. This model describes linear elastic sidewall deformation and provides a way to relate pressure, wall geometry and opening. Its applicability depends on the wall dimensions, bonding and material properties.

#### Calculation from the reported opening

At −60 kPa, the reported opening increased from 150 µm to approximately 180 µm. Assuming the two sidewalls moved equally, the displacement of each wall was

<div class="sidewall-equation">
<math display="block" aria-label="u max equals 180 minus 150 micrometres divided by two, approximately 15 micrometres"><msub><mi>u</mi><mtext>max</mtext></msub><mo>=</mo><mfrac><mrow><mo>(</mo><mn>180</mn><mo>−</mo><mn>150</mn><mo>)</mo><mtext> µm</mtext></mrow><mn>2</mn></mfrac><mo>≈</mo><mn>15</mn><mtext> µm</mtext></math>
</div>

This displacement is inferred from the reported opening.

#### Wall thickness and embryo clearance

For a sample prediction, take the reported channel height as the wall height, *h* = 330 µm, with |ΔP| = 60 kPa and *W*₀ = 150 µm. Assume Sylgard 184 PDMS with ν = 0.495, following [Müller et al. (2019)](https://doi.org/10.1039/C8SM02105H). Use *E* = 2 MPa as a representative value, and 1.32–2.97 MPa as a sensitivity range based on the curing-dependent measurements of [Johnston et al. (2014)](https://doi.org/10.1088/0960-1317/24/3/035017). These are literature-based material assumptions; the original wall thickness and curing-specific modulus have not been recovered.

For *t* = 105 µm, substituting these values into the sidewall equation gives a predicted displacement of approximately 17.5 µm per wall. The opening is therefore 150 + 2 × 17.5 = 185 µm, providing approximately 5 µm of total width clearance for a 180 µm-wide embryo.

| Trial wall thickness | Displacement per wall at *E* = 2 MPa | Opening at *E* = 2 MPa | Opening across *E* = 1.32–2.97 MPa |
| --- | --- | --- | --- |
| 75 µm | 34.2 µm | 218.5 µm | 196.1–253.8 µm |
| 90 µm | 23.5 µm | 196.9 µm | 181.6–221.1 µm |
| 100 µm | 19.2 µm | 188.3 µm | 175.8–208.0 µm |
| <span class="wall-thickness-reference">105 µm</span> | 17.5 µm | 185.0 µm | 173.6–203.0 µm |
| 110 µm | 16.1 µm | 182.2 µm | 171.7–198.7 µm |
| 115 µm | 14.9 µm | 179.7 µm | 170.0–195.1 µm |
| 125 µm | 12.9 µm | 175.8 µm | 167.4–189.1 µm |
| 150 µm | 9.7 µm | 169.3 µm | 163.0–179.3 µm |

**The highlighted 105 µm thickness is used for this calculation based on recollection; the original fabrication dimension remains unconfirmed.**

<aside class="wall-thickness-callout" aria-label="Valve opening and embryo clearance at 105 micrometres wall thickness">
<strong>105 µm walls · 150 µm opening at rest → approximately 185 µm under −60 kPa vacuum</strong>
<p>Each sidewall moves outward by approximately 17.5 µm. For a 180 µm-wide embryo centred in the opening, this provides approximately 5 µm of total width clearance, or 2.5 µm on each side, using E = 2 MPa and ν = 0.495.</p>
</aside>

Typical *Drosophila melanogaster* embryos are approximately 180 µm wide and 500 µm long, as tabulated by [Telley et al. (2012)](https://pmc.ncbi.nlm.nih.gov/articles/PMC3384421/). With the embryo's long axis aligned with the channel, the 150 µm opening retains it at rest. Applying −60 kPa vacuum moves the sidewalls outward, increasing the calculated opening to approximately 185 µm and providing approximately 5 µm of total width clearance for passage.

## ORF3a cardiac study

### Study concept and my contribution

I proposed investigating the effects of the SARS-CoV-2 ORF3a protein on cardiac function in Drosophila larvae. I curated the imaging data and used existing MATLAB software to analyse heart motion and review the measurements.

I presented the work at the Lassonde Undergraduate Summer Research Conference in 2022.

![Conceptual workflow linking the ORF3a study question to larval cardiac imaging, signal review and quantitative measurements](./orf3a-study-concept.svg)
*Study concept and analysis workflow. I proposed the research question and worked on data curation and analysis within the collaborative study. The diagram explains the approach; it does not represent an experimental result.*

### How the question became a measurement

The microfluidic platform supported imaging of the larval heart. The review workflow linked each recording to a selected time window and region of interest, intensity traces and M-mode images, then to measurements recorded for the study. Keeping the image and signal views together allowed individual measurements to be checked against the source recording.

M-mode images show how image intensity along a selected line changes over time, making repeated contraction cycles visible. Reviewing these alongside the signal peaks connects the observed heart motion to quantitative cardiac measurements.

<video controls playsinline preload="metadata" poster="/media/acute-acoustofluidics/cardiac-imaging-poster.png" aria-label="Archived Drosophila larval cardiac-imaging excerpt">
  <source src="/media/acute-acoustofluidics/cardiac-imaging.mp4" type="video/mp4" />
  <a href="/media/acute-acoustofluidics/cardiac-imaging.mp4">Download the cardiac-imaging clip</a>.
</video>

*An archived Drosophila larval imaging excerpt associated with the cardiac-analysis work. It shows the image data used for analysis; the clip alone does not establish genotype or a treatment effect.*

![MATLAB cardiac-analysis interface with intensity traces, peaks and M-mode images](./cardiac-analysis-interface.png)
*The existing MATLAB software I used to review the recordings. Intensity traces and M-mode views show contraction cycles alongside the source images.*

## Particle focusing

I also worked on acoustic focusing of microparticles in a glass capillary, setting up controlled pressure nodes to improve sorting, with microplastic detection in water as the target application.

See the [acoustic particle-focusing project](/projects/acute-acoustic-focusing/) for the setup, microscopy images, operating conditions and resonance calculation.
