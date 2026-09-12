const PILLARS = [
  {
    title: 'Premium craft',
    body: 'Design-forward books that belong on the shelf — considered typography, rich illustration, quality materials.',
  },
  {
    title: 'Stories that endure',
    body: 'Publishing that is honest, welcoming, and quietly hopeful — never diluted, never performative.',
  },
  {
    title: 'Made to be gifted',
    body: 'Beautiful objects worth giving — books that start conversations and stay in the home for years.',
  },
];

/* Real first-titles artwork from the owner's book pages. Each entry maps a
   cleaned asset in public/assets/artwork to its title for the caption chip. */
const PAGES = [
  {
    src: '/assets/artwork/page-my-first-book-of-jesus-and-the-gospel.png',
    title: 'My First Book of Jesus & the Gospel',
  },
  {
    src: '/assets/artwork/page-the-greatest-love.png',
    title: 'The Greatest Love',
  },
  {
    src: '/assets/artwork/page-meet-jesus.png',
    title: 'Meet Jesus!',
  },
  {
    src: '/assets/artwork/page-shine-your-light.png',
    title: 'Shine Your Light!',
  },
  {
    src: '/assets/artwork/page-peace-be-still.png',
    title: 'Peace! Be Still!',
  },
];

/* Hand-placed editorial rhythm: slight rotations and vertical drift so the
   row reads like pages resting on a table, not a strict grid. */
const PAGE_POSE = [
  'md:-rotate-2 md:-mt-2',
  'md:rotate-1 md:mt-6',
  'md:-rotate-1 md:-mt-1',
  'md:rotate-2 md:mt-8',
  'md:-rotate-1 md:mt-2',
];

export default function IllustratedBooks() {
  return (
    <section id="books" className="scroll-mt-20 bg-[#f7f0e1]">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
        <div className="lg:max-w-[36rem]">
          <p className="text-xs font-bold tracking-[0.22em] text-[#8a5a1d] uppercase">
            Publishing — coming soon
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold text-[#2e2a26] sm:text-5xl">
            Illustrated Books
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#3c342b]/75 sm:text-lg">
            A premium publishing line from Living Word Studios — beautiful books with a
            design-forward feel, made to be kept, gifted, and re-read.
          </p>
        </div>

        {/* Real first-title pages — a small, hand-placed showcase. */}
        <div className="mt-12 flex flex-wrap items-start justify-center gap-5 sm:gap-6 md:mt-16 md:gap-7">
          {PAGES.map((page, i) => (
            <figure
              key={page.src}
              className={`card-sheen w-40 rounded-[1.6rem] border border-[#e8d5a6] bg-[#fffdf7] p-2.5 shadow-[0_2px_6px_rgba(176,122,30,0.10),0_16px_40px_-12px_rgba(176,122,30,0.28),0_32px_80px_-24px_rgba(217,164,65,0.18)] sm:w-44 ${PAGE_POSE[i]}`}
            >
              <div className="overflow-hidden rounded-[1.15rem] border border-[#e6d4a8] bg-white">
                <img
                  src={page.src}
                  alt={`${page.title} — page art from the first Living Word Studios books (preview)`}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="h-auto w-full object-contain"
                />
              </div>
              <figcaption className="mt-2.5 px-1 text-center text-[11px] leading-snug font-semibold tracking-wide text-[#8a5a1d]">
                {page.title}
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-6 text-center text-xs leading-relaxed text-[#5b4632]/70 sm:mt-8">
          Real pages from the first titles — published very soon.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-3 md:gap-7">
          {PILLARS.map((pillar, i) => (
            <article
              key={pillar.title}
              className={`card-sheen rounded-[1.75rem] border border-[#e8d5a6] bg-[#fffdf7] p-6 shadow-[0_2px_6px_rgba(176,122,30,0.10),0_16px_40px_-12px_rgba(176,122,30,0.28),0_32px_80px_-24px_rgba(217,164,65,0.18)] sm:p-7 ${['', 'md:mt-12', 'md:mt-24'][i]}`}
            >
              <div
                aria-hidden="true"
                className="h-1 w-12 rounded-full bg-gradient-to-r from-[#d9a441] to-[#b4552d]"
              />
              <h3 className="font-display mt-4 text-xl font-bold text-[#2e2a26]">
                {pillar.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-[#3c342b]/70">{pillar.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <a
            href="/assets/coloring-page-parable.pdf"
            download
            aria-label="Download free printable coloring page (PDF)"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#b07a1e]/50 bg-transparent px-6 py-3 text-sm font-semibold text-[#8a5a1d] transition-colors hover:border-[#d9a441] hover:bg-[#d9a441]/10"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path d="M12 4v10m0 0-4-4m4 4 4-4 M4 19h16" />
            </svg>
            Download Free Coloring Page Parable (PDF)
          </a>
        </div>
        <p className="mt-12 text-sm font-semibold tracking-wide text-[#8a5a1d] uppercase md:mt-16">
          First titles — coming soon
        </p>
      </div>
    </section>
  );
}