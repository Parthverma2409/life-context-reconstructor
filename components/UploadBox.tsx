'use client';
import React from 'react';

export default function UploadBox({ onFilesSelected }: { onFilesSelected?: (list: FileList | null) => void }) {
  return (
    <div className="border-dashed border-2 border-slate-700 p-6 rounded-lg text-center">
      <p className="mb-2 text-slate-400">Drop .txt or .json files here</p>
      <input type="file" accept=".txt,.json,.zip" multiple onChange={(e)=> onFilesSelected && onFilesSelected(e.target.files)} />
    </div>
  );
}
