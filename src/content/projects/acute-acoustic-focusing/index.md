---
title: Acoustic particle focusing for microplastic handling
summary: Using sound to gather particles suspended in flowing water into bands, as a first step toward handling and monitoring microplastics.
period: undergrad
track: research
start: 2022-09
end: 2022-10
role: Undergraduate research associate
org: ACuTE microfluidics lab, York University
tags: [acoustofluidics, microfluidics, experimental testing, microscopy, ImageJ]
cover: ./flow-cell-closeup-selected.png
coverAlt: Flow-cell assembly with piezoelectric ceramics and supporting substrates
coverStyle: photo
showCover: false
featured: false
order: 9
facts:
  - label: Application
    value: Particle positioning for microplastic handling and monitoring
  - label: Single-node model estimate
    value: 370 kHz for a 2 mm channel
  - label: Three-band test
    value: 22 µm particles, 611.5 kHz, 200 Vpp, 1 mL/min
  - label: My contribution
    value: Glass-capillary experiments, microscopy and ImageJ overlays
links:
  - label: Original glass-capillary experiment slides
    href: /downloads/acute-acoustic-focusing/original-experiment-slides.pptx
  - label: Original flow-cell close-up
    href: /downloads/acute-acoustic-focusing/flow-cell-closeup-original.png
  - label: More experiment images
    href: '#additional-images'
draft: false
---

## The problem

Particles suspended in water pass through a flow channel at different positions across its width, which makes them harder to observe or collect at one point downstream. The York-ODI project investigated acoustofluidic handling of microplastics in water, i.e., using sound waves inside a small channel to move the particles. The aim of this work was to gather the particles into defined bands (focusing) while liquid passed through the channel.

## My contribution

I ran the focusing experiments on an existing glass-capillary and transducer platform with a 2 mm by 2 mm channel, set up by a lab colleague. With 22 µm particles loaded and the flow stopped, I swept the drive frequency up to 5 MHz and watched under a microscope for the frequencies at which the particles gathered into bands. I then repeated the test with flow, overlaid the microscopy frames in ImageJ and compared the band patterns with a standing-wave estimate. I documented the results for the research team.

## Focusing results

In the glass capillary, the particles gathered into three parallel bands across the channel. This test used 22 µm particles at 611.5 kHz and 200 Vpp, with a flow rate of 1 mL/min. The two dark lines are the capillary walls; the three grey lines between them are the particle bands.

![Three parallel particle-focusing bands in a glass capillary, with a 500 micrometre scale bar](./3_node.png)
*Three particle bands in the glass capillary. Scale bar, 500 µm.*

## How it worked

A piezoelectric ceramic, or PZT, converts an alternating electrical signal into mechanical vibration. When coupled to the channel walls, the ceramic transfers that vibration into the liquid. The channel geometry and the contact between the ceramic and the walls affect how effectively the liquid is driven.

At suitable frequencies, reflections across the channel produce a standing acoustic wave. The resulting acoustic radiation force moves particles across the channel toward preferred positions. For particles with a positive acoustic contrast factor (typically, particles denser or less compressible than the liquid), those positions are pressure nodes. A single-node pattern gathers particles into one band; a multinode pattern produces parallel bands. This is the [acoustic-focusing mechanism described by Piyasena and coauthors](https://pmc.ncbi.nlm.nih.gov/articles/PMC3325784/).

### Earlier flow-cell tests

Before I took over the experiments, the team tested ODI's flow cell, which has a 9 mm wide channel driven by two PZT ceramics. Those tests showed that the ceramics needed a more robust coupling to the flow cell and that other sources of vibration had to be removed. Epoxy glue or ultrasound gel was proposed for the coupling, and PDMS substrates as dampers.

![Flow-cell assembly with piezoelectric ceramics and supporting substrates](./flow-cell-closeup-selected.png)
*Flow cell with two PZT ceramics and supporting substrates, from the team's earlier tests.*

![Microscopy image showing particles concentrated into one narrow band](./single-band-focusing.png)
*A focused particle band in the flow cell, from the team's earlier tests.*

### Choosing frequencies to investigate

For the 2 mm capillary, I used a transverse standing-wave estimate to choose candidate frequencies. Fitting an integer number of half-wavelengths across the assumed channel width gives

<math xmlns="http://www.w3.org/1998/Math/MathML" display="block" aria-label="f sub n equals c divided by lambda sub n equals n c divided by two w">
  <mrow>
    <msub><mi>f</mi><mi>n</mi></msub>
    <mo>=</mo>
    <mfrac><mi>c</mi><msub><mi>λ</mi><mi>n</mi></msub></mfrac>
    <mo>=</mo>
    <mfrac><mrow><mi>n</mi><mi>c</mi></mrow><mrow><mn>2</mn><mi>w</mi></mrow></mfrac>
  </mrow>
</math>

Here, *c* is the sound speed in the liquid, *w* is the channel width, and *n* counts half-wavelengths across that width. In the idealized rigid-wall width mode, *n* also gives the number of pressure nodes. Using *c* = 1480 m/s and *w* = 0.002 m gives

| Idealized width mode, n | Estimated frequency |
|---|---|
| 1 | 370 kHz |
| 2 | 740 kHz |
| 3 | 1.11 MHz |
| 4 | 1.48 MHz |

These are model estimates, and the band counts I observed did not follow them. Three bands formed at 611.5 kHz, whereas the model places three nodes at 1.11 MHz, and four bands formed at ~364 kHz, close to the 370 kHz single-node estimate. The model treats the walls as rigid; the actual resonances also depend on the elastic glass walls, the actuator and how well the vibration is coupled into the channel. The calculation follows the [ideal rectangular-channel resonance model described by Bruus](https://doi.org/10.1039/C1LC20770A).

<span id="additional-images"></span>

## More experiment images

Original microscopy views and photographs from the team's flow-cell tests.

- [Focused band in the flow cell, original](/downloads/acute-acoustic-focusing/single-band-focusing-original.png)
- [Dispersed particle field, original](/downloads/acute-acoustic-focusing/dispersed-particles-original.png)
- [Wider flow-cell microscopy view, original](/downloads/acute-acoustic-focusing/wider-flow-cell-original.png)
- [Flow-cell and PZT close-up, original](/downloads/acute-acoustic-focusing/flow-cell-closeup-original.png)
