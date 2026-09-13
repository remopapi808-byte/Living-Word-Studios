import VimeoTrailer from '@/components/vimeo-trailer';
import WaitlistForm from '@/components/waitlist-form';

/**
 * Bible Shorts — homepage section. Heavy-left text column and a media column
 * holding the live 9:16 Vimeo trailer (SHEPHERDS & KINGS) with the storybook
 * waitlist form right below it. One live player — the single honest way to
 * show the series — scaled down to phone-frame width on mobile.
 */
export default function BibleShorts() {
  return (
    <section id="bible-shorts" className="scroll-mt-20 bg-[#f7f0e1]">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32 lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <p className="text-xs font-bold tracking-[0.22em] text-[#8a5a1d] uppercase">
            Cinematic series — trailer now streaming
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold text-[#2e2a26] sm:text-5xl">
            Bible Shorts
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#3c342b]/75 sm:text-lg">
            Short cinematic films that make the story of Jesus impossible to overlook —
            crafted for the screens we watch every day.
          </p>
        </div>
        <div className="mt-10 lg:col-span-5 lg:col-start-6 lg:mt-16">
          <VimeoTrailer maxWidthClass="max-w-xs sm:max-w-sm" />
          <div id="trailer-waitlist" className="mt-6 scroll-mt-24">
            <div className="rounded-[1.75rem] border border-[#d9a441]/30 bg-[#fffdf7] px-6 py-8 shadow-[0_2px_6px_rgba(176,122,30,0.10),0_16px_40px_-12px_rgba(176,122,30,0.28),0_32px_80px_-24px_rgba(217,164,65,0.18)]">
              <WaitlistForm
                source="storybook"
                idPrefix="trailer"
                buttonLabel="Get my free storybook"
                hook="Get our first digital storybook free when you join the waitlist."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}