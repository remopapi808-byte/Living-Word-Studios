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

export default function IllustratedBooks() {
  return (
    <section id="books" className="scroll-mt-20 bg-[#f7f0e1]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
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
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {PILLARS.map((pillar) => (
            <article
              key={pillar.title}
              className="card-sheen rounded-2xl border border-[#e8d5a6] bg-[#fffdf7] p-6 shadow-[0_18px_40px_-28px_rgba(122,86,36,0.45)] sm:p-7"
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
        <p className="mt-8 text-sm font-semibold tracking-wide text-[#8a5a1d] uppercase">
          First titles — coming soon
        </p>
      </div>
    </section>
  );
}