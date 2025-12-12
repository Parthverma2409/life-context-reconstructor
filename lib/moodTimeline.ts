export function generateMoodTimeline(messages: string[]) {
  // Very simple: slice messages into months, compute mood score per index
  return messages.slice(0, 50).map((m, i)=> ({ date: new Date().toISOString(), score: Math.sin(i/5) }));
}
