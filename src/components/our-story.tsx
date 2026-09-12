/**
 * Our Story — spacious, high-end centered editorial founder statement
 * (Module 5). Placed on the homepage between <StudioGoods /> and
 * <CommunityClose />: "above the community footer section".
 *
 * DRAFT NOTICE (both markers per spec):
 *  - the statement below is DRAFT copy the owner must approve (or edit)
 *    before the pass merges. The visible chip on-page and this comment are
 *    the two markers the designer specified.
 */
const STATEMENT =
  'Living Word Studios began with a simple conviction: Scripture is alive, and it should feel alive on the screens we hold and the clothes we wear. So we make cinematic films, beautiful books, and quiet everyday pieces that carry hope into ordinary moments. Everything we build is meant to make the story of Jesus impossible to overlook — one frame, one page, one garment at a time.';

export default function OurStory() {
  return (
    <section aria-label="Our Story" className="relative scroll-mt-20 overflow-hidden bg-[#fffdf7]">
      {/* Top hairline — clean entrance from the studio goods section. */}
      <div
        className="h-px bg-gradient-to-r from-transparent via-[#d9a441]/60 to-transparent"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 sm:py-32 lg:py-40">
        <div className="flex items-center justify-center gap-2">
          <p className="text-xs font-bold tracking-[0.22em] text-[#8a5a1d] uppercase">
            Our Story
          </p>
          {/* Visible DRAFT marker — owner approves the wording before merge. */}
          <span className="rounded-full border border-[#b4552d]/40 bg-[#b4552d]/5 px-2.5 py-0.5 text-[10px] font-bold tracking-[0.14em] text-[#b4552d]/80 uppercase">
            DRAFT — owner to approve wording
          </span>
        </div>
        {/* Ornament: hairline · ✦ · hairline */}
        <div className="mt-6 flex items-center justify-center gap-4" aria-hidden="true">
          <span className="h-px w-16 bg-gradient-to-r from-transparent via-[#d9a441]/70 to-transparent" />
          <span className="font-display text-lg text-[#d9a441]">✦</span>
          <span className="h-px w-16 bg-gradient-to-r from-transparent via-[#d9a441]/70 to-transparent" />
        </div>
        {/* DRAFT COPY — owner to approve wording before merge */}
        <p className="font-display mx-auto mt-9 max-w-2xl text-2xl leading-snug font-bold text-[#2e2a26] sm:text-3xl lg:text-[2.5rem]">
          {STATEMENT}
        </p>
        <p className="font-display mt-10 text-base text-[#8a5a1d] italic">
          — The Living Word Studios team
        </p>
      </div>
      {/* Bottom hairline — clean entrance for the community footer section. */}
      <div
        className="h-px bg-gradient-to-r from-transparent via-[#d9a441]/60 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}