import Link from 'next/link';

const NAV_LINKS = [
  { label: 'Bible Shorts', href: '#bible-shorts' },
  { label: 'Kids Kingdom', href: '#kids-kingdom' },
  { label: 'Books', href: '#books' },
  { label: 'Studio Goods', href: '#studio-goods' },
  { label: 'Community', href: '#community' },
];

export default function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0b0a08]/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="#top" className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#d9a441] to-[#b4552d] font-display text-lg font-bold text-[#0b0a08]"
          >
            LW
          </span>
          <span className="leading-tight">
            <span className="font-display block text-[15px] font-bold tracking-wide text-[#f5efe3]">
              Living Word Studios
            </span>
            <span className="block text-[11px] tracking-[0.18em] text-[#d9a441] uppercase">
              Rooted in Jesus
            </span>
          </span>
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[#f5efe3]/75 transition-colors hover:text-[#ecc87e]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="#bible-shorts"
          className="rounded-full bg-[#d9a441] px-4 py-2 text-sm font-semibold text-[#0b0a08] transition-colors hover:bg-[#ecc87e]"
        >
          Watch Bible Shorts
        </Link>
      </div>
    </header>
  );
}
