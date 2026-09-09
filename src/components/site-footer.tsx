import Link from 'next/link';

const SECTION_LINKS = [
  { label: 'Bible Shorts', href: '/bible-shorts' },
  { label: 'Kids Kingdom', href: '#kids-kingdom' },
  { label: 'Illustrated Books', href: '#books' },
  { label: 'Studio Goods', href: '#studio-goods' },
  { label: 'Community', href: '#community' },
];

/**
 * Site footer — warm parchment closing band with deep charcoal text on every
 * page (global light theme, 2026-09-09).
 */
export default function SiteFooter() {
  return (
    <footer className="border-t border-[#4a3728]/10 bg-[#f2e6c8]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-10 sm:flex-row sm:justify-between sm:px-6">
        <div className="text-center sm:text-left">
          <p className="font-display text-lg font-bold text-[#4a3728]">Living Word Studios</p>
          <p className="font-display mt-1 text-sm text-[#5b4632]/80 italic">
            Making the story of Jesus impossible to overlook.
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {SECTION_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[#5b4632]/80 transition-colors hover:text-[#8a5a1d]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="border-t border-[#4a3728]/10">
        <p className="mx-auto max-w-6xl px-4 py-5 text-center text-xs text-[#5b4632]/60 sm:px-6">
          &copy; {new Date().getFullYear()} Living Word Studios.
        </p>
      </div>
    </footer>
  );
}