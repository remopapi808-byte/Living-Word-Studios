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
    <section id="studio-goods" className="scroll-mt-20 bg-[#0b0a08]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-xs font-bold tracking-[0.22em] text-[#d9a441] uppercase">
          Scripture-inspired streetwear — coming soon
        </p>
        <h2 className="font-display mt-3 text-3xl font-bold text-[#f5efe3] sm:text-5xl">
          Studio Goods
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#f5efe3]/70 sm:text-lg">
          Clothing worn with quiet conviction — hoodies, drop-shoulder tees, and dad hats
          that carry hope into ordinary days.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {PRODUCTS.map((product) => (
            <article
              key={product.name}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#14120e]"
            >
              {/* Garment visual — pure CSS */}
              <div
                aria-hidden="true"
                className="texture-lines relative flex h-44 items-center justify-center bg-gradient-to-br from-[#221a0d] via-[#14120e] to-[#0b0a08]"
              >
                <span className="font-display flex h-20 w-20 items-center justify-center rounded-full border border-[#d9a441]/40 bg-[#d9a441]/10 text-3xl font-bold text-[#ecc87e] transition-colors group-hover:bg-[#d9a441]/20">
                  {product.name === 'Hoodies' ? 'H' : product.name === 'Dad hats' ? 'C' : 'T'}
                </span>
                <span className="absolute top-3 right-3 rounded-full border border-[#d9a441]/40 px-2.5 py-0.5 text-[11px] font-semibold tracking-wider text-[#ecc87e] uppercase">
                  Soon
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-[#f5efe3]">{product.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#f5efe3]/65">{product.body}</p>
              </div>
            </article>
          ))}
        </div>
        <Link
          href="#community"
          className="mt-9 inline-flex items-center justify-center rounded-full border border-[#f5efe3]/30 px-6 py-3 text-sm font-semibold text-[#f5efe3] transition-colors hover:border-[#d9a441] hover:text-[#ecc87e]"
        >
          Be first to shop the drop
        </Link>
      </div>
    </section>
  );
}
