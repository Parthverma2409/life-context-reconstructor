export async function analyzeImagesBase64(images: string[]) {
  // If GEMINI Vision or other key present, call real API.
  // For now return mocked captions + palette.
  return images.map((_,i)=> ({ caption: `Mock caption ${i+1}`, palette: ['#ffd1a9','#f97316'] }));
}
