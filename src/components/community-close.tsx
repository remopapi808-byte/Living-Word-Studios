'use client';

import { useState } from 'react';

type Status = 'idle' | 'loading' | 'done' | 'already' | 'error';

export default function CommunityClose() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = (await res.json()) as {
        ok: boolean;
        alreadyJoined?: boolean;
        error?: string;
      };
      if (res.ok && data.ok) {
        setStatus(data.alreadyJoined ? 'already' : 'done');
      } else {
        setErrorMsg(data.error ?? 'Something went wrong — please try again.');
        setStatus('error');
      }
    } catch {
      setErrorMsg('Could not reach the server — please try again later.');
      setStatus('error');
    }
  }

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
        {status === 'done' ? (
          <p role="status" className="mx-auto mt-8 max-w-md rounded-full border border-[#d9a441]/40 bg-[#d9a441]/10 px-6 py-3 text-sm font-semibold text-[#ecc87e]">
            You&apos;re on the list — watch your inbox for launch news.
          </p>
        ) : status === 'already' ? (
          <p role="status" className="mx-auto mt-8 max-w-md rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm text-[#f5efe3]/80">
            This email already joined — you&apos;re all set.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
            <label htmlFor="community-email" className="sr-only">
              Email address
            </label>
            <input
              id="community-email"
              name="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              disabled={status === 'loading'}
              className="w-full flex-1 rounded-full border border-white/20 bg-[#0b0a08]/70 px-5 py-3 text-sm text-[#f5efe3] placeholder:text-[#f5efe3]/40 focus:border-[#d9a441] focus:outline-none disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="rounded-full bg-[#d9a441] px-6 py-3 text-sm font-semibold text-[#0b0a08] transition-colors hover:bg-[#ecc87e] disabled:opacity-60"
            >
              {status === 'loading' ? 'Joining…' : 'Stay in the loop'}
            </button>
          </form>
        )}
        {status === 'error' && (
          <p role="alert" className="mt-3 text-sm text-red-300">
            {errorMsg}
          </p>
        )}
        <p className="mt-3 text-xs text-[#f5efe3]/45">
          New episodes and books are still on the way — sign up to hear first.
        </p>
      </div>
    </section>
  );
}
