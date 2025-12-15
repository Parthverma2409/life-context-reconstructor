'use client';

import { useTheme } from './ThemeProvider';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded-md border
                 bg-gray-100 text-gray-900
                 dark:bg-gray-800 dark:text-gray-100
                 hover:bg-gray-200 dark:hover:bg-gray-700
                 transition"
    >
      {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
    </button>
  );
}
