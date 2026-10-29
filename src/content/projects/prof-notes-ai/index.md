---
title: Prof Notes AI, course tutors built on lecture notes
summary: LLM-agent tutors that answer course questions from the instructor's own lecture slides, supplemented by Wikipedia and YouTube, built for MECH 3202 Fluid Dynamics and MECH 2201 Thermodynamics.
period: undergrad
track: software
start: 2023-05
end: 2025-07
role: Co-developer, backend services and document pipeline
org: SEiL, York University
tags: [LLM agents, education, Python, Google Cloud, Pinecone]
cover: ./architecture.svg
coverAlt: Lecture slides are extracted and indexed; student questions pass through an API gateway to lecture-notes, Wikipedia and YouTube services
order: 4
facts:
  - label: Response time
    value: 6 to 9 s on fluid dynamics questions
  - label: Courses
    value: MECH 3202 Fluid Dynamics, MECH 2201 Thermodynamics
  - label: Backend
    value: Python services on Google App Engine
  - label: Ingestion
    value: Cloud Run, Adobe PDF Extract API, Pinecone
links:
  - label: CEEA paper (DOI)
    href: https://doi.org/10.24908/pceea.2025.19582
status: Published at CEEA as a full peer-reviewed paper.
---

## Idea

Prof Notes AI answers course questions from the instructor's own lecture slides first, so answers follow the course's own material. It adds open educational resources from Wikipedia and YouTube alongside the notes.

## How it works

- **Ingestion.** When an instructor uploads lecture slides, a Cloud Run service sends the PDF to the Adobe PDF Extract API, organizes the content slide by slide, and keeps text, equations and figures. A filtering step drops decorative graphics such as templates and logos. The remaining content becomes vector nodes in a Pinecone index for that course.
- **Answering.** A student's question goes to an API gateway on Google App Engine, which calls separate services for the lecture notes, Wikipedia and YouTube. The notes service retrieves the relevant slides from the course index.

On fluid dynamics questions the system answered in 6 to 9 s.

## My part

I built the backend services, including the API gateway and the lecture-notes, Wikipedia and YouTube layers, and the PDF ingestion pipeline. I presented the project as a poster at the Lassonde Undergraduate Summer Research Conference, and the work was published at the Canadian Engineering Education Association conference.
