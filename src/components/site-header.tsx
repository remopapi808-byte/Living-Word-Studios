import Link from 'next/link';
import BrandMark from '@/components/brand-mark';
const NAV_LINKS = [
  { label: 'Bible Shorts', href: '/bible-shorts' },
  { label: 'Kids Kingdom', href: '/kids-kingdom' },
  { label: 'Books', href: '#books' },
  { label: 'Studio Goods', href: '/studio-goods' },
  { label: 'Community', href: '#community' },
];

/**
 * Site header — warm parchment bar with charcoal text and gold accents on
 * every page (global light theme, 2026-09-09).
 *
 * Alignment: the brand lockup (mark + LIVING WORD/STUDIOS type) is absolutely
 * centered in the bar on mobile and becomes a static, left-aligned flex item
 * beside the primary nav on md+ (md:static). On screens narrower than `sm`
 * the "Watch Bible Shorts" CTA collapses to a gold play-icon pill so the
 * centered lockup never collides with the CTA at ~390px phones.
 */
export default function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#4a3728]/10 bg-[#f7f0e1]/90 backdrop-blur-md">
      <div className="site-header-bar relative mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="#top"
          aria-label="Living Word Studios — home"
          className="brand-lockup absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 md:static md:z-auto md:translate-x-0 md:translate-y-0"
        >
          <BrandMark />
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[#3c342b]/75 transition-colors hover:text-[#8a5a1d]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/bible-shorts"
          aria-label="Watch Bible Shorts"
          className="site-header-cta ml-auto flex shrink-0 items-center rounded-full bg-[#d9a441] px-2.5 py-2 text-sm font-semibold text-[#3b2a12] transition-colors hover:bg-[#ecc87e] sm:px-4 md:ml-0"
        >
          {/* Mobile (<sm): icon-only pill so the centered lockup has room */}
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-4 w-4 shrink-0 sm:hidden"
            fill="currentColor"
          >
            <path d="M8 5.5v13l11-6.5z" />
          </svg>
          <span className="hidden sm:inline">Watch Bible Shorts</span>
        </Link>
      </div>
    </header>
  );
}