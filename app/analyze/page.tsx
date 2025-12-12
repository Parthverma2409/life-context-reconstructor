'use client';
import { useState } from 'react';
import Loading from '@/components/Loading';
export default function AnalyzePage() {
  const [status, setStatus] = useState('');
  const [result, setResult] = useState<any>(null);
  const run = async () => {
    setStatus('Starting remote analysis...');
    setResult(null);
    try {
      const res = await fetch('/api/analyze', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ sample: true }) });
      const json = await res.json();
      setResult(json);
      setStatus('Done');
    } catch (e) {
      console.error(e);
      setStatus('Error');
    }
  };
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">Run Pipeline</h2>
      <p className="mb-4 text-slate-400">This triggers parse → analyze → summary → storyline pipelines (stubbed).</p>
      <button onClick={run} className="px-4 py-2 bg-indigo-600 rounded">Run</button>
      <div className="mt-6">{status && <div className="mb-4">{status}</div>}{!result && status && <Loading />}{result && <pre className="bg-slate-800 p-4 rounded">{JSON.stringify(result, null, 2)}</pre>}</div>
    </div>
  );
}
