'use client'
import { useEffect, useState } from 'react'


export default function WrapPage(){
const [result, setResult] = useState<any>(null)


useEffect(()=>{
try{
const data = localStorage.getItem('wrapResult')
if(data) setResult(JSON.parse(data))
}catch(e){ console.warn(e) }
},[])


if(!result) return <div className="p-8 text-center">No analysis found. Go to <a href="/upload" className="text-blue-400">Upload</a></div>


return (
<div className="max-w-4xl mx-auto">
<h2 className="text-3xl font-bold mb-4">Your Wrap (Preview)</h2>
<div className="bg-slate-800 p-6 rounded">
<h3 className="text-xl">Word Count: {result.wordCount}</h3>
<p className="mt-2">Top Words: {result.topWords?.slice(0,10).join(', ')}</p>
<p className="mt-2">Mood Score: {result.moodScore}</p>
</div>
</div>
)
}