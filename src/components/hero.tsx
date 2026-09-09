import Link from 'next/link';

export default function Hero() {
  return (
    <section id="top" className="hero-glow relative overflow-hidden pt-16">
      <div className="texture-lines pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 pt-20 pb-16 sm:px-6 sm:pt-28 sm:pb-24">
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#d9a441]/40 bg-[#d9a441]/10 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-[#ecc87e] uppercase">
          <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rounded-full bg-[#d9a441]" />
          A faith-based media + commerce studio
        </p>
        <h1 className="font-display max-w-3xl text-5xl leading-[1.05] font-bold text-[#f5efe3] sm:text-6xl lg:text-7xl">
          Living Word <span className="text-[#d9a441] italic">Studios</span>
        </h1>
        <p className="font-display mt-6 max-w-2xl text-xl text-[#f5efe3]/90 italic sm:text-2xl">
          &ldquo;Making the story of Jesus impossible to overlook.&rdquo;
        </p>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#f5efe3]/70 sm:text-lg">
          Cinematic media, beautiful publishing, and clothing worn with quiet conviction —
          made to be welcoming, honest, and quietly hopeful for the spiritually curious,
          believers, families, and a design-forward generation.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="#bible-shorts"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d9a441] px-7 py-3.5 text-base font-semibold text-[#0b0a08] transition-colors hover:bg-[#ecc87e]"
          >
            <span aria-hidden="true">&#9654;</span> Watch Bible Shorts
          </Link>
          <Link
            href="#studio-goods"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#f5efe3]/30 px-7 py-3.5 text-base font-semibold text-[#f5efe3] transition-colors hover:border-[#d9a441] hover:text-[#ecc87e]"
          >
            Explore Studio Goods
          </Link>
        </div>
        <dl className="mt-12 grid max-w-2xl grid-cols-3 gap-4 border-t border-white/10 pt-8">
          {[
            ['Screens', 'Cinematic shorts'],
            ['Pages', 'Beautiful books'],
            ['Everyday', 'Quiet conviction'],
          ].map(([term, detail]) => (
            <div key={term}>
              <dt className="font-display text-lg font-bold text-[#ecc87e]">{term}</dt>
              <dd className="mt-1 text-sm text-[#f5efe3]/60">{detail}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div
        aria-hidden="true"
        className="h-px bg-gradient-to-r from-transparent via-[#d9a441]/60 to-transparent"
      />
    </section>
  );
}
