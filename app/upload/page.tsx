'use client';
import { useState } from 'react';
import UploadBox from '@/components/UploadBox';

export default function UploadPage() {
  const [files, setFiles] = useState<File[] | null>(null);
  async function onFilesSelected(list: FileList | null) {
    if (!list) return setFiles(null);
    setFiles(Array.from(list));
  }
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">Upload Archives</h2>
      <UploadBox onFilesSelected={onFilesSelected} />
      <div className="mt-6">
        <p className="text-sm text-slate-400">Files selected: {files?.length ?? 0}</p>
        {files && files.length > 0 && (
          <ul className="mt-3 space-y-2">
            {files.map((f) => (
              <li key={f.name} className="text-sm text-slate-200">
                {f.name} <span className="text-xs text-slate-400">({Math.round(f.size / 1024)} KB)</span>
              </li>
            ))}
          </ul>
        )}
        <p className="mt-4 text-slate-500">After uploading, call the Analyze API to run the pipeline.</p>
      </div>
    </div>
  );
}
