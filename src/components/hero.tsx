import Link from 'next/link';

export default function Hero() {
  return (
    <section id="top" className="hero-section hero-glow relative overflow-hidden pt-16">
      <div className="texture-lines pointer-events-none absolute inset-0" aria-hidden="true" />
      {/* Faint oversized gold glow pooled to the open right — the parchment breathes here */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-24 -right-32 hidden h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(217,164,65,0.16),transparent_65%)] lg:block"
      />
      <div className="hero-inner relative mx-auto max-w-6xl px-4 pt-20 pb-24 sm:px-6 sm:pt-32 sm:pb-32">
        <div className="lg:grid lg:grid-cols-12 lg:items-center lg:gap-10">
          {/* Heavy-left text column — pinned left, generous empty parchment to the right */}
          <div className="lg:col-span-7 lg:max-w-[36rem]">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d9a441]/50 bg-[#fffdf7]/80 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-[#8a5a1d] uppercase">
              <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rounded-full bg-[#d9a441]" />
              A faith-based media + commerce studio
            </p>
            <h1 className="font-display text-5xl leading-[1.05] font-bold text-[#2e2a26] sm:text-6xl lg:text-7xl">
              Living Word <span className="text-[#b07a1e] italic">Studios</span>
            </h1>
            <p className="font-display mt-6 max-w-2xl text-xl text-[#3c342b]/90 italic sm:text-2xl">
              &ldquo;Making the story of Jesus impossible to overlook.&rdquo;
            </p>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#3c342b]/75 sm:text-lg">
              Cinematic media, beautiful publishing, and clothing worn with quiet conviction — made to
              be welcoming, honest, and quietly hopeful for the spiritually curious, believers,
              families, and a design-forward generation.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/bible-shorts"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d9a441] px-7 py-3.5 text-base font-semibold text-[#3b2a12] shadow-[0_2px_8px_rgba(176,122,30,0.25),0_16px_36px_-12px_rgba(176,122,30,0.5)] transition-colors hover:bg-[#ecc87e]"
              >
                <span aria-hidden="true">&#9654;</span> Watch Bible Shorts
              </Link>
              <Link
                href="#studio-goods"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#3c342b]/30 px-7 py-3.5 text-base font-semibold text-[#3c342b] transition-colors hover:border-[#b07a1e] hover:text-[#8a5a1d]"
              >
                Explore Studio Goods
              </Link>
            </div>
            <dl className="mt-12 grid max-w-2xl grid-cols-3 gap-4 border-t border-[#3c342b]/15 pt-8">
              {[
                ['Screens', 'Cinematic shorts'],
                ['Pages', 'Beautiful books'],
                ['Everyday', 'Quiet conviction'],
              ].map(([term, detail]) => (
                <div key={term}>
                  <dt className="font-display text-lg font-bold text-[#8a5a1d]">{term}</dt>
                  <dd className="mt-1 text-sm text-[#3c342b]/65">{detail}</dd>
                </div>
              ))}
            </dl>
          </div>
          {/* Hand-placed studio mark panel — drifts right and low, breaks the grid line */}
          <div aria-hidden="true" className="relative hidden lg:col-span-4 lg:col-start-9 lg:mt-16 lg:block">
            <div className="rotate-2 rounded-[2.5rem] border border-[#d9a441]/40 bg-gradient-to-br from-[#fdf6e3] to-[#fffdf7] p-10 text-center shadow-[0_2px_6px_rgba(176,122,30,0.10),0_16px_40px_-12px_rgba(176,122,30,0.28),0_32px_80px_-24px_rgba(217,164,65,0.18)]">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-[#d9a441]/50 bg-[#d9a441]/15">
                <span className="font-display text-4xl font-bold text-[#8a5a1d]">✦</span>
              </div>
              <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-[#d9a441]/70 to-transparent" />
              <div className="mx-auto mt-6 flex justify-center gap-2">
                {Array.from({ length: 7 }).map((_, i) => (
                  <span key={i} className="h-2 w-1.5 rounded-[2px] bg-[#d9a441]/35" />
                ))}
              </div>
            </div>
            <div className="absolute -bottom-5 -left-6 -rotate-2 rounded-2xl border border-[#e8d5a6] bg-[#fffdf7] px-5 py-3 text-xs font-semibold tracking-[0.18em] text-[#8a5a1d] uppercase shadow-[0_2px_6px_rgba(176,122,30,0.10),0_14px_30px_-14px_rgba(176,122,30,0.35)]">
              Screens · Pages · Everyday
            </div>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="h-px bg-gradient-to-r from-transparent via-[#d9a441]/60 to-transparent"
      />
    </section>
  );
}
