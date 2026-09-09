'use client';
import { useState } from 'react';

/**
 * Header brand mark for Living Word Studios.
 *
 * Renders /logo.png inside the brand circle when the asset exists (the owner
 * uploads it to `public/logo.png`), and falls back to the hand-drawn "LW"
 * monogram if the file is missing or fails to load — so the header never
 * shows a broken image. The gold #d9a441 → burnt-orange #b4552d gradient
 * circle and dark ink text are preserved in both states.
 */
export default function BrandMark() {
  const [showMonogram, setShowMonogram] = useState(false);

  if (showMonogram) {
    return (
      <span
        aria-hidden="true"
        className="brand-mark flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#d9a441] to-[#b4552d] font-display text-lg font-bold text-[#0b0a08]"
      >
        LW
      </span>
    );
  }

  return (
    <span className="brand-mark flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-[#d9a441] to-[#b4552d]">
      <img
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
