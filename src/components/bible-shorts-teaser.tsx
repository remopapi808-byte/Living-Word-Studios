/**
 * Bible Shorts — static "Coming Soon" teaser banner.
 *
 * Shared by the homepage section (id="bible-shorts") and the /bible-shorts
 * route. Pure static markup: no <video>, no poster images, no external
 * assets — the film-motif texture is CSS only. The gold CTA is a plain
 * anchor to #community, which is the waitlist form rendered on the same
 * page (CommunityClose), so it smooth-scrolls straight to the email signup.
 */
export default function BibleShortsTeaser() {
  return (
    <div className="hero-glow relative overflow-hidden rounded-[2rem] border border-[#d9a441]/40 shadow-[0_2px_6px_rgba(176,122,30,0.10),0_16px_40px_-12px_rgba(176,122,30,0.28),0_32px_80px_-24px_rgba(217,164,65,0.18)]">
      <div className="texture-lines pointer-events-none absolute inset-0" aria-hidden="true" />

      {/* Film-perforation motif — CSS-only strip across the top edge */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 flex justify-center gap-3 pt-3.5"
      >
        {Array.from({ length: 18 }).map((_, i) => (
          <span key={i} className="h-2.5 w-2 rounded-[2px] bg-[#d9a441]/35" />
        ))}
      </div>

      <div className="bs-teaser-inner relative px-6 pt-14 pb-10 text-center sm:px-12 sm:pt-16 sm:pb-14">
        <p className="inline-flex items-center gap-2 rounded-full border border-[#d9a441]/50 bg-[#fffdf7]/80 px-4 py-1.5 text-xs font-semibold tracking-[0.22em] text-[#8a5a1d] uppercase">
          <span aria-hidden="true" className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[#d9a441]" />
          Coming soon
        </p>

        <p className="mt-6 font-mono text-sm tracking-[0.28em] text-[#8a5a1d]">LWS/001</p>
        <h3 className="bs-teaser-title font-display mt-3 text-3xl font-bold text-[#2e2a26] sm:text-5xl">
          &ldquo;In the Beginning&rdquo;
        </h3>

        <div
          aria-hidden="true"
          className="mx-auto mt-5 h-px w-24 bg-gradient-to-r from-transparent via-[#d9a441]/70 to-transparent"
        />

        <p className="bs-teaser-copy mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#3c342b]/80 sm:text-lg">
          Cinematic shorts are currently in pre-production. Enter your email below to be
          notified the moment the first chapter drops.
        </p>

        <a
          href="#community"
          className="bs-teaser-cta mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#d9a441] px-6 py-3.5 text-base font-semibold text-[#3b2a12] shadow-[0_14px_34px_-16px_rgba(217,164,65,0.95)] transition-colors hover:bg-[#ecc87e] sm:px-8"
        >
          Notify me when it drops
          <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 7.5 10 13l5.5-5.5" />
          </svg>
        </a>

        <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-[#3c342b]/60">
          The first Bible Short opens the story where it starts — light, creation, and a God
          who speaks hope into the dark.
        </p>
      </div>

      {/* Film-perforation motif — bottom edge */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center gap-3 pb-3.5"
      >
        {Array.from({ length: 18 }).map((_, i) => (
          <span key={`b-${i}`} className="h-2.5 w-2 rounded-[2px] bg-[#d9a441]/35" />
        ))}
      </div>
    </div>
  );
}