export function analyzeText(content: string) {
  const clean = content.replace(/[^\w\s]/g, ' ').toLowerCase();
  const words = clean.split(/\s+/).filter(Boolean);
  const freq: Record<string,number> = {};
  words.forEach(w => freq[w] = (freq[w]||0)+1);
  const topWords = Object.entries(freq).sort((a,b)=>b[1]-a[1]).map(x=> ({ word: x[0], count: x[1] }));
  const moodScore = (content.match(/happy|great|awesome|love|yay|cool|good/g) || []).length / Math.max(1, words.length);
  return { wordCount: words.length, topWords, moodScore: Number(moodScore.toFixed(3)), rawFreq: freq };
}
