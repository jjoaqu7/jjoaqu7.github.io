---
title: Prof Notes AI, course tutors built on lecture notes
summary: LLM-agent tutors that answer engineering course questions from the instructor's own lecture slides first, with supporting material from Wikipedia and YouTube.
period: undergrad
track: software
start: 2023-05
end: 2025-07
role: Co-developer, backend services and document pipeline
org: SEiL, York University
tags: [LLM agents, education, Python, Google Cloud, Pinecone]
cover: ./architecture.svg
coverAlt: Prof Notes AI architecture showing lecture slide extraction on Cloud Run into Pinecone, and student questions passing through an API gateway on Google App Engine to lecture-notes, Wikipedia and YouTube services
showCover: false
order: 4
facts:
  - label: Courses
    value: MECH 3202 Fluid Dynamics and MECH 2201 Thermodynamics
  - label: Average response time in user testing
    value: 5.7 s for syllabus questions, 10.5 s for technical questions
  - label: Backend
    value: Python microservices on Google App Engine and Cloud Run
  - label: Ingestion
    value: Adobe PDF Extract API and Pinecone vector database
links:
  - label: CEEA 2025 paper (DOI)
    href: https://doi.org/10.24908/pceea.2025.19582
status: Published as a full peer-reviewed conference paper at the Canadian Engineering Education Association (CEEA 2025).
credits: Co-developed with a software engineering student. Supervised by Prof. Alidad Amirfazli. I designed and built the backend services, document ingestion pipeline, and multi-source API gateway.
---

## The problem

Engineering students often need answers to course questions outside lecture and office hours. They then turn to Wikipedia, YouTube or general-purpose chatbots such as ChatGPT. These are useful, but they do not follow the instructor's notation, vocabulary or approach, and they do not know course details such as assignment deadlines or exam structure.

Prof Notes AI answers from the instructor's own lecture slides and course outline first. We built separate tutors for two York University courses, MECH 3202 (Fluid Dynamics) and MECH 2201 (Thermodynamics).

## My contribution

I co-developed Prof Notes AI with a student I mentored, under the supervision of Prof. Alidad Amirfazli. I built the backend services. These include the ingestion pipeline, which turns the instructor's slides into a searchable index for each course, and the API gateway, which passes each student question to separate lecture-notes, Wikipedia and YouTube services that I also built. I co-authored the CEEA 2025 paper on the system.

## Results

![Prof Notes AI architecture diagram showing slide ingestion and multi-source answering](./architecture.svg)
*Prof Notes AI architecture. Top, instructor slides are extracted and indexed in a Pinecone index for each course. Bottom, a student question goes through the API gateway to the lecture-notes, Wikipedia and YouTube services.*

We tested the fluid dynamics tutor in two rounds of in-person user testing, with eight users and then ten, including undergraduate, master's and PhD students and professors. Answers took 5.7 s on average for syllabus questions and 10.5 s for technical questions. Technical questions take longer because the system searches several sources and writes a longer explanation. Between the two rounds we added caching for repeated questions, and fewer users reported delays in the second round.

Each answer names the lecture and page it draws on. For example, a question on Bernoulli's equation returned an explanation, the equation and a figure from "Lecture 5, page 3". The system also sorted every test question correctly as technical or syllabus-related. Answers to complex, multi-step questions still need improvement.

## How it works

### From lecture slides to a course index

When an instructor uploads lecture slides as a PDF, a Cloud Run service sends the file to the Adobe PDF Extract API and organizes the output slide by slide, keeping text, equations and figures.

Slides are harder to process than ordinary documents. Equations, diagrams and short bullet points sit alongside slide templates, borders and logos, which would otherwise be indexed as course content. A filtering step therefore passes each figure to an LLM that labels it as meaningful or decorative, and drops the decorative ones. The remaining content is split into chunks by meaning and stored in a Pinecone index for that course, i.e., a database that finds passages by similarity of meaning rather than exact wording. Course outlines go to a separate index, so the tutor can also answer syllabus questions.

### Answering a question

A student's question goes to the API gateway on Google App Engine. An LLM first sorts the question as technical, syllabus-related or unrelated to the course. The gateway then queries three services at the same time.

1. The lecture-notes service searches the course index for the most relevant slide content, and an LLM writes the answer from it.
2. The Wikipedia service finds related articles through the Wikipedia API and extracts the relevant text and figures.
3. The YouTube service searches YouTube, reads the transcripts of the results and returns the video segment, with its timestamp, that addresses the question.

### Keeping answers tied to the course

In early testing, the model sometimes completed answers from its own general knowledge. These answers were usually correct but did not follow the course material. We changed the lecture-notes service to rely primarily on the professor's notes and syllabus, which brought answers closer to the course and reduced overly general content. Wikipedia and YouTube results are returned alongside the course answer as supporting material.
