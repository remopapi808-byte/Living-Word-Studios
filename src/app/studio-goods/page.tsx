'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { Minus, Plus, ShoppingBag, X } from 'lucide-react';
import SiteFooter from '@/components/site-footer';
import SiteHeader from '@/components/site-header';

type Category = 'Hoodies' | 'Tees' | 'Hats';
type Filter = Category | 'All';
type SortKey = 'featured' | 'price-asc' | 'price-desc';

interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  blurb: string;
  mark: string;
}

interface CartLine {
  id: string;
  qty: number;
  product: Product;
}

const FILTERS: Filter[] = ['All', 'Hoodies', 'Tees', 'Hats'];

/**
 * Placeholder catalogue — names are on-brand concepts and prices are mock
 * figures for layout only. No real inventory, no live checkout.
 */
const PRODUCTS: Product[] = [
  {
    id: 'rooted-in-jesus-hoodie',
    name: 'Rooted in Jesus Hoodie',
    category: 'Hoodies',
    price: 58,
    mark: 'H',
    blurb: 'Heavyweight fleece with a scripture-inspired chest mark for everyday wear.',
  },
  {
    id: 'good-shepherd-hoodie',
    name: 'Good Shepherd Hoodie',
    category: 'Hoodies',
    price: 54,
    mark: 'H',
    blurb: 'Quiet warmth for the days you need reminding who walks beside you.',
  },
  {
    id: 'still-waters-hoodie',
    name: 'Still Waters Hoodie',
    category: 'Hoodies',
    price: 48,
    mark: 'H',
    blurb: 'Soft, relaxed comfort — rest for weary shoulders, hope for the week.',
  },
  {
    id: 'quiet-conviction-tee',
    name: 'Quiet Conviction Tee',
    category: 'Tees',
    price: 28,
    mark: 'T',
    blurb: 'Minimal marks of faith — conviction worn without a word.',
  },
  {
    id: 'john-316-tee',
    name: 'John 3:16 Tee',
    category: 'Tees',
    price: 22,
    mark: 'T',
    blurb: 'The verse that changed everything, worn simply and often.',
  },
  {
    id: 'walk-in-the-light-tee',
    name: 'Walk in the Light Tee',
    category: 'Tees',
    price: 26,
    mark: 'T',
    blurb: 'Drop-shoulder relaxed fit with a subtle printed word of hope.',
  },
  {
    id: 'story-of-jesus-cap',
    name: 'Story of Jesus Cap',
    category: 'Hats',
    price: 32,
    mark: 'C',
    blurb: 'Understated embroidery — the greatest story, worn day to day.',
  },
  {
    id: 'grace-peace-dad-hat',
    name: 'Grace & Peace Dad Hat',
    category: 'Hats',
    price: 24,
    mark: 'C',
    blurb: 'Classic curved-brim comfort with a gentle reminder to rest.',
  },
  {
    id: 'hope-embroidery-cap',
    name: 'Hope Embroidery Cap',
    category: 'Hats',
    price: 28,
    mark: 'C',
    blurb: 'A small mark of hope for ordinary days.',
  },
];

/** Per-category gradient swatches for the CSS-only product tiles. */
const TILE_GRADIENT: Record<Category, string> = {
  Hoodies: 'from-[#3b2a12] via-[#1c1710] to-[#0b0a08]',
  Tees: 'from-[#2c2417] via-[#16130f] to-[#0b0a08]',
  Hats: 'from-[#33200f] via-[#191109] to-[#0b0a08]',
};

export default function StudioGoodsPage() {
  const [filter, setFilter] = useState<Filter>('All');
  const [sort, setSort] = useState<SortKey>('featured');
  const [cartLines, setCartLines] = useState<CartLine[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const cartButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const cartCount = cartLines.reduce((total, line) => total + line.qty, 0);
  const subtotal = cartLines.reduce((total, line) => total + line.product.price * line.qty, 0);

  const visibleProducts = useMemo(() => {
    const filtered = PRODUCTS.filter((product) => filter === 'All' || product.category === filter);
    if (sort === 'price-asc') return [...filtered].sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') return [...filtered].sort((a, b) => b.price - a.price);
    return filtered;
  }, [filter, sort]);

  const addToCart = (product: Product) => {
    setCartLines((prev) => {
      const existing = prev.find((line) => line.id === product.id);
      if (existing) {
        return prev.map((line) =>
          line.id === product.id ? { ...line, qty: line.qty + 1 } : line,
        );
      }
      return [...prev, { id: product.id, qty: 1, product }];
    });
  };

  const adjustQty = (id: string, delta: number) => {
    setCartLines((prev) =>
      prev
        .map((line) => (line.id === id ? { ...line, qty: Math.max(0, line.qty + delta) } : line))
        .filter((line) => line.qty > 0),
    );
  };

  const removeFromCart = (id: string) => {
    setCartLines((prev) => prev.filter((line) => line.id !== id));
  };

  const closeCart = () => {
    setCartOpen(false);
    window.setTimeout(() => cartButtonRef.current?.focus(), 0);
  };

  // While the cart drawer is open: lock body scroll, close on Escape,
  // and move focus into the dialog so it is keyboard-operable.
  useEffect(() => {
    if (!cartOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeCart();
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    window.setTimeout(() => closeButtonRef.current?.focus(), 0);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [cartOpen]);

  return (
    <>
      <SiteHeader />
      <main id="top" className="bg-[#0b0a08]">
        {/* Page hero */}
        <section className="hero-glow relative overflow-hidden border-b border-white/10">
          <div className="shop-hero-inner mx-auto max-w-6xl px-4 pt-28 pb-12 sm:px-6 sm:pt-36 sm:pb-16">
            <p className="text-xs font-bold tracking-[0.22em] text-[#d9a441] uppercase">
              Living Word Studios
            </p>
            <h1 className="font-display mt-3 max-w-2xl text-4xl font-bold tracking-tight text-[#f5efe3] sm:text-6xl">
              Studio Goods
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#f5efe3]/70 sm:text-lg">
              Hoodies, tees, and hats worn with quiet conviction — Scripture-inspired
              clothing that carries hope into ordinary days.
            </p>
            <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#d9a441]/30 bg-[#d9a441]/5 px-3.5 py-1.5 text-xs font-medium text-[#ecc87e]/90">
              Placeholder storefront — concept pricing, demo cart, no checkout.
            </p>
          </div>
        </section>

        {/* Sticky shop toolbar: category filters + sort + cart */}
        <div className="shop-toolbar sticky z-40 border-b border-white/10 bg-[#0b0a08]/90 backdrop-blur-md">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-2 px-4 py-3 sm:px-6">
            <div role="group" aria-label="Filter products by category" className="flex flex-wrap items-center gap-2">
              {FILTERS.map((item) => {
                const active = filter === item;
                return (
                  <button
                    key={item}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setFilter(item)}
                    className={
                      active
                        ? 'rounded-full bg-[#d9a441] px-3.5 py-1.5 text-sm font-semibold text-[#0b0a08]'
                        : 'rounded-full border border-white/15 px-3.5 py-1.5 text-sm font-medium text-[#f5efe3]/75 hover:border-[#d9a441]/60 hover:text-[#ecc87e]'
                    }
                  >
                    {item}
                  </button>
                );
              })}
            </div>
            <label className="ml-1 flex items-center sm:ml-4">
              <span className="sr-only">Sort products</span>
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value as SortKey)}
                className="rounded-full border border-white/15 bg-[#14120e] px-3.5 py-1.5 text-sm font-medium text-[#f5efe3] focus:border-[#d9a441]/70 focus:outline-none"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </label>
            <div className="min-w-2 flex-1" />
            <button
              ref={cartButtonRef}
              type="button"
              onClick={() => setCartOpen(true)}
              aria-haspopup="dialog"
              aria-expanded={cartOpen}
              aria-controls="cart-drawer"
              aria-label={`Open demo cart, ${cartCount} ${cartCount === 1 ? 'item' : 'items'}`}
              className="relative rounded-full border border-white/15 px-4 py-1.5 text-sm font-semibold text-[#f5efe3] transition-colors hover:border-[#d9a441] hover:text-[#ecc87e]"
            >
              <ShoppingBag className="-mt-0.5 mr-1.5 inline h-4 w-4" aria-hidden="true" />
              Cart
              {cartCount > 0 && (
                <span
                  aria-hidden="true"
                  className="absolute -top-1.5 -right-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#d9a441] px-1 text-[11px] font-bold text-[#0b0a08]"
                >
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Product grid */}
        <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <p className="text-xs font-semibold tracking-widest text-[#f5efe3]/45 uppercase">
            {visibleProducts.length} {visibleProducts.length === 1 ? 'product' : 'products'}
            {filter !== 'All' ? ` in ${filter}` : ''}
          </p>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visibleProducts.map((product) => (
              <article
                key={product.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#14120e] transition-colors hover:border-[#d9a441]/40"
              >
                {/* Garment visual — pure CSS placeholder tile */}
                <div
                  aria-hidden="true"
                  className={`texture-lines relative flex h-44 items-center justify-center bg-gradient-to-br ${TILE_GRADIENT[product.category]}`}
                >
                  <div className="card-sheen absolute inset-0" />
                  <span className="font-display flex h-20 w-20 items-center justify-center rounded-full border border-[#d9a441]/40 bg-[#d9a441]/10 text-3xl font-bold text-[#ecc87e] transition-colors group-hover:bg-[#d9a441]/20">
                    {product.mark}
                  </span>
                  <span className="absolute top-3 left-3 rounded-full border border-white/10 bg-[#0b0a08]/60 px-2.5 py-0.5 text-[11px] font-semibold tracking-wider text-[#f5efe3]/65 uppercase">
                    {product.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <div>
                    <h3 className="font-display text-lg font-bold text-[#f5efe3]">
                      {product.name}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#f5efe3]/60">
                      {product.blurb}
                    </p>
                  </div>
                  <div className="mt-auto flex items-center justify-between gap-3 pt-1">
                    <p className="text-sm font-bold whitespace-nowrap text-[#ecc87e]">
                      ${product.price}
                    </p>
                    <button
                      type="button"
                      onClick={() => addToCart(product)}
                      aria-label={`Add ${product.name} to cart`}
                      className="rounded-full bg-[#d9a441] px-4 py-2 text-sm font-semibold text-[#0b0a08] transition-colors hover:bg-[#ecc87e]"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-10 text-center text-xs leading-relaxed text-[#f5efe3]/40">
            Demo storefront — all prices are placeholder concept pricing, and the cart is
            a demo with no checkout or payment.
          </p>
        </section>
      </main>
      <SiteFooter />

      {/* Cart drawer */}
      {cartOpen ? (
        <>
          <div
            className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm"
            onClick={closeCart}
            aria-hidden="true"
          />
          <aside
            id="cart-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Demo cart"
            className="fixed inset-y-0 right-0 z-[80] flex w-full max-w-md flex-col border-l border-white/10 bg-[#14120e] shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="flex items-center gap-2.5">
                <h2 className="font-display text-lg font-bold text-[#f5efe3]">Your Cart</h2>
                <span className="rounded-full border border-[#d9a441]/40 px-2 py-0.5 text-[10px] font-bold tracking-[0.18em] text-[#ecc87e] uppercase">
                  Demo
                </span>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeCart}
                aria-label="Close cart"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-[#f5efe3] transition-colors hover:border-[#d9a441] hover:text-[#ecc87e]"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-5 py-4">
              {cartLines.length === 0 ? (
                <div className="mt-10 text-center">
                  <p className="text-sm text-[#f5efe3]/55">Your cart is empty.</p>
                  <p className="mt-1 text-xs text-[#f5efe3]/40">
                    Add something from the drop to see it here.
                  </p>
                </div>
              ) : (
                <ul className="space-y-3">
                  {cartLines.map((line) => (
                    <li
                      key={line.id}
                      className="flex items-start justify-between gap-3 rounded-xl border border-white/10 bg-[#0b0a08]/70 p-4"
                    >
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-[#f5efe3]">
                          {line.product.name}
                        </p>
                        <p className="mt-0.5 text-xs text-[#f5efe3]/50">
                          {line.product.category} · ${line.product.price} each
                        </p>
                        <div className="mt-3 flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => adjustQty(line.id, -1)}
                            aria-label={`Decrease quantity of ${line.product.name}`}
                            className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 text-[#f5efe3] transition-colors hover:border-[#d9a441] hover:text-[#ecc87e]"
                          >
                            <Minus className="h-3.5 w-3.5" aria-hidden="true" />
                          </button>
                          <span
                            aria-live="polite"
                            className="w-6 text-center text-sm font-semibold text-[#f5efe3]"
                          >
                            {line.qty}
                          </span>
                          <button
                            type="button"
                            onClick={() => adjustQty(line.id, 1)}
                            aria-label={`Increase quantity of ${line.product.name}`}
                            className="flex h-7 w-7 items-center justify-center rounded-full border border-white/15 text-[#f5efe3] transition-colors hover:border-[#d9a441] hover:text-[#ecc87e]"
                          >
                            <Plus className="h-3.5 w-3.5" aria-hidden="true" />
                          </button>
                          <button
                            type="button"
                            onClick={() => removeFromCart(line.id)}
                            aria-label={`Remove ${line.product.name} from cart`}
                            className="ml-2 text-xs font-medium text-[#f5efe3]/55 underline underline-offset-2 transition-colors hover:text-[#ecc87e]"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                      <p className="text-sm font-bold whitespace-nowrap text-[#ecc87e]">
                        ${line.product.price * line.qty}
                      </p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="border-t border-white/10 px-5 py-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-[#f5efe3]">Subtotal</p>
                <p className="font-display text-xl font-bold text-[#ecc87e]">${subtotal}</p>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-[#f5efe3]/45">
                Demo cart — no checkout and no payment. Prices are placeholders.
              </p>
            </div>
          </aside>
        </>
      ) : null}
    </>
  );
}