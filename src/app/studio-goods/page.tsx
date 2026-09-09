import type { Metadata } from 'next';
import CommunityClose from '@/components/community-close';
import GoodsGrid from '@/components/goods-grid';
import SiteFooter from '@/components/site-footer';
import SiteHeader from '@/components/site-header';

export const metadata: Metadata = {
  title: 'Studio Goods — Join the Drop | Living Word Studios',
  description:
    'The first Studio Goods drop: adult and kids tees, hoodies, and hats in modern, faith-forward designs. Pick your size and join the drop — no checkout, no pressure.',
};

export default function StudioGoodsPage() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="bg-[#f7f0e1]">
        {/* Page hero */}
        <section className="hero-glow relative overflow-hidden border-b border-[#4a3728]/10">
          <div className="shop-hero-inner mx-auto max-w-6xl px-4 pt-28 pb-12 sm:px-6 sm:pt-36 sm:pb-16">
            <p className="text-xs font-bold tracking-[0.22em] text-[#8a5a1d] uppercase">
              Living Word Studios
            </p>
            <h1 className="font-display mt-3 max-w-2xl text-4xl font-bold tracking-tight text-[#2e2a26] sm:text-6xl">
              Studio Goods
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#3c342b]/75 sm:text-lg">
              Six pieces for the first drop — modern tees, hoodies, and hats for
              grown-ups and kids, worn with quiet conviction.
            </p>
            <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#d9a441]/50 bg-[#fffdf7]/85 px-3.5 py-1.5 text-xs font-medium text-[#8a5a1d]/90">
              Waitlist open — join the drop, no checkout, no pricing yet.
            </p>
          </div>
        </section>

        <GoodsGrid />
        <CommunityClose />
      </main>
      <SiteFooter />
    </>
  );
}