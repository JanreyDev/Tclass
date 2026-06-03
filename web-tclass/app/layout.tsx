import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'web-tclass',
  description: 'Next.js frontend for Tclass',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
