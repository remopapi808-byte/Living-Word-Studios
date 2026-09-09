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
 * Site header — warm parchment bar with deep charcoal text and gold accent
 * on every page (global light theme, 2026-09-09).
 */
export default function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#4a3728]/10 bg-[#f7f0e1]/90 backdrop-blur-md">
      <div className="site-header-bar mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="#top" className="flex min-w-0 items-center gap-3">
          <BrandMark />
          <span className="brand-name font-display block text-[15px] font-bold tracking-wide text-[#4a3728]">
            Living Word Studios
          </span>
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
          className="site-header-cta shrink-0 rounded-full bg-[#d9a441] px-4 py-2 text-sm font-semibold text-[#3b2a12] transition-colors hover:bg-[#ecc87e]"
        >
          Watch Bible Shorts
        </Link>
      </div>
    </header>
  );
}