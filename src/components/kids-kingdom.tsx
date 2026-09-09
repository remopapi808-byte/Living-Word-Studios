import Link from 'next/link';

export default function KidsKingdom() {
  return (
    <section id="kids-kingdom" className="scroll-mt-20 bg-[#0b0a08]">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2">
        <div>
          <p className="text-xs font-bold tracking-[0.22em] text-[#d9a441] uppercase">
            For families — coming soon
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold text-[#f5efe3] sm:text-5xl">
            Kids Kingdom
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#f5efe3]/70 sm:text-lg">
            Children&rsquo;s parables, beautifully made — books for parents and kids to
            discover together, illustrated with care and made to be read again and again.
          </p>
          <ul className="mt-6 space-y-3 text-sm leading-relaxed text-[#f5efe3]/70 sm:text-base">
            <li className="flex gap-3">
              <span aria-hidden="true" className="text-[#d9a441]">&#10022;</span>
              Timeless parables in language children love
            </li>
            <li className="flex gap-3">
              <span aria-hidden="true" className="text-[#d9a441]">&#10022;</span>
              Illustrations that invite wonder, not noise
            </li>
            <li className="flex gap-3">
              <span aria-hidden="true" className="text-[#d9a441]">&#10022;</span>
              Made for bedtime reading, together
            </li>
          </ul>
          <Link
            href="/kids-kingdom"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-[#f5efe3] px-6 py-3 text-sm font-semibold text-[#0b0a08] transition-colors hover:bg-[#ecc87e]"
          >
            Explore Kids Kingdom
          </Link>
        </div>
        {/* Illustrative book-stack visual — pure CSS */}
        <div aria-hidden="true" className="relative mx-auto w-full max-w-sm">
          <div className="animate-slow-drift rounded-2xl border border-[#d9a441]/30 bg-gradient-to-br from-[#2a1f0d] to-[#14120e] p-8 shadow-[0_30px_80px_-20px_rgba(217,164,65,0.35)]">
            <div className="rounded-xl bg-gradient-to-br from-[#d9a441] to-[#b4552d] p-[3px]">
              <div className="rounded-[10px] bg-[#14120e] p-6 text-center">
                <p className="text-[11px] font-bold tracking-[0.3em] text-[#d9a441] uppercase">
                  Kids Kingdom
                </p>
                <p className="font-display mt-2 text-2xl font-bold text-[#f5efe3] italic">
                  Parables for little hearts
                </p>
                <div className="mx-auto mt-5 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#d9a441]/30 to-[#b4552d]/20">
                  <span className="font-display text-4xl text-[#ecc87e]">&#10022;</span>
                </div>
                <p className="mt-5 text-xs tracking-widest text-[#f5efe3]/50 uppercase">
                  Beautifully made books — coming soon
                </p>
              </div>
            </div>
          </div>
          <div className="absolute -right-3 -bottom-4 -z-0 hidden rounded-xl border border-white/10 bg-[#1c1812] px-5 py-3 text-xs text-[#f5efe3]/60 sm:block">
            For parents + kids
          </div>
        </div>
      </div>
    </section>
  );
}
