export function buildStoryline(summary: string, stats: any) {
  return {
    title: 'Year arc: Growth & Moments',
    bullets: [
      `Mood score: ${stats.moodScore ?? 'N/A'}`,
      `Top words: ${stats.topWords?.slice(0,5).map((w:any)=>w.word).join(', ') || 'N/A'}`,
      `AI summary: ${summary?.slice(0,120) || 'N/A'}`
    ]
  };
}
