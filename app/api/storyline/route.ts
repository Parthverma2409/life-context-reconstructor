import { NextResponse } from 'next/server';
import { buildStoryline } from '@/lib/storyline';
export async function POST(req: Request) {
  const body = await req.json().catch(()=>({}));
  const summary = body.summary || '';
  const stats = body.stats || {};
  const story = buildStoryline(summary, stats);
  return NextResponse.json(story);
}
