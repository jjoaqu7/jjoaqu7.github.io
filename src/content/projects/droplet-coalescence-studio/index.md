---
title: Droplet Coalescence Studio
summary: A Python pipeline and Streamlit app that detects, tracks and links condensate droplets through merging events in high-speed image sequences.
period: grad
track: software
start: 2026
role: Developer
org: SEiL, York University
tags: [computer vision, Cellpose, tracking, Python, Streamlit]
cover: ./segmentation-example.jpg
coverAlt: Archived droplet-detection comparison from the intern work that preceded this pipeline
coverStyle: diagram
showCover: false
order: 6
facts:
  - label: Detection
    value: Cellpose segmentation, fine-tunable on lab images
  - label: Tracking
    value: laptrack, with radius-aware merge detection
  - label: Interfaces
    value: Command line, Streamlit GUI, and an LLM agent
links:
  - label: The experiments it analyses
    href: /projects/electrowetting-condensation/
---

## The problem

A few seconds of condensation video holds thousands of droplets that grow, touch and merge. Counting merges or following how one large droplet formed is not practical by hand, and frame-to-frame tracking has to decide what happens to each droplet's identity when two of them merge.

## Pipeline

1. **Detection.** Cellpose segments every droplet in each frame. The model can be fine-tuned on lab images.
2. **Region of interest.** A border-capture rule keeps only droplets whose full outline is in view.
3. **Small-droplet zones.** Regions of very small droplets are flagged separately, since they are below reliable segmentation size. A companion browser tool lets them be annotated by hand.
4. **Tracking.** laptrack links droplets from frame to frame.
5. **Merge detection.** A droplet that disappears next to a growing neighbour is recorded as absorbed by it, using droplet radii rather than position alone.
6. **Genealogy.** Each droplet's history is assembled into a family tree of the merges that formed it.
7. **Outputs.** Growth curves, coverage, per-sequence metrics tables, spreadsheets and annotated H.264 videos, all in calibrated physical units.

## From images to measurements

![Archived comparison of droplet detection on an electrode image](./segmentation-example.jpg)
*An archived image-processing comparison from the intern work I supervised, on which this project builds. It illustrates the detection problem; it is not a benchmark of the current tracking and merge-detection pipeline.*

![Small-droplet patch coverage at the start, middle and end of a sequence](./coverage-output.png)
*An example analysis figure stored with the project: small-droplet patch coverage across a sequence. Circles represent patches, squares show the mean with sample standard deviation, and the dashed line shows the pooled mean. Coverage is one output alongside individual droplet tracks and merge histories.*

## Interfaces

The same pipeline runs from the command line for batch work, from a Streamlit app for choosing a dataset, adjusting the region of interest with a live preview and browsing results, and from an LLM agent that can be asked in plain language to compare datasets. A regression test suite checks the merge counts on reference datasets after changes.
