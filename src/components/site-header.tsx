import Link from 'next/link';
import BrandMark from '@/components/brand-mark';

const NAV_LINKS = [
  { label: 'Bible Shorts', href: '#bible-shorts' },
  { label: 'Kids Kingdom', href: '/kids-kingdom' },
  { label: 'Books', href: '#books' },
  { label: 'Studio Goods', href: '/studio-goods' },
  { label: 'Community', href: '#community' },
];

interface SiteHeaderProps {
  /**
   * 'dark'  — the cinematic dark-ink bar used across the site (default).
   * 'light' — warm parchment bar with deep brown text, for bright pages
   *           like /kids-kingdom where a dark bar would clash.
   */
  variant?: 'dark' | 'light';
}

export default function SiteHeader({ variant = 'dark' }: SiteHeaderProps) {
  const light = variant === 'light';
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md ${
        light
          ? 'border-[#4a3728]/10 bg-[#f7f0e1]/90'
          : 'border-white/10 bg-[#0b0a08]/85'
      }`}
    >
      <div className="site-header-bar mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="#top" className="flex min-w-0 items-center gap-3">
          <BrandMark />
          <span className="leading-tight">
            <span
              className={`brand-name font-display block text-[15px] font-bold tracking-wide ${
                light ? 'text-[#4a3728]' : 'text-[#f5efe3]'
              }`}
            >
              Living Word Studios
            </span>
            <span
              className={`brand-tagline block text-[11px] tracking-[0.18em] uppercase ${
                light ? 'text-[#8a5a1d]' : 'text-[#d9a441]'
              }`}
            >
              Rooted in Jesus
            </span>
          </span>
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors ${
                light
                  ? 'text-[#4a3728]/75 hover:text-[#8a5a1d]'
                  : 'text-[#f5efe3]/75 hover:text-[#ecc87e]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="#bible-shorts"
          className={`site-header-cta shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
            light
              ? 'bg-[#d9a441] text-[#3b2a12] hover:bg-[#ecc87e]'
              : 'bg-[#d9a441] text-[#0b0a08] hover:bg-[#ecc87e]'
          }`}
        >
          Watch Bible Shorts
        </Link>
      </div>
    </header>
  );
}