'use client';

import { useCallback, useRef, useState } from 'react';

/**
 * Look Inside — Illustrated Books preview gallery (Kids Kingdom).
 *
 * A touch-friendly "flip through the books" carousel of three ORIGINAL
 * parable-style page-spread templates in the brand voice (quietly hopeful,
 * honest, beautiful). Text is written from scratch — no copyrighted Bible
 * text — each page spread is marked as a preview of the forthcoming
 * Illustrated Books line.
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
 * - Illustrations are hand-built inline SVGs/CSS shapes — no external image
 *   files, no AI images, no icon libraries.
 */

type Illustration = 'sower' | 'shepherd' | 'mustard';

interface Spread {
  id: string;
  preview: string; // e.g. "Preview 1 of 3"
  book: string; // working series title
  title: string; // the parable retelling
  verse: string; // honest provenance note
  paragraphs: [string, string];
  illustration: Illustration;
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
    illustration: 'sower',
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
    illustration: 'shepherd',
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
    illustration: 'mustard',
  },
];

/* ------------------------------------------------------------------ */
/* Hand-built page illustrations — pure inline SVG, brand palette only. */
/* ------------------------------------------------------------------ */

function SowerIllustration() {
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label="Warm illustrated field with a sun, hills, scattered seeds and a young sprout" className="h-auto w-full">
      {/* sky */}
      <rect width="400" height="300" fill="#fdf6e3" />
      <rect y="0" width="400" height="150" fill="#faf0d7" />
      {/* sun */}
      <circle cx="330" cy="58" r="46" fill="#ecc87e" opacity="0.45" />
      <circle cx="330" cy="58" r="30" fill="#ecc87e" />
      {/* hills */}
      <path d="M0 210 Q 90 150 190 205 T 400 210 L400 300 L0 300 Z" fill="#e8d5a6" />
      <path d="M0 245 Q 120 195 260 240 T 400 250 L400 300 L0 300 Z" fill="#dfc488" />
      {/* path */}
      <path d="M40 300 Q 150 230 235 210 L255 216 Q 160 245 70 300 Z" fill="#d0ac68" />
      {/* thorn branch */}
      <path d="M300 205 l12 -14 l10 8 l14 -16 l8 10" stroke="#8a5a1d" strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* scattered seeds */}
      {[
        [120, 235], [150, 250], [200, 260], [262, 255], [300, 265], [250, 275], [180, 240], [230, 245],
      ].map(([x, y], i) => (
        <ellipse key={i} cx={x} cy={y} rx="2.6" ry="1.6" fill="#8a5a1d" />
      ))}
      {/* farmer */}
      <circle cx="66" cy="172" r="11" fill="#4a3728" />
      <path d="M44 218 q0 -26 22 -26 q22 0 22 26 l-4 52 q-4 14 -18 14 q-14 0 -18 -14 Z" fill="#5b4632" />
      <path d="M62 196 q-16 -10 -20 -26" stroke="#4a3728" strokeWidth="5" fill="none" strokeLinecap="round" />
      {/* sprout in the good ground */}
      <path d="M330 282 q2 -14 10 -18" stroke="#8a5a1d" strokeWidth="3.5" fill="none" strokeLinecap="round" />
      <ellipse cx="342" cy="260" rx="10" ry="6" fill="#b07a1e" transform="rotate(-24 342 260)" />
      <ellipse cx="326" cy="266" rx="9" ry="5.5" fill="#c98f35" transform="rotate(18 326 266)" />
    </svg>
  );
}

function ShepherdIllustration() {
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label="Illustrated evening hills, a shepherd carrying a small sheep on his shoulders, stars above" className="h-auto w-full">
      {/* twilight sky */}
      <rect width="400" height="300" fill="#fdf3dc" />
      <circle cx="330" cy="70" r="60" fill="#ecc87e" opacity="0.3" />
      {/* stars */}
      {[
        [52, 42], [120, 26], [196, 48], [268, 30], [90, 78],
      ].map(([x, y], i) => (
        <path key={i} d={`M${x} ${y - 5} L${x + 1.6} ${y - 1.6} L${x + 5} ${y} L${x + 1.6} ${y + 1.6} L${x} ${y + 5} L${x - 1.6} ${y + 1.6} L${x - 5} ${y} L${x - 1.6} ${y - 1.6} Z`} fill="#d9a441" />
      ))}
      {/* far hills */}
      <path d="M0 220 Q 120 150 260 205 T 400 195 L400 300 L0 300 Z" fill="#e3c98f" />
      <path d="M0 255 Q 150 200 320 250 T 400 265 L400 300 L0 300 Z" fill="#d9b877" />
      {/* flock dots waiting on the hill */}
      {[
        [92, 262], [110, 268], [128, 262], [146, 270], [162, 264],
      ].map(([x, y], i) => (
        <ellipse key={i} cx={x} cy={y} rx="6" ry="4" fill="#fffdf7" />
      ))}
      {/* shepherd carrying the sheep */}
      <circle cx="250" cy="176" r="12" fill="#3c342b" />
      <path d="M228 228 q0 -30 22 -30 q22 0 22 30 l-3 58 q-3 14 -19 14 q-16 0 -19 -14 Z" fill="#4a3728" />
      {/* staff */}
      <path d="M247 190 q-6 34 2 74" stroke="#8a5a1d" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M249 262 l8 -14" stroke="#8a5a1d" strokeWidth="4" strokeLinecap="round" />
      {/* the sheep on his shoulders */}
      <ellipse cx="266" cy="146" rx="26" ry="16" fill="#fffdf7" />
      <circle cx="292" cy="142" r="8" fill="#fffdf7" />
      <ellipse cx="294" cy="134" rx="3.4" ry="2" fill="#e8d5a6" />
      <circle cx="295" cy="142" r="1.6" fill="#3c342b" />
      <path d="M248 146 v10 M260 146 v10 M272 146 v10 M284 146 v10" stroke="#fffdf7" strokeWidth="3" strokeLinecap="round" />
      <path d="M260 152 l4 8 M274 152 l-4 8 M282 154 l3 7" stroke="#fffdf7" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function MustardIllustration() {
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label="Illustrated garden with a tiny seed on a mound and a great sheltering tree with birds" className="h-auto w-full">
      {/* sky */}
      <rect width="400" height="300" fill="#fdf6e3" />
      <circle cx="86" cy="56" r="44" fill="#ecc87e" opacity="0.4" />
      <circle cx="86" cy="56" r="28" fill="#d9a441" opacity="0.85" />
      {/* ground */}
      <path d="M0 240 Q 150 200 400 235 L400 300 L0 300 Z" fill="#e8d5a6" />
      <path d="M0 268 Q 150 236 400 266 L400 300 L0 300 Z" fill="#dfc488" />
      {/* tree trunk */}
      <path d="M215 300 q-4 -84 6 -138 l34 -14 q-16 70 -8 152 Z" fill="#4a3728" />
      <path d="M204 232 q30 -8 48 10" stroke="#8a5a1d" strokeWidth="5" fill="none" strokeLinecap="round" />
      {/* canopy layers */}
      <circle cx="210" cy="118" r="58" fill="#e3c98f" />
      <circle cx="262" cy="140" r="46" fill="#d9b877" />
      <circle cx="174" cy="150" r="40" fill="#dcc489" />
      <circle cx="226" cy="92" r="34" fill="#ecc87e" opacity="0.85" />
      {/* leaf dabs */}
      {[
        [180, 110], [240, 120], [196, 152], [258, 162], [222, 70],
      ].map(([x, y], i) => (
        <ellipse key={i} cx={x} cy={y} rx="12" ry="7" fill="#c99b3f" opacity="0.7" transform={`rotate(-18 ${x} ${y})`} />
      ))}
      {/* tiny seed on its mound */}
      <ellipse cx="318" cy="246" rx="16" ry="7" fill="#fffdf7" />
      <ellipse cx="318" cy="240" rx="5" ry="3" fill="#8a5a1d" />
      <path d="M330 232 q10 -8 12 -18 M336 228 q8 -14 6 -24" stroke="#ecc87e" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* two birds in the branches */}
      <path d="M258 44 q6 -8 12 0 q-6 2 -12 0 M282 58 q6 -8 12 0 q-6 2 -12 0" stroke="#3c342b" strokeWidth="3" fill="none" strokeLinecap="round" />
      <circle cx="270" cy="42" r="1.8" fill="#3c342b" />
    </svg>
  );
}

function SpreadIllustration({ kind }: { kind: Illustration }) {
  if (kind === 'sower') return <SowerIllustration />;
  if (kind === 'shepherd') return <ShepherdIllustration />;
  return <MustardIllustration />;
}

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
              Three preview templates from the forthcoming Illustrated Books line —
              classic parables retold in our own words, drawn for little eyes and
              big questions.
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
            of the parables, crafted in-house at Living Word Studios.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* A single book-spread template: left page = illustration, right page */
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
        {/* Left page — illustration (hand-built SVG). */}
        <div className="kk-carousel-page flex min-h-[260px] items-center justify-center rounded-[1.4rem] border border-[#e6d4a8] bg-gradient-to-br from-[#fdf6e3] via-[#fffdf7] to-[#f3e7c4] p-4 sm:min-h-[320px] sm:p-6 md:rounded-[1.75rem]">
          <SpreadIllustration kind={slide.illustration} />
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