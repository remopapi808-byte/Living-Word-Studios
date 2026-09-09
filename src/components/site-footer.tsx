import Link from 'next/link';

const SECTION_LINKS = [
  { label: 'Bible Shorts', href: '#bible-shorts' },
  { label: 'Kids Kingdom', href: '#kids-kingdom' },
  { label: 'Illustrated Books', href: '#books' },
  { label: 'Studio Goods', href: '#studio-goods' },
  { label: 'Community', href: '#community' },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#0b0a08]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-10 sm:flex-row sm:justify-between sm:px-6">
        <div className="text-center sm:text-left">
          <p className="font-display text-lg font-bold text-[#f5efe3]">Living Word Studios</p>
          <p className="font-display mt-1 text-sm text-[#f5efe3]/60 italic">
            Making the story of Jesus impossible to overlook.
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          {SECTION_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-[#f5efe3]/60 transition-colors hover:text-[#ecc87e]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="border-t border-white/5">
        <p className="mx-auto max-w-6xl px-4 py-5 text-center text-xs text-[#f5efe3]/40 sm:px-6">
          &copy; {new Date().getFullYear()} Living Word Studios. Rooted in Jesus.
        </p>
      </div>
    </footer>
  );
}
