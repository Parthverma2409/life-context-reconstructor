import Link from 'next/link';

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">AI Life Archive — Reconstructor (HARD)</h1>
      <p className="mb-6 text-slate-400">This is the HARDer PatchFest challenge. Upload archives, run the pipeline, and build advanced AI features.</p>
      <div className="flex justify-center gap-4">
        <Link href="/upload" className="px-4 py-2 bg-indigo-600 rounded">Upload Data</Link>
        <Link href="/analyze" className="px-4 py-2 bg-slate-700 rounded">Analyze</Link>
        <Link href="/wrap" className="px-4 py-2 bg-green-600 rounded">View Wrap</Link>
      </div>
    </main>
  );
}
