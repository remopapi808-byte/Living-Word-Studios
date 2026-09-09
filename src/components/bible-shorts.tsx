import BibleShortsTeaser from '@/components/bible-shorts-teaser';

/**
 * Bible Shorts — homepage section. Heading + mission copy from the original
 * cinematic section, with the two-card grid replaced by the shared static
 * Coming Soon teaser (no video player, no placeholder films).
 */
export default function BibleShorts() {
  return (
    <section id="bible-shorts" className="scroll-mt-20 bg-[#f7f0e1]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-xs font-bold tracking-[0.22em] text-[#8a5a1d] uppercase">
          Cinematic series — coming soon
        </p>
        <h2 className="font-display mt-3 text-3xl font-bold text-[#2e2a26] sm:text-5xl">
          Bible Shorts
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#3c342b]/75 sm:text-lg">
          Short cinematic films that make the story of Jesus impossible to overlook —
          crafted for the screens we watch every day.
        </p>
        <div className="mt-10">
          <BibleShortsTeaser />
        </div>
      </div>
    </section>
  );
}