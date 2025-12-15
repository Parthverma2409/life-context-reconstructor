import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="max-w-5xl mx-auto px-6 py-16">
        <section className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight">AI Life Archive — Reconstructor</h1>
            <p className="mt-4 text-lg text-slate-600 max-w-xl mx-auto md:mx-0">Reconstruct a cohesive life narrative from your exported archives. Upload files, run the pipeline, and let the AI generate timelines, summaries, and visual stories.</p>

            <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-start gap-3 sm:gap-4">
              <Link href="/upload" aria-label="Start Reconstruction" className="inline-flex items-center justify-center px-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md font-medium shadow">Start Reconstruction →</Link>
              <div className="flex gap-2 justify-center sm:justify-start">
                <Link href="/analyze" className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-md text-slate-800">Analyze</Link>
                <Link href="/wrap" className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-md text-slate-800">View Wrap</Link>
              </div>
            </div>

            <ul className="mt-6 text-sm text-slate-500 space-y-2 max-w-sm mx-auto md:mx-0">
              <li>• Single-click uploads for exported archives (zip, json)</li>
              <li>• Automatic parsing, timeline and storyline generation</li>
              <li>• Exportable summaries and visual timelines</li>
            </ul>
          </div>

          <div className="mx-auto w-full max-w-sm">
            <div className="rounded-xl border border-slate-100 p-4 bg-white shadow-sm">
              <div className="h-40 flex items-center justify-center text-slate-400">
                <svg width="96" height="96" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-80">
                  <rect x="3" y="4" width="18" height="14" rx="2" stroke="#94A3B8" strokeWidth="1.5"/>
                  <path d="M8 12h8M8 15h5" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>

              <div className="mt-4 text-sm text-slate-700">
                <strong className="block font-semibold">Upload your export</strong>
                <p className="mt-2 text-slate-500">Supported formats: ZIP, JSON, HTML exports from social platforms.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
