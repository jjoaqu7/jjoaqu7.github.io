---
title: Contact angles of vibrating droplets from high-speed video
summary: A Python and OpenCV method that measures the contact angle of a vibrating droplet in every frame of an 8000 frame-per-second image stack, with an interactive plot for checking each measurement.
period: grad
track: software
start: 2025-11
end: 2025-12
role: Research intern
org: INPHYNI, Université Côte d'Azur, Nice, France
tags: [image analysis, OpenCV, wetting, high-speed imaging]
cover: ./contact-angle-overlay.png
coverAlt: Measured contact angle overlaid on an experimental droplet frame
coverStyle: diagram
showCover: false
order: 7
facts:
  - label: Input
    value: Raw and thresholded TIFF stacks at 8000 frames per second
  - label: Output
    value: Contact angle against time, frame by frame
  - label: Tools
    value: Python, OpenCV, NumPy, Matplotlib, ImageJ (Fiji)
---

## Context

During a research internship at the Institut de Physique de Nice (INPHYNI), I worked with high-speed recordings of droplets on a vibrating surface. As the droplet oscillates, its contact angle changes many times per second, and measuring it by hand frame by frame was not feasible.

<video controls playsinline preload="metadata" poster="/media/inphyni-contact-angle/vibrating-droplets-poster.png" aria-label="High-speed recording of a vibrating droplet, played in slow motion">
  <source src="/media/inphyni-contact-angle/vibrating-droplets.mp4" type="video/mp4" />
  <a href="/media/inphyni-contact-angle/vibrating-droplets.mp4">Download the droplet video</a>.
</video>

*The original droplet sequence: 204 consecutive frames acquired at 8,000 frames/s, played at 20 frames/s (400 times slower). The clip covers about 25.5 ms of the experiment. The changing shape is why the contact angle must be measured frame by frame.*

## Method

1. **Preparation in Fiji.** Each stack is cropped and duplicated. One copy is thresholded, cleaned with binary operations and reduced to an outline, and the other is kept raw for checking.
2. **Region of interest.** The user draws one rectangle on the first frame around the droplet, the solid floor and the droplet's reflection. The same region is used for every frame.
3. **Contact point.** In each frame the script locates the floor line and finds where the droplet's outline first meets it on the left side.
4. **Angle.** The local slope of the outline near the contact point is converted to a geometric contact angle.
5. **Checking.** The result is plotted against time, and clicking any point opens that frame with its detected outline, contact point and angle, so outliers can be inspected directly.

![Experimental frame with detected floor, contact point and contact-angle tangent](./contact-angle-overlay.png)
*An actual saved diagnostic frame from the Python analysis. The overlay marks the floor, contact point and local tangent; the displayed angle is the measurement for this frame.*

![Contact-angle time trace from the original method documentation](./contact-angle-curve.png)
*Example contact-angle trace from the method documentation. The excursions need to be checked against the underlying frames; this is a diagnostic output, rather than a claim that every detected angle is correct.*

I also gave an invited seminar at INPHYNI on my electrowetting condensation work.
