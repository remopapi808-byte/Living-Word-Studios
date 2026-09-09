import Link from 'next/link';

const PRODUCTS = [
  {
    name: 'Hoodies',
    body: 'Heavyweight comfort with scripture-inspired design — made for everyday wear.',
  },
  {
    name: 'Drop-shoulder tees',
    body: 'Relaxed modern fit, minimal marks of faith — quiet conviction in every detail.',
  },
  {
    name: 'Dad hats',
    body: 'Classic everyday cap with understated studio embroidery — a small reminder of hope.',
  },
];

export default function StudioGoods() {
  return (
    <section id="studio-goods" className="scroll-mt-20 bg-[#faf3e6]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-xs font-bold tracking-[0.22em] text-[#8a5a1d] uppercase">
          Scripture-inspired streetwear — coming soon
        </p>
        <h2 className="font-display mt-3 text-3xl font-bold text-[#2e2a26] sm:text-5xl">
          Studio Goods
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#3c342b]/75 sm:text-lg">
          Clothing worn with quiet conviction — hoodies, drop-shoulder tees, and dad hats
          that carry hope into ordinary days.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {PRODUCTS.map((product) => (
            <article
              key={product.name}
              className="group overflow-hidden rounded-2xl border border-[#e8d5a6] bg-[#fffdf7] shadow-[0_18px_40px_-28px_rgba(122,86,36,0.45)]"
            >
              {/* Garment visual — pure CSS */}
              <div
                aria-hidden="true"
                className="texture-lines relative flex h-44 items-center justify-center bg-gradient-to-br from-[#fdf6e3] via-[#fffdf7] to-[#f3e7c4]"
              >
                <span className="font-display flex h-20 w-20 items-center justify-center rounded-full border border-[#d9a441]/50 bg-[#d9a441]/15 text-3xl font-bold text-[#8a5a1d] transition-colors group-hover:bg-[#d9a441]/25">
                  {product.name === 'Hoodies' ? 'H' : product.name === 'Dad hats' ? 'C' : 'T'}
                </span>
                <span className="absolute top-3 right-3 rounded-full border border-[#b07a1e]/40 bg-[#fffdf7]/85 px-2.5 py-0.5 text-[11px] font-semibold tracking-wider text-[#8a5a1d] uppercase">
                  Soon
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-[#2e2a26]">{product.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#3c342b]/70">{product.body}</p>
              </div>
            </article>
          ))}
        </div>
        <Link
          href="/studio-goods"
          className="mt-9 inline-flex items-center justify-center rounded-full border border-[#3c342b]/30 px-6 py-3 text-sm font-semibold text-[#3c342b] transition-colors hover:border-[#b07a1e] hover:text-[#8a5a1d]"
        >
          Be first to shop the drop
        </Link>
      </div>
    </section>
  );
}