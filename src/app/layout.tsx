import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Living Word Studios — Making the story of Jesus impossible to overlook',
  description:
    'Living Word Studios: cinematic media, beautiful publishing, and clothing worn with quiet conviction. Bible Shorts, Kids Kingdom, illustrated books, and Studio Goods.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
