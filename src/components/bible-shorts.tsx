import Link from 'next/link';

export default function BibleShorts() {
  return (
    <section id="bible-shorts" className="scroll-mt-20 bg-[#14120e]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-xs font-bold tracking-[0.22em] text-[#d9a441] uppercase">
          Cinematic series — coming soon
        </p>
        <h2 className="font-display mt-3 text-3xl font-bold text-[#f5efe3] sm:text-5xl">
          Bible Shorts
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#f5efe3]/70 sm:text-lg">
          Short cinematic films that make the story of Jesus impossible to overlook —
          crafted for the screens we watch every day.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {/* Featured production card */}
          <article className="relative overflow-hidden rounded-2xl border border-[#d9a441]/30 bg-gradient-to-br from-[#241a08] via-[#14120e] to-[#0b0a08] p-7 sm:p-9">
            <div className="texture-lines pointer-events-none absolute inset-0" aria-hidden="true" />
            <div className="relative">
              <p className="inline-flex rounded-full bg-[#d9a441] px-3 py-1 text-xs font-bold tracking-widest text-[#0b0a08] uppercase">
                First production
              </p>
              <p className="mt-5 font-mono text-sm tracking-[0.25em] text-[#ecc87e]">LWS/001</p>
              <h3 className="font-display mt-2 text-3xl font-bold text-[#f5efe3] sm:text-4xl">
                &ldquo;In the Beginning&rdquo;
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-[#f5efe3]/65 sm:text-base">
                Our first Bible Short — now in production. A cinematic opening chapter,
                made to be shared.
              </p>
              <p className="mt-5 text-sm font-semibold tracking-wide text-[#d9a441] uppercase">
                Coming soon
              </p>
            </div>
          </article>

          {/* Series card */}
          <article className="card-sheen flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0b0a08] p-7 sm:p-9">
            <div>
              <p className="font-mono text-sm tracking-[0.25em] text-[#f5efe3]/50">
                THE SERIES
              </p>
              <h3 className="font-display mt-2 text-2xl font-bold text-[#f5efe3]">
                More shorts on the way
              </h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[#f5efe3]/65 sm:text-base">
                <li className="flex gap-3">
                  <span aria-hidden="true" className="text-[#d9a441]">&#9670;</span>
                  Made for phones and short-film moments
                </li>
                <li className="flex gap-3">
                  <span aria-hidden="true" className="text-[#d9a441]">&#9670;</span>
                  Honest storytelling, welcoming to the curious
                </li>
                <li className="flex gap-3">
                  <span aria-hidden="true" className="text-[#d9a441]">&#9670;</span>
                  Built to be watched together and shared
                </li>
              </ul>
            </div>
            <Link
              href="#community"
              className="mt-7 inline-flex w-fit items-center justify-center rounded-full border border-[#d9a441]/60 px-6 py-3 text-sm font-semibold text-[#ecc87e] transition-colors hover:bg-[#d9a441]/10"
            >
              Get notified at launch
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
