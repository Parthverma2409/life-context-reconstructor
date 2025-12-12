import './globals.css';

export const metadata = { title: 'AI Life Wrap', description: 'PatchFest hard project' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-b from-slate-900 to-black">
        {children}
      </body>
    </html>
  );
}
