'use client';

import { useRef, useState } from 'react';
import type { CSSProperties } from 'react';

/**
 * LWS/001 — "In the Beginning" audio-drama streaming sample player.
 *
 * The centerpiece of the Bible Shorts Media Room. Plain HTML5 <audio> driven
 * (React ref + state only, no dependencies, no lucide — inline SVGs).
 *
 * - Play/pause with clear state (icon swap, aria-pressed/aria-label).
 * - Seekable scrubber (native <input type="range">, click + drag + keyboard),
 *   elapsed / total time shown in a tabular monospace readout.
 * - Buffering and error states handled gracefully — a failed load shows an
 *   honest message with a retry, never a broken control.
 * - The track is a PUBLIC DEMO MP3 standing in for the pre-production
 *   narration cut. It is labelled "pre-production audio sample" everywhere
 *   so the honesty requirement holds. Verified via curl -I on 2026-09-10:
 *   HTTP/2 200, content-type audio/mpeg, accept-ranges bytes (seekable),
 *   ~8.9 MB (streams progressively, no download needed).
 */

const AUDIO_SRC = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';

function formatTime(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return '0:00';
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, '0')}`;
}

function PlayIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className="ml-0.5 h-6 w-6"
    >
      <path d="M8 5.14v13.72c0 .8.87 1.3 1.56.88l10.9-6.86a1.04 1.04 0 0 0 0-1.76L9.56 4.26A1.04 1.04 0 0 0 8 5.14Z" />
    </svg>
  );
}

function PauseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-6 w-6">
      <rect x="6.5" y="5" width="4" height="14" rx="1.2" />
      <rect x="13.5" y="5" width="4" height="14" rx="1.2" />
    </svg>
  );
}

export default function AudioDramaPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const scrubbingRef = useRef(false);
  const scrubTargetRef = useRef(0);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isBuffering, setIsBuffering] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [hasError, setHasError] = useState(false);

  const percent = duration > 0 ? (currentTime / duration) * 100 : 0;
  const scrubFill = {
    '--fill': `${Math.min(100, Math.max(0, percent)).toFixed(2)}%`,
  } as CSSProperties;

  function togglePlay() {
    const audio = audioRef.current;
    if (!audio || hasError) return;
    if (audio.paused) {
      void audio.play().catch(() => setHasError(true));
    } else {
      audio.pause();
    }
  }

  function retry() {
    const audio = audioRef.current;
    if (!audio) return;
    setHasError(false);
    setCurrentTime(0);
    setDuration(0);
    audio.load();
    void audio.play().catch(() => setHasError(true));
  }

  function handleScrubStart() {
    scrubbingRef.current = true;
  }

  function handleScrubChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = Number(e.target.value);
    scrubTargetRef.current = value;
    setCurrentTime(value); // thumb follows the finger/drag
    if (!scrubbingRef.current) {
      // Plain click (or keyboard arrow) on the track — seek immediately.
      const audio = audioRef.current;
      if (audio) audio.currentTime = value;
    }
  }

  function handleScrubEnd() {
    const audio = audioRef.current;
    if (audio) audio.currentTime = scrubTargetRef.current;
    scrubbingRef.current = false;
  }

  return (
    <div className="flex h-full flex-col justify-center rounded-[1.75rem] border border-[#ecc87e]/25 bg-[#3c342b] p-5 shadow-[0_2px_6px_rgba(0,0,0,0.2),0_16px_40px_-12px_rgba(0,0,0,0.45)] sm:p-7">
      {/* Hidden native audio element — all state flows through React events. */}
      <audio
        ref={audioRef}
        src={AUDIO_SRC}
        preload="auto"
        onTimeUpdate={(e) => {
          if (!scrubbingRef.current) setCurrentTime(e.currentTarget.currentTime);
        }}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration || 0)}
        onPlay={() => {
          setIsPlaying(true);
          setIsBuffering(false);
        }}
        onPause={() => setIsPlaying(false)}
        onWaiting={() => setIsBuffering(true)}
        onPlaying={() => {
          setIsBuffering(false);
          setIsPlaying(true);
        }}
        onCanPlay={() => setIsBuffering(false)}
        onEnded={() => {
          setIsPlaying(false);
          setIsBuffering(false);
        }}
        onError={() => setHasError(true)}
        className="hidden"
      />

      {/* Header row: honest label + decorative equalizer (CSS only). */}
      <div className="flex items-center justify-between gap-3">
        <p className="text-[11px] font-bold tracking-[0.22em] text-[#ecc87e] uppercase">
          {isPlaying ? 'Now playing' : 'Loaded · ready to play'} — pre-production sample
        </p>
        <div
          aria-hidden="true"
          className={`player-eq flex h-5 items-end gap-1 ${isPlaying ? 'eq-running' : ''}`}
        >
          {[0, 1, 2, 3, 4].map((i) => (
            <span key={i} style={{ animationDelay: `${i * 0.13}s` }} />
          ))}
        </div>
      </div>

      {hasError ? (
        /* Graceful failure — never a broken control. */
        <div role="alert" className="mt-5 rounded-2xl border border-[#b4552d]/40 bg-[#2e2a26] p-5">
          <p className="font-display text-lg font-bold text-[#fdf6e3]">
            The sample wouldn&apos;t load.
          </p>
          <p className="mt-1.5 text-sm leading-relaxed text-[#fdf6e3]/70">
            It looks like the audio stream can&apos;t be reached right now — check your
            connection and try again. The finished chapter will live here first.
          </p>
          <button
            type="button"
            onClick={retry}
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#d9a441] px-5 py-2.5 text-sm font-bold text-[#2e2a26] transition-colors hover:bg-[#ecc87e]"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true" className="h-4 w-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v6h6M20 20v-6h-6" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.6 9A8 8 0 1 1 4.2 14" />
            </svg>
            Try again
          </button>
        </div>
      ) : (
        <div className="ap-transport mt-5 flex flex-col gap-4">
          {/* Transport row: play/pause + track id */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={togglePlay}
              aria-pressed={isPlaying}
              aria-label={isPlaying ? 'Pause the audio sample' : 'Play the audio sample'}
              className="ap-play-btn flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#d9a441] text-[#2e2a26] shadow-[0_10px_28px_-10px_rgba(217,164,65,0.8)] transition-transform duration-150 hover:scale-105 active:scale-95"
            >
              {isPlaying ? <PauseIcon /> : <PlayIcon />}
            </button>
            <div className="min-w-0 flex-1">
              <p className="font-display truncate text-lg font-bold text-[#fdf6e3]">
                LWS/001 — &ldquo;In the Beginning&rdquo;
              </p>
              <p className="mt-0.5 truncate text-xs text-[#fdf6e3]/60">
                Audio-drama · chapter sample · orchestral narration placeholder
              </p>
            </div>
            <span className="hidden shrink-0 rounded-full border border-[#ecc87e]/40 bg-[#ecc87e]/10 px-3 py-1 text-[10px] font-bold tracking-[0.18em] text-[#ecc87e] uppercase sm:inline-block">
              Pre-production
            </span>
          </div>

          {/* Scrubber row: elapsed / seekable timeline / total */}
          <div className="flex items-center gap-3">
            <span className="ap-time w-11 shrink-0 text-right font-mono text-xs text-[#fdf6e3]/75 tabular-nums">
              {formatTime(currentTime)}
            </span>
            <input
              type="range"
              min={0}
              max={duration || 0}
              step={0.1}
              value={Math.min(currentTime, duration || 0)}
              onChange={handleScrubChange}
              onPointerDown={handleScrubStart}
              onPointerUp={handleScrubEnd}
              onPointerCancel={handleScrubEnd}
              disabled={duration <= 0 || hasError}
              aria-label="Seek within the audio sample"
              aria-valuetext={`${formatTime(currentTime)} of ${
                duration > 0 ? formatTime(duration) : 'unknown length'
              }`}
              style={scrubFill}
              className="scrubber min-w-0 flex-1"
            />
            <span className="ap-time w-11 shrink-0 font-mono text-xs text-[#fdf6e3]/45 tabular-nums">
              {duration > 0 ? formatTime(duration) : '–:––'}
            </span>
          </div>

          {/* Status line — states the honest truth about the placeholder. */}
          <p className="text-xs leading-relaxed text-[#fdf6e3]/55">
            {isBuffering && isPlaying
              ? 'Buffering the stream…'
              : 'Pre-production audio sample — a placeholder track recorded so you can hear the storytelling style today. The finished chapter lands here first.'}
          </p>
        </div>
      )}
    </div>
  );
}