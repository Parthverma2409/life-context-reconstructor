'use client';

export default function Loading() {
  return (
    <div className="flex items-center justify-center py-12">
      <div
        className="h-8 w-8 animate-spin rounded-full border-2 border-slate-300 border-t-indigo-600"
        aria-label="Loading"
      />
    </div>
  );
}
