'use client';

import { useCallback, useRef, useState } from 'react';

/**
 * Look Inside — Illustrated Books preview gallery (Kids Kingdom).
 *
 * A touch-friendly "flip through the books" carousel of three preview pages
 * from the forthcoming Illustrated Books line. Each spread pairs a REAL page
 * from the first Living Word Studios books (owner artwork in
 * public/assets/artwork) with original, from-scratch story text in the brand
 * voice (quietly hopeful, honest, beautiful) — no copyrighted Bible text.
 *
 * Interaction model:
 * - Swipeable: touchstart/touchmove/touchend with a 48px horizontal
 *   threshold (track uses `touch-pan-y`, so vertical page scrolling is
 *   never hijacked by the swipe).
 * - Prev/next arrow buttons (tab stops) + slide dots with aria-current.
 * - Keyboard: Left/Right arrows work while the region is focused, plus the
 *   native arrow buttons. Region is one tab stop.
 * - ARIA: role="region" + aria-roledescription="carousel", each slide is a
 *   group with aria-label and aria-hidden when off-screen, a visually-hidden
 *   aria-live status announces slide changes, and reduced-motion disables
 *   the slide transition (CSS).
 */

interface Spread {
  id: string;
  preview: string; // e.g. "Preview 1 of 3"
  book: string; // working series title
  title: string; // the parable retelling
  verse: string; // honest provenance note
  paragraphs: [string, string];
  image: string; // real page art from the first books
  alt: string;
}

const SLIDES: Spread[] = [
  {
    id: 'a-morning-for-sowing',
    preview: 'Preview 1 of 3',
    book: 'Illustrated Books — The First Library',
    title: 'A Morning for Sowing',
    verse: 'Retold from Matthew 13 · original text',
    paragraphs: [
      'Early, before the heat of the day, a farmer walked out with a sack of seed. He did not hoard it. He flung it wide — over the path where it would be walked on, into the thorns where it would be crowded, and onto the good, patient dirt where it could finally rest.',
      'The seed was the same. Only the ground differed. And in the good ground the smallest seed pushed down a root, then another, then broke through into the light — little by little, a harvest. Quietly, the story asks: what kind of ground are we?',
    ],
    image: '/assets/artwork/page-let-the-children-come.png',
    alt: '"Let the Children Come" — black-and-white page art from the first Living Word Studios books (preview)',
  },
  {
    id: 'the-one-that-was-lost',
    preview: 'Preview 2 of 3',
    book: 'Illustrated Books — The First Library',
    title: 'The One That Was Lost',
    verse: 'Retold from Luke 15 · original text',
    paragraphs: [
      'The shepherd counted ninety-nine and still felt the missing one like a stone in his shoe. So he left the safe flock on the hill and walked into the dark, calling a name only he knew. He did not find the sheep. The sheep found his voice.',
      'He carried it home on his shoulders, laughing, and the whole village turned out to celebrate the one that was brought home. In this house, nothing lost is ever counted as a loss.',
    ],
    image: '/assets/artwork/page-he-is-alive.png',
    alt: '"He Is Alive!" — black-and-white page art from the first Living Word Studios books (preview)',
  },
  {
    id: 'the-smallest-seed',
    preview: 'Preview 3 of 3',
    book: 'Illustrated Books — The First Library',
    title: 'The Smallest Seed',
    verse: 'Retold from Matthew 13 · original text',
    paragraphs: [
      'It was the smallest seed in the garden — the kind you could lose between two fingers. But it did what seeds do: it trusted the dirt, drank the rain, and reached for the sun. Seasons passed, and children climbed where once nothing stood.',
      'Birds nested in its branches, and travelers rested in its shade. Great shelter from a tiny beginning — which is how the storytellers say the Kingdom grows in us, too.',
    ],
    image: '/assets/artwork/page-dont-be-afraid.png',
    alt: '"Don\'t Be Afraid" — black-and-white page art from the first Living Word Studios books (preview)',
  },
];

/* ------------------------------------------------------------------ */
/* Carousel                                                            */
/* ------------------------------------------------------------------ */

const SWIPE_THRESHOLD_PX = 48;

export default function LookInsideCarousel() {
  const [index, setIndex] = useState(0);
  const [announce, setAnnounce] = useState('');
  const touchStartX = useRef<number | null>(null);

  const count = SLIDES.length;

  const goTo = useCallback(
    (next: number) => {
      const clamped = Math.max(0, Math.min(count - 1, next));
      setIndex(clamped);
      setAnnounce(`Slide ${clamped + 1} of ${count}: ${SLIDES[clamped]?.title ?? ''}`);
    },
    [count],
  );

  function handleTouchStart(e: React.TouchEvent<HTMLDivElement>) {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  }

  function handleTouchEnd(e: React.TouchEvent<HTMLDivElement>) {
    if (touchStartX.current === null) return;
    const endX = e.changedTouches[0]?.clientX ?? touchStartX.current;
    const deltaX = endX - touchStartX.current;
    touchStartX.current = null;
    if (deltaX <= -SWIPE_THRESHOLD_PX) goTo(index + 1);
    else if (deltaX >= SWIPE_THRESHOLD_PX) goTo(index - 1);
  }

  function handleRegionKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      goTo(index + 1);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goTo(index - 1);
    }
  }

  return (
    <section
      id="look-inside"
      className="kk-gallery-section scroll-mt-24 border-b border-[#4a3728]/10 bg-[#f7f0e1]"
    >
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
        {/* Section header */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl lg:max-w-[36rem]">
            <p className="text-xs font-bold tracking-[0.22em] text-[#8a5a1d] uppercase">
              Illustrated Books &middot; Look inside
            </p>
            <h2 className="kk-carousel-title font-display mt-3 text-3xl font-bold text-[#4a3728] sm:text-5xl">
              Flip through <span className="text-[#b07a1e] italic">the first library</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#5b4632] sm:text-lg">
              Three preview pages from the forthcoming Illustrated Books line —
              classic parables retold in our own words, with page art from the
              first Living Word Studios books.
            </p>
          </div>
          {/* Arrow controls (tab stops) */}
          <div className="flex shrink-0 items-center gap-3">
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              disabled={index === 0}
              aria-label="Previous spread"
              className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#d9a441]/60 bg-[#fffdf7] text-[#4a3728] transition-colors hover:border-[#b07a1e] hover:text-[#8a5a1d] disabled:cursor-not-allowed disabled:opacity-35"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 5.5 8.5 12l6.5 6.5" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              disabled={index === count - 1}
              aria-label="Next spread"
              className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#d9a441]/60 bg-[#fffdf7] text-[#4a3728] transition-colors hover:border-[#b07a1e] hover:text-[#8a5a1d] disabled:cursor-not-allowed disabled:opacity-35"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true" className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m9 5.5 6.5 6.5L9 18.5" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel region — one tab stop, swipe + keyboard + buttons. */}
        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Look Inside book previews"
          aria-live="polite"
          tabIndex={0}
          onKeyDown={handleRegionKeyDown}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="mt-12 overflow-hidden rounded-[2rem] outline-none focus-visible:ring-2 focus-visible:ring-[#d9a441] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f7f0e1]"
        >
          <div
            className="carousel-track flex touch-pan-y"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {SLIDES.map((slide, i) => (
              <div
                key={slide.id}
                role="group"
                aria-roledescription="slide"
                aria-label={`Slide ${i + 1} of ${count}: ${slide.title}`}
                aria-hidden={i !== index}
                className="w-full shrink-0 px-0.5 sm:px-1"
              >
                <BookSpread slide={slide} position={i + 1} />
              </div>
            ))}
          </div>
        </div>

        {/* Visually-hidden live status (aria-live) announcing slide changes. */}
        <p aria-live="polite" className="sr-only">
          {announce}
        </p>

        {/* Slide indicators (dots) + honest footer note */}
        <div className="mt-7 flex flex-col items-center gap-5">
          <div className="flex items-center gap-2.5" aria-label="Choose a preview spread">
            {SLIDES.map((slide, i) => (
              <button
                key={slide.id}
                type="button"
                aria-label={`Go to spread ${i + 1}: ${slide.title}`}
                aria-current={i === index ? 'true' : undefined}
                onClick={() => goTo(i)}
                className={`h-3 rounded-full transition-all duration-200 ${
                  i === index
                    ? 'w-8 bg-[#d9a441]'
                    : 'w-3 bg-[#e8d5a6] hover:bg-[#d9a441]/60'
                }`}
              />
            ))}
          </div>
          <p className="text-xs leading-relaxed text-[#5b4632]/65">
            Previews of the forthcoming Illustrated Books line — original retellings
            of the parables, crafted in-house at Living Word Studios, with real
            page art from the first books.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* A single book-spread template: left page = real artwork, right page */
/* = story text styled like a real book page (serif, drop cap, paper). */
/* ------------------------------------------------------------------ */

function BookSpread({ slide, position }: { slide: Spread; position: number }) {
  const [first, second] = slide.paragraphs;

  return (
    <div className="kk-carousel-spread rounded-[2rem] border border-[#e8d5a6] bg-[#fffdf7] p-1.5 shadow-[0_2px_6px_rgba(176,122,30,0.10),0_16px_40px_-12px_rgba(176,122,30,0.28),0_32px_80px_-24px_rgba(217,164,65,0.18)] sm:p-2.5">
      {/* Top strip — clear "preview of the forthcoming line" marking */}
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 px-4 pt-3.5 pb-2 sm:px-5">
        <p className="text-[10px] font-bold tracking-[0.22em] text-[#8a5a1d] uppercase">
          Look inside &middot; {slide.preview}
        </p>
        <p className="text-[10px] font-semibold tracking-[0.14em] text-[#5b4632]/70 uppercase">
          {slide.book}
        </p>
      </div>

      <div className="grid gap-1.5 sm:grid-cols-2 md:gap-2.5">
        {/* Left page — real artwork from the first books. */}
        <div className="kk-carousel-page flex min-h-[260px] items-center justify-center rounded-[1.4rem] border border-[#e6d4a8] bg-[linear-gradient(180deg,#fffdf7_0%,#f3e7c4_100%)] p-4 sm:min-h-[320px] sm:p-6 md:rounded-[1.75rem]">
          <img
            src={slide.image}
            alt={slide.alt}
            loading="lazy"
            width={1024}
            height={1024}
            className="kk-carousel-art h-auto max-h-[420px] w-auto max-w-full rounded-xl border border-[#e6d4a8] object-contain shadow-[0_1px_0_rgba(176,122,30,0.08),0_8px_20px_-8px_rgba(176,122,30,0.25)]"
          />
        </div>

        {/* Right page — the story, book-styled. */}
        <div className="kk-carousel-page flex flex-col justify-center rounded-[1.4rem] border border-[#e6d4a8] bg-[linear-gradient(180deg,#fffdf7_0%,#fdf9ee_100%)] px-6 py-7 sm:px-8 sm:py-9 md:rounded-[1.75rem]">
          <p className="text-[11px] font-bold tracking-[0.24em] text-[#8a5a1d] uppercase">
            {slide.title}
          </p>
          <div className="mt-4 space-y-4">
            <p className="kk-carousel-copy font-display text-base leading-relaxed text-[#4a3728] sm:text-lg">
              <span
                aria-hidden="true"
                className="float-left mt-1 mr-2 font-display text-5xl leading-[0.8] font-bold text-[#8a5a1d] sm:text-6xl"
              >
                {first.charAt(0)}
              </span>
              {first.slice(1)}
            </p>
            <p className="kk-carousel-copy font-display text-base leading-relaxed text-[#4a3728] sm:text-lg">
              {second}
            </p>
          </div>
          <p className="mt-5 border-t border-[#e8d5a6] pt-3 text-xs text-[#5b4632]/60 italic">
            {slide.verse} &middot; spread {position} of 3
          </p>
        </div>
      </div>
    </div>
  );
}