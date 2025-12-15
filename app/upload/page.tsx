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
    <div className="max-w-4xl mx-auto p-8
                    bg-white text-slate-900
                    dark:bg-slate-900 dark:text-slate-100
                    transition-colors">
      <h2 className="text-2xl font-bold mb-4">
        Upload Archives
      </h2>

      <UploadBox onFilesSelected={onFilesSelected} />

      <div className="mt-6">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Files selected: {files?.length ?? 0}
        </p>

        <p className="mt-4 text-slate-600 dark:text-slate-400">
          After uploading, call the Analyze API to run the pipeline.
        </p>
      </div>
    </div>
  );
}
