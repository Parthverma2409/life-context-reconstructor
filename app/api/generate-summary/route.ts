import { NextResponse } from 'next/server';
import { summarizeWithAI } from '@/lib/summarize';
export async function POST(req: Request) {
  const body = await req.json().catch(()=>({}));
  const text = body.text || '';
  const summary = await summarizeWithAI(text);
  return NextResponse.json({ summary });
}
