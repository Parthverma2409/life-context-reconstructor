Life Context Reconstructor — PatchFest Edition

A multimodal AI system for reconstructing a coherent narrative, timeline, and social context from fragmented digital artifacts.

Badges
<p> <img src="https://img.shields.io/badge/Next.js-14-black" /> <img src="https://img.shields.io/badge/TypeScript-5-blue" /> <img src="https://img.shields.io/badge/TailwindCSS-3-0EA5E9" /> <img src="https://img.shields.io/badge/Gemini%20API-Pro-lightgrey" /> <img src="https://img.shields.io/badge/PatchFest-2025-purple" /> <img src="https://img.shields.io/badge/License-MIT-green" /> </p>


1. Overview

The Life Context Reconstructor is an advanced multimodal analysis engine designed to process unstructured personal data—images, videos, documents, audio recordings, and zip archives—and rebuild a meaningful representation of a user’s year. It performs temporal reasoning, semantic clustering, mood analysis, and narrative generation to convert fragmented digital information into a structured story.

This repository contains the official starter code for the PatchFest challenge. Participants will extend the system by completing GitHub issues across multiple complexity levels, contributing to the reconstruction pipeline, visualization layers, and creative AI tools.

The goal is simple: turn digital clutter into coherent memory ✨.

2. Problem Statement: Life Context Reconstruction Challenge

We generate more data than ever, yet we remember less. Screenshots, receipts, photos, messages, playlists, notes — each stored separately, stripped of context. This leads to a form of digital amnesia where a year's worth of experiences becomes a disconnected archive instead of a coherent memory.

The Life Context Reconstructor addresses this by transforming scattered digital artifacts into an interpretable model of a user's year. Using multimodal AI reasoning:

A ride-share receipt 🚗,

A concert video 🎵, and

A calendar invite 📅

are no longer three unrelated files — they become one unified event.

Through multimodal triangulation and long-context reasoning, the system reconstructs:

A narrative Yearbook

A semantic Timeline

Emotional Analytics

A relational Social Graph

This project moves AI from generating content to generating context. Instead of creating fiction, it uncovers truth.

3. Core Capabilities

The system accepts individual files and bulk archives containing heterogeneous media types.

Images (jpg, jpeg, png, webp)

Extracts OCR text, detects scenes and objects, clusters faces, and parses EXIF metadata.

Documents (pdf, txt, md, json)

Extracts text, identifies named entities, and models semantic themes.

Audio (mp3, wav)

Performs transcription, speaker diarization, and ambient classification.

Video (mp4, mov)

Extracts keyframes, summarizes scenes, and identifies temporal transitions.

ZIP Archives

Automatically extracted client-side, enabling high-volume uploads without friction.

4. The Five-Stage Reconstruction Pipeline

Before reconstruction begins, the application requests necessary permissions:

<img src="https://github.com/user-attachments/assets/6a514cfe-6d0e-4e6a-b9e5-ef8dce5dae7c" width="100%" />
Stage 1: Data Extraction

Processes raw files into structured metadata using OCR, vision tagging, audio transcription, and text extraction.
<img width="831" height="707" alt="image" src="https://github.com/user-attachments/assets/8994cfe5-4ffa-4b6a-ac84-fb7ef4a5a44e" />
<img width="831" height="707" alt="image" src="https://github.com/user-attachments/assets/9513477f-fe73-40af-9977-c00f943b57c9" />

<img width="850" height="881" alt="image" src="https://github.com/user-attachments/assets/416817e9-fc0d-47f8-8c2d-21a76c05c7c8" />

<img src="https://github.com/user-attachments/assets/795da57c-8d59-4c69-a2a6-3116ce291ee9" width="100%" />

Stage 2: Timeline Reconstruction
// baseline/generateTimeline.ts
// ---------------------------------------------
// Minimal Stage-2 Timeline Reconstruction Stub
// Students must expand this into a full system.
// ---------------------------------------------

export const generateTimeline = async (assets: any[]) => {
  // STEP 1: Reduce asset size (optional starter)
  const lightweight = assets.map(a => ({
    id: a.id,
    filename: a.filename,
    timestamps: a.timestamps,
    text_preview: a.text?.full?.substring(0, 120) || "",
    faces: a.faces || [],
    tags: a.derived_tags || []
  }));

  // TODO: Replace this with your Gemini API logic
  // This is only a placeholder pipeline description.
  const prompt = `
    You are Stage 2: Timeline Reconstruction.

    Input: A list of 'Asset' objects from Stage 1.

    Your tasks:
    1. Group related assets into 'events'.
    2. Infer dates when missing or conflicting.
    3. Produce a chronological structure of:
       - days
       - weeks
       - months
       - phases
    4. Return STRICT JSON only.

    Input asset metadata:
    ${JSON.stringify(lightweight)}
  `;

  // TODO: Plug in your actual AI call here.
  // Example placeholder (students will implement):
  const fakeOutput = {
    days: [],
    weeks: [],
    months: [],
    phases: []
  };

  return fakeOutput;
};

Rebuilds chronological flow using timestamps, semantic clues, and inferred temporal context.
<img src="https://github.com/user-attachments/assets/a67c5b50-559f-444e-9a73-7a02dda79d2f" width="100%" />

Stage 3: People and Relationship Profiling

Clusters recurring individuals using face embeddings and text references, generating role hypotheses and confidence scores.
<img src="https://github.com/user-attachments/assets/55e609de-b0ad-4f06-9383-208ed825d9ac" width="100%" />

<img src="https://github.com/user-attachments/assets/4f6c1de9-89bd-4df3-9566-0daff832e4e3" width="100%" />
Stage 4: Behavior and Mood Analysis

Creates an emotional arc of the year, identifies habits, and detects high-impact life transitions.
<img src="https://github.com/user-attachments/assets/1d2f548c-0506-4318-9f55-c7ec2c889fb0" width="100%" />

Stage 5: Yearbook Generation

Generates a narrative representation of the user's year, including monthly summaries and top moments.
<img src="https://github.com/user-attachments/assets/8827e9ab-90ff-44c2-a1de-774724c1bf23" width="100%" />

5. System Features
Dashboard

Aggregates analytics, events, phases, and relationship insights.

People and Roles

Shows individuals, relationship strength, recurrence frequency, and shared experiences.

Insights and Mood

Displays emotional timeline, behavioral tendencies, deep insights, and transitions.

Yearbook Story

Compiles a scrollable, generative summary of the reconstructed year.

Creative Tools

Provides:

AI assistant for contextual queries

Media studio for image/video/audio generation

Maps grounding for geographic extraction

6. Technical Infrastructure

Smart batching to prevent rate limits

Retry logic with exponential backoff

Client-side ZIP extraction to reduce server load

Modular extraction and analysis utilities

Scalable pipeline design

Integration-ready AI endpoints

7. Installation

Clone the repository:

git clone <repository-url>
cd ai-year-wrap


Install dependencies:

npm install

## Starter Code Overview

This repository already contains a minimal working scaffold so contributors can focus on building features rather than setting up the environment.

Key entry points you will be working on:

### 1. `app/api/analyze/route.ts`
Server-side route for uploading files and performing extraction.  
You will extend this with:
- OCR calls  
- Scene/object detection  
- Transcription  
- Keyframe extraction  
- Batch processing logic  

### 2. `lib/extractStats.ts`
Utility for normalizing model outputs into a consistent format.

### 3. `lib/summarize.ts`
Utility for generating summarized text and insights.

### 4. `lib/storyline.ts`
Template used for generating the Yearbook narrative.

### 5. `app/wrap/page.tsx`
Frontend rendering of the reconstructed timeline and narrative.

You may freely add new folders such as `utils/`, `services/`, or `hooks/` depending on your architectural needs.


## Using the Gemini API (Required for All AI Tasks)

All multimodal analysis in this project uses the Gemini API.

Add environment variables:

AIS_API_KEY=your_key_here


<img src="https://github.com/user-attachments/assets/2d3aa59c-e410-4ae8-aa1f-e42b83aeb0c7" width="30%" />

Start the development server:

npm run dev


Open the application at http://localhost:3000.

8. Contribution Guidelines

This repository is part of PatchFest. Issues are categorized as easy, medium, or hard.

Contribution process:

Choose an issue

Comment to claim it

Create a feature branch

Implement the solution

Submit a pull request

Pull requests are evaluated on:

Correctness

Code readability

Architecture

UI/UX consistency

Compliance with acceptance criteria

9. Evaluation Criteria

Submissions are compared to reference reconstructions. Evaluation focuses on:

Metadata extraction accuracy

Timeline reconstruction correctness

Emotional arc consistency

Relationship clustering reliability

Narrative coherence

UI quality and integration

10. Impact

This project shows how AI can reconstruct meaning from the data people already generate. Instead of creating artificial content, the system uncovers structure, relationships, and emotion hidden in digital archives.

It is a step toward AI tools that help users understand their own lives, not just produce new media.
