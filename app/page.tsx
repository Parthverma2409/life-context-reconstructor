'use client';
import { useState } from 'react';
import UploadBox from '@/components/UploadBox';
import Loading from '@/components/Loading';

export default function UploadPage() {
  const [files, setFiles] = useState<File[] | null>(null);
  const [loading, setLoading] = useState(false);

  async function onFilesSelected(list: FileList | null) {
    if (!list) return setFiles(null);

    setLoading(true);

    // Simulate async processing (upload / analysis)
    setTimeout(() => {
      setFiles(Array.from(list));
      setLoading(false);
    }, 1000);
  }

  return (
    <div className="relative max-w-4xl mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">Upload Archives</h2>

      <UploadBox onFilesSelected={onFilesSelected} />

      <div className="mt-6">
        <p className="text-sm text-slate-400">
          Files selected: {files?.length ?? 0}
        </p>
        <p className="mt-4 text-slate-500">
          After uploading, call the Analyze API to run the pipeline.
        </p>
      </div>

      {/* Loading overlay – does not change layout */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white/60">
          <Loading />
        </div>
      )}
    </div>
  );
}
