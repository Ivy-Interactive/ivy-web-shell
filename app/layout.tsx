import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'Ivy | AI-Powered Development Platform',
  description:
    'Open-source agent orchestration. Ship 2× faster, with guardrails. Tendril turns your plans into working code.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
