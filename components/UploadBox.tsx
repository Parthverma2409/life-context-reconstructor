'use client';
import React from 'react';

const ALLOWED_EXTENSIONS = [
  'jpg', 'jpeg', 'png', 'webp', 'pdf', 'txt', 'md', 'json', 'mp3', 'wav', 'mp4', 'mov', 'zip'
];

export default function UploadBox({ onFilesSelected }: { onFilesSelected?: (list: FileList | null) => void }) {
  const [error, setError] = React.useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setError(null);
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const ext = file.name.split('.').pop()?.toLowerCase();
      if (!ext || !ALLOWED_EXTENSIONS.includes(ext)) {
        setError(`Unsupported file type: .${ext || 'unknown'}`);
        // Reset input value so user can retry same file if needed (though invalid) or just to clear
        e.target.value = '';
        if (onFilesSelected) onFilesSelected(null);
        return;
      }
    }

    // All valid
    if (onFilesSelected) onFilesSelected(files);
  };

  return (
    <div className="border-dashed border-2 border-slate-700 p-6 rounded-lg text-center">
      <p className="mb-2 text-slate-400">
        Drop supported files here <br />
        <span className="text-xs text-slate-500">(Images, Docs, Audio, Video, Zip)</span>
      </p>
      {error && <div className="text-red-400 text-sm mb-3">{error}</div>}
      <input
        type="file"
        accept={ALLOWED_EXTENSIONS.map(e => '.' + e).join(',')}
        multiple
        onChange={handleFileChange}
      />
    </div>
  );
}
