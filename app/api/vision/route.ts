import { NextResponse } from 'next/server';
export async function POST(req: Request){
  // accepts base64 images array, returns mocked captions + palette
  const body = await req.json().catch(()=>({}));
  const images = body.images || [];
  const results = images.map((img:any,i:number)=>({ caption: `Image ${i+1} looks happy`, palette: ['#ffd1a9','#f59e0b','#be185d'] }));
  return NextResponse.json({ results });
}
