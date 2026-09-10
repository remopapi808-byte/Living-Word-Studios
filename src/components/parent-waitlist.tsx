'use client';

import { useState } from 'react';

/**
 * Join the Parent Waitlist (Kids Kingdom).
 *
 * Dedicated parents-first email capture, wired to the EXISTING API route
 * POST /api/waitlist with JSON { email } (that route validates, rate-limits
 * and dedupes — untouched here). This component mirrors its contract:
 *
 * - Client-side email validation mirroring the zod `email()` check the API
 *   applies (trim + lowercase + standard pattern) so most bad input never
 *   leaves the page.
 * - States: idle → submitting (button disabled, inline SVG spinner) →
 *   done / already / error. The API's own message is shown on failure;
 *   an unreachable API degrades to a friendly offline message.
 * - Design matches CommunityClose's form language (parchment card, gold
 *   button, charcoal text) but reads clearly as the PARENT list.
 */

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type Status = 'idle' | 'submitting' | 'done' | 'already' | 'error';

interface WaitlistResponse {
  ok: boolean;
  alreadyJoined?: boolean;
  error?: string;
}

function Spinner() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4 w-4 animate-spin">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.3" strokeWidth="3" />
      <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export default function ParentWaitlist() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const value = email.trim().toLowerCase();
    if (!EMAIL_PATTERN.test(value)) {
      setMessage('Please enter a valid email address.');
      setStatus('error');
      return;
    }
    setMessage('');
    setStatus('submitting');
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: value }),
      });
      const data = (await res.json().catch(() => null)) as WaitlistResponse | null;
      if (res.ok && data?.ok) {
        setStatus(data.alreadyJoined ? 'already' : 'done');
      } else if (data?.error) {
        setMessage(data.error);
        setStatus('error');
      } else {
        setMessage('Something went wrong — please try again in a moment.');
        setStatus('error');
      }
    } catch {
      setMessage('Could not reach the server — please check your connection and try again.');
      setStatus('error');
    }
  }

  const settled = status === 'done' || status === 'already';

  return (
    <section
      id="parent-waitlist"
      className="scroll-mt-24 border-b border-[#4a3728]/10 bg-[#fdf6e3]"
    >
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 sm:py-32">
        <div className="mx-auto max-w-3xl">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-[#d9a441]/30 bg-[#fffdf7]/80 px-6 py-12 text-center shadow-[0_2px_6px_rgba(176,122,30,0.10),0_16px_40px_-12px_rgba(176,122,30,0.28),0_32px_80px_-24px_rgba(217,164,65,0.18)] sm:px-12 sm:py-16">
            {/* soft gold pool */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-16 left-1/2 h-56 w-[28rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(217,164,65,0.18),transparent_65%)]"
            />
            <div className="relative">
              <p className="inline-flex items-center gap-2 rounded-full border border-[#d9a441]/50 bg-[#fffdf7]/90 px-4 py-1.5 text-xs font-bold tracking-[0.2em] text-[#8a5a1d] uppercase">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-3.5 w-3.5">
                  <path d="M12 21s-7.2-4.6-9.3-9.2C1.1 8.6 3.2 5.5 6.3 5.5c2 0 3.5 1.1 4.4 2.8L12 10l1.3-1.7c.9-1.7 2.4-2.8 4.4-2.8 3.1 0 5.2 3.1 3.6 6.3C19.2 16.4 12 21 12 21Z" />
                </svg>
                Just for parents
              </p>
              <h2 className="font-display mt-4 text-3xl leading-tight font-bold text-[#2e2a26] sm:text-5xl">
                Join the Parent Waitlist
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[#3c342b]/75 sm:text-lg">
                Be first to know when Look Inside chapters ship — previews, release
                dates, and gentle reading guides for little hearts. No noise, just
                the good news.
              </p>

              {settled ? (
                <p
                  role="status"
                  className="mx-auto mt-8 max-w-md rounded-full border border-[#d9a441]/60 bg-[#fffdf7]/90 px-6 py-3 font-display text-base font-bold text-[#8a5a1d]"
                >
                  {status === 'done'
                    ? "You're on the list! We'll write when the first chapter ships."
                    : "You're already on the parent list — we'll be in touch."}
                </p>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
                >
                  <label htmlFor="parent-waitlist-email" className="sr-only">
                    Parent email address
                  </label>
                  <input
                    id="parent-waitlist-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    disabled={status === 'submitting'}
                    className="w-full flex-1 rounded-full border border-[#3c342b]/25 bg-[#fffdf7] px-5 py-3 text-sm text-[#3c342b] placeholder:text-[#3c342b]/45 focus:border-[#d9a441] focus:outline-none disabled:opacity-60"
                  />
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d9a441] px-6 py-3 text-sm font-bold text-[#3b2a12] transition-colors hover:bg-[#ecc87e] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Spinner />
                        Signing up…
                      </>
                    ) : (
                      'Join the parent list'
                    )}
                  </button>
                </form>
              )}

              {status === 'error' && (
                <p role="alert" className="mx-auto mt-3 max-w-md text-sm font-medium text-[#b4552d]">
                  {message}
                </p>
              )}
              <p className="mt-3 text-xs text-[#3c342b]/55">
                The parables are drawn but not yet bound — this list hears first.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}