---
title: Droplet Coalescence Studio
summary: A computer-vision pipeline and Streamlit application that segments, tracks, and links thousands of condensing droplets through multi-generation coalescence events in high-speed video.
period: grad
track: software
start: 2026
role: Developer
org: SEiL, York University
tags: [computer vision, Cellpose, tracking, Python, Streamlit]
cover: ./segmentation-example.jpg
coverAlt: Comparison of droplet detection on an electrowetting electrode surface
coverStyle: diagram
showCover: false
order: 6
facts:
  - label: Detection engine
    value: Cellpose convolutional neural network, fine-tuned on lab images
  - label: Trajectory tracking
    value: LapTrack linking with radius-aware merge detection
  - label: Physical metrics
    value: Droplet family trees, surface coverage, and heat-flux estimates
  - label: Interfaces
    value: Command-line batch runner and interactive Streamlit web dashboard
links:
  - label: The experiments it analyses
    href: /projects/electrowetting-condensation/
credits: Builds on preliminary image-processing exploration by an ENSTA (France) intern whom I supervised in the lab. I developed the operational Droplet Coalescence Studio pipeline, tracking algorithms, genealogy reconstruction, and user interfaces.
---

## The problem

During dropwise condensation, surface heat transfer is driven by continuous droplet renewal. Thousands of microscopic droplets nucleate, grow, and touch every second, forming larger drops that must be cleared to allow fresh droplets to form.

Quantifying condensation dynamics from high-speed video requires tracking the entire droplet population across hundreds of frames. However, tracking droplets presents a fundamental challenge that standard particle trackers cannot handle. When two moving droplets touch and coalesce into one, conventional algorithms treat the merger as a random disappearance and appearance, losing droplet identity and corrupting growth rates. In addition, optical reflections, uneven lighting, and sub-micron droplets clustered below optical resolution make automated segmentation difficult on patterned surfaces.

## My contribution

I developed Droplet Coalescence Studio, an end-to-end Python pipeline and interactive Streamlit application to automate droplet detection, tracking, and coalescence genealogy from experimental recordings.

After supervising an ENSTA (France) engineering intern on initial exploratory segmentation, I built the full operational software architecture:

- Fine-tuned a Cellpose deep-learning segmentation model on laboratory condensation images to separate densely packed droplets.
- Implemented multi-frame tracking using LapTrack, creating a radius-aware merge-detection algorithm that flags coalescence events when droplets vanish within the expanding perimeter of an adjacent neighbor.
- Developed a droplet genealogy engine that reconstructs the multi-generation family tree of every surviving droplet, recording exactly which droplets merged to form it.
- Built a physical measurement module that calculates droplet size distributions, dry and covered area fractions, and first-order heat-transfer rates based on spherical-cap geometry.
- Deployed the system with multiple interfaces, including a command-line tool for automated batch processing, an interactive Streamlit GUI with live region-of-interest previews, and automated regression tests.

## Visual results and droplet tracking

![Archived comparison of droplet detection on an electrode image](./segmentation-example.jpg)
*Comparison of droplet detection on an electrowetting electrode surface from preliminary intern exploratory work. The image illustrates the challenging optical contrast and dense packing of condensing droplets that motivated building a specialized segmentation and tracking pipeline.*

![Small-droplet patch coverage across a sequence](./coverage-output.png)
*Automated small-droplet patch coverage analysis across an experimental sequence. Circular markers show individual patch measurements, squares indicate the mean with sample standard deviation, and the dashed line represents the pooled mean coverage over time. Coverage metrics are generated alongside individual droplet trajectories and coalescence trees.*

## How it works and analytical pipeline

### Cellpose segmentation and boundary filtering

Condensation recordings are processed frame by frame. Individual droplets are segmented using a fine-tuned Cellpose convolutional neural network trained on lab-acquired frames.

To avoid measurement distortion from droplets entering or leaving the field of view, an automated border-capture rule discards droplets touching the boundary of the active region of interest. For droplets clustered below individual segmentation resolution, a separate patch-detection module flags small-droplet regions to maintain accurate overall surface coverage estimates.

### LapTrack linking and radius-aware merge detection

Centroid positions are linked across consecutive frames using LapTrack. To solve the problem of droplet coalescence:

1. When a tracked droplet disappears between frame t and frame t+1, the algorithm searches for expanding droplets in its immediate neighborhood.
2. If the centroid of the disappearing droplet falls within the boundary or capture zone of an enlarged neighbor, the event is registered as a physical coalescence rather than a tracking failure.
3. The larger droplet absorbs the identity and volume of the smaller droplet, preserving continuous lineage.

### Droplet genealogy and family trees

As coalescence events occur, the software records parent-child relationships in a directed graph. This enables full genealogical reconstruction, allowing researchers to trace any final departing droplet backward in time to inspect every microscopic droplet that contributed to its growth.

### Physical metrics and heat-transfer estimation

The pipeline translates image measurements into calibrated physical units. Droplets are approximated as spherical caps with an apparent contact angle of approximately 89 degrees, allowing the system to compute the instantaneous water volume retained on the surface.

Combining the wetted footprint area with the dry surface fraction, the pipeline estimates latent heat absorption and convective heat transfer from the optical records. Batch results are exported as structured tables, growth curves, and annotated video sequences.