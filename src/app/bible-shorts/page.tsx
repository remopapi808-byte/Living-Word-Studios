import type { Metadata } from 'next';
import AudioDramaPlayer from '@/components/audio-drama-player';
import CommunityClose from '@/components/community-close';
import SiteFooter from '@/components/site-footer';
import SiteHeader from '@/components/site-header';

export const metadata: Metadata = {
  title: 'Bible Shorts — Media Room | Living Word Studios',
  description:
    'Step inside the Bible Shorts Media Room at Living Word Studios: stream the LWS/001 audio-drama sample, "In the Beginning," feel the storytelling style, and join the waitlist for the full chapter — short cinematic stories that make the story of Jesus impossible to overlook.',
};

const SERIES_PILLARS = [
  {
    number: '01',
    title: 'Small screens, big moments',
    body: 'Every episode is paced for the everyday scroll: short, cinematic, and impossible to skip past. One chapter, one truth, one minute you did not expect.',
  },
  {
    number: '02',
    title: 'A room you can hear',
    body: 'Voice, music, and stillness do the lighting. Close your eyes and the story becomes a room you are standing in — told the way it was meant to be heard.',
  },
  {
    number: '03',
    title: 'Scripture-shaped, honestly told',
    body: 'The words stay close to the text and the tone stays honest — no hollering, no manipulation. Just the story of Jesus, made impossible to overlook.',
  },
];

export default function BibleShortsPage() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="bg-[#f7f0e1]">
        {/* ------------------------------------------------------------
            Hero — light parchment, cinematic dark accents as panels only.
            ------------------------------------------------------------ */}
        <section className="hero-glow relative overflow-hidden">
          <div className="texture-lines pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className="bsmr-hero-inner relative mx-auto grid max-w-6xl items-center gap-12 px-4 pt-28 pb-20 sm:px-6 sm:pt-40 sm:pb-28 lg:grid-cols-12">
            <div className="lg:col-span-7 lg:max-w-[40rem]">
              <p className="inline-flex items-center gap-2 rounded-full border border-[#d9a441]/50 bg-[#fffdf7]/80 px-4 py-1.5 text-xs font-bold tracking-[0.2em] text-[#8a5a1d] uppercase">
                <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rounded-full bg-[#d9a441]" />
                Bible Shorts &middot; Media room &middot; LWS/001
              </p>
              <h1 className="bsmr-hero-title font-display mt-5 text-4xl leading-[1.08] font-bold text-[#2e2a26] sm:text-6xl">
                The Bible Shorts <span className="text-[#b07a1e] italic">Media Room</span>
              </h1>
              <p className="bsmr-hero-copy mt-5 max-w-xl text-lg leading-relaxed text-[#3c342b]/80 sm:text-xl">
                Short, cinematic stories that make the story of Jesus impossible to
                overlook — crafted for the screens we watch every day. Step inside
                LWS/001 before it ships.
              </p>
              <div className="bsmr-hero-ctas mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#player"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d9a441] px-7 py-3.5 text-base font-bold text-[#3b2a12] shadow-[0_14px_34px_-16px_rgba(217,164,65,0.95)] transition-colors hover:bg-[#ecc87e]"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
                    <path d="M8 5.14v13.72c0 .8.87 1.3 1.56.88l10.9-6.86a1.04 1.04 0 0 0 0-1.76L9.56 4.26A1.04 1.04 0 0 0 8 5.14Z" />
                  </svg>
                  Listen to the sample
                </a>
                <a
                  href="#community"
                  className="inline-flex items-center justify-center rounded-full border-2 border-[#d9a441]/60 px-7 py-3.5 text-base font-bold text-[#4a3728] transition-colors hover:border-[#b07a1e] hover:text-[#8a5a1d]"
                >
                  Notify me when it drops
                </a>
              </div>
              <p className="bsmr-hero-note mt-5 text-sm leading-relaxed text-[#3c342b]/60">
                The first chapter is in production — the sample below is a
                pre-production listen, recorded so you can feel the style today.
              </p>
            </div>

            {/* Decorative console visual — pure CSS, no image files. */}
            <div
              aria-hidden="true"
              className="bsmr-hero-visual relative mx-auto w-full max-w-sm lg:col-span-4 lg:col-start-9"
            >
              <div className="relative overflow-hidden rounded-[2.5rem] border border-[#4a3728]/15 bg-[#2e2a26] p-8 shadow-[0_2px_6px_rgba(176,122,30,0.10),0_24px_60px_-20px_rgba(46,42,38,0.5)]">
                {/* film perforations */}
                <div className="absolute inset-x-0 top-0 flex justify-center gap-3 pt-3">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <span key={i} className="h-1.5 w-1.5 rounded-[2px] bg-[#ecc87e]/40" />
                  ))}
                </div>
                <div className="absolute inset-x-0 bottom-0 flex justify-center gap-3 pb-3">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <span key={`b-${i}`} className="h-1.5 w-1.5 rounded-[2px] bg-[#ecc87e]/40" />
                  ))}
                </div>
                {/* spinning record */}
                <div className="bsmr-vinyl relative mx-auto flex h-52 w-52 items-center justify-center rounded-full bg-[radial-gradient(circle_at_35%_30%,#55493e,#2e2a26_62%)] shadow-[inset_0_0_30px_rgba(0,0,0,0.55)] sm:h-56 sm:w-56">
                  <div className="absolute inset-4 rounded-full border border-[#fdf6e3]/10" />
                  <div className="absolute inset-8 rounded-full border border-[#fdf6e3]/10" />
                  <div className="absolute inset-12 rounded-full border border-[#fdf6e3]/10" />
                  <div className="flex h-24 w-24 flex-col items-center justify-center rounded-full bg-[#d9a441] shadow-[inset_0_0_0_5px_rgba(46,42,38,0.15)]">
                    <span className="text-[10px] font-bold tracking-[0.24em] text-[#2e2a26]">LWS</span>
                    <span className="font-display text-xl font-bold text-[#2e2a26]">/001</span>
                  </div>
                </div>
                <p className="font-display mt-6 text-center text-lg font-bold text-[#fdf6e3] italic">
                  &ldquo;In the Beginning&rdquo;
                </p>
                <p className="mt-1 text-center text-[11px] font-bold tracking-[0.26em] text-[#ecc87e] uppercase">
                  Now featured · Audio-drama
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------
            Featured audio-drama — the charcoal accent panel holding the
            streaming player. Dark #2e2a26 as a panel, never the base.
            ------------------------------------------------------------ */}
        <section id="player" className="scroll-mt-24">
          <div className="mx-auto max-w-6xl px-4 pt-6 pb-24 sm:px-6 sm:pb-32">
            <div className="ap-media-panel relative overflow-hidden rounded-[2.5rem] bg-[#2e2a26] p-6 shadow-[0_2px_6px_rgba(176,122,30,0.10),0_24px_60px_-20px_rgba(46,42,38,0.55)] sm:p-10">
              {/* warm gold wash over the charcoal — the only dark surface on the page */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_80%_-10%,rgba(217,164,65,0.22),transparent_60%),radial-gradient(ellipse_50%_45%_at_5%_110%,rgba(217,164,65,0.12),transparent_65%)]"
              />
              <div className="relative grid gap-10 lg:grid-cols-12 lg:gap-12">
                <div className="lg:col-span-5">
                  <p className="inline-flex items-center gap-2 rounded-full border border-[#d9a441]/60 bg-[#d9a441]/10 px-4 py-1.5 text-[11px] font-bold tracking-[0.22em] text-[#ecc87e] uppercase">
                    <span
                      aria-hidden="true"
                      className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[#d9a441]"
                    />
                    Now featured · Audio-drama
                  </p>
                  <p className="mt-6 font-mono text-sm tracking-[0.3em] text-[#ecc87e]">LWS/001</p>
                  <h2 className="ap-drama-title font-display mt-2 text-3xl font-bold text-[#fffdf7] sm:text-4xl">
                    &ldquo;In the Beginning&rdquo;
                  </h2>
                  <p className="mt-4 max-w-md text-base leading-relaxed text-[#fdf6e3]/75">
                    The first Bible Short opens the story where it starts — light,
                    creation, and a God who speaks hope into the dark. This listening
                    sample gives you the feel of the finished chapter: the pacing, the
                    voices, the quiet before the first words.
                  </p>
                  <dl className="mt-6 grid max-w-md grid-cols-3 gap-3">
                    {[
                      ['Series', 'Bible Shorts'],
                      ['Format', 'Audio-drama'],
                      ['Status', 'Pre-production'],
                    ].map(([term, detail]) => (
                      <div
                        key={term}
                        className="rounded-2xl border border-[#fdf6e3]/15 bg-[#fdf6e3]/5 p-3"
                      >
                        <dt className="text-[10px] font-bold tracking-[0.18em] text-[#ecc87e]/80 uppercase">
                          {term}
                        </dt>
                        <dd className="mt-1 text-sm font-semibold text-[#fdf6e3]">{detail}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-5 max-w-md text-xs leading-relaxed text-[#fdf6e3]/55">
                    Honest note: the first chapter is in production. The track below is a
                    pre-production audio sample — a placeholder recording so you can hear
                    the storytelling style right now.
                  </p>
                </div>
                <div className="lg:col-span-7">
                  <AudioDramaPlayer />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------
            Why audio-drama — light series description section.
            ------------------------------------------------------------ */}
        <section className="border-t border-[#4a3728]/10 bg-[#f7f0e1]">
          <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
            <div className="grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="text-xs font-bold tracking-[0.22em] text-[#8a5a1d] uppercase">
                  Why audio-drama
                </p>
                <h2 className="font-display mt-3 text-3xl leading-tight font-bold text-[#2e2a26] sm:text-5xl">
                  Made for the screens we watch every day.
                </h2>
                <blockquote className="font-display mt-6 border-l-4 border-[#d9a441] pl-5 text-xl text-[#4a3728] italic sm:text-2xl">
                  &ldquo;Make the story of Jesus impossible to overlook — and keep it
                  impossible to forget.&rdquo;
                </blockquote>
                <a
                  href="#community"
                  className="mt-8 inline-flex items-center justify-center rounded-full bg-[#d9a441] px-7 py-3.5 text-base font-bold text-[#3b2a12] shadow-[0_14px_34px_-16px_rgba(217,164,65,0.95)] transition-colors hover:bg-[#ecc87e]"
                >
                  Notify me when the chapter drops
                </a>
              </div>
              <div className="space-y-5 lg:col-span-7">
                {SERIES_PILLARS.map((pillar) => (
                  <article
                    key={pillar.number}
                    className="flex items-start gap-5 rounded-[1.75rem] border border-[#e8d5a6] bg-[#fffdf7] p-6 shadow-[0_2px_6px_rgba(176,122,30,0.10),0_16px_40px_-12px_rgba(176,122,30,0.28)] transition-shadow hover:shadow-[0_24px_50px_-24px_rgba(176,122,30,0.5)] sm:p-7"
                  >
                    <span
                      aria-hidden="true"
                      className="font-display flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ecc87e] to-[#d9a441] text-sm font-bold text-[#3b2a12]"
                    >
                      {pillar.number}
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-bold text-[#2e2a26]">
                        {pillar.title}
                      </h3>
                      <p className="mt-2 text-base leading-relaxed text-[#3c342b]/75">
                        {pillar.body}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CommunityClose />
      </main>
      <SiteFooter />
    </>
  );
}