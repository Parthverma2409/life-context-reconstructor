'use client';

import React, { useState } from 'react';

type UploadBoxProps = {
  onFilesSelected?: (list: FileList | null) => void;
};

export default function UploadBox({ onFilesSelected }: UploadBoxProps) {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    if (onFilesSelected) {
      onFilesSelected(e.dataTransfer.files);
    }
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`border-dashed border-2 p-6 rounded-lg text-center transition-colors
        ${
          isDragging
            ? 'border-indigo-500 bg-indigo-50'
            : 'border-slate-700'
        }`}
    >
      <p className="mb-2 text-slate-400">
        Drop .txt or .json files here
      </p>

      <input
        type="file"
        accept=".txt,.json,.zip"
        multiple
        onChange={(e) =>
          onFilesSelected && onFilesSelected(e.target.files)
        }
        className="text-sm"
      />
    </div>
  );
}
