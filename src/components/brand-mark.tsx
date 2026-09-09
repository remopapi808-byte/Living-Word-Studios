'use client';
import { useEffect, useRef, useState } from 'react';

/**
 * Header brand mark for Living Word Studios.
 *
 * Renders /logo.png inside the brand circle when the asset exists (the owner
 * uploads it to `public/logo.png`), and falls back to the hand-drawn "LW"
 * monogram if the file is missing or fails to load — so the header never
 * shows a broken image. The gold #d9a441 → burnt-orange #b4552d gradient
 * circle and deep brown monogram text are preserved in both states.
 *
 * Two failure paths are covered:
 *  - `onError` catches images that fail after hydration.
 *  - A mount effect catches the SSR race where the image fails before React
 *    attaches the error handler (complete === true, naturalWidth === 0).
 */
export default function BrandMark() {
  const imgRef = useRef<HTMLImageElement>(null);
  const [showMonogram, setShowMonogram] = useState(false);

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) {
      setShowMonogram(true);
    }
  }, []);

  if (showMonogram) {
    return (
      <span
        aria-hidden="true"
        className="brand-mark flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#d9a441] to-[#b4552d] font-display text-lg font-bold text-[#3b2a12]"
      >
        LW
      </span>
    );
  }

  return (
    <span className="brand-mark flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-[#d9a441] to-[#b4552d]">
      <img
        ref={imgRef}
        src="/logo.png"
        alt="Living Word Studios"
        width={36}
        height={36}
        onError={() => setShowMonogram(true)}
        className="h-full w-full object-cover"
      />
    </span>
  );
}