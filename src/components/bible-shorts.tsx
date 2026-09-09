import BibleShortsTeaser from '@/components/bible-shorts-teaser';

/**
 * Bible Shorts — homepage section. Heading + mission copy from the original
 * cinematic section, with the two-card grid replaced by the shared static
 * Coming Soon teaser (no video player, no placeholder films).
 *
 * Editorial layout: heavy-left text column (~55%), teaser banner pulled
 * right and slightly lower so the rhythm breaks against the mission strip.
 */
export default function BibleShorts() {
  return (
    <section id="bible-shorts" className="scroll-mt-20 bg-[#f7f0e1]">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:grid lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-6 lg:max-w-[34rem]">
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
        </div>
        <div className="mt-10 lg:col-span-6 lg:col-start-7 lg:mt-16">
          <BibleShortsTeaser />
        </div>
      </div>
    </section>
  );
}
