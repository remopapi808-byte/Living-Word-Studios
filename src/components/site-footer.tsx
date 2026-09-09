import Link from 'next/link';

const SECTION_LINKS = [
  { label: 'Bible Shorts', href: '#bible-shorts' },
  { label: 'Kids Kingdom', href: '#kids-kingdom' },
  { label: 'Illustrated Books', href: '#books' },
  { label: 'Studio Goods', href: '#studio-goods' },
  { label: 'Community', href: '#community' },
];

interface SiteFooterProps {
  /**
   * 'dark'  — the cinematic dark-ink closing band used across the site (default).
   * 'light' — warm parchment closing band with deep brown text, for bright pages
   *           like /kids-kingdom so the whole page stays light.
   */
  variant?: 'dark' | 'light';
}

export default function SiteFooter({ variant = 'dark' }: SiteFooterProps) {
  const light = variant === 'light';
  return (
    <footer
      className={`border-t ${
        light ? 'border-[#4a3728]/10 bg-[#f2e6c8]' : 'border-white/10 bg-[#0b0a08]'
      }`}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-10 sm:flex-row sm:justify-between sm:px-6">
        <div className="text-center sm:text-left">
          <p
            className={`font-display text-lg font-bold ${
              light ? 'text-[#4a3728]' : 'text-[#f5efe3]'
            }`}
          >
            Living Word Studios
          </p>
          <p
            className={`font-display mt-1 text-sm italic ${
              light ? 'text-[#5b4632]/80' : 'text-[#f5efe3]/60'
            }`}
          >
            Making the story of Jesus impossible to overlook.
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {SECTION_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors ${
                light
                  ? 'text-[#5b4632]/80 hover:text-[#8a5a1d]'
                  : 'text-[#f5efe3]/60 hover:text-[#ecc87e]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className={light ? 'border-t border-[#4a3728]/10' : 'border-t border-white/5'}>
        <p
          className={`mx-auto max-w-6xl px-4 py-5 text-center text-xs sm:px-6 ${
            light ? 'text-[#5b4632]/60' : 'text-[#f5efe3]/40'
          }`}
        >
          &copy; {new Date().getFullYear()} Living Word Studios. Rooted in Jesus.
        </p>
      </div>
    </footer>
  );
}