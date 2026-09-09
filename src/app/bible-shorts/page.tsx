import type { Metadata } from 'next';
import BibleShortsGallery from '@/components/bible-shorts-gallery';
import SiteFooter from '@/components/site-footer';
import SiteHeader from '@/components/site-header';

export const metadata: Metadata = {
  title: 'Bible Shorts — Watch the story of Jesus | Living Word Studios',
  description:
    'Bible Shorts from Living Word Studios: short cinematic films that make the story of Jesus impossible to overlook. Watch the featured film and browse the series on your device — made for phones, tablets, and living rooms.',
};

export default function BibleShortsPage() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="bg-[#f7f0e1]">
        <BibleShortsGallery />
      </main>
      <SiteFooter />
    </>
  );
}