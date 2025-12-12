Life Context Reconstructor — PatchFest Edition

A multimodal AI system for reconstructing a coherent narrative, timeline, and social context from fragmented digital artifacts.

Overview

The Life Context Reconstructor is an advanced multimodal analysis engine designed to process unstructured personal data—images, videos, documents, audio recordings, and zip archives—and rebuild a meaningful representation of a user’s year. It performs temporal reasoning, semantic clustering, mood analysis, and narrative generation to convert fragmented digital information into a structured story.

This repository contains the official starter code for the PatchFest challenge. Participants will extend the system by completing assigned GitHub issues across different complexity levels, implementing features within the reconstruction pipeline, visualization interfaces, and creative AI tools.




Problem Statement: Life Context Reconstruction Challenge

Modern digital life is fragmented. Individuals generate thousands of photos, screenshots, notes, receipts, and videos across multiple devices and apps, but rarely have the ability to understand them as a connected story. As a result, we experience a form of digital amnesia: a year’s worth of memories becomes a disorganized archive rather than a meaningful narrative.

The Life Context Reconstructor addresses this challenge by transforming a user’s scattered digital artifacts into a cohesive, interpretable representation of their lived experience. Leveraging multimodal AI models with long-context reasoning, the system ingests mixed-media data—images, documents, audio, video, and metadata—and performs temporal, semantic, and relational reconstruction.

Unlike traditional galleries that sort by timestamp, the reconstruction engine performs cross-file reasoning. It can infer, for example, that a ride-share receipt, a concert video, and a calendar invite correspond to the same event. Through multimodal triangulation, it builds:

A narrative yearbook summarizing the user’s experiences.

A semantic timeline of reconstructed events.

Emotional analytics derived from text, speech, and visual sentiment signals.

A social graph of recurring individuals and their inferred roles.

The system operates through a multi-stage pipeline: preprocessing, multimodal extraction, timeline reasoning, sentiment and behavior modeling, relationship clustering, and narrative generation. The backend processes raw files and sends optimized batches to the AI model, which returns structured JSON for analysis and Markdown for long-form narrative rendering. The frontend visualizes the outputs through interactive dashboards, charts, and narrative interfaces.

The objective of this challenge is to build key components of this reconstruction engine. Participants will implement modules, data parsers, AI integrations, analysis utilities, and UI views that contribute to generating a coherent, intelligible representation of a user’s year.

This project pushes beyond content generation toward context understanding, demonstrating AI’s potential to help users reclaim meaning from their digital history.



Core Capabilities
Supported Input Types

The system accepts individual files and bulk archives containing:

Images

Formats: jpg, jpeg, png, webp
Extracted Features:
• Optical character recognition
• Object and scene detection
• Face clustering and embedding
• EXIF metadata including timestamps and geodata

Documents

Formats: pdf, txt, md, json
Extracted Features:
• Full text extraction
• Named entity recognition for dates, locations, and individuals
• Topic modeling and semantic analysis

Audio

Formats: mp3, wav
Extracted Features:
• Speech-to-text transcription
• Speaker diarization
• Ambient sound classification

Video

Formats: mp4, mov
Extracted Features:
• Keyframe extraction
• Visual scene summarization
• Temporal cue detection

ZIP Archives

The client performs automatic extraction and filters supported formats before processing.

The Five-Stage Reconstruction Pipeline

The webapp should ask for the permissions first:
<img width="2559" height="1359" alt="Screenshot 2025-12-12 192532" src="https://github.com/user-attachments/assets/6a514cfe-6d0e-4e6a-b9e5-ef8dce5dae7c" />

Stage 1: Data Extraction

Processes raw files into structured multimodal metadata using vision, OCR, transcription, and text extraction models.

<img width="2559" height="1358" alt="Screenshot 2025-12-12 192546" src="https://github.com/user-attachments/assets/795da57c-8d59-4c69-a2a6-3116ce291ee9" />

Stage 2: Timeline Reconstruction

Orders events chronologically by merging timestamps, inferred temporal cues, and cross-file semantic alignment.

<img width="2559" height="1361" alt="Screenshot 2025-12-12 192619" src="https://github.com/user-attachments/assets/a67c5b50-559f-444e-9a73-7a02dda79d2f" />

Stage 3: People and Relationship Profiling
<img width="2559" height="1358" alt="Screenshot 2025-12-12 192633" src="https://github.com/user-attachments/assets/55e609de-b0ad-4f06-9383-208ed825d9ac" />


Identifies recurring individuals through face embeddings and text mentions, generating role hypotheses and confidence scores.
<img width="2559" height="1353" alt="Screenshot 2025-12-12 192650" src="https://github.com/user-attachments/assets/4f6c1de9-89bd-4df3-9566-0daff832e4e3" />


Stage 4: Behavior and Mood Analysis

Builds the emotional arc of the year, detects life patterns, and identifies behavioral shifts and high-impact transitions.
<img width="2559" height="1355" alt="Screenshot 2025-12-12 192715" src="https://github.com/user-attachments/assets/1d2f548c-0506-4318-9f55-c7ec2c889fb0" />


Stage 5: Yearbook Generation

Produces a narrative yearbook, top moments, monthly summaries, and contextual insights through generative language modeling.

<img width="2559" height="1381" alt="Screenshot 2025-12-12 192735" src="https://github.com/user-attachments/assets/8827e9ab-90ff-44c2-a1de-774724c1bf23" />


System Features
Dashboard

Displays statistics, activity peaks, events, and key connections.

People and Roles

Shows identified individuals, relationship strength, recurring appearances, and shared moments.

Insights and Mood

Presents the emotional timeline, behavioral patterns, deep insights, and transitions across the year.

Yearbook Story

Generates a long-form narrative representation of the user’s reconstructed year.

Creative Tools

Includes an AI assistant for contextual queries, a generative media studio for creating visual and audio assets, and a maps-grounding tool for interpreting geographic references.

Technical Infrastructure

• Smart batching to avoid rate limits
• Retry mechanisms with exponential backoff
• Modular extraction utilities
• Scalable analysis pipeline
• Client-side ZIP processing
• Integration-ready AI endpoints

Installation

Clone the repository:

git clone <repository-url>
cd ai-year-wrap


Install dependencies:

npm install


Configure environment variables:

AIS_API_KEY=your_key_here
<img width="520" height="927" alt="image" src="https://github.com/user-attachments/assets/2d3aa59c-e410-4ae8-aa1f-e42b83aeb0c7" />

Contribution Guidelines

This repository is part of PatchFest. Issues are categorized into easy, medium, and hard. Participants must:

Choose an issue

Comment to claim it

Create a feature branch

Implement the solution

Submit a pull request

Contributions will be evaluated based on correctness, architecture quality, clarity, and adherence to requirements.

Evaluation Criteria

Final outputs will be compared against reference reconstructions. The evaluation includes:

• Accuracy of extracted metadata
• Correctness of reconstructed timeline
• Quality of emotional arc and insights
• Reliability of relationship clustering
• Coherence of the generated yearbook narrative
• UI clarity and functional integration

Impact

This project demonstrates a future direction for AI: not generating synthetic content, but deriving meaning from existing personal data. By turning disorganized digital artifacts into structured memory, the Life Context Reconstructor helps users understand their lived experiences, identify emotional patterns, and reclaim the narrative of their year.


Start the development server:

npm run dev
