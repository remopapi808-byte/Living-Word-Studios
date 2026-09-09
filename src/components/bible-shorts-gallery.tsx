'use client';

import { useRef, useState } from 'react';

/**
 * Bible Shorts — cinematic video-player gallery (client state).
 *
 * Every episode is wired to a real <video controls> element so the player
 * genuinely plays on-device. Until the studio ships finished film files,
 * each episode borrows a public-domain / Creative Commons sample trailer
 * from Google's public sample-video bucket (Big Buck Bunny, Elephants
 * Dream, etc. — Blender Foundation open movies, CC-BY).
 *
 * TO OWNER / FUTURE ENGINEERS: to ship a real episode, replace `src` below
 * with the production MP4 (or HLS stream) URL for that episode. Nothing
 * else needs to change — the player, gallery swap, and titles all work off
 * this array. Durations shown are placeholders for the planned cuts.
 */

type Episode = {
  id: string;
  ref: string; // production code, e.g. LWS/001
  title: string;
  duration: string; // placeholder runtime of the planned cut
  blurb: string;
  status: 'Now streaming' | 'In production';
  src: string; // placeholder demo trailer URL — swap for the real film
  tile: string; // Tailwind gradient classes for the CSS-only poster tile
  accent: string; // small accent swatch gradient for the tile
};

const SAMPLE_BUCKET = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample';

const EPISODES: Episode[] = [
  {
    id: 'lws-001-in-the-beginning',
    ref: 'LWS/001',
    title: 'In the Beginning',
    duration: '09:56',
    blurb:
      'Our first Bible Short opens the story where it starts — light, creation, and a God who speaks hope into the dark. Now streaming as a demo film.',
    status: 'Now streaming',
    src: `${SAMPLE_BUCKET}/BigBuckBunny.mp4`,
    tile: 'from-[#fffdf7] via-[#f7f0e1] to-[#f3e7c4]',
    accent: 'from-[#ecc87e] to-[#b4552d]',
  },
  {
    id: 'lws-002-the-call',
    ref: 'LWS/002',
    title: 'The Call',
    duration: '07:12',
    blurb:
      'Fishermen, nets, and a simple invitation: “Follow me.” A short about leaving the ordinary behind.',
    status: 'In production',
    src: `${SAMPLE_BUCKET}/ElephantsDream.mp4`,
    tile: 'from-[#fffdf7] via-[#f7f0e1] to-[#efe0be]',
    accent: 'from-[#ecc87e] to-[#8a5a1d]',
  },
  {
    id: 'lws-003-water-into-wine',
    ref: 'LWS/003',
    title: 'Water into Wine',
    duration: '06:40',
    blurb:
      'The first sign at a wedding in Cana — joy arriving quietly, when the wine runs out.',
    status: 'In production',
    src: `${SAMPLE_BUCKET}/ForBiggerBlazes.mp4`,
    tile: 'from-[#fdf6e3] via-[#f7f0e1] to-[#ecd9b9]',
    accent: 'from-[#b4552d] to-[#ecc87e]',
  },
  {
    id: 'lws-004-the-sermon',
    ref: 'LWS/004',
    title: 'The Sermon on the Mount',
    duration: '08:05',
    blurb:
      'Blessed are the poor in spirit… A hillside, a crowd, and words that still turn the world upside down.',
    status: 'In production',
    src: `${SAMPLE_BUCKET}/ForBiggerEscapes.mp4`,
    tile: 'from-[#fdfbf3] via-[#f7f0e1] to-[#efe0be]',
    accent: 'from-[#ecc87e] to-[#d9a441]',
  },
  {
    id: 'lws-005-walking-on-waves',
    ref: 'LWS/005',
    title: 'Walking on Waves',
    duration: '07:48',
    blurb:
      'A storm, a boat, and a hand reaching down. Faith that dares to step out of the boat.',
    status: 'In production',
    src: `${SAMPLE_BUCKET}/ForBiggerFun.mp4`,
    tile: 'from-[#f7f4e9] via-[#efece0] to-[#e0e2d6]',
    accent: 'from-[#7fb3c8] to-[#d9a441]',
  },
  {
    id: 'lws-006-the-cross-and-the-crown',
    ref: 'LWS/006',
    title: 'The Cross & the Crown',
    duration: '10:22',
    blurb:
      'The heaviest Friday and the brightest Sunday — one story, one promise, told without flinching.',
    status: 'In production',
    src: `${SAMPLE_BUCKET}/ForBiggerJoyrides.mp4`,
    tile: 'from-[#fdf6ea] via-[#f7efe4] to-[#ecd8c8]',
    accent: 'from-[#b4552d] to-[#ecc87e]',
  },
  {
    id: 'lws-007-the-upper-room',
    ref: 'LWS/007',
    title: 'The Upper Room',
    duration: '09:14',
    blurb:
      'Bread, wine, and a new commandment — love one another as I have loved you. The quiet before the storm.',
    status: 'In production',
    src: `${SAMPLE_BUCKET}/ForBiggerMeltdowns.mp4`,
    tile: 'from-[#fffdf7] via-[#f7f0e1] to-[#f0e2c0]',
    accent: 'from-[#ecc87e] to-[#b4552d]',
  },
];

const PLAY_ICON = (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
    <path d="M8 5.14v13.72c0 .83.9 1.34 1.62.92l11-6.86a1.08 1.08 0 0 0 0-1.84l-11-6.86C8.9 3.8 8 4.31 8 5.14Z" />
  </svg>
);

export default function BibleShortsGallery() {
  const firstEpisode = EPISODES[0] as Episode;
  const [activeId, setActiveId] = useState(firstEpisode.id);
  const videoRef = useRef<HTMLVideoElement>(null);
  const active = EPISODES.find((e) => e.id === activeId) ?? firstEpisode;
  const playActive = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) void video.play();
    else video.pause();
  };

  return (
    <>
      {/* Warm parchment hero */}
      <section className="hero-glow relative overflow-hidden border-b border-[#4a3728]/10">
        <div className="texture-lines pointer-events-none absolute inset-0" aria-hidden="true" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 55% 90% at 85% 40%, rgba(180,85,45,0.1), transparent 65%), radial-gradient(ellipse 40% 70% at 12% 20%, rgba(217,164,65,0.14), transparent 65%)',
          }}
        />
        <div className="bs-hero-inner relative mx-auto max-w-6xl px-4 pt-28 pb-14 sm:px-6 sm:pt-36 sm:pb-20">
          <p className="inline-flex items-center gap-2 rounded-full border border-[#d9a441]/50 bg-[#fffdf7]/80 px-4 py-1.5 text-xs font-semibold tracking-[0.22em] text-[#8a5a1d] uppercase">
            <span aria-hidden="true" className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[#d9a441]" />
            Bible Shorts · Digital films
          </p>
          <h1 className="bs-hero-title font-display mt-5 max-w-3xl text-4xl leading-[1.06] font-bold text-[#2e2a26] sm:text-6xl">
            The story of Jesus, made{' '}
            <span className="text-[#b07a1e] italic">impossible to overlook</span>.
          </h1>
          <p className="bs-hero-copy mt-5 max-w-2xl text-base leading-relaxed text-[#3c342b]/75 sm:text-lg">
            Short cinematic films, crafted for the screens we watch every day — phones, tablets,
            and living rooms. Press play anywhere, together.
          </p>
          <div className="bs-hero-ctas mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#featured-player"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d9a441] px-7 py-3.5 text-base font-semibold text-[#3b2a12] transition-colors hover:bg-[#ecc87e]"
            >
              <span aria-hidden="true">{PLAY_ICON}</span> Watch the featured film
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#3c342b]/30 px-7 py-3.5 text-base font-semibold text-[#3c342b] transition-colors hover:border-[#b07a1e] hover:text-[#8a5a1d]"
            >
              Browse the gallery
            </a>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="h-px bg-gradient-to-r from-transparent via-[#d9a441]/60 to-transparent"
        />
      </section>

      {/* Featured player — “now playing” stage */}
      <section id="featured-player" className="bs-section relative scroll-mt-24 bg-[#f7f0e1]">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.28em] text-[#8a5a1d] uppercase">
                <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rounded-full bg-[#b4552d]" />
                Now playing
              </p>
              <h2 className="font-display mt-2 text-2xl font-bold text-[#2e2a26] sm:text-4xl">
                {active.title}
              </h2>
              <p className="mt-1 font-mono text-sm tracking-[0.25em] text-[#3c342b]/55">
                {active.ref} · {active.duration}
              </p>
            </div>
            <button
              type="button"
              onClick={playActive}
              className="inline-flex items-center gap-2 rounded-full bg-[#d9a441] px-5 py-2.5 text-sm font-semibold text-[#3b2a12] transition-colors hover:bg-[#ecc87e]"
            >
              <span aria-hidden="true">{PLAY_ICON}</span> Watch now
            </button>
          </div>

          {/* Warm parchment stage around the player (letterbox stays dark
              charcoal so video controls stay readable). */}
          <div className="mt-6 relative overflow-hidden rounded-2xl border border-[#d9a441]/40 bg-[#fffdf7] shadow-[0_24px_80px_-36px_rgba(122,86,36,0.55)]">
            <div className="texture-lines pointer-events-none absolute inset-0 z-10 opacity-60" aria-hidden="true" />
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-10 rounded-2xl ring-1 ring-[#e8d5a6] ring-inset" />
            <video
              key={active.id}
              ref={videoRef}
              src={active.src}
              controls
              playsInline
              preload="metadata"
              className="bs-player-video relative z-[5] block aspect-video w-full bg-[#241f18] object-contain"
            />
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-t border-[#4a3728]/10 bg-[#fdf6e3] px-4 py-3 sm:px-6">
              <p className="text-sm text-[#3c342b]/85">
                <span className="font-semibold text-[#8a5a1d]">{active.ref}</span> · {active.title}
              </p>
              <p className="text-xs text-[#3c342b]/55">
                {active.status} — demo trailer source (placeholder)
              </p>
            </div>
          </div>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#3c342b]/75">{active.blurb}</p>
          <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#d9a441]/50 bg-[#fffdf7]/85 px-3.5 py-1.5 text-xs font-medium text-[#8a5a1d]/90">
            Demo player — every episode currently streams a public-domain sample film while the
            studio’s real episodes are in production.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="bs-section relative scroll-mt-24 border-t border-[#4a3728]/10 bg-[#faf3e6]">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <p className="text-xs font-bold tracking-[0.22em] text-[#8a5a1d] uppercase">The series</p>
          <h2 className="font-display mt-3 text-3xl font-bold text-[#2e2a26] sm:text-5xl">
            Bible Shorts
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#3c342b]/75 sm:text-lg">
            Pick an episode to load it into the player above. Posters are placeholders until the
            studio’s finished frames arrive.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {EPISODES.map((episode) => {
              const isActive = episode.id === active.id;
              return (
                <button
                  key={episode.id}
                  type="button"
                  onClick={() => setActiveId(episode.id)}
                  aria-pressed={isActive}
                  aria-label={`Play ${episode.ref} — ${episode.title}`}
                  className={`group relative overflow-hidden rounded-xl border text-left transition-all ${
                    isActive
                      ? 'border-[#d9a441] shadow-[0_0_30px_-10px_rgba(217,164,65,0.65)]'
                      : 'border-[#4a3728]/15 hover:border-[#d9a441]/60'
                  }`}
                >
                  {/* CSS-only poster tile (no image files, light palette) */}
                  <div
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${episode.tile}`}
                    aria-hidden="true"
                  />
                  <div
                    className={`pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${episode.accent} opacity-80`}
                    aria-hidden="true"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 opacity-50"
                    aria-hidden="true"
                    style={{
                      backgroundImage:
                        'repeating-linear-gradient(-45deg, rgba(90,70,50,0.03) 0px, rgba(90,70,50,0.03) 1px, transparent 1px, transparent 10px)',
                    }}
                  />
                  {/* Hover play affordance */}
                  <span
                    aria-hidden="true"
                    className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#d9a441] text-[#3b2a12] opacity-0 shadow-lg transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 h-5 w-5">
                      <path d="M8 5.14v13.72c0 .83.9 1.34 1.62.92l11-6.86a1.08 1.08 0 0 0 0-1.84l-11-6.86C8.9 3.8 8 4.31 8 5.14Z" />
                    </svg>
                  </span>
                  <div className="relative flex aspect-video flex-col justify-between p-4">
                    <div className="flex items-start justify-between gap-2">
                      <span className="font-mono text-[11px] tracking-[0.22em] text-[#8a5a1d] uppercase">
                        {episode.ref}
                      </span>
                      {episode.status === 'Now streaming' ? (
                        <span className="rounded-full bg-[#d9a441] px-2 py-0.5 text-[10px] font-bold tracking-wider text-[#3b2a12] uppercase">
                          Now
                        </span>
                      ) : null}
                    </div>
                    <div>
                      <span className="font-display block text-sm leading-tight font-bold text-[#2e2a26] sm:text-base">
                        {episode.title}
                      </span>
                      <span className="mt-1 block font-mono text-[11px] tracking-[0.18em] text-[#3c342b]/60">
                        {episode.duration}
                      </span>
                    </div>
                  </div>
                  {/* Active ring indicator */}
                  {isActive ? (
                    <span
                      aria-hidden="true"
                      className="absolute right-2 bottom-2 rounded-full bg-[#d9a441] px-2 py-0.5 text-[10px] font-bold tracking-wider text-[#3b2a12] uppercase"
                    >
                      Playing
                    </span>
                  ) : null}
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}