import Link from 'next/link';
import type { Metadata } from 'next';
import CommunityClose from '@/components/community-close';
import GoodsGrid from '@/components/goods-grid';
import SiteFooter from '@/components/site-footer';
import SiteHeader from '@/components/site-header';

export const metadata: Metadata = {
  title: 'Kids Kingdom — Big faith for little hearts | Living Word Studios',
  description:
    'Kids Kingdom at Living Word Studios: Bible story time, worship and songs, crafts and activities, and family resources — a bright, welcoming space where big faith meets little hearts. Come as you are.',
};

const FEATURES = [
  {
    mark: '\u271D',
    title: 'Bible Story Time',
    body: "Jesus\u2019 parables told the way children hear them best \u2014 simple, true, and full of wonder, with plenty of room for questions.",
  },
  {
    mark: '\u266A',
    title: 'Worship & Songs',
    body: 'Sing-along worship with hand motions and zero pressure \u2014 little voices belong in the big song too.',
  },
  {
    mark: '\u270E',
    title: 'Crafts & Activities',
    body: 'Hands-on crafts and playful games that carry the story home, so faith is something kids make, not just hear.',
  },
];

const FAMILY_RESOURCES = {
  title: 'Family Resources',
  body: `Take-home pages, reading guides, and bedtime devotionals for parents who want to keep the wonder going all week long \u2014 everything sweet and simple enough for little hearts, and honest enough for grown-ups.`,
};

const PARENT_PROMISES = [
  'Warm, welcoming volunteers who love seeing your kids learn',
  'Truth told gently \u2014 age-appropriate, honest, and kind',
  'Messy crafts and noisy songs are expected, not managed',
  'Stay close by if you like \u2014 parents are always welcome to join in',
  'Faith for the whole family, from the littlest heart to yours',
];

export default function KidsKingdomPage() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="kk-page bg-[#f7f0e1] text-[#5b4632]">
        {/* Hero */}
        <section
          id="kids-kingdom"
          className="kk-hero-glow relative scroll-mt-24 overflow-hidden border-b border-[#4a3728]/10"
        >
          <div className="kk-lines pointer-events-none absolute inset-0" aria-hidden="true" />
          <div className="kk-hero-inner relative mx-auto grid max-w-6xl items-center gap-10 px-4 pt-28 pb-20 sm:px-6 sm:pt-40 sm:pb-28 lg:grid-cols-12">
            <div className="lg:col-span-6 lg:max-w-[34rem]">
              <p className="inline-flex items-center gap-2 rounded-full border border-[#d9a441]/50 bg-[#fffdf7]/80 px-4 py-1.5 text-xs font-bold tracking-[0.2em] text-[#8a5a1d] uppercase">
                <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rounded-full bg-[#d9a441]" />
                Kids Kingdom &middot; For families
              </p>
              <h1 className="kk-hero-title font-display mt-5 text-4xl leading-[1.08] font-bold text-[#4a3728] sm:text-6xl">
                Big faith for <span className="text-[#b07a1e] italic">little hearts</span>
              </h1>
              <p className="kk-hero-copy mt-5 max-w-xl text-lg leading-relaxed text-[#5b4632] sm:text-xl">
                Kids Kingdom is a bright, joyful home inside Living Word Studios, where
                children meet the story of Jesus through stories, songs, crafts, and
                plenty of wonder &mdash; and parents find a warm place to belong too.
              </p>
              <div className="kk-hero-ctas mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/#community"
                  className="inline-flex items-center justify-center rounded-full bg-[#d9a441] px-7 py-3.5 text-base font-bold text-[#3b2a12] shadow-[0_10px_25px_-10px_rgba(176,122,30,0.7)] transition-colors hover:bg-[#ecc87e]"
                >
                  Come as you are
                </Link>
                <Link
                  href="#what-we-do"
                  className="inline-flex items-center justify-center rounded-full border-2 border-[#d9a441]/60 px-7 py-3.5 text-base font-bold text-[#4a3728] transition-colors hover:border-[#b07a1e] hover:text-[#8a5a1d]"
                >
                  Explore what we do
                </Link>
              </div>
            </div>

            {/* Storybook visual — pure CSS, bright palette, no image files.
                Hand-placed: sits right of the text and a touch low, tilted. */}
            <div aria-hidden="true" className="kk-hero-visual relative mx-auto w-full max-w-md lg:col-span-5 lg:col-start-8 lg:mt-14 lg:rotate-1">
              <div className="absolute -top-4 right-6 h-24 w-24 rounded-full bg-gradient-to-br from-[#ecc87e] to-[#d9a441] shadow-[0_0_50px_rgba(217,164,65,0.55)]" />
              <div className="relative overflow-hidden rounded-[2.5rem] border border-[#e8d5a6] bg-[#fffdf7] p-8 shadow-[0_2px_6px_rgba(176,122,30,0.10),0_16px_40px_-12px_rgba(176,122,30,0.28),0_32px_80px_-24px_rgba(217,164,65,0.18)] sm:p-10">
                {/* fluffy cloud */}
                <div className="absolute top-6 right-8 h-8 w-20 rounded-full bg-[#f3e7c4]" />
                <div className="absolute top-1 right-14 h-7 w-7 rounded-full bg-[#f3e7c4]" />
                {/* rolling hill */}
                <div className="absolute -bottom-10 -left-10 h-36 w-64 rounded-[50%] bg-[#f3e7c4]" />
                <div className="relative">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-[#fffdf7] bg-gradient-to-br from-[#ecc87e] to-[#d9a441] shadow-[0_12px_30px_-12px_rgba(176,122,30,0.7)]">
                    <span className="text-4xl text-[#3b2a12]">&#10022;</span>
                  </div>
                  <p className="font-display mt-6 text-2xl leading-snug font-bold text-[#4a3728] italic sm:text-3xl">
                    Every child is welcome here.
                  </p>
                  <p className="mt-3 text-xs font-bold tracking-[0.22em] text-[#8a5a1d] uppercase">
                    Stories &middot; Songs &middot; Crafts &middot; You
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature cards — staggered: text heavy-left, cards stepping down */}
        <section id="what-we-do" className="kk-section scroll-mt-24 border-b border-[#4a3728]/10">
          <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
            <div className="max-w-2xl lg:max-w-[34rem]">
              <p className="text-xs font-bold tracking-[0.22em] text-[#8a5a1d] uppercase">
                What happens here
              </p>
              <h2 className="font-display mt-3 text-3xl font-bold text-[#4a3728] sm:text-5xl">
                Made for little hearts to love
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#5b4632] sm:text-lg">
                Four simple things at every gathering: a story worth hearing, a song
                worth singing, something to make, and something to take home.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-x-7 lg:grid-cols-3 lg:gap-x-8">
              {FEATURES.map((feature, i) => (
                <article
                  key={feature.title}
                  className={`flex flex-col rounded-[1.75rem] border border-[#e8d5a6] bg-[#fffdf7] p-6 shadow-[0_2px_6px_rgba(176,122,30,0.10),0_16px_40px_-12px_rgba(176,122,30,0.28),0_32px_80px_-24px_rgba(217,164,65,0.18)] transition-shadow hover:shadow-[0_24px_50px_-24px_rgba(176,122,30,0.5)] ${i === 1 ? 'lg:mt-12' : i === 2 ? 'lg:mt-24' : ''}`}
                >
                  <span
                    aria-hidden="true"
                    className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ecc87e] to-[#d9a441] text-xl font-bold text-[#3b2a12]"
                  >
                    {feature.mark}
                  </span>
                  <h3 className="font-display mt-5 text-xl font-bold text-[#4a3728]">
                    {feature.title}
                  </h3>
                  <p className="mt-2.5 text-base leading-relaxed text-[#5b4632]">
                    {feature.body}
                  </p>
                </article>
              ))}
              <article className="flex flex-col gap-5 rounded-[2rem] border border-[#e8d5a6] bg-[#fffdf7] p-6 shadow-[0_2px_6px_rgba(176,122,30,0.10),0_16px_40px_-12px_rgba(176,122,30,0.28),0_32px_80px_-24px_rgba(217,164,65,0.18)] sm:col-span-2 lg:col-span-3 lg:ml-auto lg:max-w-[46rem] sm:flex-row sm:items-center sm:p-7">
                <span
                  aria-hidden="true"
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ecc87e] to-[#d9a441] text-xl font-bold text-[#3b2a12]"
                >
                  &#10084;
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold text-[#4a3728]">
                    {FAMILY_RESOURCES.title}
                  </h3>
                  <p className="mt-2.5 text-base leading-relaxed text-[#5b4632]">
                    {FAMILY_RESOURCES.body}
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Reassurance for parents */}
        <section id="for-parents" className="kk-section scroll-mt-24">
          <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
            <div className="rounded-[2.5rem] border border-[#e6d4a8] bg-[#fffdf7] p-8 shadow-[0_2px_6px_rgba(176,122,30,0.10),0_16px_40px_-12px_rgba(176,122,30,0.28),0_32px_80px_-24px_rgba(217,164,65,0.18)] sm:p-12 lg:grid lg:grid-cols-5 lg:gap-14">
              <div className="lg:col-span-2">
                <p className="text-xs font-bold tracking-[0.22em] text-[#8a5a1d] uppercase">
                  A word for parents
                </p>
                <h2 className="font-display mt-3 text-3xl font-bold text-[#4a3728] sm:text-4xl">
                  You can breathe here.
                </h2>
                <p className="mt-4 text-base leading-relaxed text-[#5b4632] sm:text-lg">
                  We know what it takes to get little ones out the door on a Sunday.
                  Kids Kingdom is a family space: whoever you are, whatever your week
                  looked like, you&rsquo;re welcome &mdash; and so are the wiggles.
                </p>
              </div>
              <ul className="mt-8 grid gap-3.5 lg:col-span-3 lg:mt-0">
                {PARENT_PROMISES.map((promise) => (
                  <li
                    key={promise}
                    className="flex items-start gap-3 rounded-2xl border border-[#e6d4a8] bg-[#f7f0e1]/70 p-4"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#d9a441] text-sm font-bold text-[#3b2a12]"
                    >
                      &#10003;
                    </span>
                    <p className="text-base leading-relaxed font-medium text-[#4a3728]">
                      {promise}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Joining CTA */}
        <section id="visit" className="kk-section scroll-mt-24">
          <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
            <div className="relative ml-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#ecc87e] via-[#d9a441] to-[#c08a2e] p-8 text-center shadow-[0_2px_6px_rgba(176,122,30,0.10),0_16px_40px_-12px_rgba(176,122,30,0.28),0_32px_80px_-24px_rgba(217,164,65,0.18)] sm:p-14">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full bg-[#fffdf7]/25"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-12 -bottom-14 h-48 w-48 rounded-full bg-[#fffdf7]/20"
              />
              <h2 className="font-display relative text-3xl font-bold text-[#3b2a12] sm:text-5xl">
                Come as you are
              </h2>
              <p className="relative mx-auto mt-4 max-w-2xl text-base leading-relaxed font-medium text-[#3b2a12]/85 sm:text-lg">
                Bring the wiggles, the giggles, and the brilliant questions &mdash;
                there is a place for your whole family at Kids Kingdom.
              </p>
              <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/#community"
                  className="inline-flex items-center justify-center rounded-full bg-[#fffdf7] px-8 py-3.5 text-base font-bold text-[#4a3728] shadow-[0_14px_30px_-14px_rgba(74,55,40,0.6)] transition-colors hover:bg-[#f7f0e1]"
                >
                  Find us &amp; say hello
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Studio Goods drop — adult + kids tees, hoodies, hats */}
        <GoodsGrid />
        <CommunityClose />
      </main>
      <SiteFooter />
    </>
  );
}