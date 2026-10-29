---
title: ARIA, multi-LLM agents for literature review and research planning
summary: A four-module system of cooperating language-model agents that turns a research question into a screened set of papers and a draft research procedure, with the researcher approving each stage.
period: grad
track: software
start: 2023-05
role: Sole software author, MASc thesis chapter
org: SEiL, York University
tags: [LLM agents, retrieval-augmented generation, Python, Google Cloud]
cover: ./modules.svg
coverAlt: ARIA's four modules (Conversation, Retriever, Processor, Suggester) with researcher checkpoints between stages
featured: true
order: 3
facts:
  - label: Case study
    value: 11,491 candidate papers narrowed to 22 in under two hours
  - label: Manual baseline
    value: Weeks to months for the same scoping
  - label: Expert ratings
    value: 8.33 to 9.62 out of 10 across five dimensions
  - label: Stack
    value: Python, React and Vite, Cloud Run, CockroachDB, Firebase Auth
links:
  - label: arXiv preprint
    href: https://arxiv.org/abs/2502.07960
status: The full study, including the expert evaluation, is written up as a journal manuscript. The earlier framework is available as an arXiv preprint.
---

## The problem

Starting a research project means finding, reading and filtering a large body of literature before any experiment is planned. The volume of publications makes that slow, and a missed search phrase can leave out a whole line of work. ARIA splits this job across specialized agents and keeps the researcher in control at each decision point.

## How it works

- **Conversation.** Breaks the research question into a structured scope and proposes search phrases. The researcher reviews the breakdown and the phrases before anything is searched.
- **Retriever.** Expands the phrases into Boolean queries for literature databases, follows citations outward (snowballing), and screens abstracts against the agreed scope.
- **Processor.** Retrieves full texts and extracts text, equations and figures into a multimodal retrieval-augmented generation (RAG) index that keeps the source of every passage, so later answers can cite where each claim came from.
- **Suggester.** After the researcher approves the specifications the plan should meet, several language models work together to write a structured research procedure from the indexed material.

## Case study

The case study used my own thesis topic, enhancing dropwise condensation. ARIA narrowed 11,491 candidate identifiers to 22 key articles and produced a structured research procedure in under two hours. The same work done by hand typically takes weeks to months.

## Evaluation and deployment

Four independent experts in water treatment, fluid mechanics, nuclear thermohydraulics and separation science, ranging from a PhD student to a professor, used ARIA and rated it on a 19-item instrument scored from 1 to 10.

| Dimension | Mean | SD |
|---|---|---|
| Overall utility | 9.62 | 0.48 |
| Time savings | 9.00 | 1.15 |
| Educational value | 8.95 | 1.28 |
| Presentation quality | 8.58 | 1.66 |
| Output quality | 8.33 | 1.94 |

All four rated the generated research procedure a strong starting point (10.00 of 10, SD 0.00).

To make that possible, ARIA runs as a containerized web application. A React and Vite frontend talks to a Python backend on Google Cloud Run, CockroachDB keeps a separate persistent workspace for each researcher, and Firebase handles sign-in.

## Background

I led the preliminary version of ARIA as an undergraduate research associate, presented it at the Lassonde Undergraduate Summer Research Conference, and gave an oral talk on it at the ACS Colloids and Surface Science Symposium. The current version is one of the two parts of my MASc thesis.
