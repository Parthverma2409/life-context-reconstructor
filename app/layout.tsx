import './globals.css';
import ThemeToggle from '@/components/ThemeToggle';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900 dark:bg-black dark:text-slate-100 transition-colors">

        <header className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-zinc-800">
          <h1 className="font-semibold">My App</h1>
          <ThemeToggle />
        </header>

        {children}
      </body>
    </html>
  );
}
