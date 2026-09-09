export default function CommunityClose() {
  return (
    <section id="community" className="hero-glow scroll-mt-20 relative overflow-hidden">
      <div className="texture-lines pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-24">
        <p className="text-xs font-bold tracking-[0.22em] text-[#d9a441] uppercase">
          A welcoming digital home
        </p>
        <h2 className="font-display mt-3 text-3xl leading-tight font-bold text-[#f5efe3] sm:text-5xl">
          Where discovery can become discipleship.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#f5efe3]/70 sm:text-lg">
          Living Word Studios is a welcoming digital home for the spiritually curious,
          believers, and families — a place where an honest first discovery can grow
          into lasting discipleship, rooted in Jesus.
        </p>
        <form action="#community" method="get" className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
          <label htmlFor="community-email" className="sr-only">
            Email address
          </label>
          <input
            id="community-email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="w-full flex-1 rounded-full border border-white/20 bg-[#0b0a08]/70 px-5 py-3 text-sm text-[#f5efe3] placeholder:text-[#f5efe3]/40 focus:border-[#d9a441] focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-full bg-[#d9a441] px-6 py-3 text-sm font-semibold text-[#0b0a08] transition-colors hover:bg-[#ecc87e]"
          >
            Stay in the loop
          </button>
        </form>
        <p className="mt-3 text-xs text-[#f5efe3]/45">
          Email signup is a placeholder for now — no messages will be sent yet.
        </p>
      </div>
    </section>
  );
}
