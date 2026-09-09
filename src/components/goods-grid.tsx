'use client';

import { useState } from 'react';

type ItemType = 'Tee' | 'Hoodie' | 'Hat';

interface GoodsItem {
  id: string;
  line: 'ADULT' | 'KIDS';
  type: ItemType;
  name: string;
  blurb: string;
  mark: string;
  sizes: string[];
  /** Per-item soft parchment gradient tile (CSS-only visual, no images). */
  tile: string;
}

/**
 * The first Studio Goods drop: 3 adult + 3 kids pieces.
 * Not for sale yet — the "Join the Drop" CTA smooth-scrolls to the email
 * signup form (#community) on the same page. Sizes are a lightweight local
 * selection (no cart, no pricing — that framing was removed by request).
 */
const ITEMS: GoodsItem[] = [
  {
    id: 'first-light-tee',
    line: 'ADULT',
    type: 'Tee',
    name: 'First Light Tee',
    blurb: 'Soft everyday cotton for the mornings faith feels brand new.',
    mark: 'F',
    sizes: ['S', 'M', 'L', 'XL'],
    tile: 'from-[#fdf6e3] via-[#fffdf7] to-[#efdeb6]',
  },
  {
    id: 'abide-hoodie',
    line: 'ADULT',
    type: 'Hoodie',
    name: 'Abide Hoodie',
    blurb: 'Heavyweight fleece for the days you rest in the Word.',
    mark: 'A',
    sizes: ['S', 'M', 'L', 'XL'],
    tile: 'from-[#faf3e6] via-[#fffdf7] to-[#f3e7c4]',
  },
  {
    id: 'gathering-cap',
    line: 'ADULT',
    type: 'Hat',
    name: 'The Gathering Cap',
    blurb: 'A clean everyday cap for the times we gather, worship, and belong.',
    mark: 'G',
    sizes: ['S', 'M', 'L', 'XL'],
    tile: 'from-[#f7f0e1] via-[#fffdf7] to-[#ecd9a8]',
  },
  {
    id: 'little-lamb-tee',
    line: 'KIDS',
    type: 'Tee',
    name: 'Little Lamb Tee',
    blurb: 'A sweet, soft tee made for playing, jumping, and growing.',
    mark: 'L',
    sizes: ['XS', 'S', 'M', 'L'],
    tile: 'from-[#fdf6e3] via-[#fff9ee] to-[#f2ddb2]',
  },
  {
    id: 'kingdom-kids-hoodie',
    line: 'KIDS',
    type: 'Hoodie',
    name: 'Kingdom Kids Hoodie',
    blurb: 'A cozy hoodie for little hearts learning a big, gentle love.',
    mark: 'K',
    sizes: ['XS', 'S', 'M', 'L'],
    tile: 'from-[#faf3e6] via-[#fff9ee] to-[#f3e7c4]',
  },
  {
    id: 'tiny-crown-cap',
    line: 'KIDS',
    type: 'Hat',
    name: 'Tiny Crown Cap',
    blurb: 'A playful little cap that reminds every kid they are royalty here.',
    mark: 'T',
    sizes: ['XS', 'S', 'M', 'L'],
    tile: 'from-[#f7f0e1] via-[#fff9ee] to-[#ecd9a8]',
  },
];

function GoodsCard({ item, offset = '' }: { item: GoodsItem; offset?: string }) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  return (
    <article className={`group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-[#e8d5a6] bg-[#fffdf7] shadow-[0_2px_6px_rgba(176,122,30,0.10),0_16px_40px_-12px_rgba(176,122,30,0.28),0_32px_80px_-24px_rgba(217,164,65,0.18)] transition-colors hover:border-[#d9a441]/60 ${offset}`}>
      {/* CSS-only product visual — warm parchment tile + gold monogram, no images */}
      <div
        aria-hidden="true"
        className={`gg-tile texture-lines relative flex h-40 items-center justify-center bg-gradient-to-br ${item.tile}`}
      >
        <div className="card-sheen absolute inset-0" />
        <span className="font-display absolute -right-2 -bottom-5 text-[5rem] leading-none font-bold text-[#d9a441]/15 select-none">
          {item.mark}
        </span>
        <span className="font-display flex h-16 w-16 items-center justify-center rounded-full border border-[#d9a441]/50 bg-[#d9a441]/15 text-2xl font-bold text-[#8a5a1d] shadow-[0_10px_24px_-12px_rgba(176,122,30,0.6)] transition-colors group-hover:bg-[#d9a441]/25">
          {item.mark}
        </span>
        <span className="absolute top-3 left-3 rounded-full border border-[#b07a1e]/40 bg-[#fffdf7]/85 px-2.5 py-0.5 text-[11px] font-bold tracking-wider text-[#8a5a1d] uppercase">
          {item.line} &middot; {item.type}
        </span>
        <span className="absolute top-3 right-3 rounded-full border border-[#d9a441]/50 bg-[#fffdf7]/85 px-2.5 py-0.5 text-[11px] font-semibold tracking-wider text-[#8a5a1d] uppercase">
          Drop 01
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <h3 className="font-display text-lg font-bold text-[#2e2a26]">{item.name}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-[#3c342b]/65">{item.blurb}</p>
        </div>

        {/* Sizing pills */}
        <div className="mt-auto pt-1">
          <p className="text-[11px] font-bold tracking-[0.14em] text-[#8a5a1d] uppercase">
            Size
            {selectedSize ? (
              <span className="ml-1.5 normal-case tracking-normal text-[#3c342b]/55">
                — {selectedSize} selected
              </span>
            ) : null}
          </p>
          <div role="group" aria-label={`${item.name} size`} className="mt-1.5 flex flex-wrap gap-1.5">
            {item.sizes.map((size) => {
              const active = selectedSize === size;
              return (
                <button
                  key={size}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setSelectedSize(size)}
                  className={`min-w-9 rounded-full px-2.5 py-1.5 text-xs font-semibold transition-colors ${
                    active
                      ? 'bg-[#d9a441] text-[#3b2a12] shadow-[0_6px_14px_-8px_rgba(176,122,30,0.8)]'
                      : 'border border-[#3c342b]/25 text-[#3c342b]/75 hover:border-[#d9a441]/70 hover:text-[#8a5a1d]'
                  }`}
                >
                  {size}
                </button>
              );
            })}
          </div>
        </div>

        {/* CTA — scrolls down to the email signup form (id="community") */}
        <a
          href="#community"
          className="gg-cta mt-1 inline-flex w-full items-center justify-center rounded-full bg-[#d9a441] px-5 py-2.5 text-sm font-semibold text-[#3b2a12] transition-colors hover:bg-[#ecc87e]"
        >
          Join the Drop
        </a>
      </div>
    </article>
  );
}

export default function GoodsGrid() {
  return (
    <section id="goods-grid" className="relative scroll-mt-20 overflow-hidden border-t border-[#4a3728]/10 bg-[#faf3e6]">
      {/* Faint gold glow upper-right — depth behind the staggered grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 -right-32 hidden h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(217,164,65,0.14),transparent_65%)] lg:block"
      />
      <div className="gg-inner relative mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-28">
        <p className="text-xs font-bold tracking-[0.22em] text-[#8a5a1d] uppercase">
          The first drop &mdash; waitlist open
        </p>
        <h2 className="font-display mt-3 text-3xl font-bold text-[#2e2a26] sm:text-5xl">
          Studio Goods &mdash; Join the Drop
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#3c342b]/75 sm:text-lg">
          Three pieces for grown-ups and three for the kids &mdash; modern tees,
          hoodies, and hats worn with quiet conviction. Pick your size, join the
          drop, and be first to know when they&rsquo;re ready to order.
        </p>
        {/* Staggered drop grid: cards step down across each row (adult row
            0/high → 2/low, kids row offset opposite) so the six never read
            as a rigid 2×3. Positive top margins only — no overlap, no clipping.
            lg:gap-y-28 absorbs the row-1 stagger protrusion (grid tracks size
            to the tallest child, so mt-12/24 cards hang below the track; the
            large row gap keeps them clear of the offset kids row). */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-x-7 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-28">
          {ITEMS.map((item, i) => (
            <GoodsCard
              key={item.id}
              item={item}
              offset={
                i === 0
                  ? 'lg:mt-0'
                  : i === 1
                    ? 'lg:mt-12'
                    : i === 2
                      ? 'lg:mt-24'
                      : i === 3
                        ? 'lg:mt-10'
                        : i === 4
                          ? 'lg:mt-0'
                          : 'lg:mt-12'
              }
            />
          ))}
        </div>
        <p className="mt-10 text-center text-sm leading-relaxed text-[#3c342b]/60">
          Nothing is for sale yet &mdash; &ldquo;Join the Drop&rdquo; adds you to the
          waitlist so you hear first when these arrive.
        </p>
      </div>
    </section>
  );
}