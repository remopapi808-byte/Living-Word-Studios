import Link from 'next/link';

export default function KidsKingdom() {
  return (
    <section id="kids-kingdom" className="scroll-mt-20 bg-[#faf3e6]">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2">
        <div>
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
          <Link
            href="/kids-kingdom"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-[#d9a441] px-6 py-3 text-sm font-semibold text-[#3b2a12] transition-colors hover:bg-[#ecc87e]"
          >
            Explore Kids Kingdom
          </Link>
        </div>
        {/* Illustrative book-stack visual — pure CSS, light palette */}
        <div aria-hidden="true" className="relative mx-auto w-full max-w-sm">
          <div className="animate-slow-drift rounded-2xl border border-[#d9a441]/40 bg-gradient-to-br from-[#fdf6e3] to-[#fffdf7] p-8 shadow-[0_30px_70px_-30px_rgba(122,86,36,0.5)]">
            <div className="rounded-xl bg-gradient-to-br from-[#d9a441] to-[#b4552d] p-[3px]">
              <div className="rounded-[10px] bg-[#fffdf7] p-6 text-center">
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
          <div className="absolute -right-3 -bottom-4 -z-0 hidden rounded-xl border border-[#e8d5a6] bg-[#fffdf7] px-5 py-3 text-xs text-[#5b4632]/80 shadow-sm sm:block">
            For parents + kids
          </div>
        </div>
      </div>
    </section>
  );
}