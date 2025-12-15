# Life Context Reconstructor — PatchFest Edition

**A multimodal AI system for reconstructing a coherent narrative, timeline, and social context from fragmented digital artifacts.**

<p>
  <img src="https://img.shields.io/badge/Next.js-14-black" />
  <img src="https://img.shields.io/badge/TypeScript-5-blue" />
  <img src="https://img.shields.io/badge/TailwindCSS-3-0EA5E9" />
  <img src="https://img.shields.io/badge/Gemini%20API-Pro-lightgrey" />
  <img src="https://img.shields.io/badge/PatchFest-2025-purple" />
  <img src="https://img.shields.io/badge/License-MIT-green" />
</p>

---

## 1. Overview

The **Life Context Reconstructor** is an advanced multimodal analysis engine designed to process unstructured personal data—images, videos, documents, audio recordings, and zip archives—and rebuild a meaningful representation of a user’s year. It performs temporal reasoning, semantic clustering, mood analysis, and narrative generation to convert fragmented digital information into a structured story.

This repository contains the official starter code for the **PatchFest challenge**. Participants will extend the system by completing GitHub issues across multiple complexity levels.

The goal is simple: **Turn digital clutter into coherent memory ✨.**

---

## 2. Problem Statement

We generate more data than ever, yet we remember less. Screenshots, receipts, photos, messages, playlists, notes—each stored separately, stripped of context. This leads to a form of **digital amnesia**.

The Life Context Reconstructor addresses this by transforming scattered digital artifacts into an interpretable model of a user's year using multimodal AI reasoning.

**Example:**
* A ride-share receipt 🚗
* A concert video 🎵
* A calendar invite 📅

These are no longer three unrelated files—they become **one unified event**.

---

## 3. Core Capabilities

The system accepts individual files and bulk archives containing heterogeneous media types:

* **Images:** Extracts OCR text, detects scenes/objects, clusters faces, parses EXIF.
* **Documents:** Extracts text, identifies named entities, models semantic themes.
* **Audio:** Transcription, speaker diarization, ambient classification.
* **Video:** Extracts keyframes, summarizes scenes, identifies temporal transitions.
* **ZIP Archives:** Extracted client-side for high-volume uploads.

---

## 4. The Reconstruction Pipeline

### Stage 1: Data Extraction
Processes raw files into structured metadata using OCR, vision tagging, audio transcription, and text extraction.

### Stage 2: Timeline Reconstruction
Rebuilds chronological flow using timestamps, semantic clues, and inferred temporal context. Groups assets into 'events' and infers missing dates.

### Stage 3: People and Relationship Profiling
Clusters recurring individuals using face embeddings and text references.

### Stage 4: Behavior and Mood Analysis
Creates an emotional arc of the year, identifies habits, and detects life transitions.

### Stage 5: Yearbook Generation
Generates a narrative representation of the user's year, including monthly summaries and top moments.

---

## 5. System Features

* **Dashboard:** Aggregates analytics, events, phases, and relationship insights.
* **People and Roles:** Shows individuals, relationship strength, and shared experiences.
* **Insights and Mood:** Displays emotional timeline and behavioral tendencies.
* **Yearbook Story:** Compiles a scrollable, generative summary.

---

## 6. Installation & Setup

### Prerequisites
* Node.js (v18+)
* npm or yarn

### Steps

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd ai-year-wrap
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables:**
    Create a `.env.local` file in the root directory.
    ```env
    AIS_API_KEY=your_key_here
    ```

4.  **Start the development server:**
    ```bash
    npm run dev
    ```

5.  **Open the application:**
    Navigate to `http://localhost:3000`.

---

## 7. Starter Code Overview

* **`app/api/analyze/route.ts`**: Server-side route for file processing.
* **`lib/extractStats.ts`**: Utility for normalizing model outputs.
* **`lib/summarize.ts`**: Utility for generating text summaries.
* **`lib/storyline.ts`**: Template for Yearbook narrative.
* **`app/wrap/page.tsx`**: Frontend rendering of the timeline.

---

## 8. Contributing

This repository is part of **PatchFest**.

1.  **Choose an issue** from the Issues tab.
2.  **Comment** on the issue to claim it.
3.  **Create a feature branch** (e.g., `feature/timeline-logic`).
4.  **Implement** the solution.
5.  **Submit a Pull Request**.

**Good luck, and let your imagination run wild!**