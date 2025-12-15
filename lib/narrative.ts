
import { GoogleGenerativeAI } from '@google/generative-ai';

export interface NarrativeResult {
    yearStory: string;
    monthlySummaries: { month: string; summary: string }[];
    topMoments: string[];
    majorThemes: string[];
}

export async function generateNarrative(text: string): Promise<NarrativeResult> {
    const apiKey = process.env.AIS_API_KEY;
    if (!apiKey) {
        console.warn("AIS_API_KEY is missing. Returning mock narrative data.");
        return {
            yearStory: "This year was a journey of growth and discovery. (Mock Data)",
            monthlySummaries: [
                { month: "January", summary: "Started the year with high energy. (Mock)" },
                { month: "February", summary: "Focused on work and learning. (Mock)" }
            ],
            topMoments: ["First trip of the year", "Completing the big project"],
            majorThemes: ["Growth", "Adventure"]
        };
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `
    Analyze the following text which represents a user's year (messages, notes, etc.).
    Generate a structured narrative including:
    1. "yearStory": A cohesive story of the entire year.
    2. "monthlySummaries": A list of summaries for each month mentioned or inferred.
    3. "topMoments": A list of 5 key standout moments.
    4. "majorThemes": A list of 3-5 recurring themes (e.g., "Career Growth", "Travel").

    Input Text:
    "${text.substring(0, 15000)}"

    Return strictly valid JSON in the following format:
    {
      "yearStory": "...",
      "monthlySummaries": [
        { "month": "January", "summary": "..." }
      ],
      "topMoments": ["moment 1", ...],
      "majorThemes": ["theme 1", ...]
    }
    Do not include markdown code blocks.
  `;

    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const textResult = response.text();

        const cleanedText = textResult.replace(/```json/g, '').replace(/```/g, '').trim();
        return JSON.parse(cleanedText);
    } catch (error) {
        console.error("Error generating narrative:", error);
        return {
            yearStory: "Could not generate story.",
            monthlySummaries: [],
            topMoments: [],
            majorThemes: []
        };
    }
}
