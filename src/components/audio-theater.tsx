import AudioDramaPlayer from '@/components/audio-drama-player';
import WaitlistForm from '@/components/waitlist-form';
import {
  MASTER_PRODUCTION_SCRIPT,
  type ScriptAct,
  type ScriptBlock,
} from '@/data/master-production-script';

/**
 * The Audio Theater — flagship section of the Bible Shorts Media Room.
 *
 * Replaces the old dark #player accent panel with a full light-parchment
 * theater: (a) the premium gold-timeline HTML5 audio deck, (b) the scrollable
 * Master Production Script reader (owner's verbatim 4-act text), and (c) the
 * Neon-wired waitlist directly beneath the reader.
 *
 * Brand: parchment/cream + charcoal + gold throughout — no dark-ink surfaces.
 * The section keeps id="audio-theater" (the brief's anchor contract) and the
 * inner wrapper also carries the legacy id="player" so the hero's existing
 * "Listen to the sample" CTA (href="#player") keeps working untouched.
 */

const SCRIPT_HEADER = {
  eyebrow: 'Master production script',
  title: 'IN THE BEGINNING',
};

/** Renders narration/cue text, honouring *single-asterisk* italic lyric spans. */
function renderRichText(text: string) {
  return text.split(/(\*[^*]+\*)/g).map((part, i) => {
    if (part.length > 2 && part.startsWith('*') && part.endsWith('*')) {
      return (
        <em key={i} className="italic">
          {part.slice(1, -1)}
        </em>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

function ScriptBlockView({ block }: { block: ScriptBlock }) {
  if (block.kind === 'screen') {
    /* Closing ON-SCREEN TEXT OVERLAY — centered gold-on-parchment banner. */
    return (
      <div className="my-10 rounded-[1.75rem] border-2 border-[#d9a441]/55 bg-[#fdf6e3] px-6 py-10 text-center shadow-[0_2px_6px_rgba(176,122,30,0.10),0_16px_40px_-16px_rgba(176,122,30,0.35)]">
        <p className="text-[10px] font-bold tracking-[0.22em] text-[#8a5a1d] uppercase">
          {block.label}
        </p>
        <p className="font-display mt-5 text-2xl leading-snug font-bold text-[#b07a1e] italic sm:text-3xl">
          {renderRichText(block.text)}
        </p>
      </div>
    );
  }

  if (block.kind === 'cue') {
    return (
      <div className="rounded-2xl border border-[#d9a441]/35 bg-[#fdf6e3]/80 px-5 py-4">
        <p className="text-[10px] font-bold tracking-[0.22em] text-[#8a5a1d] uppercase">
          {block.label}
        </p>
        <p className="mt-1.5 text-sm leading-relaxed text-[#8a5a1d]/90 italic">
          {renderRichText(block.text)}
        </p>
      </div>
    );
  }

  /* narration */
  return (
    <div>
      <p className="text-[10px] font-bold tracking-[0.18em] text-[#8a5a1d]">
        {block.label}
      </p>
      <p className="mt-1.5 text-[15px] leading-relaxed text-[#2e2a26] sm:text-base">
        {renderRichText(block.text)}
      </p>
    </div>
  );
}

function ScriptActView({ act }: { act: ScriptAct }) {
  return (
    <article>
      {/* Sticky act heading within the scrollable reader panel */}
      <div className="sticky top-0 z-10 -mx-4 border-b border-[#d9a441]/40 bg-[#fffdf7]/95 px-4 py-3 backdrop-blur-sm sm:-mx-6 sm:px-6">
        <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
          <h4 className="font-display text-base font-bold text-[#2e2a26] sm:text-lg">
            <span className="text-[#b07a1e]">ACT {act.act}</span>
            <span aria-hidden="true" className="mx-1.5 text-[#b07a1e]/60">—</span>
            {act.title}
          </h4>
          <span className="shrink-0 font-mono text-xs font-semibold text-[#8a5a1d] tabular-nums">
            {act.runtime}
          </span>
        </div>
      </div>
      <div className="mt-5 space-y-6">
        {act.blocks.map((block, i) => (
          <ScriptBlockView key={`${act.act}-${i}`} block={block} />
        ))}
      </div>
    </article>
  );
}

export default function AudioTheater() {
  return (
    <section
      id="audio-theater"
      className="scroll-mt-24 relative overflow-hidden border-t border-[#4a3728]/10 bg-[#f7f0e1]"
    >
      {/* Soft gold-dusk garnish — tasteful wash, never a dark surface */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(ellipse_60%_100%_at_50%_-20%,rgba(217,164,65,0.16),transparent_70%)]"
      />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold tracking-[0.22em] text-[#8a5a1d] uppercase">
            Bible Shorts &middot; The Audio Theater
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold text-[#2e2a26] sm:text-5xl">
            Step inside <span className="text-[#b07a1e] italic">the Audio Theater</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#3c342b]/75 sm:text-lg">
            Listen to the LWS/001 sample, then read the master production script
            that the finished six-minute chapter will follow — act by act.
          </p>
        </div>

        {/* (a) Premium audio deck — light parchment + gold timeline */}
        <div className="mt-12 scroll-mt-24" id="player">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-[#e8d5a6] bg-[#fffdf7] p-6 shadow-[0_2px_6px_rgba(176,122,30,0.10),0_24px_60px_-20px_rgba(176,122,30,0.35)] sm:p-10">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_65%_55%_at_85%_-15%,rgba(217,164,65,0.14),transparent_60%)]"
            />
            <div className="relative">
              <AudioDramaPlayer variant="light" />
            </div>
          </div>
        </div>

        {/* (b) Master Production Script reader — scrollable panel */}
        <div className="mt-12">
          <div
            className="script-reader max-h-[65vh] overflow-y-auto overflow-x-hidden overscroll-contain rounded-[2.5rem] border border-[#e8d5a6] bg-[#fffdf7] shadow-[0_2px_6px_rgba(176,122,30,0.10),0_24px_60px_-20px_rgba(176,122,30,0.35)]"
            role="region"
            aria-label="Master production script for LWS/001, In the Beginning"
          >
            <div className="px-6 py-8 sm:px-10 sm:py-10">
              {/* Reader header */}
              <div className="border-b border-[#d9a441]/30 pb-6 text-center">
                <p className="text-[10px] font-bold tracking-[0.24em] text-[#8a5a1d] uppercase">
                  {SCRIPT_HEADER.eyebrow}
                </p>
                <h3 className="font-display mt-2 text-2xl font-bold text-[#2e2a26] sm:text-3xl">
                  Master Production Script —{' '}
                  <span className="text-[#b07a1e] italic">
                    {MASTER_PRODUCTION_SCRIPT.title}
                  </span>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#3c342b]/70 sm:text-base">
                  {MASTER_PRODUCTION_SCRIPT.subtitle}
                </p>
              </div>
              <div className="mt-8 space-y-10">
                {MASTER_PRODUCTION_SCRIPT.acts.map((act) => (
                  <ScriptActView key={act.act} act={act} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* (c) Neon-wired waitlist — directly beneath the reader */}
        <div className="mt-12">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#d9a441]/30 bg-[#fffdf7]/80 px-6 py-10 text-center shadow-[0_2px_6px_rgba(176,122,30,0.10),0_16px_40px_-12px_rgba(176,122,30,0.28),0_32px_80px_-24px_rgba(217,164,65,0.18)] sm:px-10 sm:py-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-16 left-1/2 h-52 w-[26rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(217,164,65,0.16),transparent_65%)]"
            />
            <div className="relative">
              <WaitlistForm
                source="bible-shorts"
                idPrefix="audio-theater"
                buttonLabel="Join the waitlist"
                hook="Be first in the Audio Theater when Episode 001 lands."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}