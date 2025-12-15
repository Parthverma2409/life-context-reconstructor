'use client';

import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      document.documentElement.classList.add('dark');
      setDark(true);
    }
  }, []);

  if (!mounted) return null;

  function toggleTheme() {
    if (dark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setDark(true);
    }
  }

  return (
    <button
      onClick={toggleTheme}
      className="rounded-md border border-gray-300 dark:border-zinc-700 px-3 py-1 text-sm
                 hover:bg-gray-100 dark:hover:bg-zinc-800 transition"
      aria-label="Toggle theme"
    >
      {dark ? 'Light mode' : 'Dark mode'}
    </button>
  );
}
