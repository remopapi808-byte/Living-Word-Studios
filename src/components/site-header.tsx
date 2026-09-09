'use client';

import { useEffect, useRef, useState } from 'react';
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
 * beside the nav from md up (md:static). The inline primary nav only appears
 * at lg+ (≥1024px) so the lockup, nav and CTA can never collide on the
 * md-range (768–1023px, incl. landscape phones). Below lg a lightweight
 * hamburger toggle opens a parchment dropdown with the same five links; it
 * closes on link click, outside click or Esc. The toggle sits in the
 * right-side group with the CTA (never under the centered mobile lockup).
 */
export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    function onPointerDown(e: MouseEvent | TouchEvent) {
      if (barRef.current && !barRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setMenuOpen(false);
    }
    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('touchstart', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('touchstart', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#4a3728]/10 bg-[#f7f0e1]/90 backdrop-blur-md">
      <div
        ref={barRef}
        className="site-header-bar relative mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6"
      >
        <Link
          href="#top"
          aria-label="Living Word Studios — home"
          className="brand-lockup absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap md:static md:z-auto md:shrink-0 md:translate-x-0 md:translate-y-0"
        >
          <BrandMark />
        </Link>
        {/* Inline nav — lg+ only so it can never collide with the lockup or CTA. */}
        <nav aria-label="Primary" className="hidden min-w-0 items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm whitespace-nowrap text-[#3c342b]/75 transition-colors hover:text-[#8a5a1d]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        {/* Right group: CTA pill + hamburger toggle (below lg). */}
        <div className="relative z-10 ml-auto flex shrink-0 items-center gap-2 sm:gap-3 md:ml-0">
          <Link
            href="/bible-shorts"
            aria-label="Watch Bible Shorts"
            className="site-header-cta flex shrink-0 items-center rounded-full bg-[#d9a441] px-2.5 py-2 text-sm font-semibold text-[#3b2a12] transition-colors hover:bg-[#ecc87e] sm:px-4"
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
            <span className="hidden whitespace-nowrap sm:inline">Watch Bible Shorts</span>
          </Link>
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={menuOpen}
            aria-controls="site-menu"
            onClick={() => setMenuOpen((open) => !open)}
            className="site-menu-toggle inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#e8d5a6] bg-[#fdf6e3] p-0 text-[#3c342b] transition-colors hover:text-[#8a5a1d] sm:h-10 sm:w-10 lg:hidden"
          >
            <span className="relative block h-3.5 w-5" aria-hidden="true">
              <span
                className={`absolute left-0 top-0 h-[2px] w-full rounded-full bg-current transition-transform duration-200 ${
                  menuOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : ''
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 rounded-full bg-current transition-opacity duration-200 ${
                  menuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-current transition-transform duration-200 ${
                  menuOpen ? 'bottom-1/2 translate-y-1/2 -rotate-45' : ''
                }`}
              />
            </span>
          </button>
          {/* Dropdown nav (below lg) — same links as the inline nav, parchment
              panel with charcoal text and gold hover, soft layered gold shadow. */}
          <div
            id="site-menu"
            className={`absolute right-0 top-full z-50 mt-2 w-64 rounded-xl border border-[#e8d5a6]/70 bg-[#fdf6e3] p-2 shadow-[0_12px_32px_-12px_rgba(176,122,30,0.5),0_4px_14px_-6px_rgba(217,164,65,0.4)] ${
              menuOpen ? 'block' : 'hidden'
            }`}
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center rounded-lg px-3 py-2.5 text-sm font-medium text-[#3c342b] transition-colors hover:bg-[#f7f0e1] hover:text-[#8a5a1d]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}