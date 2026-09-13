/**
 * VimeoTrailer — live cloud video container for the SHEPHERDS & KINGS
 * flagship trailer (Vimeo, unlisted, embedding enabled).
 *
 * Plain responsive iframe embed: no <video> element, no client-side JS.
 * The outer chrome matches the vertical-phone-frame visual family
 * (rounded parchment bezel + gold border + soft gold shadow), and the inner
 * 9:16 aspect-ratio stage shows the portrait video letterboxed on black —
 * full-bleed inside the frame with NO fixed pixel height, so the edges can
 * never be cropped on any screen.
 */

const VIMEO_SRC =
  'https://player.vimeo.com/video/1226300884?playsinline=1&title=0&byline=0&portrait=0&dnt=1';

const IFRAME_ALLOW =
  'autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share';

export default function VimeoTrailer({
  maxWidthClass = 'max-w-sm',
  className = '',
}: {
  /** Width cap for the whole container (default 'max-w-sm'); w-full + mx-auto core means the player scales fluidly. */
  maxWidthClass?: string;
  /** Extra classes, e.g. layout offsets. */
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full ${maxWidthClass} ${className}`.trim()}>
      {/* Phone-frame chrome */}
      <div className="rounded-[2.25rem] border border-[#4a3728]/30 bg-[#fdf6e3] p-2 shadow-[0_2px_6px_rgba(176,122,30,0.10),0_16px_40px_-12px_rgba(176,122,30,0.28)]">
        {/* 9:16 stage — black letterbox behind the player, edges cannot crop */}
        <div className="relative aspect-[9/16] w-full overflow-hidden rounded-[1.75rem] border border-[#d9a441]/40 bg-black">
          <iframe
            src={VIMEO_SRC}
            title="SHEPHERDS & KINGS — Bible Shorts trailer by Living Word Studios"
            className="absolute inset-0 h-full w-full"
            allow={IFRAME_ALLOW}
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}