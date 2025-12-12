import { NextResponse } from 'next/server';
export async function POST(req: Request) {
  const body = await req.json().catch(()=>({}));
  // In a real impl: accept files, unzip, extract text, return messages[]
  const sample = body.sample ? require('../../../data/sample.json') : body;
  // sample expected to have messages array -- normalize
  const messages = (sample.messages || []).map((m:any,i:number)=>({ id:i, text: m, ts: new Date().toISOString() }));
  return NextResponse.json({ messages });
}
