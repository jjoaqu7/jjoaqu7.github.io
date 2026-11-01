---
title: SHIELD, in-vehicle security system (capstone)
summary: Common anti-theft products, such as steering-wheel locks and GPS trackers, work on their own and can often be bypassed. Our eight-person capstone team built a steering-wheel lock that is unlocked through facial recognition and a mobile app. I co-led the team and built the facial-recognition services on Google Cloud.
period: undergrad
track: software
start: 2023-09
end: 2024-04
role: Co-lead, BEng capstone
org: York University
tags: [IoT, facial recognition, Docker, Google Cloud Run]
cover: ./face-recognition-workflow.png
coverAlt: Facial enrollment and verification workflow from the SHIELD team report
coverStyle: diagram
showCover: false
order: 9
facts:
  - label: Team
    value: Eight students, co-led
  - label: My part
    value: Cloud server and facial recognition
---

## The problem

Car theft and impaired driving are usually addressed by separate products, such as steering-wheel locks, GPS trackers, engine immobilizers and breath-test ignition interlocks. Each of these works on its own and can often be bypassed. For example, the key lock is the weakest point of a steering-wheel lock, a tracker can be found and removed, and a sober person can provide the breath sample for an interlock.

SHIELD (Security, Hazard, Identification, Evaluation, Location and Deterrence) was our BEng capstone. It combines several of these measures in one steering-wheel lock with no key lock. The lock, a cloud server and a mobile app exchange data over the internet, which makes SHIELD an Internet of Things (IoT) system. The lock is released from the app only after the driver's face is recognized.

## My part

I co-led the eight-person team and was responsible for the cloud server and the facial-recognition system. I proposed Google Cloud as the cloud platform and an existing open-source facial-recognition workflow (LoopD) as the starting point. I then adapted that workflow into two cloud services, one to enroll new users and one to verify returning users, and set up the cloud storage and triggers that connect them to the lock's camera and to the app. Later in the project, I also helped the app sub-team develop the cognitive game, worked on the GPS tracking, and tested the integrated system with the other sub-teams.

## What the team built

The figure below shows the states SHIELD moves through, from the driver entering the vehicle to locking the steering wheel again before leaving. Between 17:00 and 3:00, a recognized driver also plays a short reaction game in the app to check for impairment before the lock is released.

![SHIELD system states for enrollment, verification, two-factor code, cognitive game, alarm and user control](./system-architecture.png)
*SHIELD's states, from the team's final report. A new user enrolls their face and a returning user is verified. A recognized user then enters a code shown on the lock's display into the app, while an unrecognized user sends the system to the alarm state.*

The physical-design sub-team designed the lock and its 3D-printed housing.

![CAD model of the team's final steering-wheel lock with its electronics housing and camera](./team-lock-design.jpeg)
*CAD model of the team's final steering-wheel lock, which houses the electronics and the camera.*

## How the recognition works

The recognition system has two paths. To enroll, the camera on the lock takes at least 30 images of the new user. The model learns the user's facial features from these images and saves them as an encoded file (a facial profile) in Google Cloud Storage. To verify, the camera takes about five images of the person requesting access. The model converts these images to facial encodings, compares them with the saved profiles and sends the result to the app.

![Facial enrollment and verification workflow with cloud processing and storage](./face-recognition-workflow.png)
*Enrollment (top) and verification (bottom) in the recognition system, from the team report.*

LoopD was written to run locally, with images and a live video stream from a computer or Raspberry Pi camera. I removed the image-capture and live-stream parts, split the rest into the enrollment and verification workflows, and wrapped each in a small Flask web application so it could receive requests over the internet. I first tried Google Cloud Functions, which run short pieces of code when an event occurs. However, the recognition library (dlib) needs a system-level installation and a build step (CMake) that the Cloud Functions environment does not support. Thus, I packaged each workflow with Docker, which bundles the code with everything it needs to run, and hosted the containers on Google Cloud Run. Each push to the main branch of a workflow's GitHub repository rebuilt and redeployed its container through Google Cloud Build.

Cloud Functions still act as the triggers. When the lock uploads images to storage, a function passes them to the matching Cloud Run service and saves the result where the app can read it. Training on a new user's 30 images typically took ~1 min.
