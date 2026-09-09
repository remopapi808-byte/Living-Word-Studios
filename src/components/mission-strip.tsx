const BEATS = [
  {
    eyebrow: 'Screens',
    title: 'Stories that stop the scroll',
    body: 'Short films made for the phone in your pocket — the story of Jesus, told cinematically, wherever you already watch.',
  },
  {
    eyebrow: 'Pages',
    title: 'Parables for parent and child',
    body: 'Beautifully made books that bring families together around timeless parables — read aloud, remembered for years.',
  },
  {
    eyebrow: 'Everyday',
    title: 'A quiet reminder of hope',
    body: 'Streetwear that carries hope into ordinary days — worn with quiet conviction, never loud, never performative.',
  },
];

export default function MissionStrip() {
  return (
    <section aria-label="Our mission" className="bg-[#faf3e6]">
      <div className="mx-auto grid max-w-6xl gap-4 px-4 py-14 sm:grid-cols-3 sm:px-6 sm:py-16">
        {BEATS.map((beat, i) => (
          <article
            key={beat.eyebrow}
            className="card-sheen rounded-2xl border border-[#e8d5a6] bg-[#fffdf7] p-6 shadow-[0_18px_40px_-28px_rgba(122,86,36,0.45)] sm:p-7"
          >
            <p className="text-xs font-bold tracking-[0.22em] text-[#8a5a1d] uppercase">
              {String(i + 1).padStart(2, '0')} — {beat.eyebrow}
            </p>
            <h2 className="font-display mt-3 text-xl font-bold text-[#2e2a26]">{beat.title}</h2>
            <p className="mt-2.5 text-sm leading-relaxed text-[#3c342b]/70">{beat.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}