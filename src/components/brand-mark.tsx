/**
 * Living Word Studios — coded minimalist brand lockup.
 *
 * The old institutional logo graphic (a gold gradient circle with an "LW"
 * monogram fallback) is permanently retired. The global header
 * brand is now a pure inline SVG mark + type lockup:
 *
 *   Mark  — a razor-thin golden vertical line (the cross, #b07a1e)
 *           intersecting a two-stroke flame chevron: two symmetrical curved
 *           strokes meeting at a top point (a soft teardrop flame outline,
 *           drawn as mirror paths; the vertical shaft crosses through both
 *           tips). Stroke-only geometry — round caps, no fills, no gradients,
 *           no shadows. Renders ~36px on mobile, ~40px on desktop.
 *
 *   Type  — "LIVING WORD" bold + widely tracked, followed by "STUDIOS" in a
 *           lighter, elegant weight (font-light, wider tracking). Charcoal
 *           #2e2a26 wordmarks on the light parchment theme, using the existing
 *           system-ui sans stack (no font files, no external loading).
 *
 * Header placement/alignment and the short-landscape compact variant live in
 * site-header.tsx and globals.css (`.brand-lockup`, `.brand-mark`).
 */
export default function BrandMark() {
  return (
    <span className="flex items-center gap-2.5 md:gap-3">
      {/* Mark — cross (vertical line) + two-stroke flame chevron */}
      <svg
        viewBox="0 0 44 44"
        aria-hidden="true"
        focusable="false"
        className="brand-mark h-9 w-9 shrink-0 md:h-10 md:w-10"
        fill="none"
      >
        {/* flame chevron — left stroke (top point, sweeping out + down to the bottom tip) */}
        <path
          d="M22 11 C14 15 9 21 11.5 27 C13.2 31.4 17.2 33.8 22 33.8"
          stroke="#b07a1e"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        {/* flame chevron — right stroke (exact mirror) */}
        <path
          d="M22 11 C30 15 35 21 32.5 27 C30.8 31.4 26.8 33.8 22 33.8"
          stroke="#b07a1e"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        {/* cross — vertical shaft, drawn last so it visibly intersects the flame tips */}
        <path
          d="M22 5 V39"
          stroke="#b07a1e"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
      </svg>
      {/* Type lockup — LIVING WORD (bold, wide-spaced) over STUDIOS (light, elegant) */}
      <span className="brand-name font-body flex flex-col leading-none">
        <span className="brand-word-primary text-[13.5px] font-bold tracking-[0.18em] text-[#2e2a26] md:text-[15px]">
          LIVING WORD
        </span>
        <span className="brand-word-secondary mt-[3px] text-[9px] font-light tracking-[0.42em] text-[#2e2a26] md:text-[10px]">
          STUDIOS
        </span>
      </span>
    </span>
  );
}