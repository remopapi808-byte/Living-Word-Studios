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
            For families — now open
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
            <a
              href="#community"
              className="inline-flex items-center justify-center rounded-full bg-[#d9a441] px-6 py-3 text-sm font-semibold text-[#3b2a12] transition-colors hover:bg-[#ecc87e]"
            >
              Explore Kids Kingdom
            </a>
            <a
              href="/kids-kingdom#coloring-pages"
              aria-label="Browse free coloring pages on Kids Kingdom"
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
              Browse free coloring pages
            </a>
          </div>
        </div>
        {/* Character moment — the owner's real Jesus & David artwork, framed
            like matted prints. Sized so it never fights the CTA buttons. */}
        <div className="relative mx-auto mt-12 w-full max-w-sm lg:order-1 lg:col-span-4 lg:col-start-2 lg:-mt-10 lg:mx-0">
          <div className="flex items-start justify-center gap-3 sm:gap-4">
            <figure className="card-sheen w-36 -rotate-2 rounded-[1.5rem] border border-[#e8d5a6] bg-[#fffdf7] p-2 shadow-[0_2px_6px_rgba(176,122,30,0.10),0_16px_40px_-12px_rgba(176,122,30,0.28),0_32px_80px_-24px_rgba(217,164,65,0.18)] sm:w-40">
              <div className="overflow-hidden rounded-[1.1rem] border border-[#e6d4a8] bg-white">
                <img
                  src="/assets/artwork/jesus.png"
                  alt="Illustration of Jesus, character art from the first Living Word Studios books (preview)"
                  loading="lazy"
                  width={608}
                  height={1088}
                  className="h-auto w-full object-cover"
                />
              </div>
              <figcaption className="mt-2 pb-0.5 text-center text-[10px] font-bold tracking-[0.2em] text-[#8a5a1d] uppercase">
                Jesus
              </figcaption>
            </figure>
            <figure className="card-sheen mt-5 w-36 rotate-2 rounded-[1.5rem] border border-[#e8d5a6] bg-[#fffdf7] p-2 shadow-[0_2px_6px_rgba(176,122,30,0.10),0_16px_40px_-12px_rgba(176,122,30,0.28),0_32px_80px_-24px_rgba(217,164,65,0.18)] sm:mt-7 sm:w-40">
              <div className="overflow-hidden rounded-[1.1rem] border border-[#e6d4a8] bg-white">
                <img
                  src="/assets/artwork/david.png"
                  alt="Illustration of David, character art from the first Living Word Studios books (preview)"
                  loading="lazy"
                  width={608}
                  height={1088}
                  className="h-auto w-full object-cover"
                />
              </div>
              <figcaption className="mt-2 pb-0.5 text-center text-[10px] font-bold tracking-[0.2em] text-[#8a5a1d] uppercase">
                David
              </figcaption>
            </figure>
          </div>
          <p className="mt-4 text-center text-xs leading-relaxed text-[#5b4632]/70">
            Character art from the first books — now free to download
          </p>
        </div>
      </div>
    </section>
  );
}