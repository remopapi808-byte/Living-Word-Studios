import Link from 'next/link';

export default function KidsKingdom() {
  return (
    <section id="kids-kingdom" className="relative scroll-mt-20 overflow-hidden bg-[#faf3e6]">
      {/* Faint gold glow upper-left — mirrors the hero's right-side glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-32 hidden h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(236,200,126,0.35),transparent_65%)] lg:block"
      />
      <div className="relative mx-auto max-w-6xl items-center gap-10 px-4 py-24 sm:px-6 sm:py-32 lg:grid lg:grid-cols-12">
        <div className="lg:order-2 lg:col-span-6 lg:col-start-7">
          <p className="text-xs font-bold tracking-[0.22em] text-[#8a5a1d] uppercase">
            For families — coming soon
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold text-[#2e2a26] sm:text-5xl">
            Kids Kingdom
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#3c342b]/75 sm:text-lg">
            Children&rsquo;s parables, beautifully made — books for parents and kids to
            discover together, illustrated with care and made to be read again and again.
          </p>
          <ul className="mt-6 space-y-3 text-sm leading-relaxed text-[#3c342b]/75 sm:text-base">
            <li className="flex gap-3">
              <span aria-hidden="true" className="text-[#b07a1e]">&#10022;</span>
              Timeless parables in language children love
            </li>
            <li className="flex gap-3">
              <span aria-hidden="true" className="text-[#b07a1e]">&#10022;</span>
              Illustrations that invite wonder, not noise
            </li>
            <li className="flex gap-3">
              <span aria-hidden="true" className="text-[#b07a1e]">&#10022;</span>
              Made for bedtime reading, together
            </li>
          </ul>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/kids-kingdom"
              className="inline-flex items-center justify-center rounded-full bg-[#d9a441] px-6 py-3 text-sm font-semibold text-[#3b2a12] transition-colors hover:bg-[#ecc87e]"
            >
              Explore Kids Kingdom
            </Link>
            <a
              href="/assets/coloring-page-parable.pdf"
              download
              aria-label="Download free printable coloring page (PDF)"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#b07a1e]/50 bg-transparent px-6 py-3 text-sm font-semibold text-[#8a5a1d] transition-colors hover:border-[#d9a441] hover:bg-[#d9a441]/10"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path d="M12 4v10m0 0-4-4m4 4 4-4 M4 19h16" />
              </svg>
              Download Free Coloring Page Parable (PDF)
            </a>
          </div>
        </div>
        {/* Illustrative book-stack visual — pure CSS, light palette. Sits left and
            slightly high so it leans against the right-side text column. */}
        <div aria-hidden="true" className="relative mx-auto mt-12 w-full max-w-sm lg:order-1 lg:col-span-4 lg:col-start-2 lg:-mt-10 lg:mx-0">
          <div className="animate-slow-drift -rotate-2 rounded-[2rem] border border-[#d9a441]/40 bg-gradient-to-br from-[#fdf6e3] to-[#fffdf7] p-8 shadow-[0_2px_6px_rgba(176,122,30,0.10),0_16px_40px_-12px_rgba(176,122,30,0.28),0_32px_80px_-24px_rgba(217,164,65,0.18)]">
            <div className="rounded-2xl bg-gradient-to-br from-[#d9a441] to-[#b4552d] p-[3px]">
              <div className="rounded-[14px] bg-[#fffdf7] p-6 text-center">
                <p className="text-[11px] font-bold tracking-[0.3em] text-[#8a5a1d] uppercase">
                  Kids Kingdom
                </p>
                <p className="font-display mt-2 text-2xl font-bold text-[#4a3728] italic">
                  Parables for little hearts
                </p>
                <div className="mx-auto mt-5 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#ecc87e]/60 to-[#d9a441]/40">
                  <span className="font-display text-4xl text-[#8a5a1d]">&#10022;</span>
                </div>
                <p className="mt-5 text-xs tracking-widest text-[#3c342b]/55 uppercase">
                  Beautifully made books — coming soon
                </p>
              </div>
            </div>
          </div>
          <div className="absolute -right-3 -bottom-4 -z-0 hidden rounded-2xl border border-[#e8d5a6] bg-[#fffdf7] px-5 py-3 text-xs text-[#5b4632]/80 shadow-[0_2px_6px_rgba(176,122,30,0.10),0_14px_30px_-14px_rgba(176,122,30,0.35)] sm:block">
            For parents + kids
          </div>
        </div>
      </div>
    </section>
  );
}
