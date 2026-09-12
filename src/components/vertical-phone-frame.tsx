/**
 * Vertical phone frame — a static 9:16 mockup of the LWS/001 vertical (social)
 * edition of the trailer (Module 4a). Pure CSS/SVG, no client code, no play
 * button, no fake state: the gold "Coming soon" pill is the honest placeholder.
 * Same dusk family as the trailer poster — the portrait sibling shot.
 */
export default function VerticalPhoneFrame() {
  return (
    <div
      className="rounded-[2.25rem] border border-[#4a3728]/30 bg-[#fdf6e3] p-2 shadow-[0_2px_6px_rgba(176,122,30,0.10),0_16px_40px_-12px_rgba(176,122,30,0.28)]"
      role="img"
      aria-label="LWS/001 vertical video mockup — made for the phone in your pocket, coming soon"
    >
      <div className="relative aspect-[9/16] overflow-hidden rounded-[1.75rem] border border-[#d9a441]/40 bg-[linear-gradient(172deg,#fdf6e3_0%,#f3ddab_45%,#ecc87e_74%,#b07a1e_100%)]">
        {/* Gold dusk rays from the lower horizon + grain (same family as trailer). */}
        <div className="trailer-rays absolute inset-0" aria-hidden="true" />
        <div className="texture-lines absolute inset-0 opacity-60" aria-hidden="true" />
        {/* Notch nod (phone realism, decorative). */}
        <div
          className="absolute top-3 left-1/2 h-4 w-12 -translate-x-1/2 rounded-full bg-[#2e2a26]/10"
          aria-hidden="true"
        />
        {/* Content — centered, lower-third display line. */}
        <div className="absolute inset-0 flex flex-col items-center justify-end px-5 pb-12 text-center">
          <span className="rounded-full border border-[#d9a441]/50 bg-[#fffdf7]/90 px-3 py-1 text-[10px] font-bold tracking-[0.18em] text-[#8a5a1d] uppercase">
            LWS/001 · 9:16
          </span>
          <p className="font-display mt-4 text-2xl leading-tight font-bold text-[#2e2a26] italic">
            Made for the phone in your pocket
          </p>
          <p className="mt-3 text-xs text-[#3c342b]/70">
            Vertical-first cinema — Episode 001 coming soon.
          </p>
          <span className="mt-5 inline-flex rounded-full bg-[#d9a441] px-4 py-1.5 text-[11px] font-bold tracking-[0.14em] text-[#3b2a12] uppercase">
            Coming soon
          </span>
        </div>
      </div>
      {/* Floating caption chip under the frame. */}
      <div
        className="relative z-10 -mb-2 flex justify-center"
        aria-hidden="true"
      >
        <span className="-translate-y-1/2 rounded-full border border-[#e8d5a6] bg-[#fffdf7] px-4 py-1.5 text-[11px] font-bold tracking-[0.14em] whitespace-nowrap text-[#5b4632] uppercase shadow-[0_6px_18px_-8px_rgba(176,122,30,0.45)]">
          Coming to your feed soon · 9:16
        </span>
      </div>
    </div>
  );
}