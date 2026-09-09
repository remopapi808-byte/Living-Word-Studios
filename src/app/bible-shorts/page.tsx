import type { Metadata } from 'next';
import BibleShortsTeaser from '@/components/bible-shorts-teaser';
import CommunityClose from '@/components/community-close';
import SiteFooter from '@/components/site-footer';
import SiteHeader from '@/components/site-header';

export const metadata: Metadata = {
  title: 'Bible Shorts — Coming soon | Living Word Studios',
  description:
    'Bible Shorts from Living Word Studios: short cinematic films that make the story of Jesus impossible to overlook. The first chapter is in pre-production — enter your email to be notified the moment it drops.',
};

export default function BibleShortsPage() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="bg-[#f7f0e1]">
        <section className="hero-glow relative overflow-hidden">
          <div className="texture-lines pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
            <p className="text-xs font-bold tracking-[0.22em] text-[#8a5a1d] uppercase">
              Cinematic series · Coming soon
            </p>
            <h1 className="font-display mt-3 text-4xl leading-tight font-bold text-[#2e2a26] sm:text-5xl">
              Bible Shorts
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#3c342b]/75 sm:text-lg">
              Short cinematic films that make the story of Jesus impossible to overlook —
              crafted for the screens we watch every day.
            </p>
            <div className="mt-10">
              <BibleShortsTeaser />
            </div>
          </div>
        </section>
        <CommunityClose />
      </main>
      <SiteFooter />
    </>
  );
}