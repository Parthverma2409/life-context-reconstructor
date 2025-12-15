'use client';
import React, { useRef, useState } from 'react';

export default function UploadBox({ onFilesSelected }: { onFilesSelected?: (list: FileList | null) => void }) {
  const [isDragActive, setIsDragActive] = useState(false);
  const dragCounter = useRef(0);

  function handleFiles(list: FileList | null) {
    if (onFilesSelected) onFilesSelected(list);
  }

  function onDragEnter(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    dragCounter.current += 1;
    setIsDragActive(true);
  }

  function onDragOver(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    // Required to allow drop
    e.dataTransfer.dropEffect = 'copy';
    setIsDragActive(true);
  }

  function onDragLeave(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    dragCounter.current -= 1;
    if (dragCounter.current <= 0) {
      setIsDragActive(false);
      dragCounter.current = 0;
    }
  }

  function onDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);
    dragCounter.current = 0;
    const dt = e.dataTransfer;
    if (dt && dt.files && dt.files.length > 0) {
      handleFiles(dt.files);
      dt.clearData();
    }
  }

  return (
    <div
      onDragEnter={onDragEnter}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      className={`relative border-dashed border-2 p-6 rounded-lg text-center transition-colors duration-150 ${
        isDragActive ? 'border-sky-400 bg-slate-800' : 'border-slate-700'
      }`}
      role="region"
      aria-label="File drop zone"
    >
      <p className="mb-2 text-slate-400">Drop .txt or .json files here</p>
      <input
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        type="file"
        accept=".txt,.json,.zip"
        multiple
        onChange={(e) => handleFiles(e.target.files)}
      />
    </div>
  );
}
