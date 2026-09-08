import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Living Word Studios',
  description: 'Living Word Studios — site coming online.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
