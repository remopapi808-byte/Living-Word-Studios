import type { Metadata } from 'next';
import SiteFooter from '@/components/site-footer';
import SiteHeader from '@/components/site-header';

export const metadata: Metadata = {
  title: 'Journal — Living Word Studios',
  description:
    'Notes on design, media, and faith from the Living Word Studios team.',
};

const ARTICLES = [
  {
    category: 'Streetwear',
    title:
      "Why we're designing faith-based streetwear for quiet conviction",
    excerpt:
      "Not loud, not performative — a small gold mark that carries hope into ordinary days. Here's the thinking behind the first drop, and why we think faith belongs on the everyday.",
  },
  {
    category: 'Film & Media',
    title:
      'Reimagining Genesis 1 for modern vertical screens',
    excerpt:
      'What does "let there be light" look like on a 9:16 screen? A look inside our approach to Episode 001 — frame by frame, from dusk to dawn.',
  },
];

const WALLPAPERS = [
  { slug: 'genesis-1-3', verse: 'Let there be light.', reference: 'Genesis 1:3' },
  {
    slug: 'john-1-5',
    verse: 'The light shines in the darkness.',
    reference: 'John 1:5',
  },
  {
    slug: 'psalm-23-1',
    verse: 'The LORD is my shepherd.',
    reference: 'Psalm 23:1',
  },
  {
    slug: 'isaiah-40-31',
    verse: 'They shall mount up with wings as eagles.',
    reference: 'Isaiah 40:31',
  },
  {
    slug: 'john-8-12',
    verse: 'I am the light of the world.',
    reference: 'John 8:12',
  },
  {
    slug: 'corinthians-13-13',
    verse: 'Faith, hope, and love — but the greatest of these is love.',
    reference: '1 Corinthians 13:13',
  },
];

/**
 * Journal (/blog) — the studio's quiet editorial corner. Parchment/charcoal
 * "quiet journal" rhythm per the optimization pass spec (Module 3). Two
 * article placeholder cards (honest "coming soon" — the read-more is an inert
 * span, not a link) and the six downloadable Minimalist Scripture Wallpapers
 * (real 9:16 SVG assets in /public/assets/wallpapers, KJV verses in the public
 * domain, brand palette only — no downloads are faked).
 */
export default function JournalPage() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="bg-[#f7f0e1]">
        <div className="mx-auto max-w-4xl px-4 pt-16 pb-24 sm:px-6 sm:pt-24 sm:pb-32">
          {/* ---------------- Page header ---------------- */}
          <header>
            <p className="text-xs font-bold tracking-[0.22em] text-[#8a5a1d] uppercase">
              The Journal
            </p>
            <h1 className="font-display mt-3 text-4xl font-bold text-[#2e2a26] sm:text-6xl">
              Notes from the studio
            </h1>
            <p className="mt-4 max-w-2xl text-base text-[#3c342b]/75 sm:text-lg">
              Behind-the-scenes thinking on the films, books, and everyday
              pieces we&apos;re making — honest notes, published as we write
              them.
            </p>
          </header>

          {/* ---------------- Article placeholder cards ---------------- */}
          <section aria-label="Articles" className="mt-12 grid gap-6 md:grid-cols-2">
            {ARTICLES.map((article) => (
              <article
                key={article.title}
                className="card-sheen rounded-[1.75rem] border border-[#e8d5a6] bg-[#fffdf7] p-7 sm:p-8"
              >
                <div className="h-1 w-12 rounded-full bg-gradient-to-r from-[#d9a441] to-[#b4552d]" />
                <div className="mt-5 flex flex-wrap items-center gap-2">
                  <span className="inline-flex rounded-full border border-[#d9a441]/50 bg-[#fdf6e3] px-3 py-1 text-[11px] font-bold tracking-[0.16em] text-[#8a5a1d] uppercase">
                    {article.category}
                  </span>
                  <span className="inline-flex rounded-full bg-[#3c342b]/8 px-3 py-1 text-[11px] font-semibold tracking-[0.14em] text-[#3c342b]/55 uppercase">
                    Coming soon
                  </span>
                </div>
                <h2 className="font-display mt-5 text-xl font-bold leading-snug text-[#2e2a26] sm:text-2xl">
                  {article.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[#3c342b]/70 sm:text-base">
                  {article.excerpt}
                </p>
                <div className="mt-6 flex items-center justify-between gap-4 border-t border-[#3c342b]/10 pt-5">
                  {/* Inert by design: no article exists yet. Not a link. */}
                  <span
                    aria-disabled="true"
                    className="text-sm font-semibold text-[#8a5a1d]/50"
                  >
                    Read the article →
                  </span>
                  <span className="text-xs text-[#3c342b]/45">
                    Draft in progress — lands soon
                  </span>
                </div>
              </article>
            ))}
          </section>

          {/* ---------------- Minimalist Scripture Wallpapers ---------------- */}
          <section aria-label="Free wallpaper downloads" className="mt-24">
            <p className="text-xs font-bold tracking-[0.22em] text-[#8a5a1d] uppercase">
              Free downloads
            </p>
            <h2 className="font-display mt-3 text-3xl font-bold text-[#2e2a26] sm:text-4xl">
              Minimalist Scripture Wallpapers
            </h2>
            <p className="mt-3 max-w-2xl text-base text-[#3c342b]/75">
              Six quiet 9:16 wallpapers for the phone in your pocket — free for
              personal use.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-6">
              {WALLPAPERS.map((wp) => (
                <figure key={wp.slug}>
                  <div className="aspect-[9/16] overflow-hidden rounded-2xl border border-[#e8d5a6] bg-[#fdf6e3] shadow-[0_2px_6px_rgba(176,122,30,0.10),0_10px_24px_-12px_rgba(176,122,30,0.35)]">
                    {/* Decorative preview — the verse is named in the caption below. */}
                    <img
                      src={`/assets/wallpapers/${wp.slug}.svg`}
                      alt=""
                      aria-hidden="true"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <figcaption className="mt-3">
                    <span className="font-display block text-sm leading-snug font-semibold text-[#2e2a26]">
                      {wp.verse}
                    </span>
                    <span className="block text-xs text-[#3c342b]/55">
                      {wp.reference}
                    </span>
                  </figcaption>
                  <p className="mt-1 text-[11px] tracking-wide text-[#3c342b]/45 uppercase">
                    Download — 9:16
                  </p>
                  <a
                    href={`/assets/wallpapers/${wp.slug}.svg`}
                    download
                    aria-label={`Download ${wp.verse} wallpaper, 9:16`}
                    className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-[#b07a1e]/50 px-3.5 py-1.5 text-xs font-semibold text-[#8a5a1d] transition-colors hover:border-[#d9a441] hover:bg-[#d9a441]/10"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                      className="h-3.5 w-3.5"
                    >
                      <path d="M12 4v10m0 0-4-4m4 4 4-4 M4 19h16" />
                    </svg>
                    Download
                  </a>
                </figure>
              ))}
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}