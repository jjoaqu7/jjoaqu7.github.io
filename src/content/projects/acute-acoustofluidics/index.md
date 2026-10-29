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
links:
  - label: Embryo-rotation poster (PDF)
    href: /files/acoustofluidic-embryo-rotation-poster.pdf
  - label: Original poster (PowerPoint)
    href: /files/acoustofluidic-embryo-rotation-poster.pptx
facts:
  - label: Embryo rotation
    value: Oscillating microbubbles, swept up to 150 kHz and 20 Vpp
  - label: Device fabrication
    value: PDMS soft lithography, plasma bonded to glass
  - label: ORF3a contribution
    value: Study concept, data curation and analysis using existing MATLAB software
  - label: Conference paper
    value: IEEE EMBS Micro and Nanotechnology in Medicine
status: A co-authored manuscript on the ORF3a cardiac work is under review at PLOS ONE.
credits: Supervised by Prof. Pouya Rezai. Co-authored with Alireza Zabihihesari. On embryo rotation, I contributed to experimental testing, frequency sweeps, bubble stabilization and valve elasticity calculations. On the cardiac study, I proposed the research concept, curated imaging data and conducted signal analysis.
---

## The problem

*Drosophila melanogaster* (fruit fly) is a foundational model organism for developmental biology, genetics, and disease modeling. However, handling and phenotyping intact organisms at micro scales presents severe mechanical challenges.

First, obtaining full three-dimensional imaging of developing embryos requires observing them from multiple angles. Because Drosophila embryos are delicate ellipsoids roughly 180 µm wide and 500 µm long, rotating them manually under a microscope is slow, imprecise, and risks crushing or damaging the specimen.

Second, evaluating cardiovascular pathology in living models, such as assessing the toxic effects of viral proteins like SARS-CoV-2 ORF3a, requires immobilizing living larvae non-invasively and quantifying rapid heart contractions across hundreds of frames without anaesthetics that disrupt heart rhythm.

## My contribution

As an undergraduate research associate in the ACuTE Microfluidics Laboratory under Prof. Pouya Rezai, I contributed to both microfluidic biology systems.

For the acoustofluidic embryo-rotation platform:

- Conducted microfluidic experiments sweeping acoustic excitation frequencies and voltages to identify operational regimes for stable out-of-plane rotation.
- Investigated microbubble stability under varying upstream flow pressures, demonstrating stable rotation conditions at 4.5 kPa.
- Calculated pneumatic valve membrane deflections using linear elastic beam models to determine embryo clearance during trap-and-release cycles.
- Co-authored the peer-reviewed conference paper published at IEEE EMBS Micro and Nanotechnology in Medicine (MNM) and co-authored the presentation poster.

For the SARS-CoV-2 ORF3a cardiac study:

- Formulated the research concept to investigate whether expression of the SARS-CoV-2 ORF3a protein induces cardiac dysfunction in Drosophila larvae.
- Curated high-speed optical microscopy recordings of living larvae immobilized in specialized microfluidic chips.
- Performed physiological signal analysis using existing laboratory MATLAB software, extracting contraction peaks and M-mode records to quantify heart rhythmicity and fractional shortening.
- Presented the project as a poster at the Lassonde Undergraduate Summer Research Conference and co-authored the manuscript submitted to *PLOS ONE*.

## Visual results and manipulation dynamics

![Device schematic and microscopy showing an embryo beside trapped microbubbles](./embryo-device.jpeg)
*Microfluidic device schematic and microscopy view showing a Drosophila embryo positioned beside trapped air microbubbles. Acoustically driving the bubbles generates localized micro-vortices that rotate the embryo smoothly about its long axis.*

![Rotation speed plotted against drive voltage at 5 kHz](./rotation-response.png)
*Measured rotation response of Drosophila embryos at 5 kHz acoustic excitation. The rotation speed increases linearly with drive voltage, connecting the device to its purpose of controlling specimen orientation through the electrical drive signal.*

Experimental sweeps identified two clear operating regimes for embryo rotation at 5 kHz and 90 kHz. By pulsing the acoustic transducer with 20 ms bursts, the system achieved stepwise angular increments down to 2.3° per pulse, allowing precise multi-angle imaging without mechanical contact.

![Research poster showing the embryo-rotation device, experimental setup, pneumatic valve measurements, bubble-growth control and stepwise rotation](./embryo-rotation-poster.png)
*Collaborative research poster summarizing device fabrication, pneumatic valve deflection measurements, microbubble growth control at 4.5 kPa, and stepwise embryo rotation. [View the full-resolution poster (PDF)](/files/acoustofluidic-embryo-rotation-poster.pdf) or [download the original PowerPoint](/files/acoustofluidic-embryo-rotation-poster.pptx).*

In the larval cardiac investigation, the microfluidic channel immobilized living larvae without chemical anaesthesia, enabling direct video recording of heartbeat dynamics.

<video controls autoplay muted loop playsinline preload="metadata" poster="/media/acute-acoustofluidics/cardiac-imaging-poster.png" aria-label="Archived Drosophila larval cardiac-imaging excerpt">
  <source src="/media/acute-acoustofluidics/cardiac-imaging.mp4" type="video/mp4" />
  <a href="/media/acute-acoustofluidics/cardiac-imaging.mp4">Download the cardiac-imaging clip</a>.
</video>

*Archived high-speed microscopy clip showing heart wall contractions in an immobilized Drosophila larva. The clip illustrates the raw optical data analyzed during the cardiac study.*

![MATLAB cardiac-analysis interface with intensity traces, peaks and M-mode images](./cardiac-analysis-interface.png)
*The laboratory MATLAB software used to evaluate the recordings. Intensity traces and M-mode representations display repetitive contraction cycles side by side with the underlying video frames to verify individual beat detections.*

![Conceptual workflow linking the ORF3a study question to larval cardiac imaging, signal review and quantitative measurements](./orf3a-study-concept.svg)
*Conceptual workflow of the SARS-CoV-2 ORF3a investigation, linking targeted genetic expression in Drosophila larvae to microfluidic immobilisation, optical imaging, and quantitative physiological metrics.*

## How it works and physical methods

### Acoustic microbubble streaming

The embryo-rotation chip couples a piezoelectric transducer to a glass-PDMS microfluidic channel. Trapped microbubbles sit in 90 µm side cavities alongside a 280 µm main channel.

When driven at acoustic resonance, the air-liquid interface of each bubble oscillates vigorously. This periodic boundary oscillation generates steady secondary micro-vortices in the surrounding liquid known as acoustic streaming. When an embryo enters the rotation region, the opposing shear forces from adjacent vortices exert a net torque that turns the embryo smoothly about its longitudinal axis.

### Upstream pressure and bubble stability

Under continuous acoustic excitation, dissolved gas diffusion causes microbubbles to expand over time, altering their resonance frequency. The collaborative research demonstrated that applying a controlled upstream pressure of 4.5 kPa suppresses acoustic bubble growth, maintaining steady bubble volumes and stable rotational streaming during experiments.

### Pneumatic valve deflection mechanics

To hold and release embryos on demand, the device incorporates flexible PDMS sidewall membranes. Applying a negative pressure (vacuum) to adjacent control chambers draws the sidewalls outward, opening the channel to allow the embryo to drift into the rotation zone.

The mechanical deflection of each elastic wall was evaluated using the beam model of [Shorr et al., equations 5 and 6](https://doi.org/10.1039/C8LC01055B), incorporating both bending and shear deformation:

<div class="sidewall-equation">
<math display="block" aria-label="u max equals absolute pressure difference times h to the fourth times one minus nu squared, divided by 32 E t cubed, multiplied by one plus four t squared times twelve plus eleven nu divided by five h squared">
  <msub><mi>u</mi><mtext>max</mtext></msub><mo>=</mo>
  <mfrac><mrow><mo>|</mo><mi>ΔP</mi><mo>|</mo><msup><mi>h</mi><mn>4</mn></msup><mo>(</mo><mn>1</mn><mo>−</mo><msup><mi>ν</mi><mn>2</mn></msup><mo>)</mo></mrow><mrow><mn>32</mn><mi>E</mi><msup><mi>t</mi><mn>3</mn></msup></mrow></mfrac>
  <mrow><mo>[</mo><mn>1</mn><mo>+</mo><mfrac><mrow><mn>4</mn><msup><mi>t</mi><mn>2</mn></msup><mo>(</mo><mn>12</mn><mo>+</mo><mn>11</mn><mi>ν</mi><mo>)</mo></mrow><mrow><mn>5</mn><msup><mi>h</mi><mn>2</mn></msup></mrow></mfrac><mo>]</mo></mrow>
</math>
</div>

Here ΔP is the applied pressure differential, *h* is wall height, *t* is wall thickness, *E* is Young's modulus, and ν is Poisson's ratio. For two identical membranes opening symmetrically under vacuum, the total channel opening width is

<div class="sidewall-equation">
<math display="block" aria-label="W open equals W zero plus twice u max"><msub><mi>W</mi><mtext>open</mtext></msub><mo>=</mo><msub><mi>W</mi><mn>0</mn></msub><mo>+</mo><mn>2</mn><msub><mi>u</mi><mtext>max</mtext></msub></math>
</div>

where *W*₀ is the resting channel width of 150 µm. In the conference paper, applying −60 kPa vacuum expanded the opening from 150 µm to approximately 180 µm, corresponding to approximately 15 µm displacement per wall.

Evaluating a representative channel geometry with *h* = 330 µm, |ΔP| = 60 kPa, ν = 0.495, and *E* = 2 MPa across trial wall thicknesses highlights the sensitivity of embryo passage to fabrication dimensions:

| Trial wall thickness | Displacement per wall at *E* = 2 MPa | Channel opening at *E* = 2 MPa | Opening across *E* = 1.32–2.97 MPa |
| --- | --- | --- | --- |
| 75 µm | 34.2 µm | 218.5 µm | 196.1–253.8 µm |
| 90 µm | 23.5 µm | 196.9 µm | 181.6–221.1 µm |
| 100 µm | 19.2 µm | 188.3 µm | 175.8–208.0 µm |
| <span class="wall-thickness-reference">105 µm</span> | 17.5 µm | 185.0 µm | 173.6–203.0 µm |
| 110 µm | 16.1 µm | 182.2 µm | 171.7–198.7 µm |
| 115 µm | 14.9 µm | 179.7 µm | 170.0–195.1 µm |
| 125 µm | 12.9 µm | 175.8 µm | 167.4–189.1 µm |
| 150 µm | 9.7 µm | 169.3 µm | 163.0–179.3 µm |

**The highlighted 105 µm represents a trial thickness for sensitivity analysis. The original poster schematic labels the fabricated membrane thickness as 150 µm.**

<aside class="wall-thickness-callout" aria-label="Valve opening and embryo clearance at 105 micrometres wall thickness">
<strong>105 µm walls · 150 µm opening at rest → approximately 185 µm under −60 kPa vacuum</strong>
<p>Each sidewall moves outward by approximately 17.5 µm. For a typical 180 µm-wide embryo centred in the channel, this yields approximately 5 µm of total width clearance for passage, assuming E = 2 MPa and ν = 0.495.</p>
</aside>

### Cardiac signal extraction and M-mode representations

In the larval cardiac study, quantitative physiological indicators were extracted by tracking optical intensity along a line drawn across the larval heart tube.

As the heart contracts and relaxes, the movement of the muscular wall modulates pixel intensity across the line. Plotting this intensity profile over time generates an M-mode (motion-mode) representation. Contraction peaks correspond to end-systolic and end-diastolic dimensions, allowing direct extraction of heart rate, rhythm irregularities, and fractional shortening to quantify the cardiac impact of ORF3a expression.

### Acoustic particle focusing

In parallel with living organism manipulation, I conducted acoustic standing-wave particle focusing in glass capillaries, exploring acoustic radiation forces for microplastic handling.

Details of the flow-cell assembly, microscopy images, operating parameters, and resonance frequency calculations are presented on the [acoustic particle-focusing project page](/projects/acute-acoustic-focusing/).