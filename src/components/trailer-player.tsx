'use client';
import { useState } from 'react';

/**
 * Bible Shorts "concept trailer" placeholder player (LWS/001 — In the
 * Beginning). Honest placeholder by design: NO <video> element, no fake
 * playback, no countdown, no spinner. Clicking play swaps the warm
 * Genesis-1 dusk poster for the in-production card. The only real control
 * is the play button; the bottom chrome bar is decorative (aria-hidden).
 */
const PLAY_PATH = 'M8 5.14v13.72c0 .8.87 1.3 1.56.88l10.9-6.86a1.04 1.04 0 0 0 0-1.76L9.56 4.26A1.04 1.04 0 0 0 8 5.14Z';

const FRAME_CLASS =
  'bs-trailer-frame relative aspect-video w-full overflow-hidden rounded-[1.75rem] border border-[#d9a441]/40 shadow-[0_2px_6px_rgba(176,122,30,0.10),0_16px_40px_-12px_rgba(176,122,30,0.28),0_32px_80px_-24px_rgba(217,164,65,0.18)]';

export default function TrailerPlayer() {
  const [mode, setMode] = useState<'poster' | 'inProduction'>('poster');

  return (
    <figure
      role="group"
      aria-label="LWS/001 concept trailer — in production"
      className={FRAME_CLASS}
    >
      {mode === 'poster' ? (
        <>
          {/* Warm Genesis-1 dusk layers (cream → gold-soft → autumn, NEVER near-black) */}
          <div aria-hidden="true" className="trailer-poster absolute inset-0" />
          <div aria-hidden="true" className="trailer-rays absolute inset-0" />
          <div aria-hidden="true" className="texture-lines pointer-events-none absolute inset-0 opacity-60" />
          <div aria-hidden="true" className="card-sheen pointer-events-none absolute inset-0" />
          <div className="bs-trailer-inner absolute inset-0 z-10 flex flex-col p-6 sm:p-10">
            <div className="flex flex-col">
              <p className="self-start rounded-full border border-[#d9a441]/50 bg-[#fffdf7]/85 px-4 py-1.5 text-[11px] font-bold tracking-[0.18em] text-[#8a5a1d] uppercase">
                LWS/001 · Series premiere
              </p>
              <h3 className="bs-trailer-title font-display mt-6 text-center text-4xl font-bold text-[#2e2a26] italic sm:text-5xl">
                In the Beginning
              </h3>
            </div>
            <div className="flex flex-1 items-center justify-center">
              <button
                type="button"
                onClick={() => setMode('inProduction')}
                aria-label="Play LWS/001 concept trailer — in production"
                className="bs-trailer-play inline-flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#fffdf7]/90 bg-[#d9a441] text-[#3b2a12] shadow-[0_10px_24px_-8px_rgba(176,122,30,0.7)] transition-transform hover:scale-105 sm:h-20 sm:w-20"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="ml-0.5 h-6 w-6">
                  <path d={PLAY_PATH} />
                </svg>
              </button>
            </div>
            {/* Decorative player chrome — the only real control is the play button above */}
            <div
              aria-hidden="true"
              className="bs-trailer-chrome flex items-center gap-3 border-t border-[#d9a441]/30 bg-[#fffdf7]/85 px-4 py-2.5 backdrop-blur-sm"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5 shrink-0 text-[#d9a441]">
                <path d={PLAY_PATH} />
              </svg>
              <span className="min-w-0 flex-1 truncate text-sm font-semibold text-[#3c342b]">
                LWS/001 · In the Beginning
              </span>
              <span className="h-1 w-24 shrink-0 rounded-full bg-[#3c342b]/15">
                <span className="block h-full w-1/3 rounded-full bg-[#d9a441]" />
              </span>
              <span className="shrink-0 text-xs tabular-nums text-[#3c342b]/60">0:30</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="h-4 w-4 shrink-0 text-[#3c342b]/50"
              >
                <path d="M7 4v16M4 7h13a3 3 0 0 1 0 6H7" />
              </svg>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 shrink-0 text-[#3c342b]/50"
              >
                <path d="M9 4H4v5M15 4h5v5M9 20H4v-5M15 20h5v-5" />
              </svg>
              {/* Microcopy chip — floats above the chrome bar's right edge. Inside the
                  chrome wrapper so the landscape compaction hides it with the bar. */}
              <p className="absolute right-4 bottom-12 rounded-full bg-[#fffdf7]/90 px-3.5 py-1.5 text-[11px] font-bold tracking-[0.14em] text-[#8a5a1d] uppercase">
                Concept trailer · in production
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-5 bg-[#fdf6e3] px-6 text-center">
          <div aria-hidden="true" className="texture-lines pointer-events-none absolute inset-0" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-1/2 h-[26rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(217,164,65,0.16),transparent_65%)]"
          />
          <div className="relative flex flex-col items-center gap-5">
            <p className="rounded-full border border-[#d9a441]/50 bg-[#fffdf7] px-4 py-1.5 text-[11px] font-bold tracking-[0.18em] text-[#8a5a1d] uppercase">
              LWS/001 · In production
            </p>
            <h3 aria-live="polite" className="font-display max-w-md text-xl font-bold text-[#2e2a26] sm:text-2xl">
              Trailer in production — Episode 001 lands here first.
            </h3>
            <p className="max-w-sm text-sm text-[#3c342b]/70 sm:text-base">
              We&apos;re cutting a 30-second concept reel — it drops in this exact frame the moment it&apos;s
              ready. Want first look? Join the waitlist below.
            </p>
            <a
              href="#trailer-waitlist"
              className="rounded-full bg-[#d9a441] px-6 py-3 text-sm font-semibold text-[#3b2a12] transition-colors hover:bg-[#ecc87e]"
            >
              Notify me when it drops
            </a>
            <button
              type="button"
              onClick={() => setMode('poster')}
              className="mt-1 text-sm font-semibold text-[#8a5a1d] hover:text-[#b07a1e]"
            >
              ← Back to preview
            </button>
          </div>
        </div>
      )}
    </figure>
  );
}