import { NextResponse } from 'next/server';
export async function POST(req: Request){
  // stub: expects slides JSON and returns success or url to generated PDF
  return NextResponse.json({ ok: true, url: null });
}
