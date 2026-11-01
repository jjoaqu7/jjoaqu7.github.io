---
title: Contact angles of vibrating droplets from high-speed video
summary: When a droplet vibrates, its contact angle changes too quickly to measure by hand. I wrote a Python and OpenCV script that measures it frame by frame in high-speed video, with a clickable plot for checking each measurement.
period: grad
track: software
start: 2025-11
end: 2025-12
role: Research intern
org: INPHYNI, Université Côte d'Azur, Nice, France
tags: [image analysis, OpenCV, wetting, high-speed imaging, Python]
cover: ./contact-angle-overlay.png
coverAlt: Measured contact angle overlaid on an experimental droplet frame
coverStyle: diagram
showCover: false
order: 7
facts:
  - label: Acquisition rate
    value: 8,000 frames per second (high-speed camera)
  - label: Slow-motion playback
    value: 20 frames per second (400× slow-down, 25.5 ms physical duration)
  - label: Measurement output
    value: Left contact angle of one droplet against time, one value per frame
  - label: Checking
    value: Clickable plot that opens the overlay image for each frame
  - label: Software stack
    value: Python, OpenCV, NumPy, Matplotlib, ImageJ (Fiji)
---

## The problem

When a liquid droplet rests on a solid surface, the angle between the liquid-vapor interface and the surface is its contact angle, which describes how well the liquid wets the material (a small angle means the liquid spreads, and a large angle means it beads up).

On a vibrating surface, the droplet deforms, and its contact angle changes within a few milliseconds. At 8,000 frames per second, a ~25 ms recording already contains ~200 frames. Automating the measurement is also difficult, because the floor moves with the vibration, the droplet's reflection sits directly below it, and the background can be mistaken for the floor line.

## My contribution

During a two-month research internship at the Institut de Physique de Nice (INPHYNI), I wrote a Python and OpenCV script that follows these changes frame by frame. In each frame, it finds the floor and the point where the droplet meets it, then measures the contact angle at that point.

Because automatic edge detection can be wrong on individual frames, I also made the contact-angle plot clickable. Each value can then be checked against the image it came from.

During the internship, I also gave an invited seminar at INPHYNI on my electrowetting condensation research.

## Video and measurements

<video controls autoplay muted loop playsinline preload="metadata" poster="/media/inphyni-contact-angle/vibrating-droplets-poster.png" aria-label="High-speed recording of two droplets on a vibrating surface, played in slow motion">
  <source src="/media/inphyni-contact-angle/vibrating-droplets.mp4" type="video/mp4" />
  <a href="/media/inphyni-contact-angle/vibrating-droplets.mp4">Download the droplet video</a>.
</video>

*Two droplets on the vibrating surface, with their reflections below the floor line, played 400 times slower than real time (204 frames, ~25.5 ms).*

The script measures the left edge of the left droplet. For each frame, it saves an image of what it detected, like the one below.

![Experimental frame with detected floor, contact point and contact-angle tangent](./contact-angle-overlay.png)
*Frame 75 of the clip, cropped to the left droplet and its reflection, with the detected floor (green line), contact point (magenta) and fitted tangent (yellow dashed line). The measured contact angle for this frame is 66.2°.*

Plotting these angles against time gives the trace below. Over this clip, the angle varies from ~40° to ~130°. The trace is a diagnostic output and has not been validated against another measurement. Single-frame spikes, such as those near 12 ms and 16 ms, may come from a detection error rather than a real change in the droplet, and they are the points to open and check against their frame images.

![Contact-angle time trace from the original method documentation](./contact-angle-curve.png)
*Left contact angle of the left droplet against time, one point per frame, in the script's Matplotlib window.*

## How it works

### Preparing the image stacks

Each high-speed image stack is cropped in Fiji (ImageJ) and saved twice with the same crop. One copy keeps the raw grayscale images. The other is thresholded and cleaned up with binary operations to give a black-and-white mask of the droplet outlines. The script reads both stacks frame by frame. The mask locates the droplet, and the raw images are used to find the floor and to draw the overlays.

At the start of a run, the user draws one rectangle on the first frame around the left droplet, the floor and the droplet's reflection below the floor. In these recordings, the left droplet is the cleanest, with the least background behind it. The same region is used for every frame.

### Finding the floor and the contact point

On the first frame, the floor is placed at the sharpest change in brightness between the droplet and its reflection. A small patch of the image around that line is stored as a template, and in later frames the script finds the floor by matching this template (OpenCV template matching). If the match jumps by more than 6 pixels from the previous frame, the script falls back to the mask-based estimate or keeps the previous floor position. The floor is then moved to the strongest nearby brightness edge and lightly smoothed between frames. The contact point is the leftmost droplet pixel just above this floor line.

### Measuring the angle

Canny edge detection on the mask gives the pixels along the droplet edge. In three thin bands just above the floor, the script fits a straight line to the edge pixels nearest the contact point and converts its slope into a contact angle between 0° and 180°. If the three angles agree closely, the script uses the one closest to their average. Otherwise, it uses the fit with the smallest error. A nearly vertical edge is recorded as 90°, and frames with no reliable fit are skipped. Each angle is stored with its time, calculated from the frame number and the 8,000 frames-per-second rate.

### Checking measurements

The background and the moving floor can still interfere with detection. For this reason, the script saves an overlay image for every frame and plots the contact angle against time in a Matplotlib window. Clicking a point on the plot opens the overlay for the closest frame, titled with the frame number, time and measured angle.

The method can still be improved. The fitted line sometimes snaps to the floor or the droplet contour, which shifts the angle slightly, and the script has not yet been tested on recordings with different lighting and backgrounds.
