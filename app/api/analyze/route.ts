import { NextResponse } from 'next/server';
import { analyzeText } from '@/lib/analyzeStats';
import { generateMoodTimeline } from '@/lib/moodTimeline';
import { buildStoryline } from '@/lib/storyline';
import { generateSummary } from '@/lib/summarize';
import { generateNarrative } from '@/lib/narrative';

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  // If sample === true, load data/sample.json
  const sample = body.sample ? require('../../../data/sample.json') : body;
  const text = Array.isArray(sample.messages) ? sample.messages.join('\n') : (sample.content || '');
  const stats = analyzeText(text);
  const mood = generateMoodTimeline(sample.messages || []);
  // try AI summary (will fallback if no key)
  const summary = await generateSummary(text);
  const narrative = await generateNarrative(text);
  const storyline = buildStoryline(summary, stats);
  const slides = [
    { title: 'Year in Numbers', content: `Words: ${stats.wordCount}, Top: ${stats.topWords.slice(0, 5).join(', ')}` },
    { title: 'Mood', content: JSON.stringify(mood.slice(0, 12)) },
    { title: 'AI Summary', content: summary },
    { title: 'Storyline', content: storyline.title }
  ];
  const result = { stats, mood, summary, storyline, narrative, slides };
  // persist for wrap preview
  // Note: in this minimal serverless demo we can't write files; store in localStorage on client in UI after call
  return NextResponse.json(result);
}

